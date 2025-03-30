import {test, expect} from "@playwright/test"

test('POST request - Create user', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
        data: {
            name: "John Doe",
            email: "johndoe@example.com",
        },
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log(responseBody);
});


/* How to Handles authtorization */

/* const response = await request.get('https://api.example.com/data', {
    headers: {
        'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
    }
});
*/




test('POST request with Content-Type header', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json' // Explicitly setting Content-Type
        },
        data: JSON.stringify({
            title: 'Playwright API',
            body: 'Testing API with Playwright',
            userId: 1
        })
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log(responseBody);
});


test('GET request with query parameters', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            userId: 1,   // Passing query parameters
            _limit: 5
        }
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
});



test('GET request with headers and query params', async ({ request }) => {
    const response = await request.get('https://api.example.com/data', {
        headers: {
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
            'Accept': 'application/json'
        },
        params: {
            search: 'playwright',
            limit: 10
        }
    });

    expect(response.status()).toBe(200);
    console.log(await response.json());
});

// test('POST request with form data', async ({ request }) => {
//     const response = await request.post('https://api.example.com/login', {
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         form: {
//             username: 'testuser',
//             password: 'password123'
//         }
//     });

//     expect(response.status()).toBe(200);
// });


// test('POST request with file upload', async ({ request }) => {
//     const response = await request.post('https://api.example.com/upload', {
//         multipart: {
//             file: {
//                 name: 'sample.txt',
//                 mimeType: 'text/plain',
//                 buffer: Buffer.from('Hello Playwright!')
//             }
//         }
//     });

//     expect(response.status()).toBe(200);
// });
