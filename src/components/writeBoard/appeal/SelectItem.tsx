import { useEffect, useState } from 'react';

export const Text = ({ appeal, setAppeal, index, isChecked }: any) => {
  const [text, setText] = appeal ? useState(appeal[index]) : useState('');

  useEffect(() => {
    setAppeal((Appeal: string[]) => {
      const newAppeal = [...Appeal];
      newAppeal[index] = text;
      return newAppeal;
    });
  }, [isChecked]);

  return (
    <input
      className="appealContent"
      type="text"
      value={text}
      onSubmit={() => setText('')}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export const AudioRecord = () => {
  return <>AudioRecord</>;
};

export const Video = () => {
  return <>Video</>;
};

export const Image = () => {
  return <>Image</>;
};
