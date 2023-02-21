import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function AddTask() {
    const queryClient = useQueryClient();
    const [title, setTitle] = useState('');

    const handleAddTask = useMutation(
        async (newTask) => {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            });
            const json = await response.json();
            return json;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('tasks');
            },
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddTask.mutate({ title });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            placeholder="Add a new task"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
