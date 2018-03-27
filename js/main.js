var cat = document.getElementById('cat');

cat.addEventListener("mouseover", function() {
    /* CHANGE THE HOVER IMAGE HERE */cat.setAttribute("src", "http://vrtnarstvofrbezar.si/userfiles/sqwiz_si/63bbd2d9-a247-413c-bed9-f9e1dc45f208/436dab6b-f599-4120-87c6-65c07648d0ee.jpg");
});

cat.addEventListener("mouseout", function() {
    /* CHANGE THE HOVER IMAGE HERE TOO */
    cat.setAttribute("src", "http://vrtnarstvofrbezar.si/userfiles/sqwiz_si/63bbd2d9-a247-413c-bed9-f9e1dc45f208/436dab6b-f599-4120-87c6-65c07648d0ee.jpg");
});