import React, { useEffect, useState } from 'react';

interface ICalculatorContext {
  children: any;
  history: IHistoryItem[];
  calcString: string;
  status: string;
  clearHistory: () => void;
  append: (str: string) => void;
  clear: () => void;
  send: () => void;
  setCalcString: (str: string) => void;
}

export interface IHistoryItem {
  timestamp: Date;
  expression: string;
  result: string;
}

const CONNECTION_STRING = process.env.REACT_APP_WS_URL || 'ws://localhost:8080';
const MAX_LENGTH = 50;
const CalculatorContext = React.createContext<ICalculatorContext>(null as any);

export const CalculatorProvider = ({ children }: { children: any }) => {
  const [ws, setWs] = useState<WebSocket>(new WebSocket(CONNECTION_STRING));
  const [history, setHistory] = useState<IHistoryItem[]>([]);
  const [calcString, setCalcString] = useState<string>('');
  const [status, setStatus] = useState<string>('Connecting...');

  // Setup socket on context initialize
  useEffect(() => {
    const localHistory = localStorage.getItem('history');

    if (localHistory) {
      let data = JSON.parse(localHistory) as IHistoryItem[];
      data = data.map((item) => {
        return { ...item, ...{ timestamp: new Date(item.timestamp) } };
      });
      setHistory(data);
    }

    ws.addEventListener('open', (event: Event) => {
      setStatus('Connected');
    });

    ws.addEventListener('close', (event: CloseEvent) => {
      setStatus('Disconnected');
      
      setTimeout(() => {
        console.log('Reconnecting');
        setStatus('Connecting...');
        setWs(new WebSocket(CONNECTION_STRING));
      }, 500);
    });

    ws.addEventListener('message', (event: MessageEvent) => {
      if (!event.data) return;
      const data = JSON.parse(event.data) as IHistoryItem;

      setHistory((prev: IHistoryItem[]) => {
        let arr = [
          {
            timestamp: new Date(data.timestamp),
            expression: data.expression,
            result: data.result,
          },
          ...prev,
        ];

        if (arr.length > 10) {
          arr.pop();
        }

        localStorage.setItem('history', JSON.stringify(arr));

        return arr;
      });
    });

    return () => {
      ws.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Clear calculator history
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('history');
  };

  // Append new character to calculator expression
  const append = (str: string) => {
    if ((str + calcString).length <= MAX_LENGTH) {
      setCalcString(calcString + str);
    }
  };

  // Clear calculator expression
  const clear = () => {
    setCalcString('');
  };

  // Send current expression to server for evaluation
  const send = () => {
    if (ws.readyState !== ws.OPEN) return;
    if (!calcString || calcString === '') return;

    ws.send(
      JSON.stringify({
        expression: calcString,
      })
    );

    setCalcString('');
  };

  return (
    <CalculatorContext.Provider
      value={{
        children,
        history,
        calcString,
        status,
        clearHistory,
        append,
        clear,
        send,
        setCalcString,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
