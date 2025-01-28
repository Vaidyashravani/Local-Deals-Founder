document.addEventListener("DOMContentLoaded", () => {
    const mockDeals = [
      { id: 1, title: "50% Off Pizza", description: "Available at XYZ Pizzeria.", validUntil: "2025-01-31" },
      { id: 2, title: "Buy 1 Get 1 Free Coffee", description: "Available at ABC Cafe.", validUntil: "2025-02-15" },
      { id: 3, title: "20% Off Electronics", description: "Available at Tech World.", validUntil: "2025-02-10" },
      { id: 4, title: "Free Dessert with Dinner", description: "Available at Gourmet Bistro.", validUntil: "2025-02-20" },
      { id: 5, title: "30% Off Clothing", description: "Available at Fashion Hub.", validUntil: "2025-02-28" },
      { id: 6, title: "10% Cashback on Groceries", description: "Available at FreshMart.", validUntil: "2025-02-12" },
      { id: 7, title: "Flat $10 Off Movie Tickets", description: "Available at Cineplex.", validUntil: "2025-03-01" },
      { id: 8, title: "25% Off Gym Membership", description: "Available at FitLife Gym.", validUntil: "2025-02-25" },
      { id: 9, title: "15% Off Books", description: "Available at ReadMore Bookstore.", validUntil: "2025-02-22" },
      { id: 10, title: "Buy 2 Get 1 Free Ice Cream", description: "Available at CoolCreams.", validUntil: "2025-02-18" },
    ];
  
    const locationInput = document.getElementById("locationInput");
    const searchButton = document.getElementById("searchButton");
    const errorMessage = document.getElementById("errorMessage");
    const dealsGrid = document.getElementById("dealsGrid");
    const noDealsMessage = document.getElementById("noDealsMessage");
  
    searchButton.addEventListener("click", () => {
      const location = locationInput.value.trim();
  
      if (!location) {
        errorMessage.textContent = "Please enter a valid location.";
        errorMessage.style.display = "block";
        dealsGrid.innerHTML = "";
        noDealsMessage.style.display = "none";
        return;
      }
  
      errorMessage.style.display = "none";
      dealsGrid.innerHTML = "";
  
      mockDeals.forEach((deal) => {
        const dealCard = document.createElement("div");
        dealCard.className = "deal-card";
        dealCard.innerHTML = `
          <h2>${deal.title}</h2>
          <p>${deal.description}</p>
          <p class="valid-until">Valid Until: ${deal.validUntil}</p>
        `;
        dealsGrid.appendChild(dealCard);
      });
  
      noDealsMessage.style.display = mockDeals.length === 0 ? "block" : "none";
    });
  });
  