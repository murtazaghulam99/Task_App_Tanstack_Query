import React from 'react';
import { useQuery } from 'react-query';

function TaskList() {
    const { isLoading, error, data } = useQuery('tasks', async () => {
        const response = await fetch('/api/tasks');
        const json = await response.json();
        return json;
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <ul>
            {data.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );
}

export default TaskList;
