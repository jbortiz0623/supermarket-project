var shoppingCart = [];

var storeItems = [
	{
		img: './images/vegetables/vp-carrot.jpg',
		name: 'Carrots'
	},
	{
		img: './images/vegetables/potato.jpg',
		name: 'Potatoes'
	},
	{
		img: './images/vegetables/cabbage.jpg',
		name: 'Cabbage'
	},
	{
		img: './images/vegetables/bell-pepper.jpg',
		name: 'Bell Pepper'
	},
];

var dairyItems = [
	{
		img: './images/dairy/butter.jpg',
		name: 'Butter'
	},
	{
		img: './images/dairy/eggs.jpg',
		name: 'Eggs'
	},
	{
		img: './images/dairy/SourCream.jpeg',
		name: 'Sour Cream'
	},
	{
		img: './images/dairy/Yogurt.jpg',
		name: 'Yogurt'
	}
];

var moreItems = [
	{
		img: './images/cannedgoods/spam.jpg',
		name: 'Spam'
	},
	{
		img: './images/cannedgoods/condensed-milk.jpg',
		name: 'Condensed Milk'
	},
	{
		img: './images/cannedgoods/pineapple-chunks.jpg',
		name: 'Pineapple Chunks'
	},
	{
		img: './images/cannedgoods/unicorn_meat.jpg',
		name: 'Unicorn Meat'
	}
];


// Add click handlers to our category buttons
$('#vegetables').click(function() {
	addShoppingItems('vegetables');
});

$('#dairy').click(function() {
	addShoppingItems('dairy');
});

$('#canned-goods').click(function() {
	addShoppingItems('canned-goods');
});

// Add click handlers to each shopping item
$('#products').on('click', '.products', function() {
	var itemName = $(this).find('p').text();
	addItemToShoppingCart(itemName);
});

// Add shopping items to our page
function addShoppingItems(category) {
	// first, clear out all items I am currently showing
	clearShoppingItems();

	var myItems;
	switch(category) {
		case 'vegetables':
			myItems = storeItems;
			break;
		case 'dairy':
			myItems = dairyItems;
			break;
		case 'canned-goods':
			myItems = moreItems;
			break;
		default:
	}

	var newList = $('<ul>');
	for(var i = 0; i < myItems.length; i++) {
		var currentItem = myItems[i];

		newList.append(`<li class="products"><img src="${currentItem.img}"><p>${currentItem.name}</p></li>`);
	}

	$('#products').append(newList);
}


function clearShoppingItems() {
	$('#products').empty();
}


function addItemToShoppingCart(item) {
	$('#shopping-cart ul').append(`<li>${item}</li>`);
}
