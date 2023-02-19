import React from "react";

function JournalForm() {
  return (
    <div>
      <h1>Record a Gratitude</h1>
      <form>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Body:
          <textarea name="body" rows="5" cols="30"></textarea>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default JournalForm;
