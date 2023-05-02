import React, { useState } from 'react';
import styles from './styles.module.scss';

export default function Form(props) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.func({
      id: Date.now(),
      taskTitle: title,
      taskDescription: desc,
      doneFlag: true,
    });
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Тело"
          onChange={(event) => {
            setDesc(event.target.value);
          }}
        />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
