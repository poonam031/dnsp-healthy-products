import { Product } from '../types';

export const productsData: Product[] = [
  // Health & Nutrition
  {
    id: 'health-herbal-tea',
    name: 'DNSP Vedic Green & Herbal Tea',
    category: 'health-nutrition',
    categoryLabel: 'Health & Nutrition',
    tagline: 'Infused with Tulsi, Ginger, Lemongrass & Green Tea Leaves',
    description: 'A soothing herbal green tea blend packed with natural antioxidants to refresh your senses and support daily vitality.',
    fullDescription: 'DNSP Vedic Green & Herbal Tea is an artisanal infusion combining premium whole green tea leaves with authentic Indian herbs including Tulsi (Holy Basil), dried ginger root, lemongrass, and cardamom. Formulated for everyday refreshment, this gentle cup supports your daily wellness routine without synthetic additives or artificial colorants.',
    priceEst: '₹349',
    rating: 4.8,
    reviewsCount: 142,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['100% Herbal & Natural', 'Rich in Polyphenols', 'Caffeine-Balanced', 'No Added Sugar'],
    specifications: [
      { label: 'Form', value: 'Loose Leaf Tea / Filter Bags' },
      { label: 'Net Weight', value: '150 g' },
      { label: 'Shelf Life', value: '24 Months' },
      { label: 'Origin', value: 'Maharashtra, India' }
    ],
    ingredients: ['Camellia sinensis (Green Tea)', 'Ocimum sanctum (Tulsi)', 'Zingiber officinale (Ginger)', 'Cymbopogon (Lemongrass)', 'Elettaria cardamomum (Cardamom)'],
    benefits: [
      'Supports hydration and daily antioxidant intake',
      'Naturally uplifting and refreshing aroma',
      'Encourages digestive ease after meals',
      'Gentle caffeine content for sustained daytime alertness'
    ],
    usageInstructions: 'Steep 1 teaspoon or 1 tea bag in 150ml of freshly boiled water (approx. 85°C) for 3-4 minutes. Enjoy warm without milk. Lemon or honey can be added to taste.',
    netQuantity: '150g (50 Servings)',
    isPopular: true
  },
  {
    id: 'health-wellness-juice',
    name: 'DNSP Triphala & Aloe Vera Wellness Juice',
    category: 'health-nutrition',
    categoryLabel: 'Health & Nutrition',
    tagline: 'Cold-Pressed Botanical Juice for Gut & Vitality Support',
    description: 'Traditional cold-pressed combination of Triphala (Amla, Haritaki, Bibhitaki) and organic Aloe Vera juice for natural wellness.',
    fullDescription: 'Formulated using traditional Ayurvedic wisdom, this daily botanical tonic combines fiber-rich Aloe Vera barbadensis inner leaf pulp with classic Triphala extract. Rich in natural Vitamin C and bioflavonoids, it serves as a revitalizing dietary supplement for daily digestive comfort and routine hydration.',
    priceEst: '₹480',
    rating: 4.7,
    reviewsCount: 98,
    badge: 'Ayurvedic Certified',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Pure Cold-Pressed Pulp', 'No Added Sugar', 'Zero Artificial Flavoring', 'FSSAI Compliant'],
    specifications: [
      { label: 'Form', value: 'Oral Liquid Juice' },
      { label: 'Volume', value: '1000 ml' },
      { label: 'Dosage', value: '20-30 ml daily' },
      { label: 'Packaging', value: 'Food-grade amber PET bottle' }
    ],
    ingredients: ['Aloe Vera Leaf Juice (90%)', 'Amla Extract', 'Haritaki Extract', 'Bibhitaki Extract', 'Permitted Preservative (Class II)'],
    benefits: [
      'Provides naturally occurring Vitamin C and enzymes',
      'Promotes wholesome digestive regularity',
      'Hydrates body tissues from within',
      'Supports healthy skin radiance through inner nourishment'
    ],
    usageInstructions: 'Mix 25-30 ml of juice in a glass of lukewarm water and consume on an empty stomach in the morning, or as directed by a healthcare advisor.',
    netQuantity: '1 Litre',
    isPopular: true
  },
  {
    id: 'health-slimming-shake',
    name: 'DNSP SlimFit Nutrition Shake',
    category: 'health-nutrition',
    categoryLabel: 'Health & Nutrition',
    tagline: 'High Fiber & Protein Meal Replacement (Chocolate Cardamom)',
    description: 'Nutritionally balanced meal replacement shake powder with plant proteins, dietary fiber, and essential micronutrients.',
    fullDescription: 'DNSP SlimFit Shake is designed for health-conscious individuals managing their daily caloric intake while receiving balanced nutrition. It features a triple protein blend (Pea, Brown Rice & Soy) along with dietary prebiotic fiber, garcinia cambogia extract, green coffee bean extract, and 24 vitamins and minerals.',
    priceEst: '₹1,250',
    rating: 4.9,
    reviewsCount: 165,
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['18g Clean Protein/Serving', '3.8g Prebiotic Dietary Fiber', 'Zero Added Sugar', '24 Vitamins & Minerals'],
    specifications: [
      { label: 'Flavour', value: 'Chocolate Cardamom' },
      { label: 'Net Weight', value: '500 g' },
      { label: 'Servings', value: '16 Scoops' },
      { label: 'Protein Source', value: 'Plant & Whey Blend' }
    ],
    ingredients: ['Plant Protein Blend (Pea, Rice)', 'Dietary Soluble Fiber', 'Cocoa Powder', 'Green Coffee Bean Extract', 'Garcinia Cambogia Extract', 'Mineral & Vitamin Premix'],
    benefits: [
      'Helps maintain fullness and curb mid-day snacking cravings',
      'Delivers complete daily vitamins and minerals',
      'Supports lean muscle maintenance during fitness programs',
      'Convenient, ready-to-mix meal on busy workdays'
    ],
    usageInstructions: 'Add 1 heaping scoop (approx. 30g) to 250ml of skimmed milk or chilled water. Shake vigorously in a shaker bottle for 30 seconds until creamy.',
    netQuantity: '500g Jar',
    isPopular: true
  },
  {
    id: 'health-protein-supplement',
    name: 'DNSP Pro-Nutri High Protein Herbal Powder',
    category: 'health-nutrition',
    categoryLabel: 'Health & Nutrition',
    tagline: 'Fortified with Ashwagandha & Shatavari for Active Lifestyles',
    description: 'Comprehensive daily nutritional protein supplement enriched with revitalizing herbs to boost endurance and vitality.',
    fullDescription: 'DNSP Pro-Nutri combines bio-available whey protein concentrates and soy protein isolates with restorative Ayurvedic herbs Ashwagandha and Shatavari. Specially formulated for working adults, athletes, and seniors seeking wholesome protein support.',
    priceEst: '₹999',
    rating: 4.6,
    reviewsCount: 84,
    badge: 'Strength & Vitality',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['22g Protein Per Serving', 'BCAA Enriched', 'Ashwagandha Fortified', 'Easy Digestion'],
    specifications: [
      { label: 'Form', value: 'Soluble Powder' },
      { label: 'Weight', value: '400 g' },
      { label: 'Vegetarian', value: 'Yes' },
      { label: 'Allergens', value: 'Contains Milk & Soy' }
    ],
    ingredients: ['Whey Protein Concentrate', 'Isolated Soya Protein', 'Withania somnifera (Ashwagandha)', 'Asparagus racemosus (Shatavari)', 'Digestive Enzymes (Papain, Bromelain)'],
    benefits: [
      'Assists in muscle tissue recovery and replenishment',
      'Supports physical endurance and stamina',
      'Aids in fulfilling daily nutritional protein deficits',
      'Enhanced with digestive enzymes for smooth absorption'
    ],
    usageInstructions: 'Mix 1 scoop (25g) with 200ml lukewarm milk or water once or twice daily after exercise or with breakfast.',
    netQuantity: '400g Tub'
  },
  {
    id: 'health-spirulina-capsules',
    name: 'DNSP Spirulina Gold Capsules',
    category: 'health-nutrition',
    categoryLabel: 'Health & Nutrition',
    tagline: 'Pure Micro-Algae Superfood with Bio-Iron & Chlorophyll',
    description: 'Nutrient-dense Spirulina platensis organic dietary supplement rich in natural chlorophyll, iron, and plant-based protein.',
    fullDescription: 'Cultivated in pure freshwater environments under optimal sunlight, DNSP Spirulina Gold is an all-natural green superfood capsule. Renowned for its concentration of beta-carotene, phycocyanin, iron, and essential amino acids.',
    priceEst: '₹450',
    rating: 4.8,
    reviewsCount: 110,
    badge: '100% Vegan',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80'],
    highlights: ['Certified Organic Spirulina', 'Natural Iron Source', 'Vegetarian HPMC Capsules', 'Zero Heavy Metals'],
    specifications: [
      { label: 'Packaging', value: '60 Veg Capsules' },
      { label: 'Strength', value: '500 mg per capsule' },
      { label: 'Certification', value: 'GMP & ISO 9001:2015' }
    ],
    ingredients: ['Pure Spirulina Platensis Powder (500mg)'],
    benefits: [
      'Nutrient-dense superfood supporting daily stamina',
      'Natural source of plant protein and bio-iron',
      'Supports cellular defense with natural antioxidant phycocyanin'
    ],
    usageInstructions: 'Take 1 to 2 capsules twice daily with meals or as recommended by your physician.',
    netQuantity: '60 Capsules'
  },
  {
    id: 'health-moringa-vitality',
    name: 'DNSP Moringa Vitality Plus Tablets',
    category: 'health-nutrition',
    categoryLabel: 'Health & Nutrition',
    tagline: 'The Miracle Tree Extract for Daily Energy & Immunity',
    description: 'Standardized Moringa Oleifera leaf extract tablets loaded with natural vitamins, minerals, and plant phytonutrients.',
    fullDescription: 'Moringa is renowned globally as nature’s multivitamin tree. DNSP Moringa Vitality Plus utilizes carefully shade-dried organic moringa leaves to retain maximum chlorophyll, vitamin A, potassium, and calcium.',
    priceEst: '₹399',
    rating: 4.7,
    reviewsCount: 75,
    badge: 'Superfood',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'],
    highlights: ['Rich in Plant Calcium', 'Natural Antioxidant', 'Easy Swallow Tablets', 'No Artificial Fillers'],
    specifications: [
      { label: 'Count', value: '60 Tablets' },
      { label: 'Serving', value: '1 Tablet twice daily' }
    ],
    ingredients: ['Moringa Oleifera Leaf Extract (750mg)'],
    benefits: [
      'Helps maintain natural energy levels without jitters',
      'Supports bone health with plant-based calcium',
      'Promotes general wellness and immune resistance'
    ],
    usageInstructions: '1 tablet twice a day with water after meals.',
    netQuantity: '60 Tablets'
  },

  // Personal Care
  {
    id: 'pc-herbal-bath-soap',
    name: 'DNSP Neem & Aloe Vera Herbal Bath Soap',
    category: 'personal-care',
    categoryLabel: 'Personal Care',
    tagline: 'Grade 1 Premium Bathing Bar with 76% TFM & Pure Coconut Oil',
    description: 'Handcrafted moisturizing botanical soap infused with organic Neem oil, Aloe Vera, and pure essential oils for skin freshness.',
    fullDescription: 'DNSP Neem & Aloe Vera Herbal Bath Soap is a gentle, skin-friendly Grade 1 bathing bar (76% TFM) made with a saponified virgin coconut oil base. Neem provides natural purification, while Aloe Vera deeply hydrates, leaving skin clean, refreshed, and soft.',
    priceEst: '₹120',
    rating: 4.9,
    reviewsCount: 220,
    badge: 'Grade 1 TFM 76%',
    image: 'https://images.unsplash.com/photo-1607006314594-510b64d04130?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1607006314594-510b64d04130?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248597359-009772a5a589?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Pure Vegetable Oil Base', 'No Animal Fat', 'Sulfate & Paraben Free', 'Rich Gentle Lather'],
    specifications: [
      { label: 'TFM', value: '76% (Grade 1)' },
      { label: 'Pack Weight', value: '125 g' },
      { label: 'Skin Type', value: 'All skin types' }
    ],
    ingredients: ['Sodium Palmate', 'Virgin Coconut Oil', 'Neem Seed Oil (Azadirachta indica)', 'Aloe Vera Extract', 'Tulsi Extract', 'Glycerin'],
    benefits: [
      'Gentle everyday cleansing without drying the skin',
      'Supports healthy skin hygiene and odor protection',
      'Retains natural dermal moisture barrier'
    ],
    usageInstructions: 'Lather gently over wet skin during bath, massage in circular motion, and rinse thoroughly with clean water.',
    netQuantity: '125g Bar',
    isPopular: true
  },
  {
    id: 'pc-ayurvedic-hair-oil',
    name: 'DNSP Bhringraj & Brahmi Revitalizing Hair Oil',
    category: 'personal-care',
    categoryLabel: 'Personal Care',
    tagline: 'Traditional Kshirpak Vidhi with 16 Herbs & Cold-Pressed Sesame',
    description: 'Nutritive scalp and hair treatment formulated with Bhringraj, Brahmi, Amla, and hibiscus in sesame base for root strength.',
    fullDescription: 'Crafted using authentic Kshirpak Vidhi (slow decoction with herbal juices), DNSP Bhringraj & Brahmi Hair Oil penetrates deep into hair roots. It nourishes the scalp, reduces dryness and split ends, and leaves hair visibly glossy, smooth, and revitalized.',
    priceEst: '₹340',
    rating: 4.8,
    reviewsCount: 178,
    badge: 'Herbal Formula',
    image: 'https://images.unsplash.com/photo-1608248597359-009772a5a589?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608248597359-009772a5a589?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Mineral Oil Free', '16 Botanical Extracts', 'Non-Sticky Formula', 'Traditional Slow-Boil Process'],
    specifications: [
      { label: 'Volume', value: '200 ml' },
      { label: 'Base Oil', value: 'Sesame & Virgin Coconut' },
      { label: 'Application', value: 'Scalp & Strands' }
    ],
    ingredients: ['Bhringraj (Eclipta alba)', 'Brahmi (Bacopa monnieri)', 'Amla (Emblica officinalis)', 'Jatamansi', 'Cold Pressed Til Oil'],
    benefits: [
      'Nourishes hair roots and maintains scalp health',
      'Helps tame frizz and reduce hair breakage',
      'Provides calming sensation during gentle scalp massage'
    ],
    usageInstructions: 'Apply adequate oil onto scalp and gently massage with fingertips in circular motions for 10 minutes. Leave on for at least 1 hour or overnight before washing.',
    netQuantity: '200ml Bottle',
    isPopular: true
  },
  {
    id: 'pc-kumkumadi-face-cream',
    name: 'DNSP Kumkumadi Radiance Glow Cream',
    category: 'personal-care',
    categoryLabel: 'Personal Care',
    tagline: 'Kashmiri Saffron, Sandalwood & Lotus Extract Day/Night Cream',
    description: 'Luxurious herbal radiance moisturizer enriched with precious saffron stamens and botanical extracts for a supple, even glow.',
    fullDescription: 'DNSP Kumkumadi Radiance Day & Night Cream brings royal Ayurvedic glow to modern skincare. Blended with pure Kashmiri saffron (Kesar), red sandalwood, and lotus petal extract, it hydrates, balances skin texture, and enhances natural luminescence.',
    priceEst: '₹550',
    rating: 4.9,
    reviewsCount: 140,
    badge: 'Prestige Care',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Real Kashmiri Kesar', 'Lightweight Absorption', 'Non-Greasy Finish', 'Dermatologically Tested'],
    specifications: [
      { label: 'Weight', value: '50 g' },
      { label: 'Packaging', value: 'UV-Protected Frosted Glass Jar' },
      { label: 'Suitability', value: 'Normal, Dry, Combination Skin' }
    ],
    ingredients: ['Crocus sativus (Kashmiri Saffron)', 'Pterocarpus santalinus (Raktachandan)', 'Nelumbo nucifera (Lotus)', 'Shea Butter', 'Sweet Almond Oil'],
    benefits: [
      'Hydrates and balances skin moisture throughout the day',
      'Improves visible texture and smooth appearance',
      'Restores skin softness and natural healthy radiance'
    ],
    usageInstructions: 'Dot cream across cleansed face and neck. Gently massage upward in small circular strokes until fully absorbed.',
    netQuantity: '50g Jar'
  },
  {
    id: 'pc-face-wash',
    name: 'DNSP Gentle Turmeric & Tea Tree Face Wash',
    category: 'personal-care',
    categoryLabel: 'Personal Care',
    tagline: 'Soap-Free Clarifying Gel with Vitamin E Beads',
    description: 'Refreshing everyday facial wash that gently purifies pores, washes away dirt, and balances excess sebum without drying.',
    fullDescription: 'Formulated with organic wild turmeric and Australian tea tree oil, this soap-free gentle cleanser removes environmental pollutants and excess oil while protecting skin’s natural lipid barrier.',
    priceEst: '₹220',
    rating: 4.7,
    reviewsCount: 95,
    badge: 'Gentle Care',
    image: 'https://images.unsplash.com/photo-1556228722-d0b977712ad2?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1556228722-d0b977712ad2?auto=format&fit=crop&w=800&q=80'],
    highlights: ['Soap-Free Formulation', 'pH 5.5 Balanced', 'Tea Tree & Haldi', 'Paraben Free'],
    specifications: [
      { label: 'Volume', value: '100 ml' },
      { label: 'Form', value: 'Clarifying Gel' }
    ],
    ingredients: ['Curcuma aromatica (Wild Turmeric)', 'Melaleuca alternifolia (Tea Tree)', 'Aloe Leaf Juice', 'Vitamin E micro-pearls'],
    benefits: [
      'Gently sweeps away grime and impurities',
      'Leaves skin feeling fresh, cool, and balanced',
      'Maintains comfortable dermal moisture balance'
    ],
    usageInstructions: 'Dampen face with water. Squeeze coin-sized amount onto palms, create light lather, and massage over face. Rinse thoroughly.',
    netQuantity: '100ml Tube'
  },
  {
    id: 'pc-herbal-toothpaste',
    name: 'DNSP Complete Herbal Care Clove Toothpaste',
    category: 'personal-care',
    categoryLabel: 'Personal Care',
    tagline: 'Ayurvedic Cavity & Fresh Breath Defense with Clove, Neem & Babool',
    description: 'Natural herbal dental paste with clove oil, neem bark, and babool for strong enamel, healthy gums, and all-day fresh breath.',
    fullDescription: 'DNSP Herbal Care Toothpaste is crafted without harsh abrasive chemicals. Infused with potent extracts of clove, neem, babool, and peppermint, it provides long-lasting freshness and supports healthy oral hygiene.',
    priceEst: '₹140',
    rating: 4.8,
    reviewsCount: 188,
    badge: 'Family Care',
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80'],
    highlights: ['Fluoride-Conscious Formula', 'Natural Mint Flavor', 'Clove & Babool Active', 'Safe for All Ages'],
    specifications: [
      { label: 'Weight', value: '150 g' },
      { label: 'Packaging', value: 'Lami-tube with flip cap' }
    ],
    ingredients: ['Syzygium aromaticum (Clove Oil)', 'Azadirachta indica (Neem)', 'Acacia arabica (Babool)', 'Menthol', 'Calcium Carbonate'],
    benefits: [
      'Provides invigorating, long-lasting breath freshness',
      'Supports gum comfort and everyday enamel cleanliness',
      'Removes food residues gently and thoroughly'
    ],
    usageInstructions: 'Brush thoroughly at least twice daily or after meals, using a soft-bristled toothbrush. Do not swallow.',
    netQuantity: '150g Tube'
  },
  {
    id: 'pc-shaving-gel',
    name: 'DNSP Cooling Menthol & Aloe Shaving Gel',
    category: 'personal-care',
    categoryLabel: 'Personal Care',
    tagline: 'Smooth Blade Glide with Skin-Soothing Aloe & Tea Tree',
    description: 'Ultra-cushioning clear shaving gel that shields skin against razor burns while delivering a crisp, cooling finish.',
    fullDescription: 'Designed for effortless grooming, DNSP Cooling Shaving Gel provides a smooth barrier for close, comfortable shaves. Its clear non-foaming glide formula allows precise edging while cooling menthol prevents post-shave redness.',
    priceEst: '₹190',
    rating: 4.7,
    reviewsCount: 62,
    badge: 'Smooth Glide',
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80'],
    highlights: ['Zero Razor Drag', 'Transparent Precision Gel', 'Cooling Menthol Infusion', 'Fast Rinse'],
    specifications: [
      { label: 'Volume', value: '100 ml' },
      { label: 'Packaging', value: 'Squeeze Tube' }
    ],
    ingredients: ['Aloe Vera Leaf Juice', 'Menthol Crystals', 'Tea Tree Essential Oil', 'Vegetable Glycerin'],
    benefits: [
      'Helps razor glide effortlessly with minimal friction',
      'Soothes skin during and after shaving',
      'Leaves face moisturized without greasy residue'
    ],
    usageInstructions: 'Apply a generous thin layer over damp skin. Shave with clean razor strokes, rinsing blade frequently. Rinse face with cold water.',
    netQuantity: '100ml Tube'
  },
  {
    id: 'pc-laundry-detergent',
    name: 'DNSP Bio-Clean Eco Herbal Laundry Detergent',
    category: 'personal-care',
    categoryLabel: 'Personal Care',
    tagline: 'Plant-Based Enzymes & Soapnut (Reetha) Gentle Fabric Wash',
    description: 'Eco-conscious concentrated laundry liquid utilizing natural saponins and bio-enzymes to dissolve tough stains gently.',
    fullDescription: 'DNSP Bio-Clean Laundry Detergent is a biodegradable liquid wash derived from natural soapnuts (Sapindus mukorossi) and active plant enzymes. Safe for baby clothes and delicate garments, it protects colors and rinses clean with minimal water.',
    priceEst: '₹380',
    rating: 4.8,
    reviewsCount: 104,
    badge: 'Eco Safe',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80'],
    highlights: ['100% Biodegradable Surfactants', 'Zero Harsh Phosphates', 'Gentle on Sensitive Skin', 'Low Foam Formula'],
    specifications: [
      { label: 'Volume', value: '1000 ml' },
      { label: 'Washes', value: 'Up to 35 Loads' },
      { label: 'Machine Type', value: 'Front & Top Load Safe' }
    ],
    ingredients: ['Reetha Extract (Soapnut Saponins)', 'Protease & Amylase Enzymes', 'Coconut-derived Surfactants', 'Natural Lavender Essential Oil'],
    benefits: [
      'Breaks down grease and stubborn collar stains',
      'Retains fabric fiber elasticity and vibrant cloth colors',
      'Residue-free rinse safe for children and allergy-prone skin'
    ],
    usageInstructions: 'Use 1 capful (30ml) for a standard 6-8 kg wash load in washing machine, or 20ml in a bucket for hand washing.',
    netQuantity: '1 Litre Bottle'
  },
  {
    id: 'pc-sanitary-napkins',
    name: 'DNSP Comfort-Plus Bamboo Fibre Sanitary Napkins',
    category: 'personal-care',
    categoryLabel: 'Personal Care',
    tagline: 'Biodegradable Bamboo Core with Anion Chip & Rash-Free Comfort',
    description: 'Ultra-thin, highly absorbent sanitary pads crafted with natural bamboo corn fibers and anion negative ion strip.',
    fullDescription: 'DNSP Comfort-Plus Sanitary Napkins offer women maximum confidence and hygiene. Made with breathable bamboo cellulose and a therapeutic anion negative ion strip, it ensures rapid fluid absorption, zero leaks, and dry rash-free comfort.',
    priceEst: '₹180',
    rating: 4.9,
    reviewsCount: 230,
    badge: 'Doctor Recommended',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'],
    highlights: ['100% Organic Bamboo Topsheet', 'Chlorine & Dioxin Free', 'Anion Antibacterial Chip', 'Super Absorbent Polymer'],
    specifications: [
      { label: 'Pack Count', value: '10 XL Pads (290mm)' },
      { label: 'Wings', value: 'Double Flexible Wings' },
      { label: 'Core', value: 'Breathable Gel SAP Core' }
    ],
    ingredients: ['Natural Bamboo Fiber', 'Anion Negative-Ion Strip', 'Non-Woven Breathable Backsheet', 'Food-Grade Adhesive'],
    benefits: [
      'Rapid absorption prevents wetness and side leakage',
      'Breathable layers prevent itching and skin irritation',
      'Anion chip naturally inhibits odor-causing microbes'
    ],
    usageInstructions: 'Peel off adhesive release paper on back and wings. Firmly stick pad on underwear with wings wrapped around the sides.',
    netQuantity: '10 XL Pads Pack',
    isPopular: true
  },

  // Agriculture
  {
    id: 'agri-crop-shield',
    name: 'DNSP Bio-Shield Organic Crop Protection',
    category: 'agriculture',
    categoryLabel: 'Agriculture',
    tagline: 'Botanical Pest Deterrent & Systemic Disease Resistance Enhancer',
    description: 'Natural bio-pesticide alternative derived from cold-pressed Karanja and Neem seed cake for holistic crop defense.',
    fullDescription: 'DNSP Bio-Shield is an eco-friendly botanical crop protection formulation designed for organic and conventional farmers. Formulated with azadirachtin from neem and karanjin extracts, it effectively deters sucking pests, aphids, thrips, and caterpillars while remaining safe for beneficial pollinators.',
    priceEst: '₹650',
    rating: 4.9,
    reviewsCount: 154,
    badge: 'Farmer Choice',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Zero Chemical Residues', 'Pollinator Friendly', 'Organic Certified Input', 'Broad-Spectrum Action'],
    specifications: [
      { label: 'Application', value: 'Foliar Spray & Soil Drenching' },
      { label: 'Volume', value: '1000 ml' },
      { label: 'Suitable Crops', value: 'Cotton, Soybean, Vegetables, Grapes, Sugarcane' },
      { label: 'Dose', value: '2-3 ml per litre of water' }
    ],
    ingredients: ['Azadirachtin (Neem seed oil 10,000 ppm)', 'Pongamia pinnata (Karanja oil)', 'Herbal Emulsifiers'],
    benefits: [
      'Protects crops against early infestation of sucking pests',
      'Harmless to honeybees, earthworms, and soil microbes',
      'Zero post-harvest chemical residue; export crop compliant'
    ],
    usageInstructions: 'Dilute 2 to 3 ml of DNSP Bio-Shield per liter of clean water. Spray thoroughly during early morning or late afternoon for maximum leaf adherence.',
    netQuantity: '1 Litre Bottle',
    isPopular: true
  },
  {
    id: 'agri-plant-growth',
    name: 'DNSP Bhoomi-Vardhak Soil & Root Growth Promoter',
    category: 'agriculture',
    categoryLabel: 'Agriculture',
    tagline: 'Humic, Fulvic & Seaweed Extract Granules for Robust Rooting',
    description: 'High-grade bio-stimulant granules enriched with potassium humate and Ascophyllum nodosum seaweed for vibrant root development.',
    fullDescription: 'DNSP Bhoomi-Vardhak revitalizes tired soils and stimulates vigorous white root branching in saplings and standing crops. Its balanced humic and fulvic acids increase soil cation exchange capacity (CEC), improving nutrient uptake and drought tolerance.',
    priceEst: '₹890',
    rating: 4.8,
    reviewsCount: 112,
    badge: 'Soil Vitalizer',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Active Humic Acid 65%', 'Cold-Water Kelp Extract', 'Enhanced Water Retention', 'Faster Root Sprouting'],
    specifications: [
      { label: 'Form', value: 'Slow-Release Granules' },
      { label: 'Weight', value: '5 kg Bucket' },
      { label: 'Dosage', value: '5 kg per Acre' }
    ],
    ingredients: ['Potassium Humate (65%)', 'Fulvic Acid (15%)', 'Seaweed Kelp Extract (10%)', 'Organic Carrier (10%)'],
    benefits: [
      'Stimulates profuse white feeder roots within 7 days',
      'Significantly enhances fertilizer absorption efficiency',
      'Improves soil moisture retention in dry conditions'
    ],
    usageInstructions: 'Broadcast 5 kg per acre during land preparation or basal fertilization, or apply near the root zone via drip/irrigation rings.',
    netQuantity: '5 kg Container',
    isPopular: true
  },
  {
    id: 'agri-phasal-amrit',
    name: 'DNSP Phasal-Amrit Bio-Fertilizer Concentrate',
    category: 'agriculture',
    categoryLabel: 'Agriculture',
    tagline: 'Consortium of Nitrogen-Fixing & Phosphate-Solubilizing Microbes',
    description: 'Liquid bio-fertilizer consortium containing Azotobacter, PSB, and KMB to unlock native soil nutrients naturally.',
    fullDescription: 'DNSP Phasal-Amrit is a multi-strain liquid microbial inoculant that fixes atmospheric nitrogen and solubilizes fixed insoluble phosphorus and potash in farm soils. It minimizes dependence on costly chemical urea and DAP while enriching soil biodiversity.',
    priceEst: '₹550',
    rating: 4.8,
    reviewsCount: 92,
    badge: 'Bio Inoculant',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80'],
    highlights: ['Live Count 1x10^9 CFU/ml', 'Saves 25-30% Chemical Fertilizer', 'Drip System Compatible', 'Soil Health Booster'],
    specifications: [
      { label: 'Volume', value: '1000 ml' },
      { label: 'Type', value: 'Liquid Microbial Consortium' },
      { label: 'Shelf Life', value: '12 Months' }
    ],
    ingredients: ['Azotobacter chroococcum', 'Bacillus megaterium (PSB)', 'Frateuria aurantia (KMB)', 'Microbial Carrier Broth'],
    benefits: [
      'Converts unavailable soil minerals into readily plant-absorbable forms',
      'Promotes sustainable soil microflora and earthworm activity',
      'Reduces input costs while increasing crop yield potential'
    ],
    usageInstructions: 'Mix 1 liter in 200 liters of water for drip fertigation per acre, or mix with 50 kg farmyard manure (FYM) and apply evenly to moist soil.',
    netQuantity: '1 Litre Bottle'
  },
  {
    id: 'agri-crop-suraksha',
    name: 'DNSP Crop-Suraksha Natural Pest Barrier',
    category: 'agriculture',
    categoryLabel: 'Agriculture',
    tagline: 'Garlic, Chili & Ginger Botanical Insect Repellent Extract',
    description: 'Fermented herbal pest deterrent formula that naturally repels chewing insects, armyworms, and stem borers.',
    fullDescription: 'A heritage agricultural formulation combining hot capsicum extracts, allicin from garlic, and piperine from black pepper. It acts as a powerful sensory deterrent against lepidopteran larvae and beetles without chemical hazards.',
    priceEst: '₹475',
    rating: 4.7,
    reviewsCount: 68,
    badge: '100% Herbal',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80'],
    highlights: ['Natural Antifeedant Action', 'Non-Toxic to Humans', 'Easy To Spray', 'Breaks Pest Life Cycle'],
    specifications: [
      { label: 'Packaging', value: '500 ml' },
      { label: 'Dose', value: '2 ml per Litre' }
    ],
    ingredients: ['Capsaicin Extract', 'Allicin Liquid', 'Ginger Rhizome Extract', 'Organic Emulsifier'],
    benefits: [
      'Deters leaf-eating caterpillars from feeding on green foliage',
      'Repels nocturnal pests without disturbing beneficial predatory bugs'
    ],
    usageInstructions: 'Mix 2ml per litre of water and spray on crop foliage in the late afternoon.',
    netQuantity: '500ml Bottle'
  },
  {
    id: 'agri-blossom-max',
    name: 'DNSP Blossom-Max Flowering & Fruit Booster',
    category: 'agriculture',
    categoryLabel: 'Agriculture',
    tagline: 'Amino Acids, Nitrobenzene & Boron for Higher Yield Setting',
    description: 'Nutrient-rich foliar bio-activator that prevents blossom drop, boosts flower retention, and improves fruit sizing.',
    fullDescription: 'Blossom-Max provides crops with essential L-amino acids and micronized boron at critical pre-flowering stages. It helps prevent flower abortion, stimulates pollen tube viability, and supports fruit enlargement and uniform color development.',
    priceEst: '₹620',
    rating: 4.9,
    reviewsCount: 135,
    badge: 'Yield Booster',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'],
    highlights: ['Reduces Flower Drop', 'Promotes Uniform Fruit Size', 'Enhances Sugar & Brix Levels', 'High Absorption'],
    specifications: [
      { label: 'Volume', value: '500 ml' },
      { label: 'Target Stages', value: 'Bud Initiation & Post-Pollination' }
    ],
    ingredients: ['Plant L-Amino Acids (20%)', 'Hydrolyzed Protein', 'Chelated Boron (2%)', 'Auxin Precursors'],
    benefits: [
      'Dramatically reduces premature flower and fruit drop',
      'Enhances fruit weight, firmness, and shelf life',
      'Stimulates uniform flowering across orchard crops'
    ],
    usageInstructions: 'Spray 1.5 to 2 ml per liter of water at flower bud stage, and repeat spray 15 days later at fruit set stage.',
    netQuantity: '500ml Bottle',
    isPopular: true
  },
  {
    id: 'agri-krishi-mitra',
    name: 'DNSP Krishi-Mitra Soil Micronutrient Enricher',
    category: 'agriculture',
    categoryLabel: 'Agriculture',
    tagline: 'EDTA-Chelated Zinc, Iron, Manganese, Copper & Boron Formula',
    description: 'Complete multi-micronutrient mixture tailored for Maharashtra and Deccan plateau soils to correct hidden mineral deficiencies.',
    fullDescription: 'DNSP Krishi-Mitra provides balanced trace minerals in 100% EDTA chelated form. It corrects interveinal chlorosis, strengthens crop vascular bundles, and maximizes photosynthetic sugar production.',
    priceEst: '₹520',
    rating: 4.8,
    reviewsCount: 88,
    badge: 'Multi-Micro Mix',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80'],
    highlights: ['Grade II State Standard', '100% Water Soluble', 'Zero Leaf Scorching', 'Rapid Chlorophyll Recovery'],
    specifications: [
      { label: 'Weight', value: '1 kg Foil Pack' },
      { label: 'Form', value: 'Micro-Granular Soluble Powder' }
    ],
    ingredients: ['Zinc (Zn-EDTA 5%)', 'Ferrous (Fe-EDTA 4%)', 'Manganese (Mn 2%)', 'Copper (Cu 0.5%)', 'Boron (B 1%)'],
    benefits: [
      'Cures yellowing of leaves and stimulates lush green foliage',
      'Improves metabolic photosynthesis and enzyme activation',
      'Compatible with most organic and conventional spray mixtures'
    ],
    usageInstructions: 'Dissolve 2g to 2.5g per liter of water and apply foliar spray during vegetative growth stage.',
    netQuantity: '1 kg Pack'
  }
];
