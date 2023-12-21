import { useState } from "react";
import Button from "./Button/Button";

export default function FeedBack() {
  const [form, setForm] = useState({
    name: "",
    reason: "help",
    hasError: true,
  });

  // const [hasError, setHasError] = useState(true);
  // const [name, setName] = useState("");
  // const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }
  function handleReasonChange(event) {
    setForm((prev) => ({
      ...prev,
      reason: event.target.value,
    }));
  }
  // function toggleError() {
  //   setHasError((prev) => !prev);
  // }

  return (
    <section>
      <h3>Обратная связь</h3>
      {/* <Button onClick={toggleError}>Error Toggle</Button> */}
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          className="control"
          id="name"
          type="text"
          value={form.name}
          style={{ border: form.hasError ? "1px solid red" : null }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={handleReasonChange}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложения</option>
        </select>

        <Button disabled={form.hasError ? true : false}>Отправить</Button>
      </form>
    </section>
  );
}
