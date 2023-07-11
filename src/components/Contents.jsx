import { useState } from "react";

const Contents = () => {
  const [message, setMessage] = useState("");

  function showMessage(e) {
    e.preventDefault();
    const messageText = e.target[0].value;
    setMessage(messageText);
  }

  return (
    <div>
      <div className="p-2">
        <form onSubmit={showMessage}>
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."></textarea>
          <div className="mt-3 text-end">
            
            <button type="submit" className="btn btn-outline btn-accent">comment</button>
          </div>
        </form>
        <div className="mt-5 h-16 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto text-justify">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Contents;
