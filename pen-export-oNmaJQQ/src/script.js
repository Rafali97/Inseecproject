function openTab(tabName) {
    // Hide all product sections
    var productSections = document.getElementsByClassName("product-section");
    for (var i = 0; i < productSections.length; i++) {
        productSections[i].style.display = "none";
    }

    // Show the selected product section
    document.getElementById(tabName).style.display = "block";
}

function zoomIn(element) {
    element.style.animation = "zoomIn 0.3s ease-in-out";
}

function zoomOut(element) {
    element.style.animation = "zoomOut 0.3s ease-in-out";
}
