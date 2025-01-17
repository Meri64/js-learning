import {data} from './db.js';
const tableBody=document.getElementById('tbody');

function pageClicked(event){
    event.preventDefault(); // Prevent default link behavior
    const pageNumber = event.target.dataset.page; // Get the clicked page number
    return pageNumber;

}


const getData=async(pageClicked)=>{
    try{
const resp = await fetch (`https://randomuser.me/api/?page=${pageClicked}&results=${pageClicked}`);
    const result=await resp.json();
    dataTable(result.results); }
    catch (error){
        console.log('ERROR')
    }
     
}
const dataTable=(userData=>{
    tableBody.innerHTML = '';
    userData.forEach((user)=>{
        tableBody.innerHTML+=`
        <tr>
        <td>
        <img width="30px" src="${user.picture.large}">
        </td>
        <td> ${user.name.first}</td>
        <td> ${user.name.last}</td>
        <td> ${user.location.city}</td>
        <td> ${user.phone}</td>
        <tr>
        
        `
     });
});
const pageLinks = document.querySelectorAll('.pagination a');
pageLinks.forEach(link => {
    link.addEventListener('click', event => {
        const pageNumber = pageClicked(event); // Get clicked page number
        getData(pageNumber); // Fetch and render data for that page
    });
});

