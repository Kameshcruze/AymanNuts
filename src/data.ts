import { Product, Category } from './types';

export const categories: Category[] = [
  {
    id: 'dry-fruits',
    name: 'Dry Fruits',
    image: '/Product Images/Product Images/dryfruits/dryfruits_1.avif',
    description: 'Premium selection of sun-dried fruits.'
  },
  {
    id: 'nuts',
    name: 'Nuts',
    image: '/Product Images/Product Images/nuts/nuts_1.jpg',
    description: 'Crunchy, healthy, and high-quality nuts.'
  },
  {
    id: 'dates',
    name: 'Dates',
    image: '/Product Images/Product Images/dates/dates_1.avif',
    description: 'Exotic dates from around the world.'
  },
  {
    id: 'seeds',
    name: 'Seeds',
    image: '/Product Images/Product Images/seeds/seeds_1.jpg',
    description: 'Nutrient-rich seeds for a healthy life.'
  },
  {
    id: 'chocolates',
    name: 'Imported Chocolates',
    image: '/Product Images/Product Images/importedchocolates/impotredchocolate_1.jpg',
    description: 'Luxury chocolates from premium global brands.'
  },
  {
    id: 'perfumes',
    name: 'Perfumes',
    image: '/Product Images/Product Images/perfumes/perfume_1.webp',
    description: 'Elegant fragrances for Every occasion.'
  },
  {
    id: 'gift-hampers',
    name: 'Gift Hampers',
    image: '/Product Images/Product Images/gifthamper/gifthamper_1.jpg',
    description: 'Thoughtfully curated luxury gift boxes.'
  },
  {
    id: 'return-gifts',
    name: 'Return Gifts',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80',
    description: 'Premium return gifts for your special events.'
  }
];

