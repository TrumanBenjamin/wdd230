document.addEventListener("DOMContentLoaded", function() {
    const toggleView = document.getElementById('toggleView');
    const membersList = document.getElementById('membersList');
  
    let isGridView = true;
  
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        displayMembers(data.members);
      })
      .catch(error => console.error('Error loading members:', error));
  
    function displayMembers(members) {
      membersList.innerHTML = ''; // Clear existing content
      members.forEach(member => {
        const memberItem = document.createElement(isGridView ? 'div' : 'li');
        memberItem.classList.add('member');
        memberItem.innerHTML = `
          <h2>${member.name}</h2>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p><strong>Membership Level:</strong> ${member.membership_level}</p>
          <p><strong>Other Info:</strong> ${member.other_info}</p>
          <img src="images/${member.image}" alt="${member.name}">
        `;
        membersList.appendChild(memberItem);
      });
    }
  
    toggleView.addEventListener('click', function() {
      isGridView = !isGridView;
      membersList.classList.toggle('grid-view', isGridView);
      membersList.classList.toggle('list-view', !isGridView);
    });
  });