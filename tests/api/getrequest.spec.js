import {test, expect} from '@playwright/test'
import { request } from 'node:https'
import { text } from 'node:stream/consumers'


test('Get Request Test', async({ request }) => {
 
  const url = "https://gorest.co.in/public/v2/posts";
  const response =  await request.get(url);
  
  
  // valiadate the status code 
  
  

  await expect(response.status()).toBe(200);
 // get the response body 
 
  const responseBody = await response.json();

  console.log(responseBody);

  /*  these assert the lenght of objects returned back */
  await expect(responseBody).toHaveLength(10);
  await expect(responseBody).toBeTruthy();
  
}); 

/*  SAMPLE ASSERTIONS*/

// expect(response.ok()).toBeTruthy();  // Check if response is successful
// expect(response.status()).toBe(200); // Validate HTTP status code
// expect(responseBody).toHaveProperty('name', 'John Doe'); // Validate response body
