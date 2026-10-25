import http from 'http';

const TODOS = [];
let TODO_ID = 1;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    // GET /
    if (req.method === 'GET' && url.pathname === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Hello World');

    // POST /create/todo
    } else if (req.method === 'POST' && url.pathname === '/create/todo') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const { title, description } = JSON.parse(body);

                const todo = {
                    id: TODO_ID++,
                    title,
                    description
                };

                TODOS.push(todo);

                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify(TODOS));
            } catch (error) {
                res.writeHead(400, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify({
                    error: 'Invalid JSON body'
                }));
            }
        });

    // GET /todos
    } else if (req.method === 'GET' && url.pathname === '/todos') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(TODOS));

    // GET /todo?id=XXX
    } else if (req.method === 'GET' && url.pathname === '/todo') {
        const rawId = url.searchParams.get('id');
        const id = Number(rawId);

        const todo = TODOS.find((todo) => todo.id === id);

        if (!rawId || !Number.isInteger(id) || id <= 0 || !todo) {
            res.writeHead(404, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                error: 'Todo not found'
            }));
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(todo));
        }

    // DELETE /todo?id=XXX
    } else if (req.method === 'DELETE' && url.pathname === '/todo') {
        const rawId = url.searchParams.get('id');
        const id = Number(rawId);

        const index = TODOS.findIndex((todo) => todo.id === id);

        if (!rawId || !Number.isInteger(id) || id <= 0 || index === -1) {
            res.writeHead(404, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                error: 'Todo not found'
            }));
        } else {
            TODOS.splice(index, 1);

            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                message: 'Todo deleted successfully'
            }));
        }

    // Unknown routes
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            error: 'Not Found'
        }));
    }
});

server.listen(3000, () => {
    console.log('Server is running on PORT: 3000');
});