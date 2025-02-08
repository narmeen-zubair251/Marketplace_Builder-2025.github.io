export default {
    name: 'food',
    type: 'document',
    title: 'Food',
    fields: [
     
      {
        name: 'name',
        type: 'string',
        title: 'Burger',
      },
      {
        name:'slug',
        type:'slug',
        title:'slug',
        options:{
          source:'name'
        }
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        description:
          'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
      },
      {
        name: 'price',
        type: 'number',
        title: '$150',
      },
      {
        name: 'originalPrice',
        type: 'number',
        title: 'Original Price',
        description: 'Price before discount (if any)',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
        description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Food Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'discription',
        type: 'text',
        title: 'Discription',
        description: 'The mouth-watering and top rating item of our resturant',
      },
      {
        name: 'available',
        type: 'boolean',
        title: 'Available',
        description: 'Availability status of the food item',
      },
        {
           name:'inventory',
           type:'number',
           title:'Inventory'
        }
       

    ],
  };