export const products: Product[] = [
  // DRY FRUITS
  {
    id: 'df-1',
    name: 'California Almond Premium',
    category: 'dry-fruits',
    price: 599,
    originalPrice: 650,
    shortDescription: 'Premium quality crunchy California almonds.',
    description: 'Sourced from the finest orchards in California, our almonds are hand-picked for their size, crunch, and flavor. These premium almonds are rich in Vitamin E, antioxidants, and healthy fats, making them the perfect heart-healthy snack.',
    images: [
      '/Product Images/Product Images/californiaalmonds/californiaAlmond_1.webp',
      '/Product Images/Product Images/californiaalmonds/californiaalmonds_2.avif'
    ],
    rating: 4.9,
    reviewsCount: 156,
    isBestSeller: true,
    badge: 'Best Seller',
    stockStatus: 'In Stock',
    weightOptions: ['250g', '500g', '1kg'],
    specifications: { 'Origin': 'California, USA', 'Grade': 'Premium', 'Shelf Life': '6 Months' },
    benefits: ['Rich in Vitamin E', 'Supports Heart Health', 'Great for Brain Power'],
    reviews: [
      { id: 'r1', user: 'Ananya S.', rating: 5, date: 'May 12, 2026', comment: 'Super fresh and crunchy!' }
    ]
  },
  {
    id: 'df-2',
    name: 'Cashew W320 Premium',
    category: 'dry-fruits',
    price: 699,
    originalPrice: 750,
    shortDescription: 'Fresh whole premium cashews.',
    description: 'Our W320 grade cashews are known for their large size and creamy white color. They are perfectly roasted to retain their natural sweetness and buttery texture. Ideal for snacking or gourmet cooking.',
    images: [
      '/Product Images/Product Images/casheww320/casheww320_1.jpg',
      '/Product Images/Product Images/casheww320/casheww320_2.avif'
    ],
    rating: 4.8,
    reviewsCount: 92,
    stockStatus: 'In Stock',
    weightOptions: ['250g', '500g', '1kg'],
    specifications: { 'Grade': 'W320', 'Origin': 'Mangalore, India', 'Quality': 'Hand-picked' }
  },
  {
    id: 'df-3',
    name: 'Afghan Raisins Gold',
    category: 'dry-fruits',
    price: 349,
    originalPrice: 400,
    shortDescription: 'Naturally sweet golden raisins.',
    description: 'Grown in the sunny valleys of Afghanistan, these golden raisins are naturally sun-dried to lock in their sweetness. They are jumbo-sized, seedless, and perfect for baking or a quick energy boost.',
    images: [
      '/Product Images/Product Images/alghanraisins/alghanraisins_1.jpeg',
      '/Product Images/Product Images/alghanraisins/alghanraisins_2.jpg'
    ],
    rating: 4.7,
    reviewsCount: 64,
    stockStatus: 'In Stock',
    weightOptions: ['250g', '500g']
  },
  {
    id: 'df-4',
    name: 'Dried Figs Premium',
    category: 'dry-fruits',
    price: 499,
    originalPrice: 550,
    shortDescription: 'Naturally dried premium figs.',
    description: 'Our premium dried figs (Anjeer) are soft, sweet, and incredibly nutritious. They are high in fiber, calcium, and iron. Perfectly chewy and naturally sourced from the best farms.',
    images: [
      '/Product Images/Product Images/driedfigs/driedfigs_1.webp',
      '/Product Images/Product Images/driedfigs/driedfig_2.jpg'
    ],
    rating: 4.8,
    reviewsCount: 112,
    stockStatus: 'In Stock',
    weightOptions: ['250g', '500g']
  },
  {
    id: 'df-5',
    name: 'Turkish Apricots',
    category: 'dry-fruits',
    price: 399,
    originalPrice: 450,
    shortDescription: 'Imported soft Turkish apricots.',
    description: 'Imported from the sun-drenched orchards of Malatya, Turkey, these apricots are exceptionally soft and juicy. They have a rich orange color and a perfect balance of sweetness and tang.',
    images: [
      '/Product Images/Product Images/turkishapricot/turkishApricot_1.webp',
      '/Product Images/Product Images/turkishapricot/turkishapricot_2.jpg'
    ],
    rating: 4.6,
    reviewsCount: 48,
    stockStatus: 'In Stock',
    weightOptions: ['250g', '500g']
  },

  // NUTS
  {
    id: 'n-1',
    name: 'Salted Pistachios',
    category: 'nuts',
    price: 799,
    originalPrice: 850,
    shortDescription: 'Premium Iranian pistachios, roasted and salted.',
    description: 'Known as the "smiling nut," our pistachios are sourced from the best Iranian orchards. They are perfectly roasted and lightly seasoned with sea salt to enhance their natural creamy flavor.',
    images: [
      '/Product Images/Product Images/saltedpista/saltedpistachios_1.jpg',
      '/Product Images/Product Images/saltedpista/saltedpistachios_2.jpeg'
    ],
    rating: 4.9,
    reviewsCount: 204,
    isBestSeller: true,
    badge: 'Popular',
    stockStatus: 'In Stock',
    weightOptions: ['250g', '500g']
  },
  {
    id: 'n-2',
    name: 'Walnut Kernels Premium',
    category: 'nuts',
    price: 849,
    originalPrice: 900,
    shortDescription: 'Extra-light Chilean walnut kernels.',
    description: 'Our Chilean walnut kernels are prized for their extra-light color and lack of bitterness. They are rich in Omega-3 fatty acids and antioxidants, perfect for heart and brain health.',
    images: [
      '/Product Images/Product Images/nuts/nuts_1.jpg',
      '/Product Images/Product Images/nuts/nuts_2.jpg'
    ],
    rating: 4.8,
    reviewsCount: 135,
    stockStatus: 'In Stock',
    weightOptions: ['250g', '500g']
  },
  {
    id: 'n-3',
    name: 'Macadamia Nuts',
    category: 'nuts',
    price: 1099,
    originalPrice: 1200,
    shortDescription: 'The buttery treasure of all nuts.',
    description: 'Imported from Australia, these Macadamias are the ultimate luxury nut. Their incredibly creamy, buttery texture and subtle sweetness make them an elite snack.',
    images: [
      '/Product Images/Product Images/nuts/nuts_1.jpg',
      '/Product Images/Product Images/nuts/nuts_2.jpg'
    ],
    rating: 5.0,
    reviewsCount: 28,
    badge: 'Luxe',
    stockStatus: 'Low Stock',
    weightOptions: ['250g']
  },
  {
    id: 'n-4',
    name: 'Mixed Nuts Combo',
    category: 'nuts',
    price: 899,
    originalPrice: 950,
    shortDescription: 'Ultimate blend of premium almonds, cashews, and pistachios.',
    description: 'The perfect trail mix for the health-conscious. A balanced blend of our finest roasted almonds, buttery cashews, and crunchy pistachios.',
    images: [
      '/Product Images/Product Images/nuts/nuts_1.jpg',
      '/Product Images/Product Images/nuts/nuts_2.jpg'
    ],
    rating: 4.7,
    reviewsCount: 189,
    stockStatus: 'In Stock',
    weightOptions: ['500g', '1kg']
  },
  {
    id: 'n-5',
    name: 'Roasted Peanuts Premium',
    category: 'nuts',
    price: 199,
    originalPrice: 250,
    shortDescription: 'Jumbo size roasted peanuts.',
    description: 'Sourced from Bharuch, known for the world\'s best peanuts. These are dry roasted in sand to maintain that authentic salt-baked flavor without the mess.',
    images: [
      '/Product Images/Product Images/nuts/nuts_1.jpg',
      '/Product Images/Product Images/nuts/nuts_2.jpg'
    ],
    rating: 4.5,
    reviewsCount: 312,
    stockStatus: 'In Stock',
    weightOptions: ['500g', '1kg']
  },

  // DATES
  {
    id: 'd-1',
    name: 'Ajwa Dates Premium',
    category: 'dates',
    price: 899,
    originalPrice: 950,
    shortDescription: 'The holy dates from Medina.',
    description: 'Black, round, and slightly shrivelled, Ajwa dates from Medina are the most sought-after variety. They have a fine texture and a unique flavor profile that is neither too sweet nor too dry.',
    images: [
      '/Product Images/Product Images/ajwadates/ajwadates_1.webp',
      '/Product Images/Product Images/ajwadates/Ajwadates_2.webp'
    ],
    rating: 5.0,
    reviewsCount: 142,
    isBestSeller: true,
    badge: 'Premium',
    stockStatus: 'In Stock',
    weightOptions: ['500g', '1kg']
  },
  {
    id: 'd-2',
    name: 'Medjool Dates Jumbo',
    category: 'dates',
    price: 799,
    originalPrice: 850,
    shortDescription: 'Meaty, sweet, and exceptionally large.',
    description: 'Known as the "King of Dates", our Medjool dates are exceptionally large and sweet. They have a soft, sticky texture and a rich caramel-like flavor.',
    images: [
      '/Product Images/Product Images/dates/dates_1.avif',
      '/Product Images/Product Images/dates/dates_2.jpg'
    ],
    rating: 4.9,
    reviewsCount: 98,
    stockStatus: 'In Stock',
    weightOptions: ['500g', '1kg']
  },
  {
    id: 'd-3',
    name: 'Kimia Dates',
    category: 'dates',
    price: 399,
    originalPrice: 450,
    shortDescription: 'Authentic Iranian soft black dates.',
    description: 'Directly imported from Bam, Iran. Kimia dates are known for their moist, soft texture and dark black skin. They literally melt in your mouth.',
    images: [
      '/Product Images/Product Images/dates/dates_1.avif',
      '/Product Images/Product Images/dates/dates_2.jpg'
    ],
    rating: 4.8,
    reviewsCount: 215,
    stockStatus: 'In Stock',
    weightOptions: ['500g']
  },
  {
    id: 'd-4',
    name: 'Arabian Dates Mix',
    category: 'dates',
    price: 499,
    originalPrice: 550,
    shortDescription: 'Assorted collection of various Arabian dates.',
    description: 'A perfect sampler including Safawi, Kalmi, and Mabroom dates. Each offering a unique texture and sweetness level.',
    images: [
      '/Product Images/Product Images/dates/dates_1.avif',
      '/Product Images/Product Images/dates/dates_2.jpg'
    ],
    rating: 4.7,
    reviewsCount: 76,
    stockStatus: 'In Stock',
    weightOptions: ['500g', '1kg']
  },
  {
    id: 'd-5',
    name: 'Safawi Dates',
    category: 'dates',
    price: 649,
    originalPrice: 700,
    shortDescription: 'Fine-quality semi-dried Saudi dates.',
    description: 'Grown in Al-Madina, Safawi dates are medium-sized, long, and black. They are known for their deep color and intense sweetness with a slightly chewy texture.',
    images: [
      '/Product Images/Product Images/dates/dates_1.avif',
      '/Product Images/Product Images/dates/dates_2.jpg'
    ],
    rating: 4.8,
    reviewsCount: 54,
    stockStatus: 'In Stock',
    weightOptions: ['500g', '1kg']
  },

  // SEEDS
  {
    id: 's-1',
    name: 'Chia Seeds Organic',
    category: 'seeds',
    price: 199,
    originalPrice: 250,
    shortDescription: 'The ultimate superfood for smoothies.',
    description: 'Organic raw chia seeds packed with Omega-3s and fiber. These are the perfect addition to your breakfast bowls, puddings, or morning water.',
    images: [
      '/Product Images/Product Images/seeds/seeds_1.jpg',
      '/Product Images/Product Images/seeds/seeds_2.jpg'
    ],
    rating: 4.8,
    reviewsCount: 320,
    stockStatus: 'In Stock',
    weightOptions: ['250g', '500g']
  },
  {
    id: 's-2',
    name: 'Pumpkin Seeds',
    category: 'seeds',
    price: 249,
    originalPrice: 300,
    shortDescription: 'Crunchy raw pumpkin seeds rich in zinc.',
    description: 'Naturally sourced and lightly sun-dried. Pumpkin seeds are a nutrition powerhouse, rich in zinc and magnesium for improved immunity.',
    images: [
      '/Product Images/Product Images/seeds/seeds_1.jpg',
      '/Product Images/Product Images/seeds/seeds_2.jpg'
    ],
    rating: 4.7,
    reviewsCount: 145,
    stockStatus: 'In Stock',
    weightOptions: ['250g', '500g']
  },
  {
    id: 's-3',
    name: 'Sunflower Seeds',
    category: 'seeds',
    price: 189,
    originalPrice: 220,
    shortDescription: 'Raw hulled sunflower seeds.',
    description: 'These high-quality seeds are perfect for snacking or as a salad topper. Rich in Vitamin E and antioxidants.',
    images: [
      '/Product Images/Product Images/seeds/seeds_1.jpg',
      '/Product Images/Product Images/seeds/seeds_2.jpg'
    ],
    rating: 4.6,
    reviewsCount: 89,
    stockStatus: 'In Stock',
    weightOptions: ['250g', '500g']
  },
  {
    id: 's-4',
    name: 'Flax Seeds Premium',
    category: 'seeds',
    price: 149,
    originalPrice: 180,
    shortDescription: 'Golden flax seeds for optimal digestion.',
    description: 'Our flax seeds are triple-cleaned and sourced from organic farms. High in lignans and Alpha-Linolenic Acid (ALA).',
    images: [
      '/Product Images/Product Images/seeds/seeds_1.jpg',
      '/Product Images/Product Images/seeds/seeds_2.jpg'
    ],
    rating: 4.7,
    reviewsCount: 265,
    stockStatus: 'In Stock',
    weightOptions: ['250g', '500g']
  },
  {
    id: 's-5',
    name: 'Mixed Healthy Seeds',
    category: 'seeds',
    price: 399,
    originalPrice: 450,
    shortDescription: 'Ultimate seed mix with sunflower, pumpkin, and flax.',
    description: 'A nutritional powerhouse. Our mixed seeds combine the benefits of flax, pumpkin, and sunflower seeds in one convenient pack.',
    images: [
      '/Product Images/Product Images/mixedhealthyseeds/mixedhealthyseeds_1.jpg',
      '/Product Images/Product Images/mixedhealthyseeds/mixedhealthyseeds_2.avif'
    ],
    rating: 4.9,
    reviewsCount: 412,
    isBestSeller: true,
    badge: 'Superfood',
    stockStatus: 'In Stock',
    weightOptions: ['500g', '1kg']
  },

  // CHOCOLATES
  {
    id: 'c-1',
    name: 'Ferrero Rocher Gift Box',
    category: 'chocolates',
    price: 699,
    originalPrice: 799,
    shortDescription: 'The classic golden pleasure.',
    description: 'Whole hazelnut surrounded by delicious layers of crispy wafer, a creamy filling, smooth milk chocolate and finely chopped hazelnut pieces.',
    images: [
      '/Product Images/Product Images/importedchocolates/impotredchocolate_1.jpg',
      '/Product Images/Product Images/importedchocolates/importedchocolate_2.jpg'
    ],
    rating: 5.0,
    reviewsCount: 560,
    isBestSeller: true,
    badge: 'Classic',
    stockStatus: 'In Stock'
  },
  {
    id: 'c-2',
    name: 'Toblerone Swiss Chocolate',
    category: 'chocolates',
    price: 299,
    originalPrice: 350,
    shortDescription: 'Iconically triangular Swiss chocolate.',
    description: 'Swiss milk chocolate with honey and almond nougat. The unique triangular shape of Toblerone is instantly recognizable worldwide.',
    images: [
      '/Product Images/Product Images/importedchocolates/impotredchocolate_1.jpg',
      '/Product Images/Product Images/importedchocolates/importedchocolate_2.jpg'
    ],
    rating: 4.8,
    reviewsCount: 342,
    stockStatus: 'In Stock'
  },
  {
    id: 'c-3',
    name: 'Lindt Excellence Dark Chocolate',
    category: 'chocolates',
    price: 399,
    originalPrice: 450,
    shortDescription: 'Silky smooth 70% cocoa Swiss chocolate.',
    description: 'Mastered by the Lindt Master Chocolatiers since 1845. A refined dark chocolate with deep cocoa notes and a surprisingly smooth finish.',
    images: [
      '/Product Images/Product Images/importedchocolates/impotredchocolate_1.jpg',
      '/Product Images/Product Images/importedchocolates/importedchocolate_2.jpg'
    ],
    rating: 4.9,
    reviewsCount: 890,
    badge: 'Swiss Master',
    stockStatus: 'In Stock'
  },
  {
    id: 'c-4',
    name: 'Hershey Imported Collection',
    category: 'chocolates',
    price: 499,
    originalPrice: 550,
    shortDescription: 'The great American chocolate bar.',
    description: 'A delightful selection of Hershey\'s most iconic treats including Cookies \'n\' Crème and Special Dark.',
    images: [
      '/Product Images/Product Images/importedchocolates/impotredchocolate_1.jpg',
      '/Product Images/Product Images/importedchocolates/importedchocolate_2.jpg'
    ],
    rating: 4.7,
    reviewsCount: 228,
    stockStatus: 'In Stock'
  },
  {
    id: 'c-5',
    name: 'Cadbury Imported Assorted Box',
    category: 'chocolates',
    price: 599,
    originalPrice: 650,
    shortDescription: 'Premium UK imported Cadbury selection.',
    description: 'An assortment of the UK\'s finest Dairy Milk chocolates. Experience the richer, creamier texture and authentic British taste.',
    images: [
      '/Product Images/Product Images/importedchocolates/impotredchocolate_1.jpg',
      '/Product Images/Product Images/importedchocolates/importedchocolate_2.jpg'
    ],
    rating: 4.8,
    reviewsCount: 412,
    stockStatus: 'In Stock'
  },

  // PERFUMES
  {
    id: 'p-1',
    name: 'Oud Luxury Perfume',
    category: 'perfumes',
    price: 1299,
    originalPrice: 1500,
    shortDescription: 'Deep, woody, and mystical agarwood.',
    description: 'A majestic fragrance featuring premium Cambodian Oud. Long-lasting scent that project elegance and power with every spray.',
    images: [
      '/Product Images/Product Images/perfumes/perfume_1.webp',
      '/Product Images/Product Images/perfumes/perfume_2.jpg'
    ],
    rating: 5.0,
    reviewsCount: 88,
    isBestSeller: true,
    badge: 'Signature',
    stockStatus: 'In Stock'
  },
  {
    id: 'p-2',
    name: 'Arabian Musk Perfume',
    category: 'perfumes',
    price: 999,
    originalPrice: 1200,
    shortDescription: 'Pure white musk with floral notes.',
    description: 'A clean, powdery scent that lasts for 24 hours. The quintessential Arabian fragrance that is perfect for any occasion.',
    images: [
      '/Product Images/Product Images/perfumes/perfume_1.webp',
      '/Product Images/Product Images/perfumes/perfume_2.jpg'
    ],
    rating: 4.8,
    reviewsCount: 156,
    stockStatus: 'In Stock'
  },
  {
    id: 'p-3',
    name: 'Floral Essence Perfume',
    category: 'perfumes',
    price: 849,
    originalPrice: 999,
    shortDescription: 'A bouquet of Taif roses and jasmine.',
    description: 'Experience the freshness of an early morning garden. This light yet captivating floral scent is perfect for daytime wear.',
    images: [
      '/Product Images/Product Images/perfumes/perfume_1.webp',
      '/Product Images/Product Images/perfumes/perfume_2.jpg'
    ],
    rating: 4.7,
    reviewsCount: 64,
    stockStatus: 'In Stock'
  },
  {
    id: 'p-4',
    name: 'Royal Gold Perfume',
    category: 'perfumes',
    price: 1599,
    originalPrice: 1800,
    shortDescription: 'A blend of saffron, amber, and spice.',
    description: 'Our most intense fragrance yet. Royal Gold is a status symbol in a bottle, designed for those who command attention.',
    images: [
      '/Product Images/Product Images/perfumes/perfume_1.webp',
      '/Product Images/Product Images/perfumes/perfume_2.jpg'
    ],
    rating: 4.9,
    reviewsCount: 42,
    badge: 'Intense',
    stockStatus: 'Low Stock'
  },
  {
    id: 'p-5',
    name: 'Midnight Black Perfume',
    category: 'perfumes',
    price: 1199,
    originalPrice: 1400,
    shortDescription: 'Bold leather and smoky notes.',
    description: 'A sophisticated evening fragrance. Midnight Black combines dark woodsy notes with a hint of vanilla for a mysterious finish.',
    images: [
      '/Product Images/Product Images/perfumes/perfume_1.webp',
      '/Product Images/Product Images/perfumes/perfume_2.jpg'
    ],
    rating: 4.8,
    reviewsCount: 77,
    stockStatus: 'In Stock'
  },

  // GIFT HAMPERS
  {
    id: 'gh-1',
    name: 'Premium Dry Fruit Hamper',
    category: 'gift-hampers',
    price: 1799,
    originalPrice: 1999,
    shortDescription: 'The health conscious gift box.',
    description: 'An elegant selection of California Almonds, Jumbo Cashews, and Afghan Raisins in a designer handcrafted box.',
    images: [
      '/Product Images/Product Images/gifthamper/gifthamper_1.jpg',
      '/Product Images/Product Images/gifthamper/gifthamper_2.jpg'
    ],
    rating: 5.0,
    reviewsCount: 56,
    isBestSeller: true,
    badge: 'Popular',
    stockStatus: 'In Stock'
  },
  {
    id: 'gh-2',
    name: 'Chocolate Gift Hamper',
    category: 'gift-hampers',
    price: 1299,
    originalPrice: 1499,
    shortDescription: 'A treasure box of imported chocolates.',
    description: 'Features Ferrero Rocher, Toblerone, and Lindt Excellence bars in a beautiful gold-themed gift box.',
    images: [
      '/Product Images/Product Images/gifthamper/gifthamper_1.jpg',
      '/Product Images/Product Images/gifthamper/gifthamper_2.jpg'
    ],
    rating: 4.9,
    reviewsCount: 38,
    stockStatus: 'In Stock'
  },
  {
    id: 'gh-3',
    name: 'Festival Special Hamper',
    category: 'gift-hampers',
    price: 2199,
    originalPrice: 2499,
    shortDescription: 'Everything you need for the celebrations.',
    description: 'A mega-box including premium nuts, exotic dates, assorted chocolates, and a special selection of seeds.',
    images: [
      '/Product Images/Product Images/gifthamper/gifthamper_1.jpg',
      '/Product Images/Product Images/gifthamper/gifthamper_2.jpg'
    ],
    rating: 5.0,
    reviewsCount: 112,
    badge: 'Limited',
    stockStatus: 'In Stock'
  },
  {
    id: 'gh-4',
    name: 'Luxury Family Hamper',
    category: 'gift-hampers',
    price: 2699,
    originalPrice: 2999,
    shortDescription: 'The ultimate collection for shared joy.',
    description: 'A tiered luxury box filled with over 1.5kg of our finest premium delights. Perfect for gifting to families during festivals.',
    images: [
      '/Product Images/Product Images/gifthamper/gifthamper_1.jpg',
      '/Product Images/Product Images/gifthamper/gifthamper_2.jpg'
    ],
    rating: 5.0,
    reviewsCount: 24,
    stockStatus: 'In Stock'
  },
  {
    id: 'gh-5',
    name: 'Wedding Return Gift Box',
    category: 'gift-hampers',
    price: 899,
    originalPrice: 999,
    shortDescription: 'Elegant return gifts for your guests.',
    description: 'Sleek premium cardboard box with gold foil stamping, containing high-quality assorted dry fruits.',
    images: [
      '/Product Images/Product Images/gifthamper/gifthamper_1.jpg',
      '/Product Images/Product Images/gifthamper/gifthamper_2.jpg'
    ],
    rating: 4.8,
    reviewsCount: 145,
    stockStatus: 'In Stock'
  },

  // RETURN GIFTS
  {
    id: 'rg-1',
    name: 'Mini Chocolate Box',
    category: 'return-gifts',
    price: 149,
    originalPrice: 199,
    shortDescription: 'Tiny delights for small celebrations.',
    description: 'A cute mini box with 3 Ferrero Rocher and 1 mini Toblerone. Perfect for birthday return gifts.',
    images: [
      '/Product Images/Product Images/returngifts/returngitf_1.jpg',
      '/Product Images/Product Images/returngifts/returngifts_2.jpg'
    ],
    rating: 4.5,
    reviewsCount: 89,
    stockStatus: 'In Stock'
  },
  {
    id: 'rg-2',
    name: 'Dry Fruit Return Pack',
    category: 'return-gifts',
    price: 249,
    originalPrice: 299,
    shortDescription: 'Healthy mini treat bags.',
    description: 'Eco-friendly jute bags containing 100g of our finest roasted almonds and cashews.',
    images: [
      '/Product Images/Product Images/returngifts/returngitf_1.jpg',
      '/Product Images/Product Images/returngifts/returngifts_2.jpg'
    ],
    rating: 4.7,
    reviewsCount: 156,
    stockStatus: 'In Stock'
  },
  {
    id: 'rg-3',
    name: 'Mini Perfume Gift',
    category: 'return-gifts',
    price: 299,
    originalPrice: 349,
    shortDescription: '10ml sample of our Royal Oud.',
    description: 'A premium travel-sized vial of our best-selling fragrances in a velvet pouch.',
    images: [
      '/Product Images/Product Images/perfumes/perfume_1.webp',
      '/Product Images/Product Images/perfumes/perfume_2.jpg'
    ],
    rating: 4.6,
    reviewsCount: 42,
    stockStatus: 'In Stock'
  },
  {
    id: 'rg-4',
    name: 'Festival Gift Bag',
    category: 'return-gifts',
    price: 349,
    originalPrice: 399,
    shortDescription: 'Handcrafted potli with assorted dates.',
    description: 'A traditional embroidered potli bag containing 250g of mixed Arabian soft dates.',
    images: [
      '/Product Images/Product Images/returngifts/returngitf_1.jpg',
      '/Product Images/Product Images/returngifts/returngifts_2.jpg'
    ],
    rating: 4.8,
    reviewsCount: 67,
    stockStatus: 'In Stock'
  },
  {
    id: 'rg-5',
    name: 'Premium Return Gift Combo',
    category: 'return-gifts',
    price: 549,
    originalPrice: 599,
    shortDescription: 'The perfect mix of nuts and sweets.',
    description: 'A dual-compartment box featuring roasted cashews and imported mini truffles.',
    images: [
      '/Product Images/Product Images/returngifts/returngitf_1.jpg',
      '/Product Images/Product Images/returngifts/returngifts_2.jpg'
    ],
    rating: 4.9,
    reviewsCount: 34,
    isBestSeller: true,
    badge: 'Best Value',
    stockStatus: 'In Stock'
  }
];
