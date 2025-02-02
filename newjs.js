document.addEventListener('DOMContentLoaded', function () {
    console.log("First JS file executed");

    document.getElementById('beauty').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get values from the form elements
        const gender = document.querySelector('select[name="gender"]').value.trim();
        const age = document.querySelector('select[name="age"]').value.trim();
        const skinColor = document.querySelector('select[name="skin-color"]').value.trim();
        const hairColor = document.querySelector('select[name="hair-color"]').value.trim();
        const occasion = document.querySelector('select[name="occasion"]').value.trim();

        console.log({
            gender, age, skinColor, hairColor, occasion,
        });

        // Check if all required fields are filled
        if (!gender || !age || !skinColor || !hairColor || !occasion) {
            alert("You're just one step away! Fill out the form and we’ll Start Crafting your UniQue beauty Stroy");
            console.error("Form is incomplete");
            return;
        }

        // Process the form input values further here (e.g., generate output)
        let output = '';

            
         
     if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Pastel Yellow, Sky Blue, or Light Peach.<br><br><strong>Accent Colors:</strong> Gold, Maroon, Deep Green, or Navy Blue.<br><br><strong>Avoid:</strong> Colors that are too pale (e.g., pure white without accents) or overly bright (like<br><br>neon colors).</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Jacket:</strong><br><br><strong>Kurta Color:</strong> Ivory, Beige, or Pastel Yellow.<br><br><strong>Jacket/Overcoat:</strong> A Nehru jacket in Maroon or Deep Green to add contrast.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color.<br><br><strong>Sherwani:</strong><br><br>Choose a sherwani in Light Peach or Sky Blue with subtle golden embroidery.<br><br>Pair with beige churidar pants or dhoti-style bottoms for a classic traditional vibe.<br><br><strong>Pathani Suit:</strong><br><br>Opt for a Pathani suit in Navy Blue or Light Peach.<br><br>Add a dupatta with golden or maroon accents for a festive look.<br><br><strong>Dhoti-Kurta:</strong><br><br>A pastel kurta (e.g., light yellow or peach) paired with a white or cream dhoti with<br><br>a gold border.<br><br>Accessorize with a traditional stole or dupatta.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br>A light-colored kurta (beige or pastel blue) with a Bandhgala jacket in Maroon or<br><br>Deep Green.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Blue, Bottle Green, Maroon, Beige, and Cream.<br><br><strong>Accent Colors:</strong> Gold, Rust, Mustard, or Copper.<br><br><strong>Avoid:</strong> Extremely bright or neon shades, as they may overpower the complexion and<br><br>age.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Dupatta:</strong><br><br><strong>Kurta Color:</strong> Maroon, Deep Blue, or Bottle Green with subtle embroidery.<br><br><strong>Dupatta:</strong> A cream or mustard dupatta with a golden border.<br><br><strong>Pyjama Color:</strong> Cream, Beige, or Off-white.<br><br><strong>Sherwani:</strong><br><br>A sherwani in Deep Blue or Beige with intricate golden or copper embroidery.<br><br>Pair it with churidar pants in cream or matching the sherwani’s base color.<br><br>Add a contrasting stole or dupatta (e.g., Rust or Maroon).<br><br><strong>Jodhpuri Suit (Bandhgala):</strong><br><br>A Bandhgala jacket in Deep Green or Maroon with subtle gold accents.<br><br>Paired with white or cream Jodhpuri pants.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> Mustard, Rust, or Cream with subtle golden work.<br><br><strong>Dhoti:</strong> White or Beige with a golden border.<br><br>Add a dupatta for a richer traditional feel.<br><br><strong>Angrakha Style Kurta with Dhoti:</strong><br><br>Choose an angrakha-style kurta in Maroon or Bottle Green with golden detailing.<br><br>Pair it with a cream or beige dhoti with golden accents.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Light Gray, Navy Blue, Charcoal, Beige, or Pastel Blue.<br><br><strong>Accent Colors:</strong> Burgundy, Deep Green, Black, or Maroon.<br><br><strong>Avoid:</strong> Colors that are too bright (like neon) or too casual (like bright orange or lime<br><br>green).</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Suit:</strong><br><br><strong>Suit Color:</strong> Navy Blue or Charcoal Gray.<br><br><strong>Shirt:</strong> Crisp White, Light Blue, or Beige.<br><br><strong>Tie:</strong> A subtle pattern in Burgundy, Deep Green, or Navy.<br><br><strong>Semi-Formal Attire:</strong><br><br><strong>Blazer:</strong> Light Gray or Beige blazer.<br><br><strong>Shirt:</strong> A pastel-colored button-up shirt (e.g., pastel blue or light pink).<br><br><strong>Trousers:</strong> Navy Blue or Charcoal slim-fit trousers.<br><br><strong>Business Casual:</strong><br><br><strong>Shirt:</strong> A collared button-up shirt in pastel shades or with subtle stripes.<br><br><strong>Trousers:</strong> Well-fitted chinos in beige or gray.<br><br><strong>Blazer (optional):</strong> A lightweight blazer in navy or gray.<br><br><strong>Waistcoat and Trousers:</strong><br><br><strong>Waistcoat Color:</strong> Navy Blue or Charcoal.<br><br><strong>Shirt:</strong> Light-colored button-up shirt (e.g., white or pastel blue).<br><br><strong>Trousers:</strong> Matching the waistcoat for a coordinated look.<br><br><strong>Tie:</strong> Optional; keep it simple with a solid or striped design.<br><br><strong>Formal Shirt and Trousers Combo:</strong><br><br><strong>Shirt:</strong> Light Blue or Beige.<br><br><strong>Trousers:</strong> Dark Gray or Navy Blue.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Gray, Black, and Deep Brown.<br><br><strong>Accent Colors:</strong> Burgundy, Olive Green, Rust, and Light Blue.<br><br><strong>Avoid:</strong> Colors that are too casual or flashy, like neon shades or bold patterns.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Suit:</strong><br><br><strong>Suit Color:</strong> Navy Blue or Charcoal Gray.<br><br><strong>Shirt:</strong> Crisp White or Light Blue.<br><br><strong>Tie:</strong> Solid or subtly patterned in Burgundy, Dark Green, or Black.<br><br><strong>Blazer with Trousers:</strong><br><br><strong>Blazer:</strong> Navy Blue or Deep Gray blazer.<br><br><strong>Shirt:</strong> Light Blue, White, or Beige.<br><br><strong>Trousers:</strong> Beige or Charcoal Gray for a contrast with the blazer.<br><br><strong>Business Casual:</strong><br><br><strong>Shirt:</strong> A button-down shirt in pastel tones (e.g., Light Blue or Lavender) or with subtle<br><br>patterns like pinstripes.<br><br><strong>Trousers:</strong> Well-fitted chinos in Gray or Khaki.<br><br><strong>Blazer (optional):</strong> A lightweight blazer in Navy or Dark Gray.<br><br><strong>Waistcoat Ensemble:</strong><br><br><strong>Waistcoat Color:</strong> Charcoal or Navy.<br><br><strong>Shirt:</strong> White or Light Blue.<br><br><strong>Trousers:</strong> Matching the waistcoat or slightly contrasting (e.g., Gray with Navy waistcoat).<br><br><strong>Tie:</strong> Optional; stick with simple patterns or solid colors.<br><br><strong>Shirt and Trousers Combo:</strong><br><br><strong>Shirt:</strong> Crisp White or Light Blue.<br><br><strong>Trousers:</strong> Navy, Dark Gray, or Black.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Light Gray, Pastel Blue, White, Beige, and Olive Green.<br><br><strong>Accent Colors:</strong> Navy Blue, Burgundy, Mustard, and Black.<br><br><strong>Avoid:</strong> Overly dark or muted shades that might look too mature or overly bright/neon<br><br>colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Casual Blazer Look:</strong><br><br><strong>Blazer:</strong> Light Gray or Beige, unstructured for a relaxed yet polished look.<br><br><strong>Shirt:</strong> A crisp White or Pastel-colored button-up.<br><br><strong>Trousers:</strong> Slim-fit chinos in Navy Blue or Charcoal.<br><br><strong>Smart-Casual Ensemble:</strong><br><br><strong>Top:</strong> A fitted crew neck or Henley shirt in Burgundy or Olive Green.<br><br><strong>Jacket:</strong> A bomber or denim jacket in Navy or Black.<br><br><strong>Bottoms:</strong> Dark-wash slim-fit jeans or tailored chinos in Beige.<br><br><strong>Semi-Formal Vibes:</strong><br><br><strong>Shirt:</strong> A solid or subtly patterned button-up in Pastel Blue or White.<br><br><strong>Trousers:</strong> Slim-fit trousers in Light Gray or Navy.<br><br><strong>Layered Outfit:</strong><br><br><strong>Top:</strong> A plain turtleneck or crew neck sweater in Mustard or Pastel Blue.<br><br><strong>Outerwear:</strong> A tailored blazer or cardigan in Beige or Navy.<br><br><strong>Bottoms:</strong> Slim-fit chinos in Dark Gray or Olive Green.<br><br><strong>Relaxed Yet Stylish:</strong><br><br><strong>Top:</strong> A printed shirt (small patterns or subtle florals) in light tones.<br><br><strong>Bottoms:</strong> Black or Navy slim-fit jeans.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Blue, Charcoal Gray, Burgundy, Black, and Olive Green.<br><br><strong>Accent Colors:</strong> White, Mustard, Maroon, or Rust.<br><br><strong>Avoid:</strong> Overly pastel or neon shades, which may not contrast well with dark hair.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic and Sleek:</strong><br><br><strong>Top:</strong> A Black or Charcoal slim-fit button-up shirt.<br><br><strong>Bottoms:</strong> Tailored trousers in Deep Blue or Burgundy.<br><br><strong>Smart-Casual Look:</strong><br><br><strong>Top:</strong> A fitted crew-neck or Henley shirt in Olive Green or Burgundy.<br><br><strong>Jacket:</strong> A Navy bomber jacket or lightweight blazer.<br><br><strong>Bottoms:</strong> Slim-fit dark-wash jeans or tailored chinos in Gray or Black.<br><br><strong>Layered Party Style:</strong><br><br><strong>Shirt:</strong> A White or Light Gray shirt with a small check or subtle pattern.<br><br><strong>Outerwear:</strong> A Burgundy or Maroon blazer or cardigan.<br><br><strong>Bottoms:</strong> Navy or Black slim-fit trousers.<br><br><strong>Edgy Yet Polished:</strong><br><br><strong>Top:</strong> A Black turtleneck or crew neck sweater.<br><br><strong>Jacket:</strong> A leather or suede jacket in Deep Brown or Black.<br><br><strong>Bottoms:</strong> Tailored trousers in Charcoal or Navy.<br><br><strong>Relaxed and Trendy:</strong><br><br><strong>Shirt:</strong> A printed or patterned shirt (e.g., floral or geometric) in Rust or Mustard tones.<br><br><strong>Bottoms:</strong> Slim-fit chinos in Beige or Gray.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Beige, Cream, Light Blue, Pastel Yellow, and Mint Green.<br><br><strong>Accent Colors:</strong> Gold, Deep Maroon, Olive Green, or Bronze.<br><br><strong>Avoid:</strong> Overly dark colors like full black or very bold neons, which might overpower light<br><br>tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Kurta and Pajama:</strong><br><br><strong>Kurta:</strong> Pastel-colored kurta (Mint Green, Cream, or Light Blue) with light embroidery or<br><br>texture.<br><br><strong>Bottoms:</strong> White or Beige churidar or straight-fit pajama.<br><br><strong>Sherwani with a Modern Touch:</strong><br><br><strong>Sherwani:</strong> Beige or Cream sherwani with subtle gold or bronze embroidery.<br><br><strong>Inner Layer:</strong> A pastel-colored kurta underneath (e.g., pastel yellow or mint).<br><br><strong>Bottoms:</strong> White or off-white churidar.<br><br><strong>Dhoti and Kurta Combo:</strong><br><br><strong>Kurta:</strong> Light Yellow or Cream kurta with minimal embroidery.<br><br><strong>Dhoti:</strong> White or off-white with a gold border.<br><br><strong>Pathani Suit:</strong><br><br><strong>Top:</strong> Light Blue or Beige Pathani kurta.<br><br><strong>Bottoms:</strong> White or Cream loose-fit trousers.<br><br><strong>Indo-Western Fusion:</strong><br><br><strong>Top:</strong> A short kurta or bandhgala jacket in pastel shades with subtle patterns.<br><br><strong>Bottoms:</strong> Slim-fit trousers or dhoti pants in beige or cream.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Maroon, Mustard Yellow, Navy Blue, Olive Green, and Beige.<br><br><strong>Accent Colors:</strong> Gold, Cream, Bronze, and Dark Brown.<br><br><strong>Avoid:</strong> Overly pastel or neon shades, as they may wash out the light complexion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Kurta with Pajama:</strong><br><br><strong>Kurta:</strong> Mustard Yellow or Maroon kurta with minimal embroidery.<br><br><strong>Bottoms:</strong> White or Cream churidar or pajama.<br><br><strong>Sherwani Elegance:</strong><br><br><strong>Sherwani:</strong> Deep Maroon or Olive Green sherwani with gold or bronze embroidery.<br><br><strong>Inner Layer:</strong> A beige or cream kurta for contrast.<br><br><strong>Bottoms:</strong> Matching churidar in cream or off-white.<br><br><strong>Dhoti-Kurta Ensemble:</strong><br><br><strong>Kurta:</strong> Navy Blue or Olive Green with a minimalistic pattern or embroidery.<br><br><strong>Dhoti:</strong> White with a gold border or matching the kurta color.<br><br><strong>Pathani Suit:</strong><br><br><strong>Top:</strong> Maroon or Mustard Pathani kurta with a straight silhouette.<br><br><strong>Bottoms:</strong> Cream or beige trousers.<br><br><strong>Indo-Western Style:</strong><br><br><strong>Top:</strong> A short kurta or bandhgala jacket in Deep Maroon or Navy Blue with intricate<br><br>detailing.<br><br><strong>Bottoms:</strong> Slim-fit trousers or dhoti pants in Beige or Cream.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Light Gray, Navy Blue, Pastel Blue, Beige, and Charcoal.<br><br><strong>Accent Colors:</strong> White, Powder Pink, Light Lavender, and Soft Mint.<br><br><strong>Avoid:</strong> Overly bright colors or dark, stark shades like black (unless paired with lighter<br><br>accents).</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Suit:</strong><br><br><strong>Blazer:</strong> Navy Blue or Light Gray.<br><br><strong>Shirt:</strong> White or Pastel Blue button-up shirt.<br><br><strong>Trousers:</strong> Matching suit trousers in Navy or Light Gray.<br><br><strong>Tie:</strong> A muted patterned tie in Lavender, Powder Pink, or Navy.<br><br><strong>Business Casual:</strong><br><br><strong>Shirt:</strong> Pastel-colored (Light Lavender, Mint, or Powder Pink) button-up shirt.<br><br><strong>Trousers:</strong> Slim-fit Beige or Charcoal trousers.<br><br><strong>Blazer (optional):</strong> A Light Gray or Navy Blue blazer.<br><br><strong>Vest and Trousers Combo:</strong><br><br><strong>Vest:</strong> A Light Gray or Navy tailored vest.<br><br><strong>Shirt:</strong> Crisp White or Soft Blue button-up shirt.<br><br><strong>Trousers:</strong> Matching suit trousers in Navy or Light Gray.<br><br><strong>Tie:</strong> Slim tie in Navy or a pastel shade.<br><br><strong>Sharp and Simple:</strong><br><br><strong>Shirt:</strong> Plain White or Light Blue shirt with a classic collar.<br><br><strong>Trousers:</strong> Slim-fit Beige or Light Gray trousers.<br><br><strong>Semi-Formal Layers:</strong><br><br><strong>Top:</strong> A fine-knit sweater in Beige or Light Blue worn over a White shirt.<br><br><strong>Bottoms:</strong> Charcoal or Navy trousers.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Gray, Dark Brown, and Light Gray.<br><br><strong>Accent Colors:</strong> White, Soft Blue, Light Pink, and Cream.<br><br><strong>Avoid:</strong> Overly bright or bold colors that might clash with the formal tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Timeless Suit:</strong><br><br><strong>Blazer:</strong> Navy Blue or Charcoal tailored blazer.<br><br><strong>Shirt:</strong> Crisp White or Light Blue button-up shirt.<br><br><strong>Trousers:</strong> Matching suit trousers in Navy or Charcoal.<br><br><strong>Tie:</strong> Solid or patterned tie in Dark Brown, Navy, or Maroon.<br><br><strong>Business Casual:</strong><br><br><strong>Shirt:</strong> Pastel-colored shirt (Light Pink, Soft Blue, or White).<br><br><strong>Trousers:</strong> Slim-fit Light Gray or Beige trousers.<br><br><strong>Blazer:</strong> Navy Blue or Charcoal Gray (optional).<br><br><strong>Three-Piece Suit:</strong><br><br><strong>Suit:</strong> A Navy or Charcoal three-piece suit with a matching vest.<br><br><strong>Shirt:</strong> White or Light Blue.<br><br><strong>Tie:</strong> Patterned tie in Dark Green or Maroon.<br><br><strong>Sharp Contrast Look:</strong><br><br><strong>Shirt:</strong> Soft Pink or Pale Lavender button-up shirt.<br><br><strong>Trousers:</strong> Dark Gray or Navy trousers.<br><br><strong>Sweater and Shirt Combo:</strong><br><br><strong>Top:</strong> A fine-knit sweater in Charcoal or Navy layered over a White shirt.<br><br><strong>Bottoms:</strong> Slim-fit Light Gray trousers.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Light Gray, Soft Blue, White, Beige, and Pastel shades like Lavender<br><br>and Mint Green.<br><br><strong>Accent Colors:</strong> Darker shades like Navy Blue, Charcoal, and deep burgundy for<br><br>contrast.<br><br><strong>Avoid:</strong> Very bright neon colors or dark shades like black that may look too heavy.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Casual Button-Down Shirt with Chinos:</strong><br><br><strong>Shirt:</strong> A light, airy button-down shirt in Soft Blue, White, or Light Lavender with subtle<br><br>patterns (e.g., checks or stripes).<br><br><strong>Bottoms:</strong> Beige or light gray chinos, slim-fit for a modern look.<br><br><strong>Slim-Fit Blazer and T-Shirt Combo:</strong><br><br><strong>Blazer:</strong> Light Gray or Navy Blue slim-fit blazer.<br><br><strong>T-Shirt:</strong> White or light pastel-colored T-shirt underneath the blazer for a modern touch.<br><br><strong>Bottoms:</strong> Slim-fit dark denim jeans (Dark Gray or Navy).<br><br><strong>Trendy Polo and Jeans:</strong><br><br><strong>Polo Shirt:</strong> A soft pastel color like Mint Green, Soft Pink, or Light Blue.<br><br><strong>Bottoms:</strong> Dark jeans (fitted or slim fit) in black or navy to balance the light tones of the<br><br>shirt.<br><br><strong>Casual Henley Shirt with Trousers:</strong><br><br><strong>Top:</strong> A Henley shirt in Soft Gray or Cream, offering a relaxed yet stylish vibe.<br><br><strong>Bottoms:</strong> Slim-fit khaki or light gray trousers.<br><br><strong>Denim Jacket with T-Shirt:</strong><br><br><strong>Jacket:</strong> A light wash or beige denim jacket for a trendy, cool vibe.<br><br><strong>Shirt:</strong> White or light-colored T-shirt underneath (can go for a graphic T-shirt for a more<br><br>playful look).<br><br><strong>Bottoms:</strong> Slim-fit jeans in black or dark denim.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Gray, Navy Blue, Black, Burgundy, Deep Green, and Soft<br><br>Pastels like Light Blue or Cream.<br><br><strong>Accent Colors:</strong> White, Dark Red, and Silver.<br><br><strong>Avoid:</strong> Too many bright colors or neon hues that may overpower the look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Black Shirt and Jeans:</strong><br><br><strong>Shirt:</strong> A black slim-fit shirt with subtle details like small patterns or a sleek texture.<br><br><strong>Bottoms:</strong> Dark jeans (Slim-fit or Straight leg) in black or dark denim.<br><br><strong>Trendy Blazer with a T-shirt:</strong><br><br><strong>Blazer:</strong> Navy Blue or Charcoal Gray tailored blazer.<br><br><strong>T-shirt:</strong> A white or soft-colored fitted T-shirt underneath for a casual yet classy look.<br><br><strong>Bottoms:</strong> Slim-fit black or dark denim jeans.<br><br><strong>Casual Button-Down Shirt and Chinos:</strong><br><br><strong>Shirt:</strong> A charcoal or deep burgundy button-down shirt, which contrasts nicely with light<br><br>skin and dark hair.<br><br><strong>Bottoms:</strong> Slim-fit beige or khaki chinos for a relaxed but stylish vibe.<br><br><strong>Stylish Henley Shirt and Jacket Combo:</strong><br><br><strong>Shirt:</strong> A white or light gray Henley shirt for a laid-back yet stylish feel.<br><br><strong>Jacket:</strong> A dark, fitted denim or leather jacket to add a layer of style.<br><br><strong>Bottoms:</strong> Black or dark gray jeans for contrast.<br><br><strong>Smart Casual Suit Look:</strong><br><br><strong>Suit:</strong> A tailored suit in Navy Blue or Charcoal Gray.<br><br><strong>Shirt:</strong> A crisp white shirt with a slim collar.<br><br><strong>Tie:</strong> A deep red or navy tie to add a pop of color.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Pastel Yellow, Sky Blue, or Light Peach.<br><br><strong>Accent Colors:</strong> Gold, Maroon, Deep Green, or Navy Blue.<br><br><strong>Avoid:</strong> Colors that are too pale (e.g., pure white without accents) or overly bright (like<br><br>neon colors).</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Jacket:</strong><br><br><strong>Kurta Color:</strong> Ivory, Beige, or Pastel Yellow.<br><br><strong>Jacket/Overcoat:</strong> A Nehru jacket in Maroon or Deep Green to add contrast.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Choose a sherwani in Light Peach or Sky Blue with subtle golden<br><br>embroidery.<br><br><strong>Bottoms:</strong> Pair with beige churidar pants or dhoti-style bottoms for a classic traditional<br><br>vibe.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Opt for a Pathani suit in Navy Blue or Light Peach.<br><br><strong>Dupatta:</strong> Add a dupatta with golden or maroon accents for a festive look.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> A pastel kurta (e.g., light yellow or peach) paired with a white or cream<br><br>dhoti with a gold border.<br><br><strong>Accessory:</strong> A traditional stole or dupatta for added elegance.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br><strong>Kurta Color:</strong> A light-colored kurta (beige or pastel blue).<br><br><strong>Jacket Color:</strong> A Bandhgala jacket in Maroon or Deep Green for contrast.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Olive Green, Sky Blue, or Light Brown.<br><br><strong>Accent Colors:</strong> Gold, Maroon, Deep Green, or Navy Blue.<br><br><strong>Avoid:</strong> Overly bright or neon colors that may clash with the rich tones of olive skin.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Jacket:</strong><br><br><strong>Kurta Color:</strong> Ivory, Beige, or Olive Green to complement the olive skin.<br><br><strong>Jacket/Overcoat:</strong> A maroon or deep green Nehru jacket to add contrast.<br><br><strong>Pyjama Color:</strong> Off-white or beige to match or contrast the kurta.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Choose a maroon, deep green, or light brown sherwani with golden<br><br>embroidery.<br><br><strong>Bottoms:</strong> Pair with beige churidar pants or dhoti-style bottoms for a traditional yet<br><br>sophisticated look.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Opt for a rich olive green or navy blue Pathani suit.<br><br><strong>Dupatta:</strong> Add a maroon or gold-accented dupatta to add a festive touch.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> A light olive green or beige kurta, paired with a white or cream dhoti.<br><br><strong>Accessory:</strong> A traditional stole or dupatta with golden accents for elegance.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br><strong>Kurta Color:</strong> A light-colored kurta in beige or soft blue.<br><br><strong>Jacket Color:</strong> A deep green or maroon Bandhgala jacket to make a bold statement.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Charcoal Gray, Navy Blue, or Light Blue.<br><br><strong>Accent Colors:</strong> Maroon, Deep Green, Slate Gray, or Light Brown.<br><br><strong>Avoid:</strong> Overly bright or neon colors that may not look professional.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Formal Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light blue, ivory, or soft gray to complement the medium/olive skin and light<br><br>hair.<br><br><strong>Trousers Color:</strong> Charcoal gray, navy blue, or light brown for a clean, professional look.<br><br><strong>Tie:</strong> A maroon or deep green tie for a pop of color.<br><br><strong>Blazer and Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Navy blue or charcoal gray blazer for a classic formal look.<br><br><strong>Shirt Color:</strong> A crisp white or light blue dress shirt.<br><br><strong>Pants:</strong> Tailored dress pants in slate gray, navy, or beige.<br><br><strong>Suit with Shirt and Tie:</strong><br><br><strong>Suit Color:</strong> A medium gray or navy blue suit that complements the skin tone.<br><br><strong>Shirt Color:</strong> A white or light blue shirt under the suit jacket.<br><br><strong>Tie:</strong> A maroon or slate gray tie to match the outfit.<br><br><strong>Polo Shirt and Trousers:</strong><br><br><strong>Polo Shirt Color:</strong> Light blue, ivory, or beige.<br><br><strong>Trousers Color:</strong> Charcoal gray or beige dress trousers for a relaxed yet formal look.<br><br><strong>V-neck Sweater with Collared Shirt:</strong><br><br><strong>Sweater Color:</strong> Light gray or slate gray for a clean and polished appearance.<br><br><strong>Shirt Color:</strong> White or soft blue collared shirt underneath.<br><br><strong>Pants:</strong> Light brown or navy blue dress pant</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Charcoal Gray, Navy Blue, or Light Blue.<br><br><strong>Accent Colors:</strong> Maroon, Deep Green, Slate Gray, or Light Brown.<br><br><strong>Avoid:</strong> Overly bright or neon colors that may not look professional.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Formal Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light blue, ivory, or soft gray to complement the medium/olive skin and dark<br><br>hair.<br><br><strong>Trousers Color:</strong> Charcoal gray, navy blue, or light brown for a clean, professional look.<br><br><strong>Tie:</strong> A maroon or deep green tie to add a pop of color.<br><br><strong>Blazer and Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Navy blue or charcoal gray blazer for a classic formal look.<br><br><strong>Shirt Color:</strong> A crisp white or light blue dress shirt.<br><br><strong>Pants:</strong> Tailored dress pants in slate gray, navy, or beige.<br><br><strong>Suit with Shirt and Tie:</strong><br><br><strong>Suit Color:</strong> A medium gray or navy blue suit that complements the skin tone.<br><br><strong>Shirt Color:</strong> A white or light blue shirt under the suit jacket.<br><br><strong>Tie:</strong> A maroon or slate gray tie to match the outfit.<br><br><strong>Polo Shirt and Trousers:</strong><br><br><strong>Polo Shirt Color:</strong> Light blue, ivory, or beige.<br><br><strong>Trousers Color:</strong> Charcoal gray or beige dress trousers for a relaxed yet formal look.<br><br><strong>V-neck Sweater with Collared Shirt:</strong><br><br><strong>Sweater Color:</strong> Light gray or slate gray for a clean and polished appearance.<br><br><strong>Shirt Color:</strong> White or soft blue collared shirt underneath.<br><br><strong>Pants:</strong> Light brown or navy blue dress pants.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Charcoal Gray, Light Blue, or Pastel Green.<br><br><strong>Accent Colors:</strong> Maroon, Deep Green, Slate Gray, or Burgundy.<br><br><strong>Avoid:</strong> Overly bright or neon colors that can appear too casual for a party/date night.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Casual Blazer and Jeans:</strong><br><br><strong>Blazer Color:</strong> Light blue, beige, or slate gray for a smart yet relaxed look.<br><br><strong>Shirt Color:</strong> A white, ivory, or soft green shirt underneath the blazer.<br><br><strong>Jeans Color:</strong> Charcoal gray or dark blue jeans for a more refined, party-ready outfit.<br><br><strong>Button-Down Shirt and Chinos:</strong><br><br><strong>Shirt Color:</strong> Light blue or ivory button-down shirt for a fresh, clean look.<br><br><strong>Chinos Color:</strong> Light gray or beige chinos for a subtle contrast.<br><br><strong>Accessories:</strong> A sleek, minimalistic watch or bracelet to complement the look.<br><br><strong>T-shirt and Casual Blazer:</strong><br><br><strong>T-shirt Color:</strong> A simple white or pastel-colored t-shirt to keep it laid-back yet stylish.<br><br><strong>Blazer Color:</strong> Light gray or navy blue blazer for a sharp contrast.<br><br><strong>Pants:</strong> Dark blue jeans or tailored black trousers to balance the look.<br><br><strong>Henley Shirt and Skinny Jeans:</strong><br><br><strong>Shirt Color:</strong> Ivory or light pastel green henley shirt for a relaxed but fashionable vibe.<br><br><strong>Jeans Color:</strong> Black or dark gray skinny jeans for an edgier, modern touch.<br><br><strong>V-neck Shirt and Slim-fit Trousers:</strong><br><br><strong>Shirt Color:</strong> Charcoal gray or navy blue V-neck shirt for a subtle yet bold look.<br><br><strong>Trousers Color:</strong> Slim-fit chinos in beige or gray to match the shirt's tone.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Charcoal Gray, Navy Blue, or Light Blue.<br><br><strong>Accent Colors:</strong> Maroon, Deep Green, Slate Gray, or Burgundy.<br><br><strong>Avoid:</strong> Overly bright or neon colors that might feel too casual for a party/date night.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Casual Blazer and Jeans:</strong><br><br><strong>Blazer Color:</strong> Navy blue or slate gray blazer for a sophisticated yet relaxed vibe.<br><br><strong>Shirt Color:</strong> A crisp white, ivory, or light blue shirt under the blazer.<br><br><strong>Jeans Color:</strong> Dark blue or charcoal gray jeans to keep the look sharp and stylish.<br><br><strong>Button-Down Shirt and Chinos:</strong><br><br><strong>Shirt Color:</strong> Light blue or ivory button-down shirt for a clean, modern look.<br><br><strong>Chinos Color:</strong> Beige or light gray chinos for a balanced, stylish appearance.<br><br><strong>Accessories:</strong> A sleek watch or bracelet for a more polished and chic look.<br><br><strong>T-shirt and Casual Blazer:</strong><br><br><strong>T-shirt Color:</strong> A simple white or light pastel-colored t-shirt for a laid-back yet fashionable<br><br>outfit.<br><br><strong>Blazer Color:</strong> Charcoal gray or navy blue blazer to create a sophisticated contrast.<br><br><strong>Pants:</strong> Dark blue jeans or tailored black trousers to add refinement to the ensemble.<br><br><strong>Henley Shirt and Skinny Jeans:</strong><br><br><strong>Shirt Color:</strong> Ivory or light green henley shirt for a fresh and trendy vibe.<br><br><strong>Jeans Color:</strong> Slim-fit black or dark gray jeans to complement the shirt.<br><br><strong>V-neck Shirt and Slim-fit Trousers:</strong><br><br><strong>Shirt Color:</strong> Charcoal gray or burgundy V-neck shirt to add some boldness to the look.<br><br><strong>Trousers Color:</strong> Slim-fit chinos or dark trousers in beige, gray, or navy to keep it sharp.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Cream, Beige, Soft Gold, Olive Green, or Pastel Yellow.<br><br><strong>Accent Colors:</strong> Maroon, Deep Blue, Burgundy, or Charcoal Gray.<br><br><strong>Avoid:</strong> Overly bright colors or neon shades that may clash with the rich tones of brown<br><br>skin.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Jacket:</strong><br><br><strong>Kurta Color:</strong> Cream, beige, or pastel yellow to complement brown skin.<br><br><strong>Jacket/Overcoat:</strong> A Nehru jacket in maroon or deep blue for a sophisticated touch.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color for harmony.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Soft gold, beige, or olive green with subtle embroidery in maroon or<br><br>gold.<br><br><strong>Pants:</strong> Beige churidar or traditional dhoti-style bottoms for a regal look.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Burgundy, maroon, or olive green to suit brown skin tones.<br><br><strong>Dupatta:</strong> Add a dupatta with golden or deep blue accents for a festive flair.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> Pastel yellow, soft cream, or light gold kurta paired with a cream or white<br><br>dhoti.<br><br><strong>Dhoti Style:</strong> A dhoti with a gold border to elevate the traditional appearance.<br><br><strong>Accessories:</strong> A traditional stole or dupatta can complete the look.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br><strong>Kurta Color:</strong> Light beige or ivory.<br><br><strong>Jacket Color:</strong> A Bandhgala jacket in maroon or deep blue to contrast with the light kurta.<br><br><strong>Pants/Dhoti:</strong> Beige dhoti or tailored pants for a modern touch to the traditional look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Cream, Beige, Soft Gold, Olive Green, or Pastel Yellow.<br><br><strong>Accent Colors:</strong> Maroon, Deep Blue, Burgundy, or Charcoal Gray.<br><br><strong>Avoid:</strong> Overly bright or neon colors that might not complement brown skin.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Jacket:</strong><br><br><strong>Kurta Color:</strong> Cream, beige, or pastel yellow to complement brown skin and dark hair.<br><br><strong>Jacket/Overcoat:</strong> A Nehru jacket in maroon, burgundy, or deep blue for a contrasting,<br><br>stylish look.<br><br><strong>Pyjama Color:</strong> Off-white or beige to match the kurta for a unified appearance.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Soft gold, beige, or olive green with subtle golden or maroon<br><br>embroidery for a festive vibe.<br><br><strong>Pants:</strong> Beige churidar or dhoti-style bottoms for a traditional look that balances the color<br><br>scheme.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Maroon, deep blue, or olive green to complement the brown skin<br><br>and dark hair.<br><br><strong>Dupatta:</strong> A dupatta with golden or silver accents to add richness to the outfit.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> Pastel yellow, light cream, or beige for a fresh, bright look.<br><br><strong>Dhoti Style:</strong> A cream or white dhoti with a gold or subtle color border to elevate the<br><br>traditional appearance.<br><br><strong>Accessories:</strong> Add a traditional stole or dupatta for an added cultural touch.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br><strong>Kurta Color:</strong> Light beige or ivory to keep it simple yet elegant.<br><br><strong>Jacket Color:</strong> A Bandhgala jacket in maroon or deep blue to contrast and bring focus to<br><br>the kurta.<br><br><strong>Pants/Dhoti:</strong> Beige or white dhoti to maintain a balanced, traditional look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Light Blue, Charcoal Gray, or Navy Blue.<br><br><strong>Accent Colors:</strong> Deep Green, Burgundy, Maroon, or Slate Gray.<br><br><strong>Avoid:</strong> Bright or neon colors that may appear too casual or out of place in a formal office<br><br>setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Charcoal gray or navy blue for a sharp, professional look.<br><br><strong>Shirt Color:</strong> Light blue or ivory dress shirt to complement brown skin and light hair.<br><br><strong>Pants Color:</strong> Matching charcoal gray or dark beige dress pants for a cohesive, clean<br><br>look.<br><br><strong>Button-Down Shirt and Chinos:</strong><br><br><strong>Shirt Color:</strong> Light blue or pale gray button-down shirt for a polished and sophisticated<br><br>vibe.<br><br><strong>Chinos Color:</strong> Beige or light gray chinos to maintain a business-casual feel while still<br><br>looking formal.<br><br><strong>Suit with Tie:</strong><br><br><strong>Suit Color:</strong> Navy blue or slate gray suit for a powerful, professional appearance.<br><br><strong>Shirt Color:</strong> Crisp white or ivory shirt to provide contrast with the suit.<br><br><strong>Tie Color:</strong> Deep green, burgundy, or maroon tie to add a pop of color without<br><br>overpowering the outfit.<br><br><strong>Dress Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light blue or beige dress shirt to brighten up the look.<br><br><strong>Trousers Color:</strong> Dark gray or navy trousers for a sharp, clean finish.<br><br><strong>V-neck Shirt and Blazer:</strong><br><br><strong>Shirt Color:</strong> A soft ivory or light gray V-neck shirt to keep it simple and modern.<br><br><strong>Blazer Color:</strong> Charcoal gray or dark navy blue to add a formal touch.<br><br><strong>Pants:</strong> Beige or gray trousers for balance and refinement.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Light Gray, Navy Blue, Charcoal Gray, or White.<br><br><strong>Accent Colors:</strong> Burgundy, Deep Green, Maroon, or Slate Blue.<br><br><strong>Avoid:</strong> Bright or neon colors that may appear too casual for a formal setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Navy blue or charcoal gray for a sharp, professional appearance.<br><br><strong>Shirt Color:</strong> Light gray or ivory shirt to complement brown skin and dark hair.<br><br><strong>Pants Color:</strong> Matching charcoal gray or navy blue pants for a cohesive and polished<br><br>look.<br><br><strong>Button-Down Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> White or light blue button-down shirt for a clean, classic look.<br><br><strong>Trousers Color:</strong> Dark gray or beige trousers for a sophisticated touch.<br><br><strong>Suit and Tie:</strong><br><br><strong>Suit Color:</strong> Dark navy blue or charcoal gray suit for a powerful and formal vibe.<br><br><strong>Shirt Color:</strong> Crisp white or light gray shirt to provide contrast.<br><br><strong>Tie Color:</strong> Burgundy, deep green, or slate blue tie to add a refined touch.<br><br><strong>Dress Shirt and Chinos:</strong><br><br><strong>Shirt Color:</strong> Light gray, ivory, or pale blue dress shirt for a modern, smart appearance.<br><br><strong>Chinos Color:</strong> Dark beige or light gray chinos for a comfortable yet professional look.<br><br><strong>V-neck Shirt and Blazer:</strong><br><br><strong>Shirt Color:</strong> Ivory or soft gray V-neck shirt for a fresh, minimalist feel.<br><br><strong>Blazer Color:</strong> Charcoal gray or dark navy blue blazer for a sophisticated edge.<br><br><strong>Pants:</strong> Beige or gray trousers for a well-rounded, professional outfit.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Black, Deep Red, Charcoal Gray, Light Gray, or Navy Blue.<br><br><strong>Accent Colors:</strong> Burgundy, Olive Green, Silver, or Deep Blue.<br><br><strong>Avoid:</strong> Overly bright or neon colors, as they may look too casual or loud for a party or<br><br>date night.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Slim-Fit Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal gray or deep red blazer for a sophisticated and stylish look.<br><br><strong>Shirt Color:</strong> Black, white, or light gray shirt to keep it sleek and modern.<br><br><strong>Trousers Color:</strong> Black or dark gray slim-fit trousers to match the sharp look of the<br><br>blazer.<br><br><strong>Button-Down Shirt and Jeans:</strong><br><br><strong>Shirt Color:</strong> Light gray, deep red, or navy blue button-down shirt for a smart yet relaxed<br><br>appearance.<br><br><strong>Jeans Color:</strong> Dark-wash black or deep blue jeans to maintain a sleek, modern style.<br><br><strong>Casual Suit with Tie:</strong><br><br><strong>Suit Color:</strong> Navy blue or charcoal gray suit for an elegant but approachable appearance.<br><br><strong>Shirt Color:</strong> Crisp white or light gray shirt to brighten up the look.<br><br><strong>Tie Color:</strong> Burgundy or deep green tie for a pop of color without being overwhelming.<br><br><strong>V-neck Shirt and Chinos:</strong><br><br><strong>Shirt Color:</strong> Deep red or charcoal gray V-neck shirt for a modern, stylish vibe.<br><br><strong>Chinos Color:</strong> Dark beige or olive green chinos for a smart-casual combination.<br><br><strong>Casual Blazer and Crew Neck Shirt:</strong><br><br><strong>Blazer Color:</strong> Black or navy blue for a sleek, versatile style.<br><br><strong>Shirt Color:</strong> Light gray or black crew-neck shirt for a relaxed yet fashionable look.<br><br><strong>Jeans/Chinos:</strong> Dark jeans or slim-fit chinos to complete the outfit.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Black, Charcoal Gray, Deep Red, Navy Blue, or White.<br><br><strong>Accent Colors:</strong> Burgundy, Olive Green, Silver, or Deep Blue.<br><br><strong>Avoid:</strong> Overly bright or neon colors, as they may be too loud for a refined look on a party<br><br>or date night.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Slim-Fit Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal gray or navy blue for a sharp and sophisticated appearance.<br><br><strong>Shirt Color:</strong> Black, white, or deep red shirt to complement brown skin and dark hair.<br><br><strong>Trousers Color:</strong> Black or dark gray slim-fit trousers to maintain a modern, clean<br><br>aesthetic.<br><br><strong>Button-Down Shirt and Jeans:</strong><br><br><strong>Shirt Color:</strong> Light gray, deep red, or navy blue button-down shirt for a stylish yet relaxed<br><br>vibe.<br><br><strong>Jeans Color:</strong> Dark-wash black or deep blue jeans to keep the look sleek and<br><br>contemporary.<br><br><strong>Casual Suit with Tie:</strong><br><br><strong>Suit Color:</strong> Navy blue or charcoal gray suit for a sophisticated but approachable vibe.<br><br><strong>Shirt Color:</strong> Crisp white or light gray shirt to brighten the ensemble.<br><br><strong>Tie Color:</strong> Burgundy or deep blue tie to add a pop of color without overwhelming the<br><br>outfit.<br><br><strong>V-neck Shirt and Chinos:</strong><br><br><strong>Shirt Color:</strong> Charcoal gray or deep red V-neck shirt for a fresh and fashionable<br><br>appearance.<br><br><strong>Chinos Color:</strong> Dark beige or olive green chinos for a relaxed yet stylish look.<br><br><strong>Casual Blazer and Crew Neck Shirt:</strong><br><br><strong>Blazer Color:</strong> Black or navy blue for a polished, versatile style.<br><br><strong>Shirt Color:</strong> Black or light gray crew-neck shirt to maintain a sleek yet laid-back<br><br>appearance.<br><br><strong>Chinos/Jeans:</strong> Dark jeans or slim-fit chinos to complement the blazer.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Beige, Cream, Light Blue, Pastel Yellow, and Mint Green.<br><br><strong>Accent Colors:</strong> Gold, Deep Maroon, Olive Green, or Bronze.<br><br><strong>Avoid:</strong> Overly dark colors like full black or very bold neons, which might overpower light<br><br>tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Kurta and Pajama:</strong><br><br><strong>Kurta:</strong> Pastel-colored kurta (Mint Green, Cream, or Light Blue) with light embroidery or<br><br>texture.<br><br><strong>Bottoms:</strong> White or Beige churidar or straight-fit pajama.<br><br><strong>Sherwani with a Modern Touch:</strong><br><br><strong>Sherwani:</strong> Beige or Cream sherwani with subtle gold or bronze embroidery.<br><br><strong>Inner Layer:</strong> A pastel-colored kurta underneath (e.g., pastel yellow or mint).<br><br><strong>Bottoms:</strong> White or off-white churidar.<br><br><strong>Dhoti and Kurta Combo:</strong><br><br><strong>Kurta:</strong> Light Yellow or Cream kurta with minimal embroidery.<br><br><strong>Dhoti:</strong> White or off-white with a gold border.<br><br><strong>Pathani Suit:</strong><br><br><strong>Top:</strong> Light Blue or Beige Pathani kurta.<br><br><strong>Bottoms:</strong> White or Cream loose-fit trousers.<br><br><strong>Indo-Western Fusion:</strong><br><br><strong>Top:</strong> A short kurta or bandhgala jacket in pastel shades with subtle patterns.<br><br><strong>Bottoms:</strong> Slim-fit trousers or dhoti pants in beige or cream.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Maroon, Mustard Yellow, Navy Blue, Olive Green, and Beige.<br><br><strong>Accent Colors:</strong> Gold, Cream, Bronze, and Dark Brown.<br><br><strong>Avoid:</strong> Overly pastel or neon shades, as they may wash out the light complexion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Kurta with Pajama:</strong><br><br><strong>Kurta:</strong> Mustard Yellow or Maroon kurta with minimal embroidery.<br><br><strong>Bottoms:</strong> White or Cream churidar or pajama.<br><br><strong>Sherwani Elegance:</strong><br><br><strong>Sherwani:</strong> Deep Maroon or Olive Green sherwani with gold or bronze embroidery.<br><br><strong>Inner Layer:</strong> A beige or cream kurta for contrast.<br><br><strong>Bottoms:</strong> Matching churidar in cream or off-white.<br><br><strong>Dhoti-Kurta Ensemble:</strong><br><br><strong>Kurta:</strong> Navy Blue or Olive Green with a minimalistic pattern or embroidery.<br><br><strong>Dhoti:</strong> White with a gold border or matching the kurta color.<br><br><strong>Pathani Suit:</strong><br><br><strong>Top:</strong> Maroon or Mustard Pathani kurta with a straight silhouette.<br><br><strong>Bottoms:</strong> Cream or beige trousers.<br><br><strong>Indo-Western Style:</strong><br><br><strong>Top:</strong> A short kurta or bandhgala jacket in Deep Maroon or Navy Blue with intricate<br><br>detailing.<br><br><strong>Bottoms:</strong> Slim-fit trousers or dhoti pants in Beige or Cream.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Light Gray, Navy Blue, Pastel Blue, Beige, and Charcoal.<br><br><strong>Accent Colors:</strong> White, Powder Pink, Light Lavender, and Soft Mint.<br><br><strong>Avoid:</strong> Overly bright colors or dark, stark shades like black (unless paired with lighter<br><br>accents).</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Suit:</strong><br><br><strong>Blazer:</strong> Navy Blue or Light Gray.<br><br><strong>Shirt:</strong> White or Pastel Blue button-up shirt.<br><br><strong>Trousers:</strong> Matching suit trousers in Navy or Light Gray.<br><br><strong>Tie:</strong> A muted patterned tie in Lavender, Powder Pink, or Navy.<br><br><strong>Business Casual:</strong><br><br><strong>Shirt:</strong> Pastel-colored (Light Lavender, Mint, or Powder Pink) button-up shirt.<br><br><strong>Trousers:</strong> Slim-fit Beige or Charcoal trousers.<br><br><strong>Blazer (optional):</strong> A Light Gray or Navy Blue blazer.<br><br><strong>Vest and Trousers Combo:</strong><br><br><strong>Vest:</strong> A Light Gray or Navy tailored vest.<br><br><strong>Shirt:</strong> Crisp White or Soft Blue button-up shirt.<br><br><strong>Trousers:</strong> Matching suit trousers in Navy or Light Gray.<br><br><strong>Tie:</strong> Slim tie in Navy or a pastel shade.<br><br><strong>Sharp and Simple:</strong><br><br><strong>Shirt:</strong> Plain White or Light Blue shirt with a classic collar.<br><br><strong>Trousers:</strong> Slim-fit Beige or Light Gray trousers.<br><br><strong>Semi-Formal Layers:</strong><br><br><strong>Top:</strong> A fine-knit sweater in Beige or Light Blue worn over a White shirt.<br><br><strong>Bottoms:</strong> Charcoal or Navy trousers.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Gray, Dark Brown, and Light Gray.<br><br><strong>Accent Colors:</strong> White, Soft Blue, Light Pink, and Cream.<br><br><strong>Avoid:</strong> Overly bright or bold colors that might clash with the formal tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Timeless Suit:</strong><br><br><strong>Blazer:</strong> Navy Blue or Charcoal tailored blazer.<br><br><strong>Shirt:</strong> Crisp White or Light Blue button-up shirt.<br><br><strong>Trousers:</strong> Matching suit trousers in Navy or Charcoal.<br><br><strong>Tie:</strong> Solid or patterned tie in Dark Brown, Navy, or Maroon.<br><br><strong>Business Casual:</strong><br><br><strong>Shirt:</strong> Pastel-colored shirt (Light Pink, Soft Blue, or White).<br><br><strong>Trousers:</strong> Slim-fit Light Gray or Beige trousers.<br><br><strong>Blazer:</strong> Navy Blue or Charcoal Gray (optional).<br><br><strong>Three-Piece Suit:</strong><br><br><strong>Suit:</strong> A Navy or Charcoal three-piece suit with a matching vest.<br><br><strong>Shirt:</strong> White or Light Blue.<br><br><strong>Tie:</strong> Patterned tie in Dark Green or Maroon.<br><br><strong>Sharp Contrast Look:</strong><br><br><strong>Shirt:</strong> Soft Pink or Pale Lavender button-up shirt.<br><br><strong>Trousers:</strong> Dark Gray or Navy trousers.<br><br><strong>Sweater and Shirt Combo:</strong><br><br><strong>Top:</strong> A fine-knit sweater in Charcoal or Navy layered over a White shirt.<br><br><strong>Bottoms:</strong> Slim-fit Light Gray trousers.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Light Gray, Soft Blue, White, Beige, and Pastel shades like Lavender<br><br>and Mint Green.<br><br><strong>Accent Colors:</strong> Darker shades like Navy Blue, Charcoal, and deep burgundy for<br><br>contrast.<br><br><strong>Avoid:</strong> Very bright neon colors or dark shades like black that may look too heavy.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Casual Button-Down Shirt with Chinos:</strong><br><br><strong>Shirt:</strong> A light, airy button-down shirt in Soft Blue, White, or Light Lavender with subtle<br><br>patterns (e.g., checks or stripes).<br><br><strong>Bottoms:</strong> Beige or light gray chinos, slim-fit for a modern look.<br><br><strong>Slim-Fit Blazer and T-Shirt Combo:</strong><br><br><strong>Blazer:</strong> Light Gray or Navy Blue slim-fit blazer.<br><br><strong>T-Shirt:</strong> White or light pastel-colored T-shirt underneath the blazer for a modern touch.<br><br><strong>Bottoms:</strong> Slim-fit dark denim jeans (Dark Gray or Navy).<br><br><strong>Trendy Polo and Jeans:</strong><br><br><strong>Polo Shirt:</strong> A soft pastel color like Mint Green, Soft Pink, or Light Blue.<br><br><strong>Bottoms:</strong> Dark jeans (fitted or slim fit) in black or navy to balance the light tones of the<br><br>shirt.<br><br><strong>Casual Henley Shirt with Trousers:</strong><br><br><strong>Top:</strong> A Henley shirt in Soft Gray or Cream, offering a relaxed yet stylish vibe.<br><br><strong>Bottoms:</strong> Slim-fit khaki or light gray trousers.<br><br><strong>Denim Jacket with T-Shirt:</strong><br><br><strong>Jacket:</strong> A light wash or beige denim jacket for a trendy, cool vibe.<br><br><strong>Shirt:</strong> White or light-colored T-shirt underneath (can go for a graphic T-shirt for a more<br><br>playful look).<br><br><strong>Bottoms:</strong> Slim-fit jeans in black or dark denim.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Gray, Navy Blue, Black, Burgundy, Deep Green, and Soft<br><br>Pastels like Light Blue or Cream.<br><br><strong>Accent Colors:</strong> White, Dark Red, and Silver.<br><br><strong>Avoid:</strong> Too many bright colors or neon hues that may overpower the look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Black Shirt and Jeans:</strong><br><br><strong>Shirt:</strong> A black slim-fit shirt with subtle details like small patterns or a sleek texture.<br><br><strong>Bottoms:</strong> Dark jeans (Slim-fit or Straight leg) in black or dark denim.<br><br><strong>Trendy Blazer with a T-shirt:</strong><br><br><strong>Blazer:</strong> Navy Blue or Charcoal Gray tailored blazer.<br><br><strong>T-shirt:</strong> A white or soft-colored fitted T-shirt underneath for a casual yet classy look.<br><br><strong>Bottoms:</strong> Slim-fit black or dark denim jeans.<br><br><strong>Casual Button-Down Shirt and Chinos:</strong><br><br><strong>Shirt:</strong> A charcoal or deep burgundy button-down shirt, which contrasts nicely with light<br><br>skin and dark hair.<br><br><strong>Bottoms:</strong> Slim-fit beige or khaki chinos for a relaxed but stylish vibe.<br><br><strong>Stylish Henley Shirt and Jacket Combo:</strong><br><br><strong>Shirt:</strong> A white or light gray Henley shirt for a laid-back yet stylish feel.<br><br><strong>Jacket:</strong> A dark, fitted denim or leather jacket to add a layer of style.<br><br><strong>Bottoms:</strong> Black or dark gray jeans for contrast.<br><br><strong>Smart Casual Suit Look:</strong><br><br><strong>Suit:</strong> A tailored suit in Navy Blue or Charcoal Gray.<br><br><strong>Shirt:</strong> A crisp white shirt with a slim collar.<br><br><strong>Tie:</strong> A deep red or navy tie to add a pop of color.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Pastel Yellow, Light Peach, or Powder Blue.<br><br><strong>Accent Colors:</strong> Gold, Deep Green, Maroon, or Navy Blue.<br><br><strong>Avoid:</strong> Overly bright colors or shades that are too pale (e.g., pure white without any<br><br>accents).</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Jacket:</strong><br><br><strong>Kurta Color:</strong> Ivory, beige, or pastel yellow to maintain a light, elegant feel.<br><br><strong>Jacket/Overcoat:</strong> Opt for a Nehru jacket in deep green or maroon for contrast and a<br><br>touch of sophistication.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color to keep the look coordinated.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Light peach or powder blue sherwani with delicate golden embroidery<br><br>for an upscale, festive vibe.<br><br><strong>Bottoms:</strong> Pair with beige churidar pants or dhoti-style bottoms for a classic look.<br><br><strong>Pathani Suit:</strong><br><br><strong>Suit Color:</strong> Choose a pathani suit in light peach or pastel yellow for a cheerful,<br><br>traditional appearance.<br><br><strong>Dupatta:</strong> Add a dupatta with golden or maroon accents to enhance the festive vibe.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> A pastel-colored kurta (light yellow, peach, or powder blue) paired with a<br><br>white or cream dhoti for a soft, traditional look.<br><br><strong>Dhoti:</strong> Look for dhotis with a gold border to add refinement and detail.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br><strong>Kurta Color:</strong> Opt for light-colored kurtas like beige or pastel blue for a modern traditional<br><br>appearance.<br><br><strong>Bandhgala Jacket Color:</strong> Maroon or deep green bandhgala jacket for a striking, classic<br><br>contrast.<br><br><strong>Dhoti:</strong> Complement with a matching dhoti for a well-rounded look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Pastel Yellow, Powder Blue, or Light Peach.<br><br><strong>Accent Colors:</strong> Maroon, Deep Green, Gold, or Navy Blue.<br><br><strong>Avoid:</strong> Overly bright or neon colors, as well as colors that are too pale, like pure white<br><br>without any accents.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Jacket:</strong><br><br><strong>Kurta Color:</strong> Ivory, beige, or pastel yellow for a subtle, traditional vibe.<br><br><strong>Jacket/Overcoat:</strong> Choose a Nehru jacket in maroon or deep green for a sophisticated<br><br>contrast.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color for a harmonious look.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Powder blue or light peach sherwani with fine golden embroidery to<br><br>add a regal touch.<br><br><strong>Bottoms:</strong> Beige churidar pants or dhoti-style bottoms for a classic look.<br><br><strong>Pathani Suit:</strong><br><br><strong>Suit Color:</strong> Choose a pathani suit in navy blue or deep green for a bold yet traditional<br><br>appearance.<br><br><strong>Dupatta:</strong> Pair with a dupatta that has gold or maroon accents for added detail.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> A pastel-colored kurta (light yellow, peach, or powder blue) paired with a<br><br>white or cream dhoti for a light and elegant appearance.<br><br><strong>Dhoti:</strong> Opt for a dhoti with gold borders to elevate the traditional look.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br><strong>Kurta Color:</strong> Light-colored kurtas like beige or pastel blue for a fresh, traditional feel.<br><br><strong>Bandhgala Jacket Color:</strong> Maroon or deep green bandhgala jacket for a striking contrast<br><br>and a modern take on tradition.<br><br><strong>Dhoti:</strong> Pair with a matching dhoti for a complete, refined look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> White, Light Gray, Navy Blue, Pastel Blue, or Beige.<br><br><strong>Accent Colors:</strong> Charcoal Gray, Black, Burgundy, or Deep Green.<br><br><strong>Avoid:</strong> Overly bright colors, neon shades, or colors that are too pale (like washed-out<br><br>pastels).</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Suit Color:</strong> Navy blue or charcoal gray suit for a professional, sharp look.<br><br><strong>Shirt Color:</strong> Crisp white or light gray shirt for a clean, fresh appearance.<br><br><strong>Tie Color:</strong> Burgundy or deep green tie to add a touch of color and elegance.<br><br><strong>Blazer with Trousers:</strong><br><br><strong>Blazer Color:</strong> Light gray or beige blazer for a lighter, modern formal look.<br><br><strong>Shirt Color:</strong> White or pastel blue shirt for a polished and professional appearance.<br><br><strong>Trousers Color:</strong> Dark gray or navy blue trousers to complement the blazer and create a<br><br>balanced look.<br><br><strong>Dress Shirt with Chinos:</strong><br><br><strong>Shirt Color:</strong> Light gray or soft pastel blue shirt for a light yet professional vibe.<br><br><strong>Chinos Color:</strong> Navy blue or beige chinos for a more relaxed but still office-appropriate<br><br>look.<br><br><strong>V-neck Sweater with Shirt and Trousers:</strong><br><br><strong>Sweater Color:</strong> Charcoal gray or deep green V-neck sweater for added sophistication.<br><br><strong>Shirt Color:</strong> White or pale blue shirt underneath the sweater for a clean, layered look.<br><br><strong>Trousers Color:</strong> Charcoal gray or navy blue trousers for a coordinated, formal outfit.<br><br><strong>Slim-Fit Blazer with Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Navy blue or light gray for a stylish, professional appearance.<br><br><strong>Shirt Color:</strong> White or pastel blue shirt for a bright, fresh look.<br><br><strong>Dress Pants:</strong> Dark gray or navy dress pants to match the blazer and maintain the formal<br><br>tone.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> White, Light Gray, Navy Blue, Black, or Charcoal Gray.<br><br><strong>Accent Colors:</strong> Burgundy, Deep Green, Steel Blue, or Dark Brown.<br><br><strong>Avoid:</strong> Overly bright or neon colors, and colors that are too pale or washed-out.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal gray or navy blue suit for a classic, professional look.<br><br><strong>Shirt Color:</strong> White or light gray shirt to keep it fresh and formal.<br><br><strong>Tie Color:</strong> Burgundy or steel blue tie to add sophistication without being too bold.<br><br><strong>Blazer with Trousers:</strong><br><br><strong>Blazer Color:</strong> Navy blue or black blazer for a refined, business-ready appearance.<br><br><strong>Shirt Color:</strong> White or light gray shirt for a clean and polished look.<br><br><strong>Trousers Color:</strong> Dark gray or charcoal trousers to complement the blazer.<br><br><strong>Dress Shirt with Chinos:</strong><br><br><strong>Shirt Color:</strong> White, light gray, or pale blue shirt for a sharp look.<br><br><strong>Chinos Color:</strong> Navy blue or beige chinos for a more relaxed office outfit that still<br><br>maintains professionalism.<br><br><strong>V-neck Sweater with Shirt and Trousers:</strong><br><br><strong>Sweater Color:</strong> Deep green or dark brown V-neck sweater to add a layer of<br><br>sophistication.<br><br><strong>Shirt Color:</strong> White or pale blue shirt underneath the sweater.<br><br><strong>Trousers Color:</strong> Dark gray or navy trousers to complete the ensemble.<br><br><strong>Slim-Fit Blazer with Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Navy blue or charcoal gray blazer for a stylish yet professional<br><br>appearance.<br><br><strong>Shirt Color:</strong> White or light blue shirt for a crisp look.<br><br><strong>Dress Pants:</strong> Dark gray or black pants for a coordinated, sleek appearance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Black, Charcoal Gray, Navy Blue, Dark Green, or Deep Burgundy.<br><br><strong>Accent Colors:</strong> Light Gray, White, Powder Blue, or Olive Green.<br><br><strong>Avoid:</strong> Overly bright or neon colors, as well as too many pastels that might look too<br><br>casual for the occasion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Dinner Jacket and Trousers:</strong><br><br><strong>Jacket Color:</strong> Charcoal gray or black dinner jacket for a sleek, formal look.<br><br><strong>Shirt Color:</strong> Crisp white or light gray shirt to balance the dark jacket.<br><br><strong>Trousers Color:</strong> Matching dark trousers to complete the tailored ensemble.<br><br><strong>Additional:</strong> A deep burgundy or navy tie can add a pop of color without overpowering<br><br>the look.<br><br><strong>Slim-Fit Blazer with Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Navy blue or dark green for a modern and stylish look.<br><br><strong>Shirt Color:</strong> Powder blue or white shirt to keep the outfit fresh and sharp.<br><br><strong>Dress Pants:</strong> Black or charcoal gray pants to complement the blazer for a cohesive<br><br>look.<br><br><strong>Casual Blazer with Chinos:</strong><br><br><strong>Blazer Color:</strong> Light charcoal or navy blue for a relaxed yet refined vibe.<br><br><strong>Shirt Color:</strong> Light gray or olive green shirt for a fashionable and laid-back appearance.<br><br><strong>Chinos Color:</strong> Beige or navy chinos for a casual yet smart outfit.<br><br><strong>V-neck Sweater with Shirt and Trousers:</strong><br><br><strong>Sweater Color:</strong> Deep burgundy or navy blue V-neck sweater for a stylish yet<br><br>comfortable vibe.<br><br><strong>Shirt Color:</strong> White or light gray shirt underneath the sweater.<br><br><strong>Trousers Color:</strong> Black or dark gray trousers to maintain a sleek, formal tone.<br><br><strong>Button-Down Shirt with Slim-Fit Jeans:</strong><br><br><strong>Shirt Color:</strong> Light gray, powder blue, or white shirt for a fresh and trendy look.<br><br><strong>Jeans Color:</strong> Black or dark blue slim-fit jeans to keep it stylish and modern.<br><br><strong>Add-ons:</strong> A leather jacket or a casual blazer for an elevated date-night appearance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Black, Charcoal Gray, Deep Burgundy, Navy Blue, or Dark Green.<br><br><strong>Accent Colors:</strong> White, Light Gray, Light Blue, or Soft Pink.<br><br><strong>Avoid:</strong> Bright neon colors, pastels that are too light for the occasion, and overly flashy<br><br>tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Black Suit:</strong><br><br><strong>Suit Color:</strong> A well-tailored black suit for a sophisticated and timeless look.<br><br><strong>Shirt Color:</strong> Crisp white shirt for a clean, sharp contrast.<br><br><strong>Tie Color:</strong> Deep burgundy or dark green tie for a touch of color and elegance.<br><br><strong>Slim-Fit Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal gray or navy blue blazer for a modern, stylish look.<br><br><strong>Shirt Color:</strong> Light gray or soft pink shirt to add subtle contrast.<br><br><strong>Trousers Color:</strong> Dark gray or black trousers for a sleek, cohesive look.<br><br><strong>Casual Button-Down Shirt with Slim-Fit Jeans:</strong><br><br><strong>Shirt Color:</strong> Light blue or white button-down shirt for a crisp and easygoing look.<br><br><strong>Jeans Color:</strong> Black or dark blue slim-fit jeans for a stylish, casual vibe.<br><br><strong>Additional:</strong> A leather jacket or casual blazer to elevate the outfit for a date night.<br><br><strong>Deep Burgundy Shirt and Black Trousers:</strong><br><br><strong>Shirt Color:</strong> A deep burgundy or wine-colored shirt to make a bold yet elegant<br><br>statement.<br><br><strong>Trousers Color:</strong> Black dress trousers for a sleek and modern look.<br><br><strong>V-neck Sweater and Chinos:</strong><br><br><strong>Sweater Color:</strong> Navy blue or charcoal gray V-neck sweater for a stylish and comfortable<br><br>look.<br><br><strong>Shirt Color:</strong> A simple white or light gray shirt worn underneath the sweater for a layered,<br><br>smart-casual vibe.<br><br><strong>Chinos Color:</strong> Dark blue or beige chinos to balance the outfit.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Pastel Yellow, Light Blue, or Soft Mint Green.<br><br><strong>Accent Colors:</strong> Gold, Deep Burgundy, Navy Blue, or Forest Green.<br><br><strong>Avoid:</strong> Neon or overly bright colors that might take away from the traditional feel.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Jacket:</strong><br><br><strong>Kurta Color:</strong> Ivory, beige, or pastel yellow kurta for a soft and traditional look.<br><br><strong>Jacket/Overcoat:</strong> A Nehru jacket in deep burgundy or navy blue to add contrast and<br><br>sophistication.<br><br><strong>Pyjama Color:</strong> Off-white or light beige to complement the kurta.<br><br><strong>Additional:</strong> A subtle gold pocket square or brooch for extra elegance.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Soft mint green or light blue sherwani with intricate gold embroidery.<br><br><strong>Churidar/Pants:</strong> Beige or off-white churidar to maintain a traditional appearance.<br><br><strong>Additional:</strong> A matching turban or stole to complete the ensemble.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Light blue or ivory Pathani suit to keep it elegant and traditional.<br><br><strong>Dupatta/Scarf:</strong> A gold or burgundy dupatta to add a touch of luxury and culture.<br><br><strong>Trousers:</strong> Beige or off-white trousers to match the color scheme.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> Pastel yellow, light mint, or ivory kurta to give a fresh and youthful<br><br>appearance.<br><br><strong>Dhoti Color:</strong> Off-white or cream with a subtle gold border for a touch of grandeur.<br><br><strong>Additional:</strong> A traditional stole or dupatta in deep burgundy or forest green.<br><br>Bandhgala Jacket with Kurta and Dhoti<br><br><strong>Kurta Color:</strong> Light beige or pastel blue kurta for a soft, traditional look.<br><br><strong>Bandhgala Jacket Color:</strong> Deep burgundy or navy blue Bandhgala jacket to elevate the<br><br>look.<br><br><strong>Dhoti Color:</strong> Light off-white or cream dhoti for a balanced and harmonious appearance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Pastel Yellow, Light Blue, or Soft Mint Green.<br><br><strong>Accent Colors:</strong> Gold, Deep Burgundy, Navy Blue, or Forest Green.<br><br><strong>Avoid:</strong> Neon or overly bright colors that might distract from the traditional vibe.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Jacket:</strong><br><br><strong>Kurta Color:</strong> Ivory, beige, or pastel yellow kurta for a soft, elegant traditional look.<br><br><strong>Jacket/Overcoat:</strong> A deep burgundy or navy blue Nehru jacket to add a sophisticated<br><br>contrast.<br><br><strong>Pyjama Color:</strong> Off-white or light beige pyjama to complement the kurta color.<br><br><strong>Additional:</strong> Consider a traditional brooch or gold pocket square to add a refined touch.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Light blue or soft mint green sherwani with subtle gold or silver<br><br>embroidery for an elevated look.<br><br><strong>Churidar/Pants:</strong> Beige or off-white churidar to keep it timeless and in harmony with the<br><br>sherwani.<br><br><strong>Additional:</strong> A traditional turban in matching or contrasting colors like deep burgundy or<br><br>navy.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> A deep, rich color like navy blue or light blue for a regal touch.<br><br><strong>Dupatta/Scarf:</strong> A golden or maroon dupatta to add opulence.<br><br><strong>Trousers:</strong> Off-white or beige trousers for a clean, traditional look.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> Soft pastel yellow, light mint, or ivory kurta to achieve a fresh and clean<br><br>look.<br><br><strong>Dhoti Color:</strong> Off-white or cream dhoti with a subtle gold or silver border for a luxurious<br><br>feel.<br><br><strong>Additional:</strong> A traditional dupatta or stole in deep burgundy or forest green to complete<br><br>the outfit.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br><strong>Kurta Color:</strong> Light beige or pastel blue kurta to stay soft and traditional.<br><br><strong>Bandhgala Jacket Color:</strong> Deep burgundy or forest green Bandhgala jacket to elevate<br><br>the traditional attire.<br><br><strong>Dhoti Color:</strong> Light off-white or cream dhoti for a polished, cohesive look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Light Grey, White, Soft Blue, Beige, or Pastel Pink.<br><br><strong>Accent Colors:</strong> Navy Blue, Charcoal Grey, Black, or Deep Burgundy.<br><br><strong>Avoid:</strong> Bright or neon colors, as well as overly dark tones that may seem too heavy for a<br><br>formal office look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Suit:</strong><br><br><strong>Suit Color:</strong> Light grey, beige, or soft blue for a clean and professional look.<br><br><strong>Shirt Color:</strong> White or soft pastel pink shirt to complement the suit color.<br><br><strong>Tie:</strong> Navy blue or deep burgundy tie to add some sophistication.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Navy blue or charcoal grey for a formal yet approachable look.<br><br><strong>Shirt Color:</strong> White or light blue shirt to keep the look fresh and professional.<br><br><strong>Trousers:</strong> Matching trousers in light grey or beige for a coordinated outfit.<br><br><strong>Tie:</strong> A tie in deep burgundy or charcoal grey to add a polished finish.<br><br><strong>Formal Shirt and Chinos:</strong><br><br><strong>Shirt Color:</strong> Soft blue, light grey, or white shirt for an easy yet formal style.<br><br><strong>Chino Color:</strong> Beige or light grey chinos for a smart, modern office look.<br><br><strong>Blazer:</strong> Optional, but a light navy or charcoal grey blazer can add structure.<br><br><strong>Tie:</strong> A solid navy or charcoal tie to keep the focus on the shirt and chinos.<br><br><strong>Three-Piece Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal grey or navy blue suit for a sharp, professional look.<br><br><strong>Shirt Color:</strong> Light blue or white shirt for contrast and brightness.<br><br><strong>Vest Color:</strong> Matching or slightly contrasting grey or beige vest.<br><br><strong>Tie:</strong> Burgundy or deep blue tie for a more elevated appearance.<br><br><strong>Polo Shirt with Blazer:</strong><br><br><strong>Polo Shirt Color:</strong> Light grey, soft blue, or white for a more relaxed but still professional<br><br>look.<br><br><strong>Blazer Color:</strong> Charcoal grey or navy blue to maintain formality while giving a modern<br><br>feel.<br><br><strong>Trousers:</strong> Beige or dark grey trousers for a clean, coordinated outfit.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> White, Light Grey, Soft Blue, Pastel Pink, or Beige.<br><br><strong>Accent Colors:</strong> Charcoal Grey, Navy Blue, Black, or Burgundy.<br><br><strong>Avoid:</strong> Bright neon colors, overly dark tones (especially for shirts), or flashy patterns.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Suit:</strong><br><br><strong>Suit Color:</strong> Navy blue, charcoal grey, or black for a sharp and professional look.<br><br><strong>Shirt Color:</strong> White or light blue shirt to maintain a clean, sophisticated appearance.<br><br><strong>Tie:</strong> Burgundy, deep navy, or charcoal grey tie to add contrast and complete the formal<br><br>look.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Navy blue or charcoal grey for a versatile, formal vibe.<br><br><strong>Shirt Color:</strong> White or light grey shirt to complement the blazer.<br><br><strong>Trousers:</strong> Beige or light grey trousers for a modern, fresh touch.<br><br><strong>Tie:</strong> A tie in dark blue, charcoal, or subtle patterns for a professional appearance.<br><br><strong>Formal Shirt and Chinos:</strong><br><br><strong>Shirt Color:</strong> Soft blue, white, or pastel pink shirt for a balanced formal look.<br><br><strong>Chino Color:</strong> Beige or light grey chinos for a smart yet casual feel.<br><br><strong>Blazer:</strong> Optional, but a dark navy or grey blazer can elevate the look.<br><br><strong>Tie:</strong> A solid or patterned tie in darker hues like navy or burgundy for an added layer of<br><br>sophistication.<br><br><strong>Three-Piece Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal grey or navy blue suit for a sharp, clean-cut appearance.<br><br><strong>Shirt Color:</strong> White or soft light blue shirt for contrast and freshness.<br><br><strong>Vest Color:</strong> Matching or contrasting grey/blue vest for a more polished look.<br><br><strong>Tie:</strong> Dark blue, burgundy, or a patterned tie for elegance.<br><br><strong>Polo Shirt with Blazer:</strong><br><br><strong>Polo Shirt Color:</strong> White, light grey, or soft blue for a relaxed but professional look.<br><br><strong>Blazer Color:</strong> Charcoal grey or navy blue to maintain a formal edge.<br><br><strong>Trousers:</strong> Light grey or beige trousers to balance the more casual polo shirt.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Black, Charcoal Grey, Navy Blue, Deep Burgundy, or Soft White.<br><br><strong>Accent Colors:</strong> Emerald Green, Dark Red, Platinum, or Silver.<br><br><strong>Avoid:</strong> Neon colors, overly bright pastels, or overly casual tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Stylish Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Black, navy blue, or charcoal grey for a sleek, modern look.<br><br><strong>Shirt Color:</strong> A deep burgundy or soft white shirt to contrast the dark blazer.<br><br><strong>Trousers:</strong> Matching or contrast trousers in black or navy to complement the blazer.<br><br><strong>Casual Suit:</strong><br><br><strong>Suit Color:</strong> Navy blue or charcoal grey for a sharp yet relaxed appearance.<br><br><strong>Shirt Color:</strong> White or soft grey shirt for a clean and crisp feel.<br><br><strong>Tie:</strong> Deep burgundy or emerald green tie to add a pop of color.<br><br><strong>Trendy Jacket with Slim Fit Pants:</strong><br><br><strong>Jacket Color:</strong> A deep emerald green or dark red jacket for a bold but sophisticated look.<br><br><strong>Shirt Color:</strong> Black or grey shirt to complement the jacket's bold tone.<br><br><strong>Pants:</strong> Slim-fit trousers in black or charcoal to match the jacket's intensity.<br><br><strong>Button-Up Shirt and Chinos:</strong><br><br><strong>Shirt Color:</strong> A soft white or light grey button-up shirt for an effortlessly chic look.<br><br><strong>Chino Color:</strong> Black or navy chinos to match the shirt and create contrast.<br><br><strong>Blazer:</strong> Optional, but a light grey or navy blazer can add a layer of sophistication.<br><br><strong>Turtleneck Sweater and Trousers:</strong><br><br><strong>Sweater Color:</strong> Black or deep burgundy turtleneck sweater for a stylish and modern<br><br>date night look.<br><br><strong>Trousers:</strong> Charcoal grey or navy trousers to complement the sweater.<br><br><strong>Jacket:</strong> Optional, but a slim-fit black leather jacket can elevate the outfit for a more<br><br>daring look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Black, Charcoal Grey, Deep Navy, Burgundy, or Soft White.<br><br><strong>Accent Colors:</strong> Emerald Green, Silver, Dark Red, or Platinum.<br><br><strong>Avoid:</strong> Neon colors, overly bright pastels, or dull tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Black Suit:</strong><br><br><strong>Suit Color:</strong> Black for a timeless, bold look.<br><br><strong>Shirt Color:</strong> Crisp white or light grey shirt to contrast the dark suit.<br><br><strong>Tie:</strong> Deep burgundy, navy blue, or silver tie for a refined and sharp contrast.<br><br><strong>Modern Slim-Fit Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal grey or deep navy blazer for a sleek, contemporary vibe.<br><br><strong>Shirt Color:</strong> Light grey or soft white shirt for a fresh, clean look.<br><br><strong>Trousers:</strong> Slim-fit trousers in black or grey to complement the blazer.<br><br><strong>Bold Statement Jacket with Chinos:</strong><br><br><strong>Jacket Color:</strong> Deep emerald green or dark red for a striking and sophisticated look.<br><br><strong>Shirt Color:</strong> Black or white shirt to balance out the bold jacket.<br><br><strong>Chinos:</strong> Black or charcoal grey chinos to keep the bottom half of the outfit sleek.<br><br><strong>Casual Dress Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Black or soft white button-up shirt for an easygoing but polished look.<br><br><strong>Trousers:</strong> Navy blue or charcoal grey trousers for a sleek contrast.<br><br><strong>Blazer:</strong> Optional, but a black or deep navy blazer can elevate the outfit.<br><br><strong>Turtleneck Sweater with Tailored Pants:</strong><br><br><strong>Sweater Color:</strong> Black or dark red turtleneck sweater for a warm, sophisticated look.<br><br><strong>Pants:</strong> Tailored black or navy blue pants for a refined appearance.<br><br><strong>Jacket:</strong> Optional, but a sleek leather or wool jacket adds an edgy touch.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Light Brown, Soft Yellow, or Pastel Green.<br><br><strong>Accent Colors:</strong> Gold, Deep Blue, Maroon, or Rich Burgundy.<br><br><strong>Avoid:</strong> Overly bright neon shades or colors that are too pale, such as pure white.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Jacket:</strong><br><br><strong>Kurta Color:</strong> Ivory, beige, or light brown for a soft, elegant look.<br><br><strong>Jacket/Overcoat:</strong> Maroon or deep blue Nehru jacket to add contrast and a touch of<br><br>regality.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color to maintain balance.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Soft yellow or pastel green with subtle gold or silver embroidery for a<br><br>festive appearance.<br><br><strong>Churidar/Pants:</strong> Beige or ivory churidar pants or traditional dhoti-style bottoms.<br><br><strong>Additional Details:</strong> A matching scarf or dupatta with light gold or maroon accents.<br><br><strong>Pathani Suit:</strong><br><br><strong>Suit Color:</strong> Rich burgundy or pastel green for an elegant yet striking look.<br><br><strong>Dupatta:</strong> Golden or maroon-accented dupatta to enhance the festive vibe.<br><br><strong>Bottoms:</strong> Matching or complementary churidar or relaxed pants.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> Light yellow, ivory, or peach to maintain a bright, welcoming aura.<br><br><strong>Dhoti:</strong> White or cream dhoti with a subtle gold border.<br><br><strong>Stole/Scarf:</strong> Traditional stole or dupatta to add a touch of refinement.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br><strong>Kurta Color:</strong> Soft beige or pastel blue kurta to complement the Bandhgala jacket.<br><br><strong>Bandhgala Jacket:</strong> Rich maroon or deep green jacket for a regal touch.<br><br><strong>Dhoti:</strong> White or beige dhoti to match the kurta.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Light Brown, Olive Green, or Mustard Yellow.<br><br><strong>Accent Colors:</strong> Gold, Burgundy, Deep Green, or Navy Blue.<br><br><strong>Avoid:</strong> Neon colors or overly bright shades.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Jacket:</strong><br><br><strong>Kurta Color:</strong> Ivory, beige, or mustard yellow for a soft yet refined appearance.<br><br><strong>Jacket/Overcoat:</strong> A deep green or maroon Nehru jacket to add vibrancy and contrast.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color to keep the look coordinated.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Olive green or mustard yellow with subtle gold embroidery for a festive<br><br>and traditional look.<br><br><strong>Churidar/Pants:</strong> Beige or cream churidar pants to complement the sherwani.<br><br><strong>Accessories:</strong> A matching dupatta or scarf with gold accents for an elegant finish.<br><br><strong>Pathani Suit:</strong><br><br><strong>Suit Color:</strong> Burgundy or deep green Pathani suit for a striking and sophisticated<br><br>appearance.<br><br><strong>Dupatta:</strong> A gold or maroon-accented dupatta for added flair.<br><br><strong>Bottoms:</strong> Churidar or relaxed pants in a complementary color.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> Ivory, beige, or olive green to create a balanced and classic look.<br><br><strong>Dhoti:</strong> White or cream dhoti with subtle gold accents or borders.<br><br><strong>Accessories:</strong> Traditional stole or dupatta to elevate the outfit.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br><strong>Kurta Color:</strong> Light beige or pastel blue kurta for a fresh and elegant feel.<br><br><strong>Bandhgala Jacket:</strong> Deep green or rich burgundy jacket for a regal and sharp contrast.<br><br><strong>Dhoti:</strong> White or beige dhoti to match the kurta and maintain a cohesive traditional look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Gray, Navy Blue, Beige, Light Blue, White.<br><br><strong>Accent Colors:</strong> Burgundy, Olive Green, Deep Blue.<br><br><strong>Avoid:</strong> Bright neon colors, overly vibrant tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal gray or navy blue for a professional and sleek look.<br><br><strong>Shirt Color:</strong> Crisp white or light beige for a clean and polished appearance.<br><br><strong>Tie Color:</strong> Burgundy, deep blue, or a subtle pattern to complement the suit.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Olive green or dark brown for a sharp yet unique formal look.<br><br><strong>Shirt Color:</strong> White or light blue for contrast and freshness.<br><br><strong>Trousers Color:</strong> Navy blue or beige trousers to pair with the blazer.<br><br><strong>Tie Color:</strong> A subtle solid or patterned tie in burgundy or dark blue.<br><br><strong>Formal Shirt and Chinos:</strong><br><br><strong>Shirt Color:</strong> Light gray, white, or soft blue for a professional appearance.<br><br><strong>Chinos Color:</strong> Beige, navy, or olive green chinos for a modern and business-appropriate<br><br>look.<br><br><strong>Jacket (Optional):</strong> A simple blazer in navy blue or charcoal gray.<br><br><strong>Dress Shirt and Tailored Trousers:</strong><br><br><strong>Shirt Color:</strong> Crisp white or light beige shirt for a classic formal look.<br><br><strong>Trousers Color:</strong> Charcoal gray or deep navy trousers to match the shirt.<br><br><strong>Blazer (Optional):</strong> Dark gray or black blazer for a fully formal appearance.<br><br><strong>Smart Casual:</strong><br><br><strong>Shirt Color:</strong> Light blue or white shirt for a smart yet comfortable style.<br><br><strong>Pants Color:</strong> Slim-fit chinos in navy blue, charcoal gray, or olive green.<br><br><strong>Jacket:</strong> A navy or charcoal gray blazer for added formality.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Gray, Navy Blue, Light Gray, White, Cream.<br><br><strong>Accent Colors:</strong> Burgundy, Olive Green, Deep Blue, Maroon.<br><br><strong>Avoid:</strong> Overly bright or neon colors, overly dark shades like black.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal gray or navy blue for a professional and authoritative appearance.<br><br><strong>Shirt Color:</strong> Crisp white or light gray shirt to provide contrast with the darker suit.<br><br><strong>Tie Color:</strong> Burgundy, maroon, or a subtle dark patterned tie to complement the suit.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Olive green, dark gray, or navy for a sharp and distinguished look.<br><br><strong>Shirt Color:</strong> White or light blue shirt to brighten up the outfit.<br><br><strong>Trousers Color:</strong> Charcoal gray or beige to match with the blazer.<br><br><strong>Tie Color:</strong> A solid tie in burgundy or dark blue to maintain a professional tone.<br><br><strong>Formal Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light blue, white, or cream shirt for a fresh and clean look.<br><br><strong>Trousers Color:</strong> Navy blue or medium gray for an elegant, neutral combination.<br><br><strong>Jacket (Optional):</strong> Charcoal gray or navy blue blazer for a smart, professional outfit.<br><br><strong>Dress Shirt and Tailored Trousers:</strong><br><br><strong>Shirt Color:</strong> White or light gray shirt for a timeless formal look.<br><br><strong>Trousers Color:</strong> Charcoal gray, navy, or beige tailored trousers for a cohesive look.<br><br><strong>Blazer (Optional):</strong> A classic black or gray blazer to complete the formal ensemble.<br><br><strong>Smart Casual:</strong><br><br><strong>Shirt Color:</strong> Light blue or white shirt to keep it sharp yet relaxed.<br><br><strong>Pants Color:</strong> Slim-fit chinos in navy blue, olive green, or charcoal gray.<br><br><strong>Jacket:</strong> A well-fitted blazer in dark gray, navy, or olive green for a smart-casual but still<br><br>office-appropriate look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Black, Charcoal Gray, Burgundy, Navy Blue, Deep Green.<br><br><strong>Accent Colors:</strong> White, Silver, Dark Red, Midnight Blue.<br><br><strong>Avoid:</strong> Overly bright neon or fluorescent colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Black Suit:</strong><br><br><strong>Suit Color:</strong> A well-tailored black suit for a sleek and sophisticated look.<br><br><strong>Shirt Color:</strong> White or light gray to create contrast against the black suit.<br><br><strong>Tie Color:</strong> Burgundy or deep red tie for a dash of color and elegance.<br><br><strong>Casual Blazer and Dark Jeans:</strong><br><br><strong>Blazer Color:</strong> Charcoal gray or navy blue blazer for a modern, stylish vibe.<br><br><strong>Shirt Color:</strong> A light gray or white shirt to keep the look fresh and sharp.<br><br><strong>Pants Color:</strong> Black or dark wash jeans for a casual but put-together appearance.<br><br><strong>Dress Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> A dark red or deep burgundy shirt for a rich, bold look.<br><br><strong>Trousers Color:</strong> Black, navy blue, or charcoal gray trousers for a balanced ensemble.<br><br><strong>Jacket:</strong> A light gray or silver jacket to add a layer of sophistication.<br><br><strong>Casual Shirt with Slim-Fit Trousers:</strong><br><br><strong>Shirt Color:</strong> Navy blue or deep green shirt for a modern touch.<br><br><strong>Pants Color:</strong> Charcoal gray or black slim-fit trousers to keep the look sleek.<br><br><strong>Turtleneck and Blazer:</strong><br><br><strong>Turtleneck Color:</strong> Black or charcoal gray turtleneck for a sleek, fashion-forward option.<br><br><strong>Blazer Color:</strong> Navy blue or deep green blazer for contrast.<br><br><strong>Pants Color:</strong> Slim-fit black or gray trousers to match with the blazer.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Gray, Deep Green, Burgundy, Navy Blue, Black.<br><br><strong>Accent Colors:</strong> White, Silver, Light Gray, Dark Red.<br><br><strong>Avoid:</strong> Overly bright neon colors or overly pale shades that could wash out the<br><br>complexion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Black Suit:</strong><br><br><strong>Suit Color:</strong> A well-tailored black suit for a sleek and sharp look.<br><br><strong>Shirt Color:</strong> White or light gray to brighten the look and create contrast.<br><br><strong>Tie Color:</strong> Burgundy or deep red tie for a rich, bold contrast.<br><br><strong>Casual Blazer with Slim-Fit Jeans:</strong><br><br><strong>Blazer Color:</strong> Charcoal gray or navy blue blazer for a modern, stylish vibe.<br><br><strong>Shirt Color:</strong> White or light gray shirt to complement the blazer.<br><br><strong>Jeans Color:</strong> Black or dark indigo slim-fit jeans for a casual yet polished appearance.<br><br><strong>Stylish Turtleneck and Blazer:</strong><br><br><strong>Turtleneck Color:</strong> Charcoal gray or deep green for a modern, sophisticated option.<br><br><strong>Blazer Color:</strong> Navy blue or black blazer to enhance the look.<br><br><strong>Pants Color:</strong> Slim-fit black or gray trousers to match with the blazer.<br><br><strong>Dark Red Shirt with Chinos:</strong><br><br><strong>Shirt Color:</strong> Deep red or burgundy shirt for a striking, bold look.<br><br><strong>Chinos Color:</strong> Black or dark gray chinos to balance the intensity of the shirt.<br><br><strong>Leather Jacket and Black Jeans:</strong><br><br><strong>Jacket Color:</strong> Black leather jacket for a cool and edgy vibe.<br><br><strong>Shirt Color:</strong> White or gray t-shirt under the jacket for a laid-back look.<br><br><strong>Jeans Color:</strong> Slim-fit black jeans for a sleek and stylish outfit.<br><br><strong>Footwear:</strong> Black boots or sneakers for a trendy finish.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Soft Peach, Pastel Yellow, Light Blue.<br><br><strong>Accent Colors:</strong> Gold, Maroon, Forest Green, Deep Blue.<br><br><strong>Avoid:</strong> Neon or very bright colors, as they may clash with the richness of the skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Ivory, beige, or light peach for a soft, elegant look.<br><br><strong>Nehru Jacket Color:</strong> Maroon or forest green to add depth and contrast.<br><br><strong>Pyjama Color:</strong> Off-white or ivory, matching the kurta for a seamless appearance.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Light blue or pastel yellow with subtle golden embroidery for a festive<br><br>touch.<br><br><strong>Churidar Pants:</strong> Beige or off-white churidar for a traditional yet refined look.<br><br><strong>Dupatta:</strong> Optional dupatta in maroon or gold for a more decorative look.<br><br><strong>Pathani Suit:</strong><br><br><strong>Suit Color:</strong> Beige or ivory for a classic and timeless look.<br><br><strong>Dupatta:</strong> Gold or maroon dupatta for a festive and traditional touch.<br><br><strong>Bottoms:</strong> Cream-colored churidar or dhoti pants to complement the suit.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> Soft peach or pastel yellow for a fresh, celebratory vibe.<br><br><strong>Dhoti Color:</strong> Off-white or light beige, with a gold border to add elegance.<br><br><strong>Dupatta:</strong> A traditional dupatta in maroon or gold to enhance the outfit.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br><strong>Kurta Color:</strong> Soft peach or ivory kurta.<br><br><strong>Jacket Color:</strong> A maroon or deep green bandhgala jacket to elevate the outfit.<br><br><strong>Dhoti Color:</strong> Cream or ivory dhoti to balance the look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ivory, Beige, Maroon, Deep Green, Soft Peach.<br><br><strong>Accent Colors:</strong> Gold, Navy Blue, Mustard Yellow, Burgundy.<br><br><strong>Avoid:</strong> Neon colors or overly bright hues that might contrast too sharply with your skin<br><br>tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Ivory or beige for a soft, classic look.<br><br><strong>Nehru Jacket Color:</strong> Deep green or maroon for contrast and to bring out the richness of<br><br>your complexion.<br><br><strong>Pyjama Color:</strong> Off-white or ivory, matching the kurta for a clean and timeless look.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Soft peach or light maroon, with gold or silver thread work for a refined<br><br>traditional look.<br><br><strong>Churidar Pants:</strong> Beige or ivory churidar for a subtle and elegant style.<br><br><strong>Dupatta:</strong> Optional dupatta in gold or burgundy to add an extra layer of sophistication.<br><br><strong>Pathani Suit:</strong><br><br><strong>Suit Color:</strong> Mustard yellow or beige, creating a bright yet traditional vibe.<br><br><strong>Dupatta:</strong> Gold or maroon dupatta to complement the suit’s colors.<br><br><strong>Bottoms:</strong> Cream-colored churidar or dhoti pants to complete the look.<br><br><strong>Dhoti-Kurta:</strong><br><br><strong>Kurta Color:</strong> Soft peach or ivory for a fresh, light look.<br><br><strong>Dhoti Color:</strong> Cream or beige with a gold border to enhance the traditional appeal.<br><br><strong>Dupatta:</strong> A maroon or gold dupatta for added grace.<br><br><strong>Bandhgala Jacket with Kurta and Dhoti:</strong><br><br><strong>Kurta Color:</strong> Soft peach or beige kurta to keep it fresh and light.<br><br><strong>Bandhgala Jacket Color:</strong> Maroon or navy blue for a stylish and traditional touch.<br><br><strong>Dhoti Color:</strong> Cream or ivory to balance the ensemble.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Light Grey, Charcoal, Navy Blue, White, or Light Blue.<br><br><strong>Accent Colors:</strong> Dark Brown, Burgundy, Forest Green, or Soft Black.<br><br><strong>Avoid:</strong> Overly bright or neon colors, which may look too casual in a formal setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Business Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal grey or navy blue. These colors complement your brown skin tone<br><br>while maintaining a professional look.<br><br><strong>Shirt Color:</strong> Crisp white or light blue shirt to keep things sharp and neat.<br><br><strong>Tie Color:</strong> Dark brown or burgundy tie for a pop of color without overwhelming the outfit.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Dark grey or navy blue. It will blend well with your skin and give a refined<br><br>appearance.<br><br><strong>Trousers Color:</strong> Light grey or black trousers for a sleek, well-put-together look.<br><br><strong>Shirt Color:</strong> Light blue or white shirt for contrast and clarity in a professional<br><br>environment.<br><br><strong>Casual Business Attire:</strong><br><br><strong>Blazer or Jacket:</strong> Navy or dark green blazer for a more relaxed, yet still professional,<br><br>feel.<br><br><strong>Chinos or Trousers:</strong> Light grey chinos to add a softer look compared to formal trousers.<br><br><strong>Shirt Color:</strong> Soft pastel shirt (like light blue or beige) for a touch of personality without<br><br>being too bold.<br><br><strong>Formal Shirt and Pants:</strong><br><br><strong>Shirt Color:</strong> Light grey, white, or light blue.<br><br><strong>Pants Color:</strong> Navy blue or dark grey to balance the lighter shirt.<br><br><strong>Optional:</strong> If it's a more casual office, you can add a light grey or soft brown belt to keep<br><br>it polished.<br><br><strong>Turtleneck with Blazer (for cooler weather):</strong><br><br><strong>Turtleneck Color:</strong> Dark grey or navy blue.<br><br><strong>Blazer Color:</strong> Charcoal or deep green to create a sleek contrast.<br><br><strong>Pants Color:</strong> Dark grey or navy trousers to match the outfit seamlessly.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Navy Blue, Deep Burgundy, Light Blue, or Olive Green.<br><br><strong>Accent Colors:</strong> White, Light Grey, Black, or Silver.<br><br><strong>Avoid:</strong> Overly bright or flashy colors, like neon hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Trouser Set:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey or Navy Blue for a professional, sleek look.<br><br><strong>Trouser Color:</strong> Pair with matching trousers in Charcoal Grey or Navy Blue.<br><br><strong>Shirt Color:</strong> White or Light Blue for contrast and freshness.<br><br><strong>Additional Suggestion:</strong> A subtle tie in Deep Burgundy or Light Grey.<br><br><strong>Suit with Dress Shirt:</strong><br><br><strong>Suit Color:</strong> Dark Burgundy or Olive Green for a sophisticated appearance.<br><br><strong>Shirt Color:</strong> Crisp White or Light Grey.<br><br>Add a pocket square in a neutral tone (like black or white) to enhance the formal<br><br>look.<br><br><strong>V-neck Sweater with Dress Pants:</strong><br><br><strong>Sweater Color:</strong> Navy Blue or Deep Burgundy.<br><br><strong>Pants Color:</strong> Light Grey or Black dress pants.<br><br><strong>Shirt Color:</strong> White or Light Blue shirt underneath for a polished look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>:<br>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Black, Deep Navy Blue, Charcoal Grey, Burgundy, or Dark Green.<br><br><strong>Accent Colors:</strong> White, Silver, Light Grey, or Pastel Shades.<br><br><strong>Avoid:</strong> Overly bright or neon colors that might seem too casual.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p>Tailored Blazer with Dress Pants<br><br><strong>Blazer Color:</strong> Charcoal Grey or Deep Navy Blue for a sharp and refined look.<br><br><strong>Pants Color:</strong> Black or matching Charcoal Grey trousers.<br><br><strong>Shirt Color:</strong> White or Light Grey for contrast.<br><br><strong>Additional Suggestion:</strong> A sleek tie in Burgundy or Silver to add flair.<br><br><strong>Casual Shirt with Dark Jeans:</strong><br><br><strong>Shirt Color:</strong> Light Blue or Burgundy for a pop of color while remaining<br><br>sophisticated.<br><br><strong>Jeans Color:</strong> Dark Blue or Black to keep the look polished yet comfortable.<br><br>Add a leather jacket in black or dark brown for an edgier touch.<br><br><strong>Slim-fit Suit with T-shirt:</strong><br><br><strong>Suit Color:</strong> Navy Blue or Black for a modern, sleek appearance.<br><br><strong>T-shirt Color:</strong> A simple white or black tee to keep it minimal and stylish.<br><br><strong>Optional:</strong> Silver or subtle chain accessories for an extra touch of class.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Charcoal Grey, Black, Olive Green, or Navy Blue.<br><br><strong>Accent Colors:</strong> White, Silver, Light Grey, or Pastel Shades.<br><br><strong>Avoid:</strong> Neon or overly bright colors that might detract from a more refined look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Slim-fit Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Grey or Deep Burgundy for a sophisticated yet bold look.<br><br><strong>Shirt Color:</strong> Crisp White or Light Grey to complement the darker suit.<br><br><strong>Optional:</strong> A sleek tie or bow tie in matching Burgundy or Silver.<br><br><strong>Casual Blazer with Trousers:</strong><br><br><strong>Blazer Color:</strong> Navy Blue or Dark Green for a more casual, trendy vibe.<br><br><strong>Trousers Color:</strong> Black or Charcoal Grey for a balanced look.<br><br><strong>Shirt Color:</strong> White or Light Blue for contrast.<br><br><strong>Optional:</strong> A light grey or silver pocket square to elevate the look.<br><br><strong>Leather Jacket with Dark Jeans:</strong><br><br><strong>Jacket Color:</strong> Black or Dark Brown for a sleek, edgy appearance.<br><br><strong>Jeans Color:</strong> Dark Blue or Black for a balanced, stylish outfit.<br><br><strong>Shirt Color:</strong> A simple White or Black tee to keep the look minimal and chic.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Rich Emerald Green, Mustard Yellow, Royal Blue, or<br><br>Dark Brown.<br><br><strong>Accent Colors:</strong> Gold, Silver, Off-white, or Cream.<br><br><strong>Avoid:</strong> Very pale shades or colors that are too similar to the skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Deep Burgundy or Rich Emerald Green with subtle golden<br><br>embroidery.<br><br><strong>Bottoms:</strong> Pair with beige or off-white churidar or dhoti-style pants.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Mustard Yellow or Royal Blue to make a bold statement.<br><br><strong>Jacket:</strong> A Nehru jacket in Gold or Dark Brown to contrast the kurta.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Deep Burgundy or Dark Brown.<br><br><strong>Dupatta:</strong> Add a golden or off-white dupatta for a traditional touch.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream.<br><br><strong>Bandhgala Color:</strong> Dark Brown or Deep Burgundy for a classic yet trendy look.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            
            
            
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Gray, Navy Blue, Deep Burgundy, Slate Gray, or Black.<br><br><strong>Accent Colors:</strong> White, Light Blue, Cream, or Off-white.<br><br><strong>Avoid:</strong> Bright or neon colors that may distract from a formal look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Gray or Navy Blue for a classic and professional<br><br>appearance.<br><br><strong>Shirt Color:</strong> Light Blue or Off-white to contrast subtly with the suit.<br><br><strong>Tie Color:</strong> Deep Burgundy, Slate Gray, or Black for a refined look.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Deep Burgundy or Slate Gray for a more distinguished, formal<br><br>appearance.<br><br><strong>Trousers Color:</strong> Matching the blazer or opting for Charcoal Gray or Black for<br><br>contrast.<br><br><strong>Shirt Color:</strong> Light Blue or White for a polished look.<br><br><strong>Chinos and Shirt:</strong><br><br><strong>Chinos Color:</strong> Dark Khaki or Black for a semi-formal setting.<br><br><strong>Shirt Color:</strong> White, Light Blue, or a soft pastel for a fresher vibe.<br><br><strong>Jacket/Blazer:</strong> Add a Light Gray or Navy Blazer to elevate the look.<br><br><strong>Turtleneck and Trousers:</strong><br><br><strong>Turtleneck Color:</strong> Charcoal Gray or Navy Blue for a sophisticated yet<br><br>comfortable formal look.<br><br><strong>Trousers Color:</strong> Black or Slate Gray to complement the turtleneck.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Gray, Navy Blue, Black, Slate Gray, or Deep Burgundy.<br><br><strong>Accent Colors:</strong> White, Light Blue, Cream, or Off-white.<br><br><strong>Avoid:</strong> Bright or neon colors that may detract from the formal look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Gray or Navy Blue for a classic and professional<br><br>appearance.<br><br><strong>Shirt Color:</strong> White or Light Blue for a clean, polished contrast with the suit.<br><br><strong>Tie Color:</strong> Deep Burgundy, Black, or Slate Gray to add sophistication.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Deep Burgundy or Slate Gray for a bold yet formal look.<br><br><strong>Trousers Color:</strong> Matching the blazer or opting for Charcoal Gray for contrast.<br><br><strong>Shirt Color:</strong> White or Light Blue to complement the outfit.<br><br><strong>Chinos and Shirt:</strong><br><br><strong>Chinos Color:</strong> Black or Dark Khaki for a smart-casual touch.<br><br><strong>Shirt Color:</strong> White, Light Blue, or soft pastel shades for a subtle and clean<br><br>appearance.<br><br><strong>Blazer:</strong> Add a Navy Blazer to complete the semi-formal ensemble.<br><br><strong>Turtleneck and Trousers:</strong><br><br><strong>Turtleneck Color:</strong> Charcoal Gray or Navy Blue for a stylish and comfortable<br><br>office look.<br><br><strong>Trousers Color:</strong> Black or Slate Gray to coordinate well with the turtleneck.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Charcoal Gray, Black, Midnight Blue, or Forest Green.<br><br><strong>Accent Colors:</strong> Silver, White, Off-white, or Light Gray.<br><br><strong>Avoid:</strong> Bright neon colors or overly vibrant shades that might overshadow the<br><br>sophistication of the occasion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Suit Color:</strong> Deep Burgundy or Midnight Blue for a striking yet elegant look.<br><br><strong>Shirt Color:</strong> White or Light Gray to maintain contrast and keep it formal.<br><br><strong>Tie or Pocket Square:</strong> Silver or Dark Gray to complement the overall color<br><br>scheme.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal Gray or Forest Green for a fashionable edge.<br><br><strong>Trousers Color:</strong> Black or matching the blazer for a coordinated appearance.<br><br><strong>Shirt Color:</strong> White or Off-white to keep the ensemble fresh and clean.<br><br><strong>Casual Shirt and Slim-Fit Jeans:</strong><br><br><strong>Shirt Color:</strong> Black, Midnight Blue, or Deep Burgundy for a stylish but comfortable<br><br>party look.<br><br><strong>Jeans Color:</strong> Dark Blue or Charcoal Gray for a sleek and modern vibe.<br><br><strong>Blazer:</strong> A slim-fit black blazer can add a sophisticated touch to the casual look.<br><br><strong>Henley Shirt and Chinos:</strong><br><br><strong>Henley Shirt Color:</strong> Black or Charcoal Gray for a simple, refined style.<br><br><strong>Chinos Color:</strong> Deep Burgundy, Navy, or Forest Green to add color without going<br><br>overboard.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Charcoal Gray, Black, Midnight Blue, or Forest Green.<br><br><strong>Accent Colors:</strong> Silver, White, Off-white, or Light Gray.<br><br><strong>Avoid:</strong> Bright neon colors or overly vibrant shades that might overshadow the<br><br>sophistication of the occasion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Suit Color:</strong> Deep Burgundy or Midnight Blue for a striking yet elegant look.<br><br><strong>Shirt Color:</strong> White or Light Gray to maintain contrast and keep it formal.<br><br><strong>Tie or Pocket Square:</strong> Silver or Dark Gray to complement the overall color<br><br>scheme.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal Gray or Forest Green for a fashionable edge.<br><br><strong>Trousers Color:</strong> Black or matching the blazer for a coordinated appearance.<br><br><strong>Shirt Color:</strong> White or Off-white to keep the ensemble fresh and clean.<br><br><strong>Casual Shirt and Slim-Fit Jeans:</strong><br><br><strong>Shirt Color:</strong> Black, Midnight Blue, or Deep Burgundy for a stylish but comfortable<br><br>party look.<br><br><strong>Jeans Color:</strong> Dark Blue or Charcoal Gray for a sleek and modern vibe.<br><br><strong>Blazer:</strong> A slim-fit black blazer can add a sophisticated touch to the casual look.<br><br><strong>Henley Shirt and Chinos:</strong><br><br><strong>Henley Shirt Color:</strong> Black or Charcoal Gray for a simple, refined style.<br><br><strong>Chinos Color:</strong> Deep Burgundy, Navy, or Forest Green to add color without going<br><br>overboard.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Burgundy, Dark Green, Charcoal Gray, or Royal Blue.<br><br><strong>Accent Colors:</strong> Gold, Silver, Off-white, or Cream.<br><br><strong>Avoid:</strong> Very bright or neon colors that may overpower the traditional style.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Burgundy or Royal Blue with intricate gold embroidery for a<br><br>regal and sophisticated look.<br><br><strong>Bottoms:</strong> Pair with cream or beige churidar or dhoti-style pants to balance the<br><br>deep colors.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Navy Blue or Dark Green for a classic, refined look.<br><br><strong>Jacket:</strong> A Nehru jacket in Gold or Charcoal Gray to add contrast and elevate the<br><br>outfit.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color for a cohesive look.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Charcoal Gray or Dark Green for a more understated, yet<br><br>elegant look.<br><br><strong>Dupatta:</strong> Add a golden or off-white dupatta to bring in traditional charm.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream for a light and subtle base.<br><br><strong>Bandhgala Color:</strong> Navy Blue or Burgundy to contrast with the kurta while<br><br>keeping it classy.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta to maintain uniformity.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Maroon, Forest Green, Navy Blue, or Chocolate Brown.<br><br><strong>Accent Colors:</strong> Gold, Cream, or Off-white.<br><br><strong>Avoid:</strong> Extremely pale or pastel shades that may wash out the look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Deep Maroon or Navy Blue with detailed golden embroidery for<br><br>a grand appearance.<br><br><strong>Bottoms:</strong> Pair with cream or beige churidar pants to maintain balance.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Forest Green or Chocolate Brown for a rich and sophisticated tone.<br><br><strong>Jacket:</strong> A Nehru jacket in Cream or Gold to contrast with the kurta.<br><br><strong>Pyjama Color:</strong> Off-white or coordinating with the kurta for harmony.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Navy Blue or Chocolate Brown for a bold, traditional<br><br>statement.<br><br><strong>Dupatta:</strong> A golden or cream dupatta adds an elegant touch.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Cream or Off-white for a fresh and classic foundation.<br><br><strong>Bandhgala Color:</strong> Deep Maroon or Navy Blue for a refined look.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta to keep the outfit seamless.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Gray, Navy Blue, Light Beige, or Steel Blue.<br><br><strong>Accent Colors:</strong> White, Sky Blue, or Pale Pink.<br><br><strong>Avoid:</strong> Overly dark colors like black for shirts and overly vibrant hues that overpower the<br><br>look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Formal Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Gray or Navy Blue for a professional and classic<br><br>appearance.<br><br><strong>Shirt Color:</strong> Crisp White or Pale Pink to complement the suit.<br><br><strong>Tie:</strong> Opt for a tie in subtle patterns or solid colors like Deep Burgundy or Steel<br><br>Blue.<br><br><strong>Blazer with Trousers:</strong><br><br><strong>Blazer Color:</strong> Light Beige or Navy Blue for a polished, semi-formal look.<br><br><strong>Trousers:</strong> Charcoal Gray or matching the blazer for a cohesive outfit.<br><br><strong>Shirt Color:</strong> Sky Blue or White for a fresh and neat contrast.<br><br><strong>Dress Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> White or Light Blue for a clean and professional style.<br><br><strong>Trousers:</strong> Navy Blue or Charcoal Gray to ground the outfit.<br><br><strong>Waistcoat with Formal Shirt:</strong><br><br><strong>Shirt Color:</strong> Pale Pink or White to enhance elegance.<br><br><strong>Waistcoat Color:</strong> Navy Blue or Charcoal Gray for added depth.<br><br><strong>Trousers:</strong> Matching the waistcoat or contrasting in a lighter tone like Beige.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Gray, Dark Brown, or Deep Olive.<br><br><strong>Accent Colors:</strong> White, Light Blue, or Soft Pink.<br><br><strong>Avoid:</strong> Overly pale tones for shirts or excessively bold patterns.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Formal Suit:</strong><br><br><strong>Suit Color:</strong> Navy Blue or Charcoal Gray for a sophisticated and authoritative<br><br>look.<br><br><strong>Shirt Color:</strong> Crisp White or Light Blue to maintain a formal tone.<br><br><strong>Tie:</strong> Solid or subtly patterned ties in Burgundy, Deep Olive, or Steel Gray.<br><br><strong>Blazer with Trousers:</strong><br><br><strong>Blazer Color:</strong> Dark Brown or Navy Blue for a refined semi-formal appearance.<br><br><strong>Trousers:</strong> Charcoal Gray or a matching tone to the blazer for consistency.<br><br><strong>Shirt Color:</strong> Soft Pink or White to provide a fresh contrast.<br><br><strong>Dress Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light Blue, White, or Pale Pink for a versatile and clean look.<br><br><strong>Trousers:</strong> Navy Blue or Dark Gray to add depth to the outfit.<br><br><strong>Waistcoat with Formal Shirt:</strong><br><br><strong>Shirt Color:</strong> White or Soft Pink to balance the overall appearance.<br><br><strong>Waistcoat Color:</strong> Charcoal Gray or Navy Blue for a layered and elegant vibe.<br><br><strong>Trousers:</strong> Matching the waistcoat or contrasting subtly in Dark Brown or Gray.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Midnight Blue, Emerald Green, or Charcoal Gray.<br><br><strong>Accent Colors:</strong> Off-white, Light Gray, or Silver.<br><br><strong>Avoid:</strong> Neon colors or overly loud patterns that detract from sophistication.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer with Shirt and Trousers:</strong><br><br><strong>Blazer Color:</strong> Midnight Blue or Deep Burgundy for a striking yet refined look.<br><br><strong>Shirt Color:</strong> Off-white or Light Gray for a complementary base.<br><br><strong>Trousers:</strong> Charcoal Gray or matching the blazer for a sleek appearance.<br><br><strong>Dress Shirt with Chinos:</strong><br><br><strong>Shirt Color:</strong> Emerald Green or Midnight Blue for a bold and charismatic choice.<br><br><strong>Chinos:</strong> Light Gray or Beige for contrast and balance.<br><br><strong>Turtleneck with Blazer:</strong><br><br><strong>Turtleneck Color:</strong> Off-white or Light Gray for understated elegance.<br><br><strong>Blazer Color:</strong> Deep Burgundy or Midnight Blue for a modern yet classic touch.<br><br><strong>Trousers:</strong> Charcoal Gray or Navy Blue to complete the ensemble.<br><br><strong>Casual Suit with Open Collar Shirt:</strong><br><br><strong>Suit Color:</strong> Charcoal Gray or Midnight Blue for a relaxed yet polished vibe.<br><br><strong>Shirt Color:</strong> Off-white or Emerald Green, worn without a tie for a casual edge.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Deep Burgundy, Forest Green, or Charcoal Gray.<br><br><strong>Accent Colors:</strong> White, Cream, or Light Gray.<br><br><strong>Avoid:</strong> Extremely bright or neon colors that clash with the sophisticated look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer with Shirt and Trousers:</strong><br><br><strong>Blazer Color:</strong> Navy Blue or Deep Burgundy for a sharp and impactful<br><br>appearance.<br><br><strong>Shirt Color:</strong> White or Cream to create a crisp and clean look.<br><br><strong>Trousers:</strong> Charcoal Gray or matching the blazer for a cohesive outfit.<br><br><strong>Dress Shirt with Tailored Pants:</strong><br><br><strong>Shirt Color:</strong> Forest Green or Navy Blue for a subtle yet eye-catching vibe.<br><br><strong>Pants:</strong> Light Gray or Beige to add contrast.<br><br><strong>Sweater with Blazer:</strong><br><br><strong>Sweater Color:</strong> Cream or Light Gray for a refined and layered style.<br><br><strong>Blazer Color:</strong> Deep Burgundy or Navy Blue for a modern touch.<br><br><strong>Pants:</strong> Charcoal Gray or Navy to complete the look.<br><br><strong>Casual Suit with Statement Shirt:</strong><br><br><strong>Suit Color:</strong> Charcoal Gray or Navy Blue for a balanced, sophisticated<br><br>appearance.<br><br><strong>Shirt Color:</strong> White or Forest Green to add personality without being<br><br>overpowering.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Off-white, Beige, Pastel Blue, or Light Olive Green.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Cream.<br><br><strong>Avoid:</strong> Very dark or overly vibrant shades that can overshadow your features.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Off-white or Beige with subtle golden embroidery for an<br><br>understated elegance.<br><br><strong>Bottoms:</strong> Pair with matching churidar or light pastel dhoti-style pants.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Pastel Blue or Light Olive Green to add freshness to the look.<br><br><strong>Jacket:</strong> A Nehru jacket in Gold or Cream for contrast.<br><br><strong>Pyjama Color:</strong> Off-white or Beige for a balanced ensemble.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Beige or Light Olive Green for a classic yet modern style.<br><br><strong>Dupatta:</strong> Add a cream or gold dupatta for a festive touch.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream for a clean and sophisticated look.<br><br><strong>Bandhgala Color:</strong> Beige or Light Olive Green for a polished appearance.<br><br><strong>Churidar Color:</strong> Cream or matching the kurta for uniformity.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Pastel Blue, Light Olive Green, Beige, or Off-white.<br><br><strong>Accent Colors:</strong> Gold, Cream, or Deep Brown.<br><br><strong>Avoid:</strong> Overly bright or neon colors that can overpower your features.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Light Olive Green or Beige with subtle golden embroidery.<br><br><strong>Bottoms:</strong> Pair with off-white or cream churidar or dhoti-style pants.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Pastel Blue or Off-white for a refreshing appearance.<br><br><strong>Jacket:</strong> A Nehru jacket in Cream or Deep Brown to enhance the look.<br><br><strong>Pyjama Color:</strong> Beige or matching the kurta for harmony.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Light Olive Green or Beige for a balanced and classic outfit.<br><br><strong>Dupatta:</strong> Add a cream or gold dupatta to elevate the traditional vibe.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Beige for a polished appearance.<br><br><strong>Bandhgala Color:</strong> Deep Brown or Light Olive Green for a striking contrast.<br><br><strong>Churidar Color:</strong> Cream or Off-white for an elegant finish.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Light Gray, Soft Blue, Beige, or Pastel Green.<br><br><strong>Accent Colors:</strong> Navy Blue, Deep Brown, or Off-white.<br><br><strong>Avoid:</strong> Overly dark or stark colors like black or bright red, which might overpower your<br><br>features.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Light Gray or Soft Blue for a refined and approachable appearance.<br><br><strong>Shirt Color:</strong> Off-white, Light Blue, or Pastel Green to complement the suit.<br><br><strong>Tie:</strong> Opt for a Navy Blue or Deep Brown tie with subtle patterns.<br><br><strong>Blazer with Trousers:</strong><br><br><strong>Blazer Color:</strong> Beige or Light Gray for a balanced formal look.<br><br><strong>Trousers Color:</strong> Navy Blue or matching the blazer for consistency.<br><br><strong>Shirt Color:</strong> Crisp white or pastel shades to create contrast.<br><br><strong>Waistcoat Ensemble:</strong><br><br><strong>Waistcoat Color:</strong> Soft Blue or Beige for an elegant touch.<br><br><strong>Shirt Color:</strong> Off-white or pastel green for a modern twist.<br><br><strong>Trousers Color:</strong> Light Gray or Navy Blue to complete the outfit.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Gray, or Deep Olive Green.<br><br><strong>Accent Colors:</strong> Crisp White, Light Blue, or Beige.<br><br><strong>Avoid:</strong> Overly bright or flashy colors that may clash with a formal setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Navy Blue or Charcoal Gray for a classic and confident look.<br><br><strong>Shirt Color:</strong> Crisp White or Light Blue to balance the ensemble.<br><br><strong>Tie:</strong> A tie in Deep Olive Green or Burgundy with subtle patterns adds<br><br>sophistication.<br><br><strong>Blazer with Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal Gray or Navy Blue for a polished appearance.<br><br><strong>Trousers Color:</strong> Matching or a slightly lighter shade for a cohesive look.<br><br><strong>Shirt Color:</strong> White or Beige for a neutral and professional tone.<br><br><strong>Waistcoat Ensemble:</strong><br><br><strong>Waistcoat Color:</strong> Navy Blue or Charcoal Gray for understated elegance.<br><br><strong>Shirt Color:</strong> Crisp White or Light Blue for a sharp contrast.<br><br><strong>Trousers Color:</strong> Matching the waistcoat or slightly lighter shades for balance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Burgundy, Midnight Blue, Olive Green, or Slate Gray.<br><br><strong>Accent Colors:</strong> Light Beige, White, or Pastel Shades like Lavender or Peach.<br><br><strong>Avoid:</strong> Neon shades or overly vibrant colors that overpower the look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer with Shirt and Trousers:</strong><br><br><strong>Blazer Color:</strong> Midnight Blue or Slate Gray for a chic and modern look.<br><br><strong>Shirt Color:</strong> White or a pastel shade like Lavender or Peach for a soft yet striking<br><br>contrast.<br><br><strong>Trousers Color:</strong> Matching the blazer or a slightly lighter shade for a balanced<br><br>outfit.<br><br><strong>Semi-Casual Ensemble:</strong><br><br><strong>Shirt Color:</strong> Burgundy or Olive Green for a bold statement.<br><br><strong>Trousers Color:</strong> Light Beige or Slate Gray for a complementary effect.<br><br><strong>Optional:</strong> Roll up the shirt sleeves for a relaxed yet refined look.<br><br><strong>Full-Sleeve Polo or Turtleneck with Jacket:</strong><br><br><strong>Polo/Turtleneck Color:</strong> Pastel Shades or Off-white for a subtle charm.<br><br><strong>Jacket Color:</strong> Midnight Blue or Burgundy for a striking contrast.<br><br><strong>Trousers Color:</strong> Light Beige or Olive Green to complete the look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Gray, Deep Navy, Black, or Maroon.<br><br><strong>Accent Colors:</strong> White, Light Gray, or Silver.<br><br><strong>Avoid:</strong> Bright or neon shades that are too loud for the occasion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer with Dress Shirt:</strong><br><br><strong>Blazer Color:</strong> Charcoal Gray or Deep Navy for a sleek, sophisticated look.<br><br><strong>Shirt Color:</strong> White or Light Gray for a crisp contrast with the blazer.<br><br><strong>Trousers Color:</strong> Black or Charcoal Gray to complement the overall formal<br><br>appearance.<br><br><strong>Slim-Fit Suit with T-shirt:</strong><br><br><strong>Suit Color:</strong> Maroon or Deep Navy for a stylish, modern vibe.<br><br><strong>T-shirt Color:</strong> White or Silver to keep it casual yet elevated.<br><br><strong>Trousers Color:</strong> Black or Charcoal Gray for a balanced outfit.<br><br><strong>Knit Sweater with Blazer:</strong><br><br><strong>Sweater Color:</strong> Light Gray or White for a clean and stylish base.<br><br><strong>Blazer Color:</strong> Deep Navy or Charcoal Gray for a refined look.<br><br><strong>Trousers Color:</strong> Black or Charcoal Gray for a monochromatic look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Green, Maroon, Mustard Yellow, Navy Blue, or Dark Brown.<br><br><strong>Accent Colors:</strong> Off-white, Cream, Gold, or Beige.<br><br><strong>Avoid:</strong> Overly bright colors like neon shades that may clash with the traditional vibe.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Deep Green or Maroon with intricate golden or cream<br><br>embroidery for a refined traditional look.<br><br><strong>Bottoms:</strong> Beige or off-white churidar or dhoti-style pants to balance the richness<br><br>of the sherwani.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Mustard Yellow or Navy Blue for a sophisticated yet bold statement.<br><br><strong>Nehru Jacket Color:</strong> Dark Brown or Gold to contrast and complement the kurta.<br><br><strong>Pyjama Color:</strong> Off-white or beige for a subtle contrast.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Deep Green or Dark Brown for a classic and rich look.<br><br><strong>Dupatta:</strong> Gold or Off-white dupatta to enhance the traditional touch.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream for a refined and elegant look.<br><br><strong>Bandhgala Color:</strong> Dark Brown or Deep Green for a distinguished appearance.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta color for a cohesive outfit.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Maroon, Deep Burgundy, Dark Green, Navy Blue, or Dark Brown.<br><br><strong>Accent Colors:</strong> Gold, Off-white, Cream, or Beige.<br><br><strong>Avoid:</strong> Very light shades that may not complement medium/olive skin tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Maroon or Deep Burgundy with subtle golden embroidery for a<br><br>refined look.<br><br><strong>Bottoms:</strong> Pair with beige or off-white churidar or dhoti-style pants to balance the<br><br>look.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Dark Green or Navy Blue to create a vibrant yet elegant<br><br>appearance.<br><br><strong>Nehru Jacket Color:</strong> Gold or Dark Brown to contrast the kurta for a sophisticated<br><br>style.<br><br><strong>Pyjama Color:</strong> Off-white or beige to keep the outfit balanced and harmonious.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Dark Green or Burgundy for a bold yet classic appearance.<br><br><strong>Dupatta:</strong> Gold or Off-white dupatta to add a traditional touch.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream for a light and elegant look.<br><br><strong>Bandhgala Color:</strong> Dark Brown or Deep Burgundy to maintain a formal yet stylish<br><br>vibe.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta color for a cohesive look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Navy Blue, Deep Brown, Olive Green, or Slate Blue.<br><br><strong>Accent Colors:</strong> White, Light Blue, Beige, or Light Grey.<br><br><strong>Avoid:</strong> Very bright colors or shades too close to the skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Grey or Navy Blue for a professional, polished look.<br><br><strong>Shirt Color:</strong> White or Light Blue to complement the suit, keeping the overall<br><br>appearance fresh and clean.<br><br><strong>Tie Color:</strong> Deep Brown, Olive Green, or Slate Blue to add a subtle contrast.<br><br><strong>Blazer with Trousers:</strong><br><br><strong>Blazer Color:</strong> Slate Blue or Charcoal Grey for a sleek, corporate look.<br><br><strong>Trousers Color:</strong> Beige or Light Grey for a balanced and professional ensemble.<br><br><strong>Shirt Color:</strong> White for a classic, sharp look.<br><br><strong>Formal Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light Blue or White to keep the look bright and airy.<br><br><strong>Trousers Color:</strong> Deep Brown or Charcoal Grey to maintain a formal yet<br><br>approachable vibe.<br><br><strong>Sweater or Cardigan Option:</strong><br><br><strong>Sweater/Cardigan Color:</strong> Light Grey or Beige for a sophisticated, layered look in<br><br>colder environments.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Grey, Olive Green, Deep Brown, or Black.<br><br><strong>Accent Colors:</strong> White, Light Grey, Beige, or Light Blue.<br><br><strong>Avoid:</strong> Bright or overly flashy colors that may distract from the professional look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Navy Blue or Charcoal Grey for a sharp, professional look.<br><br><strong>Shirt Color:</strong> White or Light Blue for a crisp and clean finish.<br><br><strong>Tie Color:</strong> Deep Brown or Olive Green to introduce subtle contrast.<br><br><strong>Blazer with Trousers:</strong><br><br><strong>Blazer Color:</strong> Black or Deep Brown for a bold, refined look.<br><br><strong>Trousers Color:</strong> Light Grey or Beige to complement the blazer and maintain<br><br>balance.<br><br><strong>Shirt Color:</strong> White for a classic, clean look.<br><br><strong>Formal Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light Grey or White for a sophisticated, neat appearance.<br><br><strong>Trousers Color:</strong> Charcoal Grey or Olive Green for a well-coordinated,<br><br>professional finish.<br><br><strong>Sweater or Cardigan Option:</strong><br><br><strong>Sweater/Cardigan Color:</strong> Light Blue or Beige for layering while maintaining<br><br>professionalism.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Burgundy, Deep Navy, Charcoal Grey, Black, or Olive Green.<br><br><strong>Accent Colors:</strong> White, Light Grey, Silver, or Cream.<br><br><strong>Avoid:</strong> Bright neon colors or any shades too similar to your skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Suit Color:</strong> Burgundy or Charcoal Grey for a bold yet refined look.<br><br><strong>Shirt Color:</strong> White or Light Grey for a crisp contrast.<br><br><strong>Tie/Bowtie Color:</strong> Deep Navy or Black to add sophistication.<br><br><strong>Dress Shirt and Chinos:</strong><br><br><strong>Shirt Color:</strong> Black or White for a classic, stylish appeal.<br><br><strong>Chinos Color:</strong> Olive Green or Charcoal Grey to create a balanced, sharp look.<br><br><strong>Jacket Color:</strong> If desired, a Deep Navy or Black blazer for added formality.<br><br><strong>Stylish Blazer with Dark Jeans:</strong><br><br><strong>Blazer Color:</strong> Navy Blue or Charcoal Grey for a modern yet chic look.<br><br><strong>Jeans Color:</strong> Dark indigo or Black to keep the outfit sophisticated.<br><br><strong>Shirt Color:</strong> A crisp White shirt or Light Grey for contrast.<br><br><strong>Casual yet Trendy Look:</strong><br><br><strong>Shirt Color:</strong> Light Grey or White for a clean look.<br><br><strong>Pants Color:</strong> Black or Olive Green to complement the top and create a balanced<br><br>appearance.<br><br><strong>Jacket:</strong> A Black or Deep Navy jacket for a bold statement.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Charcoal Grey, Dark Navy, Olive Green, or Black.<br><br><strong>Accent Colors:</strong> White, Light Grey, Silver, or Cream.<br><br><strong>Avoid:</strong> Bright neon colors or hues that may clash with your skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Suit Color:</strong> Deep Burgundy or Charcoal Grey for an elegant and bold look.<br><br><strong>Shirt Color:</strong> White or Light Grey for a sharp contrast.<br><br><strong>Tie/Bowtie Color:</strong> Dark Navy or Black for a sophisticated touch.<br><br><strong>Dress Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Black or White for a timeless, stylish option.<br><br><strong>Trousers Color:</strong> Dark Navy, Charcoal Grey, or Black to complement the shirt.<br><br><strong>Jacket Color:</strong> Optional, but a Deep Burgundy or Charcoal Grey blazer will<br><br>elevate the look.<br><br><strong>Stylish Blazer with Dark Jeans:</strong><br><br><strong>Blazer Color:</strong> Navy Blue or Charcoal Grey for a modern, chic appearance.<br><br><strong>Jeans Color:</strong> Dark indigo or Black for a clean, sharp look.<br><br><strong>Shirt Color:</strong> White or Light Grey for a bright, refreshing contrast.<br><br><strong>Casual but Trendy Look:</strong><br><br><strong>Shirt Color:</strong> Light Grey or White for a clean, crisp look.<br><br><strong>Pants Color:</strong> Black or Olive Green for a balanced outfit.<br><br><strong>Jacket Color:</strong> Charcoal Grey or Deep Burgundy for an extra pop of style.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Dark Green, Royal Blue, Brown, or Charcoal Grey.<br><br><strong>Accent Colors:</strong> Off-white, Gold, or Cream.<br><br><strong>Avoid:</strong> Colors that blend too closely with your skin tone, like shades of brown that are<br><br>too similar to your complexion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Deep Burgundy or Dark Green with gold or silver embroidery<br><br>for a regal look.<br><br><strong>Bottoms:</strong> Beige or off-white churidar or dhoti-style pants.<br><br><strong>Dupatta:</strong> Add a gold or off-white dupatta for a traditional touch.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Royal Blue or Brown for a refined appearance.<br><br><strong>Jacket:</strong> A Nehru jacket in Gold or Charcoal Grey to complement the kurta.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color for a cohesive look.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Charcoal Grey or Deep Burgundy for a sophisticated, bold<br><br>statement.<br><br><strong>Dupatta:</strong> Add a golden or off-white dupatta for extra flair.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream to create a light, fresh contrast.<br><br><strong>Bandhgala Color:</strong> Dark Brown or Deep Burgundy for a classic, yet trendy look.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Rich Emerald Green, Dark Brown, Charcoal Grey, or<br><br>Mustard Yellow.<br><br><strong>Accent Colors:</strong> Gold, Off-white, or Cream.<br><br><strong>Avoid:</strong> Colors that blend too closely with your skin tone, like very pale or beige shades.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Deep Burgundy or Rich Emerald Green with gold or silver<br><br>embroidery.<br><br><strong>Bottoms:</strong> Beige, off-white, or light grey churidar or dhoti-style pants.<br><br><strong>Dupatta:</strong> A contrasting gold or off-white dupatta to complete the traditional look.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Mustard Yellow or Royal Blue for a bold statement.<br><br><strong>Jacket:</strong> A Nehru jacket in Gold or Dark Brown to contrast the kurta.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color for balance.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Dark Brown or Deep Burgundy for a classic look.<br><br><strong>Dupatta:</strong> A golden or off-white dupatta to add elegance.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream for a light, elegant look.<br><br><strong>Bandhgala Color:</strong> Charcoal Grey or Deep Burgundy for sophistication.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Navy Blue, Deep Brown, Dark Green, or Slate Blue.<br><br><strong>Accent Colors:</strong> White, Light Grey, Beige, or Off-white.<br><br><strong>Avoid:</strong> Bright or overly flashy colors like neon or very light pastels.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Grey, Navy Blue, or Slate Blue for a professional and<br><br>polished look.<br><br><strong>Shirt Color:</strong> White or Light Grey to maintain a clean and classic appearance.<br><br><strong>Tie Color:</strong> Dark Burgundy or Deep Green for a sophisticated touch.<br><br><strong>Pants:</strong> Matching suit pants in Charcoal Grey, Navy Blue, or Deep Brown.<br><br><strong>Blazer and Chinos:</strong><br><br><strong>Blazer Color:</strong> Deep Brown or Dark Green for a more relaxed yet still professional<br><br>approach.<br><br><strong>Shirt Color:</strong> White or Beige for contrast with the blazer.<br><br><strong>Chinos Color:</strong> Beige, Light Grey, or Dark Brown to complement the blazer.<br><br><strong>Dress Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light Grey or White for versatility and professionalism.<br><br><strong>Trousers Color:</strong> Charcoal Grey or Navy Blue to match the shirt color.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Navy Blue, Deep Brown, Dark Green, or Olive Green.<br><br><strong>Accent Colors:</strong> White, Light Grey, Beige, or Off-white.<br><br><strong>Avoid:</strong> Bright neon colors or overly light shades that may not complement brown skin<br><br>tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Grey, Navy Blue, or Olive Green for a formal and refined<br><br>look.<br><br><strong>Shirt Color:</strong> White or Light Grey to create a balanced and sharp contrast.<br><br><strong>Tie Color:</strong> Dark Burgundy or Deep Green for a professional and elegant touch.<br><br><strong>Pants:</strong> Coordinated with the suit color—Charcoal Grey or Navy Blue.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Deep Brown or Navy Blue for a stylish and business-ready<br><br>appearance.<br><br><strong>Shirt Color:</strong> White or Light Grey for a sophisticated contrast.<br><br><strong>Trousers Color:</strong> Beige, Light Grey, or matching the blazer color to maintain a<br><br>cohesive look.<br><br><strong>Dress Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light Grey or White for a classic professional look.<br><br><strong>Trousers Color:</strong> Charcoal Grey or Dark Blue for balance with the shirt.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Dark Burgundy, Midnight Blue, Charcoal, Deep Green, or Black.<br><br><strong>Accent Colors:</strong> White, Beige, Off-white, or Light Grey.<br><br><strong>Avoid:</strong> Bright or overly neon colors that may not complement brown skin tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Shirt and Blazer Combination:</strong><br><br><strong>Shirt Color:</strong> Deep Burgundy or Midnight Blue for a bold and sophisticated look.<br><br><strong>Blazer Color:</strong> Charcoal or Black to add contrast and formality.<br><br><strong>Pants Color:</strong> Black or Dark Grey for a sleek and polished finish.<br><br><strong>Casual Button-down and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light Grey or Off-white for a subtle yet stylish appearance.<br><br><strong>Trousers Color:</strong> Dark Blue or Charcoal for a balance of relaxed yet classy.<br><br><strong>Jacket and Chinos:</strong><br><br><strong>Jacket Color:</strong> Deep Green or Navy Blue for a rich and eye-catching appearance.<br><br><strong>Shirt Color:</strong> White or Beige to complement the jacket’s tone.<br><br><strong>Chinos Color:</strong> Light Grey or Beige for a fresh look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Midnight Blue, Charcoal Grey, Black, or Forest Green.<br><br><strong>Accent Colors:</strong> Off-white, Beige, Light Grey, or Silver.<br><br><strong>Avoid:</strong> Bright or overly neon colors that may not complement brown skin tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Shirt and Blazer Combination:</strong><br><br><strong>Shirt Color:</strong> Deep Burgundy or Midnight Blue for a sophisticated and elegant<br><br>vibe.<br><br><strong>Blazer Color:</strong> Black or Charcoal Grey for a sleek, formal appearance.<br><br><strong>Pants Color:</strong> Dark Blue or Charcoal for a complementary, sharp look.<br><br><strong>Casual Button-down and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light Grey or Beige for a light yet polished appearance.<br><br><strong>Trousers Color:</strong> Black or Dark Grey for contrast and sophistication.<br><br><strong>Jacket and Chinos:</strong><br><br><strong>Jacket Color:</strong> Forest Green or Navy for a vibrant but stylish tone.<br><br><strong>Shirt Color:</strong> Off-white or Light Grey to balance the richness of the jacket.<br><br><strong>Chinos Color:</strong> Beige or Khaki for a fresh and casual touch.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich Burgundy, Deep Navy Blue, Forest Green, Golden Yellow, or<br><br>Charcoal Grey.<br><br><strong>Accent Colors:</strong> Off-white, Ivory, Light Beige, or Gold.<br><br><strong>Avoid:</strong> Light pastel shades or colors that may clash with deep skin tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Rich Burgundy or Forest Green with subtle golden or ivory<br><br>embroidery for an elegant and regal look.<br><br><strong>Bottoms:</strong> Pair with beige or off-white churidar or dhoti-style pants for contrast<br><br>and balance.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Golden Yellow or Deep Navy Blue to stand out and make a bold<br><br>statement.<br><br><strong>Jacket:</strong> A Nehru jacket in Charcoal Grey or Dark Brown to complement the kurta.<br><br><strong>Pyjama Color:</strong> Off-white or beige to maintain a traditional touch.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Deep Navy Blue or Charcoal Grey for a stylish yet traditional<br><br>approach.<br><br><strong>Dupatta:</strong> Add a golden or ivory dupatta to enhance the overall look.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Ivory for a classic and timeless appearance.<br><br><strong>Bandhgala Color:</strong> Rich Burgundy or Forest Green for a bold, sophisticated<br><br>contrast.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta for a harmonious appearance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich Burgundy, Deep Navy Blue, Emerald Green, Charcoal Grey, or<br><br>Golden Yellow.<br><br><strong>Accent Colors:</strong> Off-white, Ivory, Light Beige, or Gold.<br><br><strong>Avoid:</strong> Light pastel shades or colors too close to your skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Rich Burgundy or Deep Navy Blue with intricate golden or ivory<br><br>embroidery.<br><br><strong>Bottoms:</strong> Pair with beige or off-white churidar or dhoti-style pants to contrast the<br><br>deep tones of the sherwani.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Emerald Green or Golden Yellow for a bright, bold statement.<br><br><strong>Jacket:</strong> A Nehru jacket in Charcoal Grey or Dark Brown to complement the kurta<br><br>and provide contrast.<br><br><strong>Pyjama Color:</strong> Off-white or beige for a clean, coordinated look.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Deep Burgundy or Charcoal Grey for a more sophisticated<br><br>and contemporary look.<br><br><strong>Dupatta:</strong> Pair with a golden or ivory dupatta to enhance the traditional flair.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Ivory for an elegant and timeless appeal.<br><br><strong>Bandhgala Color:</strong> Rich Burgundy or Navy Blue for a polished, yet bold finish.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta for a balanced appearance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Charcoal, Navy Blue, Dark Brown, Black, or Olive Green.<br><br><strong>Accent Colors:</strong> Light Grey, White, Off-white, or Beige.<br><br><strong>Avoid:</strong> Bright, flashy colors or anything too close to your skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit and Tie:</strong><br><br><strong>Suit Color:</strong> Deep Charcoal or Navy Blue for a classic and professional look.<br><br><strong>Shirt Color:</strong> White or Light Grey for a crisp, clean contrast.<br><br><strong>Tie Color:</strong> Dark Red, Burgundy, or Deep Blue to add a touch of sophistication.<br><br><strong>Blazer with Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Dark Brown or Black for a refined appearance.<br><br><strong>Shirt Color:</strong> Off-white or Beige to complement the darker blazer.<br><br><strong>Pants Color:</strong> Match the blazer color or opt for Dark Grey for a subtle contrast.<br><br><strong>Casual Business Attire:</strong><br><br><strong>Shirt Color:</strong> Light Blue or Light Grey for a professional yet approachable vibe.<br><br><strong>Pants Color:</strong> Navy Blue or Olive Green to add variety while remaining within a<br><br>formal look.<br><br><strong>Jacket:</strong> A well-fitted blazer in Black or Charcoal.<br><br><strong>Formal Kurta with Blazer:</strong><br><br><strong>Kurta Color:</strong> Deep Navy Blue or Dark Brown for a modern take on traditional<br><br>attire.<br><br><strong>Blazer Color:</strong> Charcoal or Black for a sharp and stylish finish.<br><br><strong>Churidar Color:</strong> Off-white or Light Beige to balance the darker top and blazer.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Navy Blue, Black, Dark Brown, or Slate Grey.<br><br><strong>Accent Colors:</strong> White, Light Grey, Beige, or Off-white.<br><br><strong>Avoid:</strong> Bright or overly saturated colors that may distract from a professional<br><br>appearance.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit and Tie:</strong><br><br><strong>Suit Color:</strong> Charcoal Grey or Navy Blue for a polished, timeless look.<br><br><strong>Shirt Color:</strong> White or Light Grey to create a clean and crisp contrast.<br><br><strong>Tie Color:</strong> Burgundy, Dark Blue, or Silver to add sophistication and depth.<br><br><strong>Blazer with Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Black or Dark Brown for a sleek, classic appeal.<br><br><strong>Shirt Color:</strong> Off-white or Light Beige to balance the darker jacket.<br><br><strong>Pants Color:</strong> Match the blazer or opt for a slightly lighter shade like Slate Grey<br><br>for a refined, monochromatic look.<br><br><strong>Business Casual Attire:</strong><br><br><strong>Shirt Color:</strong> Light Blue or Pale Pink for a soft touch while maintaining formality.<br><br><strong>Pants Color:</strong> Navy Blue or Charcoal Grey for a professional yet relaxed vibe.<br><br><strong>Jacket:</strong> A tailored Blazer in Dark Brown or Charcoal Grey to complete the<br><br>business casual ensemble.<br><br><strong>Formal Kurta with Blazer:</strong><br><br><strong>Kurta Color:</strong> Dark Blue or Deep Burgundy for a rich, elegant look.<br><br><strong>Blazer Color:</strong> Black or Charcoal Grey for a modern fusion of tradition and<br><br>professionalism.<br><br><strong>Churidar Color:</strong> Light Beige or Off-white to complement the kurta and blazer,<br><br>ensuring a balanced appearance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Emerald Green, Midnight Blue, Charcoal Grey, or<br><br>Black.<br><br><strong>Accent Colors:</strong> Silver, White, Off-white, or Light Grey.<br><br><strong>Avoid:</strong> Too many bright or neon shades that can overpower the overall look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Suit Color:</strong> Deep Burgundy or Midnight Blue for a bold and sophisticated<br><br>appearance.<br><br><strong>Shirt Color:</strong> Crisp White or Light Grey to balance the richness of the suit.<br><br><strong>Tie Color:</strong> Silver or Dark Grey to complement the overall elegant vibe.<br><br><strong>Casual Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey or Black for a sleek, polished look.<br><br><strong>Shirt Color:</strong> A light, neutral color like Off-white or Pale Blue to create contrast.<br><br><strong>Trousers Color:</strong> Black or Dark Grey for a streamlined, chic appearance.<br><br><strong>Footwear:</strong> Opt for sleek black or brown leather shoes, ensuring they complement<br><br>the overall formal casual vibe.<br><br><strong>Kurta with Blazer:</strong><br><br><strong>Kurta Color:</strong> Dark Green or Burgundy for a mix of traditional charm and modern<br><br>style.<br><br><strong>Blazer Color:</strong> Black or Charcoal Grey for a sophisticated edge.<br><br><strong>Churidar Color:</strong> Off-white or Beige for a light, elegant complement to the kurta<br><br>and blazer combination.<br><br><strong>Dinner Jacket Look:</strong><br><br><strong>Jacket Color:</strong> Midnight Blue or Deep Burgundy for an elegant, eye-catching<br><br>statement.<br><br><strong>Shirt Color:</strong> White or Light Grey for a classic, timeless contrast.<br><br><strong>Trousers Color:</strong> Matching the jacket or a slightly lighter grey for a sophisticated,<br><br>coordinated look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Rich Emerald Green, Charcoal Grey, Midnight Blue, or<br><br>Black.<br><br><strong>Accent Colors:</strong> Silver, Off-white, Light Grey, or Cream.<br><br><strong>Avoid:</strong> Overly bright or neon colors that might overshadow the sophisticated tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Suit Color:</strong> Deep Burgundy or Midnight Blue for an elegant yet striking look.<br><br><strong>Shirt Color:</strong> Crisp White or Light Grey to brighten the outfit and create a nice<br><br>contrast.<br><br><strong>Tie Color:</strong> Silver or Charcoal Grey to complement the richness of the suit and<br><br>shirt combination.<br><br><strong>Casual Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey or Black for a timeless, refined appearance.<br><br><strong>Shirt Color:</strong> Light Grey or Off-white to add balance without overpowering the<br><br>dark tones.<br><br><strong>Trousers Color:</strong> Black or Dark Grey for a sleek and cohesive appearance.<br><br><strong>Kurta with Blazer:</strong><br><br><strong>Kurta Color:</strong> Deep Burgundy or Emerald Green for a traditional yet fashionable<br><br>statement.<br><br><strong>Blazer Color:</strong> Charcoal Grey or Black for an added layer of sophistication.<br><br><strong>Churidar Color:</strong> Off-white or Beige to provide contrast and complement the<br><br>richness of the kurta.<br><br><strong>Dinner Jacket Look:</strong><br><br><strong>Jacket Color:</strong> Midnight Blue or Charcoal Grey for a bold, sophisticated<br><br>impression.<br><br><strong>Shirt Color:</strong> Crisp White or Light Grey for a clean and sharp contrast.<br><br><strong>Trousers Color:</strong> Matching the jacket or a subtle, lighter shade of grey for a<br><br>balanced, elegant look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Deep Burgundy, Olive Green, Dark Brown, or Charcoal<br><br>Grey.<br><br><strong>Accent Colors:</strong> Gold, Cream, Off-white, or Light Grey.<br><br><strong>Avoid:</strong> Too bright or neon shades that can overpower a more classic and refined look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Navy Blue or Deep Burgundy with subtle gold embroidery for a<br><br>regal look.<br><br><strong>Bottoms:</strong> Pair with off-white or beige churidar or dhoti-style pants for a classic<br><br>combination.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Olive Green or Charcoal Grey for a sophisticated look.<br><br><strong>Jacket:</strong> A Nehru jacket in Gold or Dark Brown for a contrasting yet elegant<br><br>appearance.<br><br><strong>Pyjama Color:</strong> Off-white or beige to balance the darker tones of the kurta and<br><br>jacket.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Dark Brown or Charcoal Grey for a distinguished, traditional<br><br>look.<br><br><strong>Dupatta:</strong> Add a golden or off-white dupatta for a festive touch.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream for a timeless, elegant base.<br><br><strong>Bandhgala Color:</strong> Dark Brown or Deep Burgundy for a strong contrast with the<br><br>kurta.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta to create a seamless, stylish<br><br>look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Navy Blue, Charcoal Grey, Burgundy, Dark Green, or Brown.<br><br><strong>Accent Colors:</strong> Gold, Off-white, Cream, or Light Grey.<br><br><strong>Avoid:</strong> Bright colors like neon or overly vibrant tones that might clash with the refined<br><br>traditional look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Navy Blue or Charcoal Grey with fine golden or silver<br><br>embroidery for an elegant and distinguished look.<br><br><strong>Bottoms:</strong> Pair with off-white or beige churidar or dhoti-style pants for a balanced<br><br>and traditional look.<br><br><strong>Kurta-Pyjama with Nehru Jacket:</strong><br><br><strong>Kurta Color:</strong> Burgundy or Dark Green for a rich and sophisticated vibe.<br><br><strong>Jacket:</strong> A Nehru jacket in Gold or Dark Brown to add a touch of class and<br><br>contrast.<br><br><strong>Pyjama Color:</strong> Off-white or beige to complement the jacket and kurta.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Dark Brown or Navy Blue for a stately, dignified look.<br><br><strong>Dupatta:</strong> A golden or off-white dupatta to enhance the traditional style and add<br><br>vibrancy.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream for a classic and timeless foundation.<br><br><strong>Bandhgala Color:</strong> Dark Brown or Burgundy to add depth and character to the<br><br>overall look.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta color for a cohesive<br><br>appearance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Navy Blue, Dark Brown, Olive Green, or Burgundy.<br><br><strong>Accent Colors:</strong> Off-white, Light Grey, Cream, or Beige.<br><br><strong>Avoid:</strong> Very bright colors or neon shades that can look too bold for a formal office<br><br>setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Grey or Navy Blue for a professional and authoritative<br><br>appearance.<br><br><strong>Shirt:</strong> Light Grey, Cream, or Off-white for a neutral and clean contrast.<br><br><strong>Tie:</strong> Burgundy or Dark Blue to add a touch of color without being too<br><br>overpowering.<br><br><strong>Pants:</strong> Matching charcoal or navy pants to keep the look cohesive.<br><br><strong>Blazer with Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Dark Brown or Burgundy for a sophisticated, yet approachable<br><br>look.<br><br><strong>Shirt:</strong> Light Grey or Off-white to complement the darker tones of the blazer.<br><br><strong>Pants Color:</strong> Dark Grey, Navy, or Olive Green to match the blazer while<br><br>maintaining a balanced look.<br><br><strong>Casual Formal:</strong><br><br><strong>Shirt Color:</strong> Off-white or Light Blue for a fresh, sharp appearance.<br><br><strong>Pants:</strong> Khaki or Charcoal Grey for a professional yet comfortable vibe.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Navy Blue, Dark Brown, Deep Burgundy, or Olive<br><br>Green.<br><br><strong>Accent Colors:</strong> Off-white, Light Grey, Cream, or Beige.<br><br><strong>Avoid:</strong> Bright or overly vibrant colors that might seem too youthful or flashy for a formal<br><br>office setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Grey or Navy Blue for a classic, professional look that<br><br>conveys authority.<br><br><strong>Shirt:</strong> Off-white, Light Grey, or Light Blue for a crisp contrast against the dark<br><br>suit.<br><br><strong>Tie:</strong> Deep Burgundy or Navy Blue to complement the suit and add a touch of<br><br>refinement.<br><br><strong>Pants:</strong> Matching charcoal or navy pants to create a cohesive, polished look.<br><br><strong>Blazer with Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Dark Brown or Deep Burgundy for a touch of richness and<br><br>maturity.<br><br><strong>Shirt:</strong> Off-white or Light Grey to balance out the deeper colors of the blazer.<br><br><strong>Pants Color:</strong> Charcoal Grey or Navy for a sophisticated combination with the<br><br>blazer.<br><br><strong>Casual Formal:</strong><br><br><strong>Shirt Color:</strong> Off-white, Light Grey, or Soft Blue for a light, clean look.<br><br><strong>Pants:</strong> Charcoal, Dark Grey, or Navy to match the shirt and maintain a<br><br>professional appearance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Navy Blue, Charcoal Grey, Burgundy, Dark Green, or Deep<br><br>Purple.<br><br><strong>Accent Colors:</strong> Off-white, Light Grey, or Beige.<br><br><strong>Avoid:</strong> Bright or neon colors, which may appear too casual or youthful for a<br><br>sophisticated night out.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Deep Navy Blue or Charcoal Grey for an elegant and timeless look.<br><br><strong>Shirt:</strong> Off-white, Light Grey, or Light Blue for a clean and complementary contrast<br><br>to the darker suit.<br><br><strong>Tie:</strong> Deep Burgundy or Dark Green to add richness to the outfit and create a<br><br>striking look.<br><br><strong>Pants:</strong> Match the suit color (Deep Navy or Charcoal) for a streamlined<br><br>appearance.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Burgundy or Deep Purple for a more distinctive, bold approach for<br><br>a date night.<br><br><strong>Shirt:</strong> Off-white or Light Grey to balance the richness of the blazer.<br><br><strong>Trousers:</strong> Charcoal Grey or Deep Navy for a sleek and sophisticated look.<br><br><strong>Casual Formal:</strong><br><br><strong>Shirt Color:</strong> Off-white, Light Grey, or Soft Blue for a smart yet relaxed vibe.<br><br><strong>Trousers:</strong> Charcoal Grey or Navy for a simple but refined look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Navy Blue, Burgundy, Dark Green, or Dark Brown.<br><br><strong>Accent Colors:</strong> Off-white, Light Grey, or Beige.<br><br><strong>Avoid:</strong> Overly bright or vibrant colors that might feel too youthful or casual.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Grey or Navy Blue for a classic, elegant look.<br><br><strong>Shirt:</strong> Off-white, Light Grey, or Light Blue for a fresh and sophisticated contrast to<br><br>the darker suit.<br><br><strong>Tie:</strong> Burgundy or Dark Green for a touch of color and style.<br><br><strong>Pants:</strong> Match the suit color (Charcoal or Navy) to maintain a sleek, cohesive<br><br>look.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Dark Brown or Burgundy to make a bolder statement.<br><br><strong>Shirt:</strong> Off-white or Light Grey for a sharp, balanced contrast.<br><br><strong>Trousers:</strong> Charcoal Grey or Navy to complement the blazer and maintain a<br><br>polished appearance.<br><br><strong>Casual Formal:</strong><br><br><strong>Shirt Color:</strong> Off-white or Light Grey for a smart but relaxed look.<br><br><strong>Trousers:</strong> Navy or Charcoal Grey for a timeless, refined combination.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Light Beige, Light Grey, Pastel Blue, Light Brown, or Soft White.<br><br><strong>Accent Colors:</strong> Gold, Silver, Off-white, or Cream.<br><br><strong>Avoid:</strong> Dark, heavy colors or shades that might overpower the overall traditional<br><br>aesthetic.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta with Churidar:</strong><br><br><strong>Kurta Color:</strong> Soft White or Light Beige for an elegant, clean look.<br><br><strong>Churidar Color:</strong> Off-white or Light Brown to match the kurta while maintaining a<br><br>cohesive, light-colored theme.<br><br><strong>Dupatta:</strong> Add a light gold or cream-colored dupatta to enhance the traditional<br><br>look.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Light Brown or Pastel Blue for a subtle but elegant appearance.<br><br><strong>Embroidery:</strong> Gold or Silver embroidery to complement the light base color and<br><br>add sophistication.<br><br><strong>Bottoms:</strong> Pair with beige or light cream-colored churidar or dhoti-style pants.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Soft White or Light Grey for a calm and stylish traditional<br><br>appearance.<br><br><strong>Dupatta:</strong> Light cream or off-white dupatta to enhance the aesthetic.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft White, Light Beige, Pastel Blue, Cream, or Light Grey.<br><br><strong>Accent Colors:</strong> Gold, Silver, Off-white, or Pale Yellow.<br><br><strong>Avoid:</strong> Dark or overly vibrant colors that might not fit the traditional aesthetic.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kurta with Churidar:</strong><br><br><strong>Kurta Color:</strong> Soft White or Light Beige for a clean, sophisticated appearance.<br><br><strong>Churidar Color:</strong> Off-white or Light Brown to complement the kurta.<br><br><strong>Dupatta:</strong> Add a pale yellow or gold-colored dupatta to enhance the traditional<br><br>vibe.<br><br><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Pastel Blue or Cream for a timeless, elegant look.<br><br><strong>Embroidery:</strong> Gold or Silver to add a touch of grandeur.<br><br><strong>Bottoms:</strong> Pair with beige or light cream-colored churidar or dhoti-style pants for<br><br>balance.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Light Grey or Soft White for a relaxed yet classy<br><br>appearance.<br><br><strong>Dupatta:</strong> Light cream or pale yellow to complete the traditional look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Grey, Soft White, or Light Beige.<br><br><strong>Accent Colors:</strong> Black, Dark Brown, Off-white, or Pastel shades.<br><br><strong>Avoid:</strong> Bright or flashy colors that may seem too casual or informal.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Navy Blue or Charcoal Grey for a professional, sophisticated<br><br>appearance.<br><br><strong>Shirt Color:</strong> Soft White or Light Beige to complement the suit and keep the look<br><br>fresh.<br><br><strong>Tie:</strong> A muted shade like Dark Brown or Pastel for a balanced formal look.<br><br><strong>Bottoms:</strong> Matching trousers in Navy Blue or Charcoal Grey.<br><br><strong>Blazer with Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Navy Blue or Charcoal Grey for a timeless, professional look.<br><br><strong>Shirt Color:</strong> Soft White or Light Beige to keep the outfit crisp.<br><br><strong>Pants Color:</strong> Matching dress pants or slightly lighter in color (Light Grey or<br><br>Beige).<br><br><strong>Casual Business Attire:</strong><br><br><strong>Jacket:</strong> Light Grey or Navy Blue for a more relaxed but still professional vibe.<br><br><strong>Shirt Color:</strong> Off-white or Light Blue to add some contrast while maintaining<br><br>formality.<br><br><strong>Trousers:</strong> Charcoal Grey or Black for a solid and polished appearance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Grey, Dark Brown, or Light Grey.<br><br><strong>Accent Colors:</strong> Black, Soft White, Off-white, or Burgundy.<br><br><strong>Avoid:</strong> Bright or overly casual colors such as neon shades.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Navy Blue or Charcoal Grey for a professional, classic appearance.<br><br><strong>Shirt Color:</strong> Soft White or Off-white to provide a sharp contrast and maintain<br><br>sophistication.<br><br><strong>Tie:</strong> Burgundy or Dark Brown for a rich, formal touch.<br><br><strong>Bottoms:</strong> Matching trousers in Navy Blue, Charcoal Grey, or Dark Brown.<br><br><strong>Blazer with Dress Pants:</strong><br><br><strong>Blazer Color:</strong> Navy Blue or Charcoal Grey for an authoritative and polished look.<br><br><strong>Shirt Color:</strong> Off-white or Soft White to keep the ensemble fresh and elegant.<br><br><strong>Pants Color:</strong> Matching dress pants or slightly lighter (Light Grey or Beige) for a<br><br>modern yet formal appearance.<br><br><strong>Casual Business Attire:</strong><br><br><strong>Jacket:</strong> Light Grey or Navy Blue for a slightly relaxed but still refined look.<br><br><strong>Shirt Color:</strong> Off-white or Light Blue for contrast and a subtle touch of color.<br><br><strong>Trousers:</strong> Charcoal Grey or Dark Brown for a complete and cohesive look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Blue, Burgundy, Charcoal Grey, or Olive Green.<br><br><strong>Accent Colors:</strong> Black, White, Silver, or Light Grey.<br><br><strong>Avoid:</strong> Overly bright or flashy colors like neon shades.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Deep Blue or Burgundy for a stylish and sophisticated look.<br><br><strong>Shirt Color:</strong> White or Light Grey to contrast the rich color of the suit.<br><br><strong>Tie:</strong> Charcoal Grey or Black for an elegant touch.<br><br><strong>Blazer with Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey or Deep Blue to create a sharp and trendy<br><br>appearance.<br><br><strong>Shirt Color:</strong> White or Light Grey for contrast, keeping it fresh and clean.<br><br><strong>Trousers:</strong> Dark Grey or Black trousers to maintain balance and cohesion.<br><br><strong>Casual Party Attire:</strong><br><br><strong>Jacket:</strong> Burgundy or Olive Green for a sophisticated yet relaxed vibe.<br><br><strong>Shirt Color:</strong> White or Light Grey for a bright and fresh appearance.<br><br><strong>Jeans/Pants Color:</strong> Dark Grey, Black, or Olive for a stylish touch.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Grey, Deep Burgundy, or Dark Green.<br><br><strong>Accent Colors:</strong> White, Light Grey, Silver, or Black.<br><br><strong>Avoid:</strong> Overly bright or flashy colors that may look too youthful, such as neon tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Navy Blue or Charcoal Grey for a timeless and sophisticated look.<br><br><strong>Shirt Color:</strong> White or Light Grey for a clean, fresh contrast.<br><br><strong>Tie:</strong> Deep Burgundy or Silver for a bit of flair while maintaining elegance.<br><br><strong>Blazer with Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey or Deep Burgundy for a refined and stylish<br><br>appearance.<br><br><strong>Shirt Color:</strong> White or Light Grey for a light and fresh feel.<br><br><strong>Trousers:</strong> Dark Grey or Black to keep the overall look balanced and classy.<br><br><strong>Casual Party Attire:</strong><br><br><strong>Jacket:</strong> Dark Green or Charcoal Grey for a more relaxed, yet sophisticated style.<br><br><strong>Shirt Color:</strong> White or Light Grey to keep things bright and complementary.<br><br><strong>Pants/Jeans Color:</strong> Black or Dark Grey for a sleek, modern look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Dark Brown, Deep Burgundy, Forest Green, or Charcoal Grey.<br><br><strong>Accent Colors:</strong> Off-white, Beige, Gold, or Silver.<br><br><strong>Avoid:</strong> Too bright or flashy colors that may look too youthful.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Dark Brown or Deep Burgundy for a rich, regal look.<br><br><strong>Bottoms:</strong> Pair with beige or off-white churidar or dhoti-style pants.<br><br><strong>Accessories:</strong> Gold or Silver jewelry to complement the rich colors.<br><br><strong>Kurta-Pyjama:</strong><br><br><strong>Kurta Color:</strong> Forest Green or Charcoal Grey for a classic and understated look.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color for a seamless outfit.<br><br><strong>Jacket:</strong> Add a gold or silver waistcoat to elevate the look.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Dark Brown or Deep Burgundy for a bold and traditional<br><br>appearance.<br><br><strong>Dupatta:</strong> Add a gold or off-white dupatta to complete the ensemble.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Olive Green, Deep Maroon, Navy Blue, or Charcoal Grey.<br><br><strong>Accent Colors:</strong> Gold, Off-white, Silver, or Beige.<br><br><strong>Avoid:</strong> Bright neon colors or shades that are too similar to the skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Olive Green or Deep Maroon with subtle gold or silver<br><br>embroidery.<br><br><strong>Bottoms:</strong> Pair with off-white or beige churidar or dhoti-style pants for a balanced<br><br>look.<br><br><strong>Accessories:</strong> Gold or Silver jewelry to complement the outfit.<br><br><strong>Kurta-Pyjama:</strong><br><br><strong>Kurta Color:</strong> Navy Blue or Charcoal Grey for a sophisticated, regal touch.<br><br><strong>Pyjama Color:</strong> Off-white or matching the kurta color for a cohesive look.<br><br><strong>Jacket:</strong> A traditional Nehru jacket in beige or gold can add an elegant layer.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Olive Green or Charcoal Grey.<br><br><strong>Dupatta:</strong> Add a golden or off-white dupatta for a traditional and refined look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            
            
            
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Deep Navy, Dark Brown, or Olive Green.<br><br><strong>Accent Colors:</strong> White, Light Grey, Beige, or Soft Blue.<br><br><strong>Avoid:</strong> Very bright or pastel colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p>Suit<br><br><strong>Suit Color:</strong> Charcoal Grey or Dark Brown for a professional and versatile look.<br><br><strong>Shirt Color:</strong> White or Light Grey to maintain a sharp contrast.<br><br><strong>Tie:</strong> A solid color or subtle patterned tie in dark blue or deep burgundy.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Navy Blue or Olive Green for a polished yet distinguished<br><br>appearance.<br><br><strong>Trousers:</strong> Coordinating trousers in the same color or slightly lighter shades.<br><br><strong>Shirt:</strong> Opt for a crisp white shirt or a light blue one to brighten the look.<br><br><strong>Polo Shirt and Chinos:</strong><br><br><strong>Polo Shirt Color:</strong> Muted Olive Green or Soft Blue for a relaxed yet refined vibe.<br><br><strong>Chinos:</strong> Beige or Light Grey chinos to maintain a sophisticated balance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Charcoal Grey, Midnight Blue, or Rich Olive.<br><br><strong>Accent Colors:</strong> White, Light Grey, Black, or Soft Beige.<br><br><strong>Avoid:</strong> Very bright or neon colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Grey or Midnight Blue for a sleek and stylish look.<br><br><strong>Shirt Color:</strong> Crisp White or Light Grey for contrast.<br><br><strong>Tie:</strong> A deep burgundy or dark blue tie to add a touch of personality.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Rich Olive or Deep Burgundy for an elegant and sophisticated<br><br>touch.<br><br><strong>Trousers:</strong> Matching or contrasting dark trousers, such as navy or black.<br><br><strong>Shirt:</strong> Opt for a black or white shirt to create a sharp contrast with the blazer.<br><br><strong>Casual Look (Smart-Casual):</strong><br><br><strong>Shirt Color:</strong> A well-fitted shirt in Light Grey or Soft Blue for a softer, relaxed vibe.<br><br><strong>Trousers:</strong> Dark jeans or chinos in Navy or Black.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Navy, Rich Charcoal, Dark Olive, or Maroon.<br><br><strong>Accent Colors:</strong> Light Grey, White, Black, or Silver.<br><br><strong>Avoid:</strong> Bright neon shades or very loud colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Deep Navy or Charcoal Grey for a sophisticated, classic look.<br><br><strong>Shirt Color:</strong> Crisp White or Light Grey to balance the richness of the suit.<br><br><strong>Tie:</strong> Maroon or Dark Olive to add a refined touch to the outfit.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Maroon or Deep Navy to add a bit of boldness.<br><br><strong>Trousers:</strong> Dark trousers in black or matching with the blazer.<br><br><strong>Shirt:</strong> A simple white or soft grey shirt for a sharp contrast.<br><br><strong>Casual Look (Smart-Casual):</strong><br><br><strong>Shirt Color:</strong> A well-tailored shirt in Light Grey or Soft Blue for a sophisticated yet<br><br>relaxed feel.<br><br><strong>Trousers:</strong> Black or Navy chinos.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Rich Emerald Green, Charcoal Grey, or Dark Brown.<br><br><strong>Accent Colors:</strong> Gold, Off-white, Cream, or Silver.<br><br><strong>Avoid:</strong> Bright neon shades or overly flashy colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Deep Burgundy or Emerald Green for a rich and regal look.<br><br><strong>Bottoms:</strong> Beige or off-white churidar or dhoti-style pants to complement the<br><br>richness of the sherwani.<br><br><strong>Jacket:</strong> A gold or dark brown jacket for a refined appearance.<br><br><strong>Kurta-Pyjama:</strong><br><br><strong>Kurta Color:</strong> Deep Burgundy or Charcoal Grey for a classic look.<br><br><strong>Pyjama Color:</strong> Off-white or beige for a clean and traditional pairing.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Dark Brown or Charcoal Grey for a distinguished<br><br>appearance.<br><br><strong>Dupatta:</strong> Add a golden or off-white dupatta to complete the traditional style.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream for an elegant and light option.<br><br><strong>Bandhgala Color:</strong> Dark Brown or Burgundy for a sharp, formal look.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta color for a balanced look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Dark Green, Rich Charcoal, or Earthy Brown.<br><br><strong>Accent Colors:</strong> Gold, Off-white, or Cream.<br><br><strong>Avoid:</strong> Bright neon colors or overly flashy hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani:</strong><br><br><strong>Sherwani Color:</strong> Deep Burgundy or Dark Green with subtle golden embroidery.<br><br><strong>Bottoms:</strong> Beige or off-white churidar or dhoti-style pants for a classic finish.<br><br><strong>Jacket:</strong> A gold or dark brown jacket for a rich and stately appearance.<br><br><strong>Kurta-Pyjama:</strong><br><br><strong>Kurta Color:</strong> Deep Burgundy or Rich Charcoal to exude elegance.<br><br><strong>Pyjama Color:</strong> Off-white or beige to contrast and balance the richness of the<br><br>kurta.<br><br><strong>Pathani Suit:</strong><br><br><strong>Pathani Suit Color:</strong> Dark Brown or Charcoal Grey for a sophisticated look.<br><br><strong>Dupatta:</strong> Add a golden or off-white dupatta to elevate the traditional touch.<br><br><strong>Bandhgala with Kurta and Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream for a light and refined appearance.<br><br><strong>Bandhgala Color:</strong> Dark Brown or Deep Burgundy for a sharp, classic vibe.<br><br><strong>Churidar Color:</strong> Off-white or matching the kurta color for a harmonious look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Deep Navy, Slate Blue, or Olive Green.<br><br><strong>Accent Colors:</strong> Off-white, Light Grey, or Soft Beige.<br><br><strong>Avoid:</strong> Bright, flashy colors or overly saturated tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Grey or Deep Navy for a sharp and professional look.<br><br><strong>Shirt Color:</strong> Off-white or Light Grey to maintain a sophisticated appearance.<br><br><strong>Tie:</strong> Soft Beige or a subtle pattern in Slate Blue to complement the suit.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey or Navy to keep it formal and stylish.<br><br><strong>Trousers Color:</strong> Light Grey or Soft Beige for contrast with the blazer.<br><br><strong>Shirt:</strong> White or Light Blue for a polished and clean appearance.<br><br><strong>Dress Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Off-white or Light Grey for a neutral, formal tone.<br><br><strong>Trousers Color:</strong> Dark Olive Green or Slate Blue for a refined, business-ready<br><br>outfit.<br><br><strong>Optional:</strong> A navy or charcoal blazer to elevate the look.<br><br><strong>Tailored Suit with Vest:</strong><br><br><strong>Suit Color:</strong> Navy or Deep Charcoal for a structured and professional<br><br>appearance.<br><br><strong>Vest Color:</strong> Matching the suit color or a complementary shade like Light Grey for<br><br>depth.<br><br><strong>Shirt:</strong> White or Soft Beige to brighten up the look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Navy, Dark Brown, or Deep Olive.<br><br><strong>Accent Colors:</strong> Light Grey, Off-white, or Soft Beige.<br><br><strong>Avoid:</strong> Bright, neon, or overly saturated colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Grey or Navy for a classic, sophisticated look.<br><br><strong>Shirt Color:</strong> White, Light Grey, or Soft Beige to maintain a clean and professional<br><br>appearance.<br><br><strong>Tie:</strong> A subtle pattern or solid color in muted tones like Slate Blue or Dark<br><br>Burgundy.<br><br><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Deep Olive or Charcoal for a modern yet formal style.<br><br><strong>Trousers Color:</strong> Light Grey or Soft Beige to provide contrast and maintain<br><br>balance.<br><br><strong>Shirt:</strong> White or Light Blue for a well-coordinated look.<br><br><strong>Dress Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light Grey or White for a neutral, polished appearance.<br><br><strong>Trousers Color:</strong> Dark Brown or Navy to complement the shirt color.<br><br><strong>Optional:</strong> Add a Charcoal or Navy blazer for a refined, formal look.<br><br><strong>Tailored Suit:</strong><br><br><strong>Suit Color:</strong> Navy or Charcoal Grey for a sleek, professional appearance.<br><br><strong>Shirt Color:</strong> Off-white or Light Blue to provide contrast and complement the suit.<br><br><strong>Tie:</strong> Dark Burgundy or Slate Blue to add a touch of sophistication.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Charcoal, Navy, Burgundy, or Dark Brown for a sleek, refined<br><br>look.<br><br><strong>Accent Colors:</strong> Soft Grey, Beige, or Off-White for a subtle contrast.<br><br><strong>Avoid:</strong> Neon or overly bright colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit or Blazer:</strong><br><br><strong>Blazer Color:</strong> Deep Charcoal or Navy for a modern, elegant touch.<br><br><strong>Shirt Color:</strong> White, Light Blue, or Soft Grey to keep it fresh and sharp.<br><br><strong>Tie (Optional):</strong> A solid Burgundy or a tie with subtle patterns to maintain a<br><br>sophisticated appearance.<br><br><strong>Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light Grey, Off-White, or Soft Beige for a relaxed yet stylish vibe.<br><br><strong>Trousers Color:</strong> Dark Brown or Navy for a balanced, polished look.<br><br><strong>Add:</strong> A leather belt and shoes in a matching tone, such as Dark Brown.<br><br><strong>Casual Yet Elegant:</strong><br><br><strong>Shirt Color:</strong> Light Blue or Off-White for a light, inviting touch.<br><br><strong>Pants Color:</strong> Charcoal or Dark Brown for balance and contrast.<br><br><strong>Optional Layer:</strong> A smart jacket in a muted shade like Navy or Charcoal to<br><br>elevate the look.<br><br><strong>Suit Jacket with Open Collar Shirt:</strong><br><br><strong>Jacket Color:</strong> Navy or Charcoal for a sophisticated, sleek appearance.<br><br><strong>Shirt Color:</strong> Light Grey or Off-White to brighten the look.<br><br><strong>No Tie:</strong> Keep it more relaxed by opting for an open collar.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Charcoal, Navy, Burgundy, Dark Brown, and Black for a<br><br>sophisticated and classic appearance.<br><br><strong>Accent Colors:</strong> Soft Grey, Off-White, or Warm Taupe for a contrast that's not too harsh.<br><br><strong>Avoid:</strong> Bright or neon colors that might overpower the look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit or Blazer:</strong><br><br><strong>Blazer Color:</strong> Charcoal, Deep Navy, or Black for a formal, elegant approach.<br><br><strong>Shirt Color:</strong> Soft White, Light Blue, or Pale Grey for a clean and refined look.<br><br><strong>Tie (Optional):</strong> Burgundy, Deep Purple, or a patterned tie with subtle designs to<br><br>keep the look polished.<br><br><strong>Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Off-White or Light Grey for a stylish yet simple base.<br><br><strong>Trousers Color:</strong> Charcoal, Navy, or Dark Brown to complement the skin tone<br><br>and provide contrast.<br><br><strong>Add:</strong> A leather belt and shoes in a matching tone like Dark Brown or Black to<br><br>keep the look cohesive.<br><br><strong>Casual Chic:</strong><br><br><strong>Shirt Color:</strong> Light Blue or Off-White for a refined yet approachable vibe.<br><br><strong>Trousers Color:</strong> Charcoal, Dark Brown, or Black to maintain a mature and sleek<br><br>appearance.<br><br><strong>Layer:</strong> A smart casual jacket in Navy, Charcoal, or Black.<br><br><strong>Smart Jacket and Open Collar Shirt:</strong><br><br><strong>Jacket Color:</strong> Charcoal or Black for a sharp, elegant look.<br><br><strong>Shirt Color:</strong> Soft White or Light Blue for a fresh and inviting appearance.<br><br><strong>No Tie:</strong> Opt for an open collar for a more relaxed but still polished look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich shades like Burgundy, Dark Brown, Deep Green, and Charcoal<br><br>work well for a traditional event.<br><br><strong>Accent Colors:</strong> Gold, Warm Bronze, or Off-White to add contrast and elevate the look.<br><br><strong>Avoid:</strong> Too bright or neon shades which could clash with the deeper skin tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani or Kurta:</strong><br><br><strong>Kurta Color:</strong> Deep Burgundy, Dark Green, or Charcoal for an elegant,<br><br>sophisticated vibe.<br><br><strong>Sherwani Color:</strong> Gold, Beige, or Off-White with intricate embroidery for a regal<br><br>and ceremonial appearance.<br><br><strong>Fabric:</strong> Go for silk or brocade for a rich texture.<br><br><strong>Pajama or Churidars:</strong><br><br><strong>Color:</strong> Pair the kurta or sherwani with matching or contrasting colors like cream,<br><br>beige, or a rich deep brown.<br><br><strong>Fit:</strong> Go for a well-tailored, fitted look for a sharp, polished appearance.<br><br><strong>Dupatta or Scarf:</strong><br><br><strong>Color:</strong> Soft gold, off-white, or a matching tone to your outfit. Draping it across<br><br>your shoulder will add a cultural touch to the traditional attire.<br><br><strong>Accessories:</strong><br><br><strong>Footwear:</strong> Opt for traditional Juttis or moccasins in shades of brown or beige for<br><br>a complementary look.<br><br><strong>Jewelry:</strong> A subtle gold chain or ring could elevate the traditional look. Avoid<br><br>over-accessorizing to maintain balance.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich, deep hues like Navy, Burgundy, Forest Green, and Charcoal are<br><br>great choices for a sophisticated look.<br><br><strong>Accent Colors:</strong> Gold, Ivory, or Cream to add brightness and contrast to the outfit.<br><br><strong>Avoid:</strong> Too bright colors like neon or overly loud shades that could clash with deep skin<br><br>tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sherwani or Kurta:</strong><br><br><strong>Kurta Color:</strong> Opt for colors like Deep Burgundy, Charcoal, or Forest Green for a<br><br>classic, regal appearance.<br><br><strong>Sherwani Color:</strong> Ivory, off-white, or beige with intricate embroidery for a<br><br>luxurious, ceremonial touch.<br><br><strong>Fabric:</strong> Go for a rich fabric like brocade, velvet, or silk to add texture and class.<br><br><strong>Pajama or Churidars:</strong><br><br><strong>Color:</strong> Complement your kurta or sherwani with shades like white, cream, or<br><br>deep brown for a clean and balanced look.<br><br><strong>Fit:</strong> A tailored fit will provide a sharp, structured look that works well with the<br><br>elegant traditional attire.<br><br><strong>Dupatta or Scarf:</strong><br><br><strong>Color:</strong> Soft gold, ivory, or matching shades to your outfit will enhance the<br><br>traditional appeal.<br><br><strong>Drape:</strong> Drape it over one shoulder to add sophistication to your overall look.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy, Charcoal, Slate Gray, Dark Brown—classic and professional,<br><br>these colors will complement deep skin tones.<br><br><strong>Accent Colors:</strong> Lighter shades such as Cream, Light Gray, or White for shirts and<br><br>accessories to brighten the outfit.<br><br><strong>Avoid:</strong> Bright, flashy colors that may clash with deeper skin tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Navy Blue, Charcoal, or Dark Gray are ideal choices for a sharp,<br><br>professional look.<br><br><strong>Fabric:</strong> Wool or wool-blend fabrics for a crisp appearance. A lightweight linen<br><br>blend can work well for warmer environments.<br><br><strong>Fit:</strong> A tailored, slim-fit suit gives a modern and structured look while keeping it<br><br>formal.<br><br><strong>Shirt:</strong><br><br><strong>Shirt Color:</strong> Opt for crisp white, light blue, or soft pastels. These colors are<br><br>professional and work well with darker suits.<br><br><strong>Fabric:</strong> Cotton or cotton-blend for comfort and breathability.<br><br><strong>Tie:</strong><br><br><strong>Tie Color:</strong> A deep, sophisticated color like Burgundy, Dark Green, or Navy is<br><br>perfect. Subtle patterns like pinstripes or small dots can add interest without<br><br>overwhelming the outfit.<br><br><strong>Tie Fabric:</strong> Silk or silk-blend for a polished, luxurious finish.<br><br><strong>Pants:</strong><br><br><strong>Pants Color:</strong> Match your suit color with tailored trousers in the same tone for a<br><br>cohesive, professional appearance.<br><br><strong>Fit:</strong> Opt for slim or straight-leg trousers, ensuring a clean, well-fitted look that<br><br>complements the suit jacket.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep colors like Charcoal, Navy, Black, or Dark Brown work best with<br><br>deep skin tones, offering a sophisticated and professional look.<br><br><strong>Accent Colors:</strong> Lighter shades such as Light Gray, White, or Pastels like Soft Blue or<br><br>Lavender can brighten the outfit and add contrast.<br><br><strong>Avoid:</strong> Bright, neon colors, as they may not complement deep skin tones as well as rich,<br><br>neutral shades.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit:</strong><br><br><strong>Suit Color:</strong> Charcoal Gray, Navy, or Black will give a polished and formal<br><br>appearance.<br><br><strong>Fabric:</strong> Wool, tweed, or wool-blend fabrics are ideal for a structured and<br><br>sophisticated look. Choose breathable fabrics if you're in a warmer climate.<br><br><strong>Fit:</strong> A tailored, slim-fit suit will offer a modern and professional look while<br><br>ensuring comfort.<br><br><strong>Shirt:</strong><br><br><strong>Shirt Color:</strong> A classic white shirt will create a sharp contrast with dark suits, or<br><br>you can choose light blue, soft gray, or other pastel shades for a more subtle<br><br>contrast.<br><br><strong>Fabric:</strong> A crisp cotton or cotton-blend shirt is comfortable and keeps the look<br><br>polished.<br><br><strong>Tie:</strong><br><br><strong>Tie Color:</strong> Burgundy, Navy, or Dark Green are excellent choices that add a touch<br><br>of color without overwhelming the outfit. Subtle patterns like dots or stripes will<br><br>add texture.<br><br><strong>Tie Fabric:</strong> Opt for silk or silk-blend for a refined and luxurious finish.<br><br><strong>Pants:</strong><br><br><strong>Pants Color:</strong> Match the trousers with the suit jacket in Charcoal, Navy, or Black.<br><br>This creates a cohesive and sharp appearance.<br><br><strong>Fit:</strong> Go for straight-leg or slim-fit trousers that align with the formal style, ensuring<br><br>a neat and professional look.<br><br><strong>Accessories:</strong><br><br><strong>Pocket Square:</strong> A crisp white or subtly patterned pocket square can add a touch<br><br>of elegance to the suit without being too flashy.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Charcoal, Burgundy, Dark Green, or Dark Brown for a sleek,<br><br>refined look.<br><br><strong>Accent Colors:</strong> Soft Grey, Off-White, or Beige for a subtle contrast.<br><br><strong>Avoid:</strong> Neon or overly bright colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit or Blazer:</strong><br><br><strong>Blazer Color:</strong> Deep Charcoal or Burgundy for a modern, elegant touch.<br><br><strong>Shirt Color:</strong> Light Blue, White, or Soft Grey for a fresh, sharp appearance.<br><br><strong>Tie (Optional):</strong> A solid Burgundy or a patterned tie for a sophisticated vibe.<br><br><strong>Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light Grey, Off-White, or Soft Beige for a relaxed yet stylish vibe.<br><br><strong>Trousers Color:</strong> Dark Brown, Navy, or Charcoal for a polished look.<br><br><strong>Add:</strong> A leather belt and shoes in a matching tone, such as Dark Brown.<br><br><strong>Casual Yet Elegant:</strong><br><br><strong>Shirt Color:</strong> Light Blue or Off-White for an inviting, fresh touch.<br><br><strong>Pants Color:</strong> Charcoal or Dark Brown for balance and contrast.<br><br><strong>Optional Layer:</strong> A smart jacket in muted shades like Navy or Charcoal to elevate the<br><br>look.<br><br><strong>Suit Jacket with Open Collar Shirt:</strong><br><br><strong>Jacket Color:</strong> Navy or Charcoal for a sophisticated, sleek appearance.<br><br><strong>Shirt Color:</strong> Light Grey or Off-White to brighten the look.<br><br><strong>No Tie:</strong> Keep it relaxed with an open collar.</p><br>
        `;
    }
    
    else if (gender === 'Male' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Charcoal, Navy, Burgundy, or Dark Brown for a sleek, refined<br><br>look.<br><br><strong>Accent Colors:</strong> Soft Grey, Off-White, or Beige for a subtle contrast.<br><br><strong>Avoid:</strong> Neon or overly bright colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Suit or Blazer:</strong><br><br><strong>Blazer Color:</strong> Deep Charcoal, Navy, or Burgundy for an elegant, modern touch.<br><br><strong>Shirt Color:</strong> White, Light Blue, or Soft Grey to keep the look fresh and sharp.<br><br><strong>Tie (Optional):</strong> A solid Burgundy, Navy, or a patterned tie to maintain sophistication.<br><br><strong>Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Light Grey, Off-White, or Soft Beige for a relaxed yet stylish vibe.<br><br><strong>Trousers Color:</strong> Dark Brown, Charcoal, or Navy for a polished, balanced look.<br><br><strong>Add:</strong> A leather belt and shoes in a matching tone, such as Dark Brown.<br><br><strong>Casual Yet Elegant:</strong><br><br><strong>Shirt Color:</strong> Light Blue, Soft Beige, or Off-White for an inviting touch.<br><br><strong>Pants Color:</strong> Charcoal, Dark Brown, or Navy for contrast and balance.<br><br><strong>Optional Layer:</strong> A smart jacket in muted shades like Charcoal or Navy to elevate the<br><br>look.<br><br><strong>Suit Jacket with Open Collar Shirt:</strong><br><br><strong>Jacket Color:</strong> Navy or Charcoal for a sophisticated, sleek appearance.<br><br><strong>Shirt Color:</strong> Light Grey or Off-White for a brighter, sharp contrast.<br><br><strong>No Tie:</strong> Opt for an open collar for a relaxed yet polished feel.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft Pastels (Peach, Mint Green, Lavender, or Baby Pink) for a<br><br>youthful, elegant look.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Ivory for a touch of sophistication.<br><br><strong>Avoid:</strong> Neon or overly bright colors that might overpower the look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Lehenga or Anarkali:</strong><br><br><strong>Lehenga Color:</strong> Pastel shades like Peach, Mint Green, or Lavender with subtle gold or<br><br>silver embroidery.<br><br><strong>Blouse/Top Color:</strong> Coordinating with the lehenga or a contrasting pastel shade for a<br><br>modern twist.<br><br><strong>Dupatta (Optional):</strong> Sheer fabric with delicate embroidery in matching or<br><br>complementary colors.<br><br><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Soft Pink, Pastel Blue, or Ivory with gold or silver accents.<br><br><strong>Blouse Color:</strong> Matching or contrasting in a pastel shade, such as Mint Green or<br><br>Lavender.<br><br><strong>Drape Style:</strong> Traditional or with light pleating for a modern touch.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Light Coral, Peach, or Baby Pink with delicate embroidery.<br><br><strong>Bottom Color:</strong> Matching or contrasting pastel shades, like Mint Green or Off-White.<br><br><strong>Dupatta:</strong> A sheer fabric with subtle gold or silver detailing.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Jewel Tones (Ruby Red, Emerald Green, Sapphire Blue, or Deep<br><br>Purple) for a bold, traditional look.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Ivory for elegance and contrast.<br><br><strong>Avoid:</strong> Neon or overly bright colors that might overpower the look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Lehenga or Anarkali:</strong><br><br><strong>Lehenga Color:</strong> Rich jewel tones like Ruby Red or Emerald Green with intricate gold or<br><br>silver embroidery.<br><br><strong>Blouse/Top Color:</strong> Coordinating with the lehenga or a contrasting lighter shade for<br><br>added dimension (e.g., Emerald Green lehenga with a pastel gold blouse).<br><br><strong>Dupatta (Optional):</strong> A sheer fabric in a complementary jewel tone or accent color,<br><br>featuring subtle embroidery or border work.<br><br><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Deep colors like Sapphire Blue, Maroon, or Purple with gold or silver zari<br><br>work.<br><br><strong>Blouse Color:</strong> Matching or slightly contrasting shades like Off-White or a muted gold.<br><br><strong>Drape Style:</strong> Traditional with well-defined pleats for a timeless appearance.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Jewel tones such as Deep Purple, Ruby Red, or Forest Green with<br><br>delicate embroidery or embellishments.<br><br><strong>Bottom Color:</strong> Matching or complementary shades, like a lighter version of the kameez<br><br>color (e.g., Ruby Red kameez with a soft beige churidar).<br><br><strong>Dupatta:</strong> Sheer and subtly embroidered in a matching or accent color.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Neutral tones like White, Light Grey, Beige, Navy, or Black for a<br><br>professional and polished appearance.<br><br><strong>Accent Colors:</strong> Soft Pastels (Blush Pink, Mint, or Baby Blue) for a youthful yet formal<br><br>touch.<br><br><strong>Avoid:</strong> Bright, flashy, or neon colors that may look too casual.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Trousers/Skirt:</strong><br><br><strong>Blazer Color:</strong> Navy, Light Grey, or Black for a classic and professional look.<br><br><strong>Inner Top/Blouse Color:</strong> White, Beige, or Pastel shades like Blush Pink or Baby Blue<br><br>for a subtle contrast.<br><br><strong>Bottom:</strong><br><br><strong>Trousers Color:</strong> Navy, Black, or Charcoal Grey for a cohesive outfit.<br><br><strong>Skirt Color:</strong> Pencil skirt in matching blazer color (e.g., Navy or Black).<br><br><strong>Formal Dress:</strong><br><br><strong>Dress Color:</strong> Solid colors like Light Grey, Navy, or Beige with minimal embellishments or<br><br>patterns.<br><br><strong>Dress Length:</strong> Knee-length or slightly below the knee for a formal and age-appropriate<br><br>style.<br><br><strong>Shirt and Trousers/Skirt:</strong><br><br><strong>Shirt Color:</strong> Crisp White, Soft Blue, or Light Grey for a clean, formal look.<br><br><strong>Trousers/Skirt Color:</strong> Black, Navy, or Charcoal for balance.<br><br><strong>Additional Layer (Optional):</strong><br><br>A cardigan or structured blazer in neutral tones for a polished finish.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Classic Neutrals (White, Navy, Black, Charcoal, or Light Grey) for a<br><br>polished and professional appearance.<br><br><strong>Accent Colors:</strong> Subtle tones like Burgundy, Forest Green, or Blush Pink for a touch of<br><br>sophistication.<br><br><strong>Avoid:</strong> Overly bold or neon colors to maintain a formal tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Trousers/Skirt:</strong><br><br><strong>Blazer Color:</strong> Navy, Charcoal, or Black for a timeless professional look.<br><br><strong>Inner Top/Blouse Color:</strong> White, Light Grey, or Soft Pink for a clean and refined<br><br>appearance.<br><br><strong>Bottom:</strong><br><br><strong>Trousers Color:</strong> Matching the blazer (e.g., Navy or Charcoal).<br><br><strong>Skirt Color:</strong> Pencil skirt in matching blazer color for a cohesive look.<br><br><strong>Formal Dress:</strong><br><br><strong>Dress Color:</strong> Solid colors like Navy, Burgundy, or Charcoal with minimal patterns.<br><br><strong>Dress Length:</strong> Knee-length or slightly below the knee for a formal and age-appropriate<br><br>style.<br><br><strong>Shirt and Trousers/Skirt:</strong><br><br><strong>Shirt Color:</strong> Crisp White, Light Blue, or Beige for a professional and balanced look.<br><br><strong>Trousers/Skirt Color:</strong> Charcoal, Navy, or Black for a classic combination.<br><br><strong>Additional Layer (Optional):</strong><br><br>A cardigan or blazer in a matching or complementary neutral tone for a polished finish.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft Pastels (Blush Pink, Lavender, Mint Green, or Baby Blue) for a<br><br>dreamy and youthful look.<br><br><strong>Accent Colors:</strong> Metallics like Silver or Rose Gold for a subtle shimmer.<br><br><strong>Avoid:</strong> Overly dark or neon shades to maintain a fresh and elegant vibe.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Pastel shades like Blush Pink, Baby Blue, or Mint Green.<br><br><strong>Dress Style:</strong><br><br>A-line, fit-and-flare, or a midi dress with delicate details like lace, soft ruffles, or<br><br>light embellishments.<br><br>For a more modern look, consider a slip dress with a satin finish.<br><br><strong>Top and Skirt Combination:</strong><br><br><strong>Top Color:</strong> Soft White, Lavender, or Pastel Pink with subtle embroidery or<br><br>embellishments.<br><br><strong>Skirt Color:</strong> A flowy skirt in complementary shades like Mint Green or Baby Blue.<br><br><strong>Style:</strong> A high-waisted skirt paired with a fitted top for a flattering silhouette.<br><br><strong>Jumpsuit or Romper:</strong><br><br><strong>Color:</strong> Light Grey, Pastel Lilac, or a muted metallic shade for a chic, contemporary vibe.<br><br><strong>Style:</strong> Tailored jumpsuit with a cinched waist or minimal embellishments.<br><br><strong>Optional Layer:</strong><br><br>Add a light shrug, a cropped cardigan, or a blazer in matching tones for cooler weather.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Jewel Tones (Ruby Red, Deep Emerald, Sapphire Blue, or Plum) for a<br><br>striking, bold look.<br><br><strong>Accent Colors:</strong> Metallics like Gold or Silver, or soft neutrals like Cream or Beige for<br><br>balance.<br><br><strong>Avoid:</strong> Neon shades or overly muted tones to maintain vibrancy.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Jewel tones like Ruby Red or Emerald Green for a bold and elegant<br><br>statement.<br><br><strong>Dress Style:</strong><br><br>A-line, fit-and-flare, or midi dress with clean lines or delicate embellishments.<br><br>Lace or satin fabric for a refined touch.<br><br>Off-shoulder or sweetheart neckline for a modern, flattering look.<br><br><strong>Top and Skirt Combination:</strong><br><br><strong>Top Color:</strong> Soft Beige, Cream, or Pastel Pink to complement the bold dark skirt.<br><br><strong>Skirt Color:</strong> Jewel tones like Sapphire Blue or Deep Plum.<br><br><strong>Style:</strong> A high-waisted skirt with a fitted or slightly flowy top.<br><br><strong>Jumpsuit or Romper:</strong><br><br><strong>Color:</strong> Deep tones like Burgundy, Navy, or Charcoal with subtle shimmer for a chic,<br><br>contemporary vibe.<br><br><strong>Style:</strong> Tailored jumpsuit with a cinched waist or asymmetrical neckline for a trendy twist.<br><br><strong>Optional Layer:</strong><br><br>A sleek blazer or shawl in a neutral or metallic tone for added warmth and style.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft Pastels (Peach, Mint Green, Baby Blue, or Lavender) for a<br><br>delicate and youthful look.<br><br><strong>Accent Colors:</strong> Gold, Ivory, or Silver for an elegant touch.<br><br><strong>Avoid:</strong> Overly dark or neon colors to maintain a classic traditional vibe.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree or Lehenga:</strong><br><br><strong>Saree Color:</strong> Pastel shades like Peach, Mint Green, or Baby Blue with a Gold or Silver<br><br>border.<br><br><strong>Blouse Color:</strong> Contrasting pastel shade or the same as the saree with subtle<br><br>embellishments.<br><br><strong>Lehenga Color:</strong> Soft Lavender or Ivory with delicate embroidery in Gold or Silver.<br><br><strong>Choli (Top):</strong> Coordinating shade with detailed patterns for a cohesive look.<br><br><strong>Dupatta:</strong> Lightweight and sheer, matching the lehenga or contrasting in a<br><br>complementary tone.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Color:</strong> Light Peach, Powder Blue, or Pale Pink with intricate embroidery in Gold or<br><br>Silver.<br><br><strong>Style:</strong> Floor-length with a fitted bodice and flowy skirt for a regal appearance.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Baby Blue, Mint Green, or Soft Yellow with subtle embellishments.<br><br><strong>Salwar/Dhoti Pants:</strong> Matching or slightly darker tone for depth.<br><br><strong>Dupatta:</strong> Sheer with embroidered edges for elegance.<br><br><strong>Kurta with Skirt:</strong><br><br><strong>Kurta Color:</strong> Ivory, Light Peach, or Pale Pink with light embroidery.<br><br><strong>Skirt Color:</strong> Pastel Mint or Baby Blue to add volume and flair.<br><br><strong>Additional Layer (Optional):</strong><br><br>A lightweight shawl or stole in a complementary metallic tone for added sophistication.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Vibrant Jewel Tones (Ruby Red, Emerald Green, Sapphire Blue, or<br><br>Deep Purple) for a rich and striking look.<br><br><strong>Accent Colors:</strong> Gold, Ivory, or Beige for an elegant and balanced appearance.<br><br><strong>Avoid:</strong> Neon shades or overly dull tones to retain a vibrant yet traditional feel.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree or Lehenga:</strong><br><br><strong>Saree Color:</strong> Jewel tones like Ruby Red, Emerald Green, or Sapphire Blue with intricate<br><br>Gold or Silver borders.<br><br><strong>Blouse Color:</strong> Contrasting lighter shades like Ivory or Beige, or the same jewel<br><br>tone with subtle embroidery.<br><br><strong>Lehenga Color:</strong> Deep Purple or Sapphire Blue with ornate embroidery or<br><br>embellishments.<br><br><strong>Choli (Top):</strong> Coordinating color with delicate patterns for a harmonious look.<br><br><strong>Dupatta:</strong> Sheer fabric in a complementary tone, like Beige or Gold, with a<br><br>matching border.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Color:</strong> Vibrant tones like Ruby Red, Emerald Green, or Deep Maroon with Gold accents.<br><br><strong>Style:</strong> Floor-length with a flared skirt and intricate neckline embroidery for a regal touch.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Rich tones like Deep Purple, Teal, or Ruby Red with traditional patterns.<br><br><strong>Salwar:</strong> Coordinating or slightly lighter shade for contrast.<br><br><strong>Dupatta:</strong> Sheer and flowing with embroidery or lace borders in Gold or Ivory.<br><br><strong>Kurta with Skirt:</strong><br><br><strong>Kurta Color:</strong> Emerald Green, Ruby Red, or Deep Maroon with elegant embroidery.<br><br><strong>Skirt Color:</strong> Ivory or Beige for a lighter contrast or the same jewel tone for a cohesive<br><br>look.<br><br><strong>Additional Layer (Optional):</strong><br><br>A lightweight shawl or stole in Gold or a matching tone to complete the outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Neutral shades like Soft Beige, Light Grey, Pastel Blue, or Cream for a<br><br>polished and professional look.<br><br><strong>Accent Colors:</strong> Muted tones like Dusty Rose, Mint Green, or Navy for subtle elegance.<br><br><strong>Avoid:</strong> Bright or flashy colors to maintain a formal and understated appearance.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Formal Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> White, Soft Blue, or Light Grey with a structured fit.<br><br><strong>Trousers Color:</strong> Navy, Charcoal, or Beige for a professional yet youthful vibe.<br><br><strong>Blouse and Pencil Skirt:</strong><br><br><strong>Blouse Color:</strong> Cream, Pastel Pink, or Light Mint with minimal patterns or<br><br>embellishments.<br><br><strong>Skirt Color:</strong> Charcoal, Navy, or Soft Beige for balance.<br><br><strong>Style:</strong> Knee-length pencil skirt for a neat, office-appropriate look.<br><br><strong>Shift Dress:</strong><br><br><strong>Dress Color:</strong> Pastel Blue, Light Grey, or Soft Pink with a clean, tailored silhouette.<br><br><strong>Optional Layer:</strong> Add a blazer in Navy or Light Grey for added sophistication.<br><br><strong>Co-ord Set:</strong><br><br><strong>Top and Bottom Color:</strong> Muted tones like Dusty Rose or Light Grey for a cohesive and<br><br>chic formal appearance.<br><br><strong>Optional Layer:</strong><br><br>A blazer or lightweight cardigan in neutral tones like Navy, Beige, or Grey to complete<br><br>the outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Neutral tones like Soft White, Light Grey, Navy, or Charcoal for a<br><br>professional and sophisticated look.<br><br><strong>Accent Colors:</strong> Muted shades like Dusty Rose, Lavender, or Soft Blue for subtle<br><br>elegance.<br><br><strong>Avoid:</strong> Bright or overly saturated colors to maintain a formal and polished appearance.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Formal Shirt and Trousers:</strong><br><br><strong>Shirt Color:</strong> Soft White, Light Grey, or Powder Blue with a clean, structured design.<br><br><strong>Trousers Color:</strong> Navy, Charcoal, or Beige for a balanced, professional look.<br><br><strong>Style:</strong> Tailored trousers with a slight break at the ankle for a modern edge.<br><br><strong>Blouse and Pencil Skirt:</strong><br><br><strong>Blouse Color:</strong> Soft Pastels like Peach, Dusty Rose, or Light Lavender for a delicate<br><br>touch.<br><br><strong>Skirt Color:</strong> Charcoal, Navy, or Light Grey for a neutral base.<br><br><strong>Style:</strong> Knee-length pencil skirt for a sleek and professional silhouette.<br><br><strong>Shift Dress:</strong><br><br><strong>Dress Color:</strong> Navy, Soft Grey, or Charcoal with a simple, tailored design.<br><br><strong>Style:</strong> A-line or straight-cut dress for a clean, office-appropriate look.<br><br><strong>Optional Layer:</strong> Add a lightweight blazer in a matching tone for a more formal<br><br>appearance.<br><br><strong>Co-ord Set:</strong><br><br><strong>Top and Bottom Color:</strong> Dusty Rose, Soft Grey, or Lavender for a coordinated, polished<br><br>look.<br><br><strong>Style:</strong> A fitted blazer paired with matching trousers or a skirt for a sleek, modern outfit.<br><br><strong>Optional Layer:</strong><br><br>A tailored blazer or cardigan in neutral tones like Navy or Grey to elevate the outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft Pastels (Peach, Mint Green, Baby Blue, or Lavender) for a fresh,<br><br>light, and playful look.<br><br><strong>Accent Colors:</strong> Metallics like Gold, Silver, or Champagne for a touch of elegance.<br><br><strong>Avoid:</strong> Overly bright or dark colors that may overpower the soft and youthful vibe.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Dress:</strong><br><br><strong>Dress Color:</strong> Light pastels like Peach, Mint Green, or Baby Blue for a youthful, romantic<br><br>feel.<br><br><strong>Style:</strong> A-line or fit-and-flare dress with lace or subtle embellishments for a touch<br><br>of sophistication.<br><br><strong>Length:</strong> A knee-length or midi dress to balance elegance and playfulness.<br><br><strong>Details:</strong> Soft ruffles, delicate straps, or a sweetheart neckline for a feminine, flattering<br><br>silhouette.<br><br><strong>Top and Skirt Combination:</strong><br><br><strong>Top Color:</strong> Soft Pink, Cream, or Ivory with minimal detailing.<br><br><strong>Skirt Color:</strong> Light Mint, Peach, or Lavender to create a balanced, chic look.<br><br><strong>Style:</strong> A fitted blouse with a flowy skirt for a modern yet feminine outfit.<br><br><strong>Jumpsuit or Romper:</strong><br><br><strong>Color:</strong> Soft pastels or metallic shades like Champagne or Rose Gold for a contemporary<br><br>look.<br><br><strong>Style:</strong> A chic, tailored jumpsuit or romper with a flattering fit, suitable for both casual and<br><br>more elegant settings.<br><br><strong>Optional Layer:</strong><br><br>A lightweight shawl or cardigan in Ivory or Metallic shades for extra style and warmth.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Bold Jewel Tones (Emerald Green, Ruby Red, Sapphire Blue, or Deep<br><br>Purple) for a striking and elegant look.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Champagne for a sophisticated touch.<br><br><strong>Avoid:</strong> Overly bright or neon colors, which may detract from the elegant vibe.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Dress:</strong><br><br><strong>Dress Color:</strong> Bold jewel tones like Ruby Red, Emerald Green, or Sapphire Blue for a<br><br>vibrant, eye-catching look.<br><br><strong>Style:</strong> A-line or bodycon dress, depending on preference. A-line dresses offer a<br><br>flirty, feminine vibe, while bodycon dresses accentuate curves for a sleek,<br><br>modern appearance.<br><br><strong>Details:</strong> Subtle embellishments like lace, sequins, or delicate straps for added<br><br>elegance.<br><br><strong>Length:</strong> A knee-length or midi dress to maintain both elegance and youthful<br><br>appeal.<br><br><strong>Top and Skirt Combination:</strong><br><br><strong>Top Color:</strong> Soft Ivory, Blush Pink, or Champagne to create contrast against the darker<br><br>skirt or pants.<br><br><strong>Skirt Color:</strong> Bold jewel tones or metallics for a sophisticated yet youthful look.<br><br><strong>Style:</strong> A fitted top paired with a flowy skirt for an effortlessly chic look.<br><br><strong>Jumpsuit or Romper:</strong><br><br><strong>Color:</strong> Deep jewel tones, metallics like Gold or Rose Gold, or even classic Black for a<br><br>sleek, modern feel.<br><br><strong>Style:</strong> A chic, fitted jumpsuit or romper with a flattering cut, ideal for both casual and<br><br>elegant settings.<br><br><strong>Optional Layer:</strong><br><br>A lightweight shawl or blazer in Metallic shades or matching the dress for added style<br><br>and warmth.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Warm tones like Terracotta, Mustard Yellow, Olive Green, or Rich<br><br>Burgundy to complement medium/olive skin and create a harmonious look.<br><br><strong>Accent Colors:</strong> Gold, Bronze, or Copper for a touch of elegance and warmth.<br><br><strong>Avoid:</strong> Overly bright or neon colors that may overpower the traditional vibe.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Terracotta, Mustard Yellow, or Burgundy for a rich, festive appearance.<br><br><strong>Style:</strong> Traditional silk saree or a modern drape style for a youthful, elegant look.<br><br><strong>Details:</strong> Gold or bronze border details and subtle embellishments to add<br><br>sophistication.<br><br><strong>Blouse Color:</strong> Matching or contrasting with the saree, in shades like Gold, Ivory, or Dark<br><br>Green.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Rich tones like Olive Green, Maroon, or Deep Purple for a regal<br><br>appearance.<br><br><strong>Salwar Color:</strong> Matching or in lighter shades like Cream or Beige for a balanced look.<br><br><strong>Dupatta Color:</strong> A contrast or matching dupatta in Silk or Chiffon with gold or mirror work<br><br>for a traditional touch.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Rich Burgundy, Dark Blue, or Golden tones to complement the<br><br>medium/olive skin.<br><br><strong>Lehenga Color:</strong> Warm shades like Copper, Olive Green, or Deep Red for a cohesive<br><br>and festive appearance.<br><br><strong>Style:</strong> A flared lehenga paired with a cropped choli for a modern take on traditional wear.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Anarkali Color:</strong> Mustard Yellow, Terracotta, or Maroon with intricate embroidery or<br><br>embellishments in gold.<br><br><strong>Style:</strong> A long Anarkali silhouette with a flowy, flattering fit for an elegant look.<br><br><strong>Optional Layer:</strong><br><br>A traditional shawl or dupatta in gold or matching color with the attire to complete the<br><br>look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich earthy tones like Deep Red, Maroon, Dark Green, or Royal Blue<br><br>to enhance medium/olive skin and complement dark hair.<br><br><strong>Accent Colors:</strong> Gold, Copper, or Silver for a sophisticated, festive touch.<br><br><strong>Avoid:</strong> Too many bright or neon colors, which might distract from the traditional<br><br>elegance.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Deep Red, Maroon, or Royal Blue for a classic, bold look.<br><br><strong>Style:</strong> Traditional silk saree for a graceful, timeless appearance.<br><br><strong>Details:</strong> Gold or silver zari work along the borders or all over for a more opulent<br><br>finish.<br><br><strong>Blouse Color:</strong> Gold, Silver, or a matching color like Deep Red or Maroon for a seamless<br><br>and elegant look.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Dark Green, Burgundy, or Indigo Blue to create a striking contrast with<br><br>medium/olive skin.<br><br><strong>Salwar Color:</strong> Matching or in neutral tones like Beige, Cream, or White to maintain<br><br>balance.<br><br><strong>Dupatta Color:</strong> A contrasting color like Gold or a matching one with delicate<br><br>embellishments for added glamour.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Maroon, Deep Green, or Rich Gold to complement dark hair and medium<br><br>skin tones.<br><br><strong>Lehenga Color:</strong> Deep Red, Maroon, or Dark Blue with intricate embroidery or mirror<br><br>work for a festive appeal.<br><br><strong>Style:</strong> A flared lehenga paired with a fitted choli for a classic traditional look.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Anarkali Color:</strong> Burgundy, Dark Green, or Indigo Blue with fine embroidery in gold or<br><br>silver to create a regal appearance.<br><br><strong>Style:</strong> Long, flowing Anarkali suit with a fitted bodice for a feminine silhouette.<br><br><strong>Optional Layer:</strong><br><br>A traditional dupatta in a complementary color with gold or silver threadwork for added<br><br>charm.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Neutral and soft tones like Navy Blue, Charcoal Grey, Beige, or Soft<br><br>Olive to complement medium/olive skin and light hair.<br><br><strong>Accent Colors:</strong> Soft Pastels (like Blush Pink, Light Peach, or Lavender) or Classic<br><br>White for a fresh, professional appearance.<br><br><strong>Avoid:</strong> Bright, flashy colors that might distract from the formal, professional vibe.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blouse and Trousers:</strong><br><br><strong>Blouse Color:</strong> Soft Pastels like Blush Pink, Light Blue, or Ivory for a light, professional<br><br>touch.<br><br><strong>Style:</strong> A tailored blouse with a clean cut and a subtle neckline (such as a boat<br><br>neck or collared shirt) for a polished look.<br><br><strong>Trousers Color:</strong> Charcoal Grey, Navy Blue, or Beige for a sharp, tailored appearance.<br><br><strong>Style:</strong> Straight-leg or slightly tapered trousers for a modern and sophisticated<br><br>silhouette.<br><br><strong>Blouse and Skirt Combination:</strong><br><br><strong>Blouse Color:</strong> White, Light Grey, or a subtle pastel to keep the look fresh and<br><br>professional.<br><br><strong>Skirt Color:</strong> Navy Blue, Charcoal Grey, or Soft Olive for a balanced, formal look.<br><br><strong>○ Style:</strong> A pencil skirt or A-line skirt that hits just below the knee for a sleek and<br><br>polished silhouette.<br><br><strong>Formal Dress:</strong><br><br><strong>Dress Color:</strong> Soft Olive, Charcoal Grey, or Navy Blue to create a refined and<br><br>professional look.<br><br><strong>Style:</strong> A knee-length, tailored dress with a modest neckline (e.g., boat neck or<br><br>high neck).<br><br><strong>Details:</strong> Minimalistic with subtle pleats or clean lines for a sophisticated look.<br><br><strong>Blazer or Cardigan:</strong><br><br><strong>Blazer Color:</strong> Navy Blue, Charcoal Grey, or Beige for a classic, professional<br><br>appearance.<br><br><strong>Style:</strong> A well-fitted blazer or structured cardigan to layer over the blouse or dress<br><br>for added sophistication.<br><br><strong>Optional Accessories:</strong><br><br><strong>Footwear:</strong> Classic flats or low heels in neutral shades like black, beige, or navy.<br><br><strong>Bag:</strong> A structured handbag in neutral tones to complete the professional ensemble.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Neutral and sophisticated tones like Charcoal Grey, Navy Blue, Black,<br><br>or Soft Olive to complement medium/olive skin and dark hair.<br><br><strong>Accent Colors:</strong> White, Soft Beige, or Blush Pink for a clean, elegant contrast.<br><br><strong>Avoid:</strong> Bright, neon colors that may be too distracting for a formal setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blouse and Trousers:</strong><br><br><strong>Blouse Color:</strong> Soft Beige, White, or Light Blush Pink to brighten the look while<br><br>maintaining a professional appearance.<br><br><strong>Style:</strong> A button-down shirt or a modest blouse with subtle details like a V-neck or<br><br>collared design for a sophisticated and refined look.<br><br><strong>Trousers Color:</strong> Navy Blue, Charcoal Grey, or Black to create a classic, tailored outfit.<br><br><strong>Style:</strong> Straight-leg or slightly tapered trousers to add a modern touch to the<br><br>professional look.<br><br><strong>Blouse and Skirt Combination:</strong><br><br><strong>Blouse Color:</strong> White, Light Grey, or a soft pastel like Peach for a fresh and polished<br><br>vibe.<br><br><strong>Skirt Color:</strong> Charcoal Grey, Navy Blue, or Black for a balanced, formal appearance.<br><br><strong>Style:</strong> A pencil skirt or A-line skirt that hits at or just below the knee, offering a<br><br>sleek and elegant silhouette.<br><br><strong>Formal Dress:</strong><br><br><strong>Dress Color:</strong> Navy Blue, Charcoal Grey, or Soft Olive to complement both the<br><br>medium/olive skin and dark hair.<br><br><strong>Style:</strong> A knee-length, tailored dress with a modest neckline (e.g., high neck, boat<br><br>neck, or V-neck).<br><br><strong>Details:</strong> Simple and clean lines, with minimalistic accents for a professional,<br><br>polished look.<br><br><strong>Blazer or Cardigan:</strong><br><br><strong>Blazer Color:</strong> Navy Blue, Charcoal Grey, or Black for a formal, sophisticated<br><br>appearance.<br><br><strong>Style:</strong> A tailored, well-fitted blazer to add structure and professionalism to the<br><br>outfit. Alternatively, a structured cardigan could be used for a slightly softer look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich and elegant shades like Burgundy, Deep Purple, Navy Blue, or<br><br>Emerald Green to enhance medium/olive skin and light hair.<br><br><strong>Accent Colors:</strong> Soft Gold, Beige, or Soft Pink for a subtle contrast.<br><br><strong>Avoid:</strong> Bright neon colors or overly loud prints that may overshadow the occasion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Dress:</strong><br><br><strong>Dress Color:</strong> Burgundy, Navy Blue, or Deep Purple to bring out the natural warmth of<br><br>medium/olive skin and complement light hair.<br><br><strong>Style:</strong> A fitted or A-line dress with a modest neckline, like a V-neck or sweetheart<br><br>neckline, to give a sophisticated yet youthful look.<br><br><strong>Details:</strong> Simple embellishments like delicate lace or subtle beading for an<br><br>elegant appearance, without overpowering the outfit.<br><br><strong>Top and Skirt Combination:</strong><br><br><strong>Top Color:</strong> Soft Pink, Blush, or Ivory for a soft, feminine touch.<br><br><strong>Skirt Color:</strong> Burgundy, Navy Blue, or Deep Purple for a balanced, elegant vibe.<br><br><strong>Style:</strong> A fitted blouse or crop top paired with a high-waisted skirt, such as a pencil<br><br>skirt or a flowy midi skirt, to create a chic and stylish silhouette.<br><br><strong>Top and Trousers Combination:</strong><br><br><strong>Top Color:</strong> Light Pink, Peach, or Ivory to keep the look fresh and flattering.<br><br><strong>Trousers Color:</strong> Navy Blue, Deep Purple, or Black for a sleek and sophisticated<br><br>appearance.<br><br><strong>Style:</strong> A fitted blouse or silky top paired with wide-leg or straight-leg trousers for<br><br>an elegant, fashion-forward look.<br><br><strong>Romantic Jumpsuit:</strong><br><br><strong>Jumpsuit Color:</strong> Burgundy, Deep Purple, or Emerald Green to complement the skin<br><br>tone and hair color.<br><br><strong>Style:</strong> A form-fitting jumpsuit with a flattering neckline, like a halter neck or<br><br>off-the-shoulder, to create a modern, elegant look for a night out.<br><br><strong>Details:</strong> Minimalistic yet chic, with delicate fabric choices such as satin or silk to<br><br>add a touch of glamour.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep shades like Burgundy, Emerald Green, Charcoal Grey, or Navy<br><br>Blue to complement medium/olive skin and dark hair.<br><br><strong>Accent Colors:</strong> Soft Gold, Blush Pink, or Cream for a subtle, elegant contrast.<br><br><strong>Avoid:</strong> Bright neon or overly vibrant colors that might overwhelm the look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Dress:</strong><br><br><strong>Dress Color:</strong> Burgundy, Emerald Green, or Navy Blue for a rich and sophisticated look<br><br>that flatters medium/olive skin and dark hair.<br><br><strong>Style:</strong> A fitted or A-line dress with a flattering neckline such as a V-neck or<br><br>sweetheart neckline to create a chic, elegant appearance.<br><br><strong>Details:</strong> Simple embellishments like subtle lace, sequins, or a sleek belt to add<br><br>texture and enhance the overall elegance of the dress.<br><br><strong>Top and Skirt Combination:</strong><br><br><strong>Top Color:</strong> Ivory, Blush Pink, or Soft Gold to add warmth and contrast to medium/olive<br><br>skin.<br><br><strong>Skirt Color:</strong> Navy Blue, Charcoal Grey, or Burgundy for a polished, sophisticated vibe.<br><br><strong>Style:</strong> A fitted blouse or crop top paired with a high-waisted skirt, either in a<br><br>pencil style or a flowy midi skirt, to create a chic and balanced look.<br><br><strong>Top and Trousers Combination:</strong><br><br><strong>Top Color:</strong> Soft Gold, Ivory, or Blush to maintain a fresh and youthful appearance.<br><br><strong>Trousers Color:</strong> Charcoal Grey, Navy Blue, or Black for a refined, elegant look.<br><br><strong>Style:</strong> A silky or satin blouse paired with tailored trousers, either wide-leg or slim<br><br>fit, for a fashion-forward, sleek look.<br><br><strong>Romantic Jumpsuit:</strong><br><br><strong>Jumpsuit Color:</strong> Deep Burgundy, Emerald Green, or Navy Blue for a flattering, bold<br><br>choice that enhances both medium/olive skin and dark hair.<br><br><strong>Style:</strong> A form-fitting jumpsuit with a flattering neckline like a halter neck or<br><br>off-the-shoulder to create a sophisticated yet modern vibe.<br><br><strong>Details:</strong> Simple, clean lines with elegant fabric like satin or silk for a luxe,<br><br>party-ready appearance.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Warm, rich shades like Deep Red, Maroon, Royal Blue, or Emerald<br><br>Green to complement brown skin and light hair.<br><br><strong>Accent Colors:</strong> Gold, Cream, or Soft Peach for a luxurious contrast.<br><br><strong>Avoid:</strong> Extremely bright or neon colors that might clash with the traditional setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Maroon, Royal Blue, or Deep Red to complement brown skin and light hair<br><br>while making a bold statement.<br><br><strong>Style:</strong> A traditional silk or cotton saree with a contrasting border or elegant<br><br>patterns like gold embroidery or floral motifs.<br><br><strong>Details:</strong> Pair with a simple blouse in a coordinating color like gold or cream to<br><br>keep the look balanced and sophisticated.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Lehenga Color:</strong> Deep Red, Emerald Green, or Maroon to create a striking look.<br><br><strong>Choli Color:</strong> Gold, Ivory, or Soft Peach to add contrast and highlight the lehenga.<br><br><strong>Style:</strong> A lehenga with intricate embroidery or embellishments, paired with a<br><br>cropped choli in a modest yet elegant design, such as short-sleeve or 3/4<br><br>sleeves.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Suit Color:</strong> Maroon, Emerald Green, or Navy Blue for a classic, royal look.<br><br><strong>Style:</strong> A floor-length Anarkali suit with delicate embellishments, like gold thread<br><br>work or sequins, to give a refined traditional appearance.<br><br><strong>Details:</strong> Pair with a matching dupatta (scarf) in a complementary shade to<br><br>complete the elegant, flowing silhouette.<br><br><strong>Kurtis with Palazzo Pants:</strong><br><br><strong>Kurti Color:</strong> Gold, Deep Red, or Maroon to enhance brown skin and add warmth to the<br><br>look.<br><br><strong>Palazzo Color:</strong> Navy Blue, Cream, or Black for balance and elegance.<br><br><strong>Style:</strong> A long, straight-cut kurti with delicate embroidery paired with wide-leg<br><br>palazzo pants for a modern yet traditional twist.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich, vibrant shades like Deep Red, Maroon, Royal Blue, or Emerald<br><br>Green to complement brown skin and dark hair.<br><br><strong>Accent Colors:</strong> Gold, Ivory, or Soft Peach to add a luxurious, balanced contrast.<br><br><strong>Avoid:</strong> Neon or overly bright colors that may clash with the traditional feel.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Deep Red, Maroon, or Royal Blue to enhance brown skin and dark hair<br><br>while making a statement.<br><br><strong>Style:</strong> A traditional silk or chiffon saree with gold or silver borders or intricate<br><br>embroidery to add texture and richness.<br><br><strong>Details:</strong> Pair with a simple blouse in a matching color or soft contrast like cream<br><br>or gold to keep the focus on the saree.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Lehenga Color:</strong> Maroon, Deep Red, or Emerald Green for a bold yet elegant look.<br><br><strong>Choli Color:</strong> Gold, Ivory, or Soft Peach for contrast and balance.<br><br><strong>Style:</strong> A lehenga with intricate beadwork, sequins, or embroidery, paired with a<br><br>cropped choli in a modest but stylish design, such as with long sleeves or a<br><br>high-neck design.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Suit Color:</strong> Maroon, Royal Blue, or Emerald Green for a royal, graceful appearance.<br><br><strong>Style:</strong> A floor-length Anarkali suit with delicate embellishments, such as gold or<br><br>silver thread work or sequins, for a refined look.<br><br><strong>Details:</strong> Pair with a matching dupatta (scarf) in a complementary shade to<br><br>complete the elegant, flowing silhouette.<br><br><strong>Kurtis with Palazzo Pants:</strong><br><br><strong>Kurti Color:</strong> Deep Red, Gold, or Maroon to enhance brown skin while adding warmth.<br><br><strong>Palazzo Color:</strong> Navy Blue, Cream, or Black for contrast and sophistication.<br><br><strong>Style:</strong> A long kurti with delicate embroidery or mirror work, paired with wide-leg<br><br>palazzo pants for a modern traditional vibe.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Neutral, elegant shades like Charcoal Grey, Navy Blue, Dark Brown, or<br><br>Black to complement brown skin and light hair.<br><br><strong>Accent Colors:</strong> Soft Beige, Cream, or Blush Pink for a subtle, professional contrast.<br><br><strong>Avoid:</strong> Bright or neon colors, as they can be too casual for a formal setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Trousers Combination:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey, Navy Blue, or Black for a professional, sleek look.<br><br><strong>Shirt Color:</strong> Ivory, Soft Beige, or Light Blue to contrast with darker shades and add a<br><br>soft touch.<br><br><strong>Trousers Color:</strong> Black, Navy, or Dark Brown for a polished, refined appearance.<br><br><strong>Style:</strong> A tailored blazer with matching trousers creates a sharp, business-ready<br><br>outfit. Opt for a classic button-up shirt underneath the blazer for a polished look.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Skirt Color:</strong> Charcoal Grey, Black, or Navy Blue for a professional, clean look.<br><br><strong>Blouse Color:</strong> Soft Beige, Ivory, or Light Blue to brighten the outfit and maintain a formal<br><br>appearance.<br><br><strong>Style:</strong> A fitted pencil skirt paired with a long-sleeve blouse or button-up shirt. You<br><br>can tuck the blouse in for a neat, streamlined look or add a belt for added<br><br>definition.<br><br><strong>A-Line Dress:</strong><br><br><strong>Dress Color:</strong> Charcoal Grey, Navy Blue, or Soft Beige to create a balanced, formal look.<br><br><strong>Style:</strong> A knee-length A-line dress with a subtle pattern or a solid color to maintain<br><br>professionalism. Pair with a blazer or cardigan if desired to keep it<br><br>office-appropriate.<br><br><strong>Suit Dress:</strong><br><br><strong>Dress Color:</strong> Navy Blue, Charcoal Grey, or Black for a sophisticated, business-like look.<br><br><strong>Style:</strong> A tailored suit dress with a clean neckline and simple detailing like a belt or<br><br>pleats. Pair it with a smart blazer for a complete office look.<br><br><strong>Tailored Pants and Button-Down Shirt:</strong><br><br><strong>Shirt Color:</strong> Ivory, Soft Beige, or Light Blue for a soft, professional tone.<br><br><strong>Pants Color:</strong> Black, Charcoal Grey, or Dark Brown for a polished, formal appearance.<br><br><strong>Style:</strong> A crisp button-down shirt tucked into tailored pants for a simple yet<br><br>sophisticated office outfit. Complete the look with low heels or flats.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Neutral, sophisticated shades like Charcoal Grey, Navy Blue, Black, or<br><br>Dark Brown to complement brown skin and dark hair.<br><br><strong>Accent Colors:</strong> Soft Beige, Ivory, or Pastel Pink for a professional yet refreshing<br><br>contrast.<br><br><strong>Avoid:</strong> Bright or overly bold colors that can distract from the formal vibe.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Trousers Combination:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey, Black, or Navy Blue for a sleek and professional look.<br><br><strong>Shirt Color:</strong> Soft Beige, Ivory, or Light Blue to keep the look light and professional.<br><br><strong>Trousers Color:</strong> Black, Navy, or Dark Brown to create a sharp and polished ensemble.<br><br><strong>Style:</strong> A fitted blazer paired with tailored trousers for a polished, business-ready<br><br>appearance. Add a classic button-up shirt for added professionalism.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Skirt Color:</strong> Charcoal Grey, Black, or Navy Blue to keep the look formal and structured.<br><br><strong>Blouse Color:</strong> Ivory, Light Blue, or Soft Beige for a soft, elegant contrast to the darker<br><br>tones.<br><br><strong>Style:</strong> A pencil skirt combined with a tailored blouse creates a sophisticated<br><br>silhouette. Tuck in the blouse for a refined and sleek look, and accessorize<br><br>minimally for a neat appearance.<br><br><strong>A-Line Dress:</strong><br><br><strong>Dress Color:</strong> Charcoal Grey, Navy Blue, or Black for a chic, office-appropriate look.<br><br><strong>Style:</strong> A knee-length A-line dress with a simple, clean design is perfect for formal<br><br>occasions. Opt for a modest neckline and subtle details to maintain<br><br>professionalism.<br><br><strong>Suit Dress:</strong><br><br><strong>Dress Color:</strong> Black, Navy Blue, or Charcoal Grey for a sharp, professional appearance.<br><br><strong>Style:</strong> A tailored suit dress that fits the body while offering structure. Pair it with a<br><br>blazer for an added level of formality and sophistication.<br><br><strong>Tailored Pants and Button-Down Shirt:</strong><br><br><strong>Shirt Color:</strong> Ivory, Light Blue, or Soft Beige for a polished and subtle contrast.<br><br><strong>Pants Color:</strong> Black, Charcoal Grey, or Navy Blue for a professional look.<br><br><strong>Style:</strong> A crisp button-down shirt paired with high-waisted tailored pants creates a<br><br>clean, structured silhouette. Pair with low heels or flats for comfort and style.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Jewel tones like Emerald Green, Deep Burgundy, Sapphire Blue, or<br><br>Rich Purple to enhance brown skin and light hair.<br><br><strong>Accent Colors:</strong> Soft Gold, Champagne, or Ivory for a chic, balanced contrast.<br><br><strong>Avoid:</strong> Neon colors or overly bright tones that may distract from the sophistication of the<br><br>look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Dress:</strong><br><br><strong>Dress Color:</strong> Emerald Green, Burgundy, or Deep Purple to highlight brown skin and light<br><br>hair for a bold, vibrant look.<br><br><strong>Style:</strong> A fitted or A-line dress with a flattering neckline (V-neck or sweetheart) that<br><br>enhances the overall elegance. A dress with subtle detailing like lace, ruffles, or<br><br>sequins will add an extra touch of glam.<br><br><strong>Length:</strong> Knee-length or midi-length for a balance between comfort and elegance.<br><br><strong>Top and Skirt Combo:</strong><br><br><strong>Top Color:</strong> Champagne, Soft Gold, or Ivory to complement the richness of brown skin<br><br>and light hair.<br><br><strong>Skirt Color:</strong> Black, Burgundy, or Navy for contrast and sophistication.<br><br><strong>Style:</strong> A fitted, elegant top paired with a flared or pencil skirt. Opt for a statement<br><br>blouse like one with delicate ruffles or an off-shoulder design. This creates a<br><br>refined, youthful look perfect for a night out.<br><br><strong>Jumpsuit:</strong><br><br><strong>Jumpsuit Color:</strong> Deep Burgundy, Charcoal, or Sapphire Blue to create a bold and<br><br>fashionable statement.<br><br><strong>Style:</strong> A sleek, tailored jumpsuit with a fitted bodice and wide-leg pants for<br><br>comfort and movement. A keyhole neckline or a cinched waist will add structure<br><br>while keeping the look fresh and modern.<br><br><strong>Tailored Pants and Blouse:</strong><br><br><strong>Blouse Color:</strong> Ivory, Champagne, or Soft Peach for a light, flattering touch.<br><br><strong>Pants Color:</strong> Black or Burgundy to keep the look sophisticated.<br><br><strong>Style:</strong> A satin or silk blouse paired with high-waisted tailored pants. A blouse with<br><br>delicate details like lace or sequins will elevate the outfit for a chic, party-ready<br><br>vibe.<br><br><strong>Maxi Skirt and Top Combo:</strong><br><br><strong>Top Color:</strong> Ivory, Soft Pink, or Champagne to complement brown skin and light hair.<br><br><strong>Skirt Color:</strong> Burgundy, Emerald Green, or Charcoal for a striking combination.<br><br><strong>Style:</strong> A flowy maxi skirt paired with a fitted or crop top. This offers a relaxed yet<br><br>elegant look for a casual date night or a slightly more laid-back party style.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Bold, rich tones like Emerald Green, Deep Burgundy, Sapphire Blue, or<br><br>Royal Purple to complement brown skin and dark hair.<br><br><strong>Accent Colors:</strong> Soft Gold, Champagne, Ivory, or Blush Pink for a subtle contrast and<br><br>added sophistication.<br><br><strong>Avoid:</strong> Neon or overly bright colors that may overpower the natural beauty of the outfit.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Dress:</strong><br><br><strong>Dress Color:</strong> Emerald Green, Burgundy, or Deep Purple to make a striking, elegant<br><br>statement.<br><br><strong>Style:</strong> A fitted or A-line dress with a flattering neckline (V-neck or sweetheart) that<br><br>enhances the overall silhouette. A dress with lace, sequins, or a subtle pattern<br><br>can add a touch of glamour without being overwhelming.<br><br><strong>Length:</strong> Knee-length or midi-length for an elegant, comfortable fit that suits the<br><br>occasion.<br><br><strong>Top and Skirt Combo:</strong><br><br><strong>Top Color:</strong> Soft Gold, Ivory, or Blush Pink to complement brown skin and dark hair with<br><br>a light, warm contrast.<br><br><strong>Skirt Color:</strong> Black, Burgundy, or Navy for a stylish, classic pairing.<br><br><strong>Style:</strong> A statement blouse with ruffles, a wrap design, or off-shoulder styling<br><br>paired with a sleek pencil or flared skirt. This creates a balanced, fashionable<br><br>look for a party or date night.<br><br><strong>Jumpsuit:</strong><br><br><strong>Jumpsuit Color:</strong> Deep Burgundy, Charcoal Grey, or Sapphire Blue to create a modern,<br><br>sophisticated outfit.<br><br><strong>Style:</strong> A fitted, tailored jumpsuit with wide legs or a high-waisted, slim-leg style<br><br>for a chic and comfortable vibe. Look for a design with a cinched waist or a<br><br>plunging neckline for added glamour.<br><br><strong>Tailored Pants and Blouse:</strong><br><br><strong>Blouse Color:</strong> Champagne, Ivory, or Blush Pink to bring out a soft contrast against<br><br>brown skin and dark hair.<br><br><strong>Pants Color:</strong> Black, Navy, or Deep Burgundy to keep the look balanced and formal yet<br><br>stylish.<br><br><strong>Style:</strong> A satin or silk blouse with a relaxed yet sophisticated look, paired with<br><br>high-waisted, tailored pants for a modern, elegant silhouette. Add a statement<br><br>necklace or earrings to elevate the look.<br><br><strong>Maxi Skirt and Top Combo:</strong><br><br><strong>Top Color:</strong> Soft Gold, Champagne, or Blush Pink to add a touch of brightness and<br><br>sophistication.<br><br><strong>Skirt Color:</strong> Deep Burgundy, Emerald Green, or Charcoal for contrast and elegance.<br><br><strong>Style:</strong> A flowy, high-waisted maxi skirt paired with a fitted top or crop top to<br><br>balance the outfit. This look is ideal for a more relaxed yet still chic vibe for a date<br><br>or party.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich, vibrant tones like Gold, Royal Blue, Emerald Green, or Maroon to<br><br>contrast beautifully with deep skin and light hair.<br><br><strong>Accent Colors:</strong> Cream, Champagne, or Soft Pink for a balanced, elegant touch.<br><br><strong>Avoid:</strong> Pale or overly dull colors that may not complement the depth of the skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Gold, Maroon, or Royal Blue for a regal, traditional look that highlights<br><br>deep skin and light hair.<br><br><strong>Style:</strong> A traditional saree with intricate embroidery, mirror work, or zari for a touch<br><br>of glamour. The pallu can be styled to enhance the overall aesthetic.<br><br><strong>Fabric:</strong> Opt for luxurious fabrics like silk, chiffon, or georgette to create an<br><br>elegant flow and texture.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Lehenga Color:</strong> Emerald Green, Deep Pink, or Gold for a bold, yet graceful<br><br>combination.<br><br><strong>Style:</strong> A lehenga with detailed embroidery or embellishments paired with a crop<br><br>top or choli that has delicate work like bead or mirror designs. The lehenga can<br><br>be flared or more fitted depending on personal preference, with a statement<br><br>dupatta to complete the look.<br><br><strong>Anarkali Dress:</strong><br><br><strong>Dress Color:</strong> Deep Red, Royal Blue, or Maroon to create a rich, elegant statement.<br><br><strong>Style:</strong> A flowing Anarkali dress with intricate detailing around the neck and<br><br>sleeves, or a design with layered fabric for a dramatic effect. This can be paired<br><br>with a dupatta for added elegance.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Deep Purple, Gold, or Royal Blue to create a luxurious look against<br><br>deep skin.<br><br><strong>Salwar Color:</strong> Matching or contrasting tones like Maroon, Black, or Beige for balance.<br><br><strong>Style:</strong> A long kurti or kameez with detailed embroidery, paired with a matching<br><br>salwar or churidar and an elegant dupatta. This classic traditional outfit is both<br><br>comfortable and stylish for the occasion.<br><br><strong>Maxi Skirt and Top Combo:</strong><br><br><strong>Top Color:</strong> Gold, Maroon, or Deep Pink for a festive, bold appearance.<br><br><strong>Skirt Color:</strong> Deep Blue, Emerald Green, or Black to add contrast and sophistication.<br><br><strong>Style:</strong> A traditional maxi skirt paired with a beautiful embellished blouse or top,<br><br>with intricate embroidery or mirror work to give it a festive vibe. Adding a<br><br>matching dupatta can complete the look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich and vibrant tones such as Ruby Red, Royal Blue, Emerald Green,<br><br>or Gold to complement deep skin and dark hair.<br><br><strong>Accent Colors:</strong> Champagne, Soft Beige, or Ivory for an elegant, subtle contrast.<br><br><strong>Avoid:</strong> Very light or dull colors that may not enhance the natural beauty of deep skin<br><br>tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Ruby Red, Maroon, or Royal Blue for a classic, rich look that contrasts<br><br>beautifully with deep skin and dark hair.<br><br><strong>Style:</strong> Choose a saree with intricate embroidery or embellishments like zari work,<br><br>sequins, or stones for added elegance. The pallu can be draped elegantly to<br><br>enhance the overall look.<br><br><strong>Fabric:</strong> Opt for luxurious fabrics such as silk, velvet, or chiffon to give the saree a<br><br>graceful flow.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Lehenga Color:</strong> Deep Green, Gold, or Dark Burgundy for a regal and bold statement.<br><br><strong>Style:</strong> A lehenga with beautiful embroidery, mirror work, or bead detailing paired<br><br>with a fitted crop top or choli. The lehenga can be flared for a more dramatic<br><br>effect, with a matching dupatta to complete the ensemble.<br><br><strong>Anarkali Dress:</strong><br><br><strong>Dress Color:</strong> Rich shades like Dark Red, Maroon, or Navy Blue to create a striking<br><br>contrast with deep skin and dark hair.<br><br><strong>Style:</strong> A floor-length Anarkali dress with detailed work around the neckline and<br><br>sleeves, or with a layered design for a more ethereal look. Add a dupatta for<br><br>extra elegance.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Deep Purple, Emerald Green, or Gold to create a bold, elegant look.<br><br><strong>Salwar Color:</strong> Matching or contrasting tones like Beige, Black, or Maroon for balance.<br><br><strong>Style:</strong> A long kurti or kameez with beautiful embroidery or embellishments, paired<br><br>with a salwar or churidar for a comfortable yet chic appearance. A matching<br><br>dupatta can elevate the look further.<br><br><strong>Maxi Skirt and Top Combo:</strong><br><br><strong>Top Color:</strong> Deep Burgundy, Gold, or Emerald Green for a festive and vibrant<br><br>appearance.<br><br><strong>Skirt Color:</strong> Dark Blue, Black, or Deep Red for a stylish contrast.<br><br><strong>Style:</strong> A traditional maxi skirt with an embellished blouse or top featuring intricate<br><br>beadwork, mirror work, or thread embroidery. A matching dupatta can add an<br><br>extra layer of elegance to the outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Dark, rich shades like Charcoal Grey, Navy, Burgundy, or Deep Purple<br><br>to create a professional, polished look.<br><br><strong>Accent Colors:</strong> Soft Beige, Cream, or Ivory for subtle contrasts that add elegance.<br><br><strong>Avoid:</strong> Bright or neon colors that may not convey the formality of the occasion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey, Navy, or Deep Burgundy for a sophisticated and strong<br><br>appearance.<br><br><strong>Style:</strong> Opt for a tailored blazer for a sharp, well-fitted look that exudes<br><br>professionalism. A single-breasted style is classic and suitable for formal<br><br>settings.<br><br><strong>Trousers Color:</strong> Matching Navy, Charcoal, or Black trousers to create a sleek,<br><br>coordinated look.<br><br><strong>Style:</strong> Choose straight-leg or slightly tapered trousers for a modern, professional<br><br>silhouette.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Skirt Color:</strong> Charcoal, Navy, or Black for a timeless, professional base.<br><br><strong>Blouse Color:</strong> Light Blue, Soft Pink, or Off-White to balance the dark skirt and create a<br><br>harmonious contrast.<br><br><strong>Style:</strong> A high-waisted pencil skirt paired with a well-fitted blouse. Opt for a blouse<br><br>with a simple collar or subtle details such as a bow tie or small buttons for added<br><br>style.<br><br><strong>Shift Dress:</strong><br><br><strong>Dress Color:</strong> Burgundy, Navy, or Charcoal Grey for an elegant, professional look.<br><br><strong>Style:</strong> A sleeveless or short-sleeve shift dress with a simple, straight-cut design.<br><br>This dress can be accessorized with a belt for added shape or worn as-is for a<br><br>more minimalistic look.<br><br><strong>Tailored Suit:</strong><br><br><strong>Suit Color:</strong> Navy, Charcoal Grey, or Black for a clean, sharp, and professional<br><br>appearance.<br><br><strong>Style:</strong> A tailored suit with a single-breasted jacket, paired with matching trousers<br><br>or a pencil skirt. This outfit can be accessorized with a simple, elegant watch or<br><br>bracelet.<br><br><strong>Blouse and A-Line Skirt:</strong><br><br><strong>Blouse Color:</strong> Soft Beige, Ivory, or Light Blue for a fresh and professional look.<br><br><strong>Skirt Color:</strong> Navy, Black, or Charcoal for a grounded, sleek appearance.<br><br><strong>Style:</strong> A structured A-line skirt that is knee-length or just below, paired with a<br><br>simple blouse with minimal detailing for a clean, professional vibe.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Classic and refined shades like Charcoal Grey, Navy Blue, Burgundy,<br><br>and Black to complement deep skin and dark hair.<br><br><strong>Accent Colors:</strong> Soft Beige, Ivory, or Cream to provide contrast and lighten the overall<br><br>look.<br><br><strong>Avoid:</strong> Too many bright or neon colors that may not be appropriate for a formal setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey, Navy Blue, or Burgundy for a professional and<br><br>sophisticated look.<br><br><strong>Style:</strong> Opt for a tailored, single-breasted blazer for a sharp, structured<br><br>appearance. This is perfect for formal office settings and can be paired with<br><br>matching trousers or skirts.<br><br><strong>Trousers Color:</strong> Navy, Charcoal, or Black trousers to maintain a cohesive, elegant<br><br>appearance.<br><br><strong>Style:</strong> A tailored or straight-leg cut will keep the outfit professional, while a<br><br>slightly tapered style can add a modern touch.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Skirt Color:</strong> Black, Charcoal, or Navy for a polished and refined look.<br><br><strong>Blouse Color:</strong> Soft Beige, Light Pink, or Off-White to add a contrast while maintaining a<br><br>clean, formal aesthetic.<br><br><strong>Style:</strong> A well-fitted pencil skirt paired with a button-down blouse or a top with<br><br>subtle details like a bow tie or small ruffles for added elegance.<br><br><strong>Shift Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy, Charcoal, or Navy for a chic, office-ready style.<br><br><strong>Style:</strong> A knee-length shift dress with a simple and straight cut. This dress can be<br><br>accessorized with a slim belt or left as-is for a minimalistic, sophisticated look.<br><br><strong>Tailored Suit:</strong><br><br><strong>Suit Color:</strong> Black, Navy, or Charcoal Grey for a timeless, polished appearance.<br><br><strong>Style:</strong> A fitted suit with a single-breasted jacket and matching trousers or a pencil<br><br>skirt. This suit can be paired with a neutral blouse or top to keep the look<br><br>professional and clean.<br><br><strong>Blouse and A-Line Skirt:</strong><br><br><strong>Blouse Color:</strong> Light Blue, Ivory, or Beige for a fresh and professional vibe.<br><br><strong>Skirt Color:</strong> Black, Navy, or Charcoal for a balanced, formal look.<br><br><strong>Style:</strong> An A-line skirt with a structured blouse. The skirt can be knee-length or<br><br>just below the knee, providing comfort while still looking professional.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Jewel tones like Emerald Green, Sapphire Blue, Burgundy, or Rich<br><br>Purple to complement deep skin and light hair for a striking look.<br><br><strong>Accent Colors:</strong> Soft Gold, Champagne, or Ivory for a subtle, elegant contrast that<br><br>enhances the overall outfit.<br><br><strong>Avoid:</strong> Neon or overly bright colors that might overpower the sophisticated vibe of the<br><br>occasion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Dress:</strong><br><br><strong>Dress Color:</strong> Emerald Green, Sapphire Blue, or Burgundy for a bold, chic look that<br><br>enhances the deep skin tone and light hair.<br><br><strong>Style:</strong> A fitted, knee-length dress with a slight flare or bodycon silhouette for a<br><br>sleek, modern appearance. Opt for a dress with minimal detailing or subtle<br><br>embellishments like lace or sequins to keep the focus on the rich color.<br><br><strong>Neckline:</strong> A V-neck or scoop neck to create a flattering shape and add an<br><br>elegant touch.<br><br><strong>Top and Skirt Combo:</strong><br><br><strong>Top Color:</strong> Soft Ivory, Light Champagne, or Blush Pink for a gentle contrast against<br><br>deep skin and light hair.<br><br><strong>Style:</strong> A silky or satin top with a delicate drape or soft ruffles for a feminine,<br><br>romantic look.<br><br><strong>Skirt Color:</strong> Burgundy, Charcoal, or Navy for a balance of boldness and sophistication.<br><br><strong>Style:</strong> A high-waisted, A-line skirt that falls just above the knee, pairing perfectly<br><br>with a fitted blouse or top. This combination is ideal for a date night or party with<br><br>a touch of flair.<br><br><strong>Jumpsuit:</strong><br><br><strong>Jumpsuit Color:</strong> Deep Purple, Sapphire, or Burgundy for a luxurious, bold style.<br><br><strong>Style:</strong> A sleek, form-fitting jumpsuit with a structured bodice and tapered legs to<br><br>highlight your figure while staying comfortable and stylish. A halter neck or<br><br>off-shoulder style can add a playful, flirty vibe for the evening.<br><br><strong>Blouse and Pants:</strong><br><br><strong>Blouse Color:</strong> Soft Ivory, Champagne, or Blush Pink to add lightness and contrast to the<br><br>outfit.<br><br><strong>Style:</strong> A fitted blouse with subtle details like pleats or lace, perfect for a date night<br><br>look. Consider an off-shoulder or halter style to add an element of sophistication.<br><br><strong>Pants Color:</strong> Dark Burgundy, Navy, or Charcoal for a bold yet sophisticated appearance.<br><br><strong>Style:</strong> High-waisted trousers with a slim fit to balance the relaxed blouse. A<br><br>wide-leg style can also add a more dramatic, stylish touch.<br><br><strong>Romantic Midi Dress:</strong><br><br><strong>Dress Color:</strong> Sapphire Blue, Burgundy, or Emerald Green to make a strong yet elegant<br><br>impression.<br><br><strong>Style:</strong> A midi-length dress with a flowy skirt and a fitted top. Opt for a wrap-style<br><br>dress or one with a flattering A-line silhouette to enhance the natural shape. This<br><br>style provides a perfect balance of comfort and elegance for a party or romantic<br><br>evening.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Teenager (13-19)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich, jewel tones like Ruby Red, Sapphire Blue, Emerald Green, or Gold to<br><br>complement deep skin and dark hair for a striking look.<br><br><strong>Accent Colors:</strong> Soft Gold, Champagne, Ivory, or Silver for a subtle, elegant contrast that<br><br>complements the rich tones of the primary colors.<br><br><strong>Avoid:</strong> Overly bright or neon colors that can clash with the natural tones and overpower the<br><br>sophisticated look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Dress:</strong><br><br><strong>Dress Color:</strong> Ruby Red, Sapphire Blue, or Emerald Green for a bold, vibrant choice that<br><br>flatters deep skin and dark hair.<br><br><strong>Style:</strong> A sleek, bodycon dress or an A-line dress that hugs the curves while<br><br>providing freedom of movement. A dress with a high neckline or plunging<br><br>neckline can add an extra touch of sophistication, depending on your style<br><br>preference.<br><br><strong>Fabric:</strong> Satin or silk fabrics that give a luxurious feel and enhance the rich colors.<br><br>Subtle embellishments like sequins, lace, or embroidery can add an extra layer of<br><br>elegance without overwhelming the look.<br><br><strong>Top and Skirt Combo:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Blush Pink to create a soft contrast with the deep skin<br><br>and dark hair.<br><br><strong>Style:</strong> A fitted top with intricate details, such as a subtle ruffle or lace trim, for a<br><br>touch of elegance and femininity. A sweetheart or off-shoulder neckline can add<br><br>romance to the overall look.<br><br><strong>Skirt Color:</strong> Dark Burgundy, Charcoal, or Navy for a sophisticated yet bold style.<br><br><strong>Style:</strong> A high-waisted skirt in an A-line or pencil style. Opt for a midi or<br><br>knee-length skirt that creates a flattering silhouette. This combination works well<br><br>for a fun and flirty look.<br><br><strong>Jumpsuit:</strong><br><br><strong>Jumpsuit Color:</strong> Sapphire, Burgundy, or Emerald Green for a luxurious,<br><br>statement-making appearance.<br><br><strong>Style:</strong> A fitted, tailored jumpsuit with a structured bodice and wide legs for a<br><br>dramatic and chic effect. A halter neck or off-shoulder style can add a flirty touch,<br><br>perfect for a date night or party. The clean lines of a jumpsuit will give you a<br><br>sophisticated, modern look.<br><br><strong>Blouse and Trousers:</strong><br><br><strong>Blouse Color:</strong> Ivory, Champagne, or Blush Pink to keep the look light and fresh while<br><br>balancing the deeper colors of the trousers.<br><br><strong>Style:</strong> A fitted blouse with a high neck or V-neck, with minimalistic designs or light<br><br>embroidery for added elegance.<br><br><strong>Trousers Color:</strong> Dark Burgundy, Charcoal, or Navy for a bold yet stylish appearance.<br><br><strong>Style:</strong> Slim-fit, high-waisted trousers that give a sleek look while maintaining<br><br>comfort. A pleated style can also add texture and interest to the outfit.<br><br><strong>Maxi Dress:</strong><br><br><strong>Dress Color:</strong> Sapphire Blue, Ruby Red, or Emerald Green for a glamorous,<br><br>eye-catching appearance.<br><br><strong>Style:</strong> A floor-length, flowing maxi dress with a defined waistline. A wrap-style<br><br>dress or one with a plunging neckline can add a chic, sophisticated touch for the<br><br>evening.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft Pastels like Blush Pink, Mint Green, Lavender, or Sky Blue for a<br><br>delicate, refined look.<br><br><strong>Accent Colors:</strong> Ivory, Champagne, or Rose Gold for a sophisticated contrast.<br><br><strong>Avoid:</strong> Dark or overly vibrant colors like Neon Green or Bright Orange that may<br><br>overpower fair skin and light hair.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Blush Pink, Mint Green, or Sky Blue with subtle gold or silver zari work.<br><br><strong>Blouse:</strong> A fitted blouse in a complementary color, like Ivory, Champagne, or<br><br>Rose Gold, with minimal embroidery or sequins to add an elegant touch.<br><br><strong>Style:</strong> Opt for a lightweight fabric like chiffon, silk, or georgette for a graceful<br><br>drape. Consider a traditional pleated pallu for a classic look.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Suit Color:</strong> Lavender or Pastel Peach with intricate embroidery or subtle<br><br>embellishments.<br><br><strong>Dupatta:</strong> A sheer dupatta in a matching or slightly contrasting shade, such as<br><br>Ivory with gold embroidery.<br><br><strong>Style:</strong> A floor-length Anarkali suit with a fitted bodice and flared skirt. Look for<br><br>details like delicate thread work or zari for a festive appearance.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Lehenga Color:</strong> Soft Pink, Light Mint, or Powder Blue with subtle shimmer or thread<br><br>work.<br><br><strong>Choli:</strong> A well-fitted choli in a matching or contrasting shade, such as Rose Gold<br><br>or Champagne, with intricate designs like floral embroidery or mirror work.<br><br><strong>Dupatta:</strong> A dupatta in a complementary pastel shade, lightly embroidered or with<br><br>a scalloped edge for added charm.<br><br><strong>Style:</strong> Go for a high-waisted lehenga with light pleats or a flowy A-line style for a<br><br>contemporary touch.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Pastel Yellow, Light Mauve, or Baby Blue with subtle embellishments<br><br>like chikankari work or bead embroidery.<br><br><strong>Salwar:</strong> A churidar or palazzo in a matching or complementary shade, such as<br><br>Ivory or Champagne.<br><br><strong>Dupatta:</strong> A lightweight dupatta with embroidered borders or light sequins to tie<br><br>the look together.<br><br><strong>Style:</strong> A straight-cut kameez with clean lines and minimalistic embroidery for an<br><br>understated yet elegant appearance.<br><br><strong>Sharara Suit:</strong><br><br><strong>Sharara Color:</strong> Powder Blue or Peach with delicate gold or silver motifs.<br><br><strong>Kurta:</strong> A short kurta with intricate embroidery or mirror work to enhance the<br><br>traditional look.<br><br><strong>Dupatta:</strong> A matching or slightly contrasting dupatta with minimal embellishments<br><br>for a refined touch.<br><br><strong>Style:</strong> A flared sharara with subtle pleats for a festive and graceful look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Jewel tones like Ruby Red, Emerald Green, Deep Blue, or Royal<br><br>Purple for a striking, elegant look.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Ivory for a refined contrast.<br><br><strong>Avoid:</strong> Very light pastels or neon shades that may underplay the richness of dark hair<br><br>against fair skin.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Emerald Green, Ruby Red, or Deep Blue with gold zari or threadwork.<br><br><strong>Blouse:</strong> A fitted blouse in a matching or complementary shade like Gold or Ivory<br><br>with intricate embroidery or beadwork.<br><br><strong>Style:</strong> Opt for a silk, banarasi, or kanjeevaram saree with bold patterns and a rich<br><br>texture. Style with a pleated pallu for a regal touch.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Suit Color:</strong> Royal Purple or Deep Maroon with elaborate embroidery or stonework.<br><br><strong>Dupatta:</strong> A sheer dupatta in Gold or a matching shade with detailed borders.<br><br><strong>Style:</strong> A floor-length Anarkali suit with a cinched waist and flared skirt to create a<br><br>graceful silhouette. Look for traditional designs like paisley or floral patterns.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Lehenga Color:</strong> Midnight Blue, Burgundy, or Forest Green with heavy gold or silver<br><br>embellishments.<br><br><strong>Choli:</strong> A well-fitted choli in a complementary tone like Gold or Ivory with mirror<br><br>work or intricate zari designs.<br><br><strong>Dupatta:</strong> A rich, embroidered dupatta in a contrasting or matching shade to<br><br>complete the look.<br><br><strong>Style:</strong> Choose a high-waisted lehenga with an A-line or flared silhouette for an<br><br>elegant, youthful vibe.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Dark Teal, Deep Red, or Royal Blue with light embroidery or chikankari<br><br>work.<br><br><strong>Salwar:</strong> A churidar or palazzo in a matching or contrasting shade like Gold or<br><br>Ivory.<br><br><strong>Dupatta:</strong> A heavily embroidered dupatta in a complementary color to enhance<br><br>the overall outfit.<br><br><strong>Style:</strong> A straight-cut or slightly flared kameez for a balanced traditional<br><br>appearance.<br><br><strong>Sharara Suit:</strong><br><br><strong>Sharara Color:</strong> Ruby Red or Deep Plum with gold threadwork or subtle sequins.<br><br><strong>Kurta:</strong> A short kurta with intricate embroidery, patterns, or stonework.<br><br><strong>Dupatta:</strong> A rich dupatta with a matching shade and embellished borders.<br><br><strong>Style:</strong> Pair a flared sharara with a lightweight, ornate kurta for a festive and<br><br>elegant look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft pastels like Powder Blue, Blush Pink, Mint Green, or Neutral tones<br><br>like Beige, Ivory, or Light Grey for a polished, professional appearance.<br><br><strong>Accent Colors:</strong> Navy Blue, Charcoal Grey, or Deep Brown for contrast.<br><br><strong>Avoid:</strong> Neon shades or overly bright colors that may overpower a formal look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Trousers/Skirt:</strong><br><br><strong>Blazer Color:</strong> Light Grey, Beige, or Powder Blue for a soft, refined look.<br><br><strong>Inner Layer:</strong> A fitted white or pastel blouse with minimal detailing (e.g., small<br><br>pleats or a keyhole neckline).<br><br><strong>Trousers/Skirt Color:</strong> Charcoal Grey, Navy Blue, or matching the blazer for a<br><br>cohesive ensemble.<br><br><strong>Style:</strong> Opt for tailored trousers or a pencil skirt with a knee-length hemline for a<br><br>formal yet feminine vibe.<br><br><strong>Formal Dress:</strong><br><br><strong>Dress Color:</strong> Blush Pink, Mint Green, or Light Grey with simple, clean lines.<br><br><strong>Style:</strong> Choose a sheath dress or an A-line midi dress with subtle details like<br><br>pleats or a belted waist.<br><br><strong>Layering:</strong> Pair with a structured blazer in a neutral tone like Ivory or Charcoal<br><br>Grey.<br><br><strong>Details:</strong> Keep the neckline modest, such as a boat neck or high round neck.<br><br><strong>Button-Up Shirt with Trousers:</strong><br><br><strong>Shirt Color:</strong> White, Light Blue, or Soft Lavender for a crisp, professional appearance.<br><br><strong>Trousers Color:</strong> Navy Blue, Beige, or Charcoal Grey for contrast.<br><br><strong>Style:</strong> Opt for slim-fit or straight-leg trousers for a modern, streamlined silhouette.<br><br><strong>Details:</strong> Add a subtle accent, like a textured fabric or pinstripe pattern, to<br><br>enhance the formal look.<br><br><strong>Kurta and Cigarette Pants (For Traditional Office Settings):</strong><br><br><strong>Kurta Color:</strong> Ivory, Pastel Peach, or Powder Blue with minimal embroidery or chikankari<br><br>detailing.<br><br><strong>Pants Color:</strong> White, Beige, or Light Grey to maintain a balanced and<br><br>professional appearance.<br><br><strong>Style:</strong> Choose a straight-cut or A-line kurta with 3/4 sleeves and a modest<br><br>neckline for an elegant touch.<br><br><strong>Peplum Top and Trousers:</strong><br><br><strong>Top Color:</strong> Light Grey, Blush Pink, or Mint Green with minimal embellishments.<br><br><strong>Trousers Color:</strong> Navy Blue or Charcoal Grey for contrast.<br><br><strong>Style:</strong> A well-fitted peplum top adds a subtle, formal flair when paired with slim<br><br>trousers.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Classic neutrals like Navy Blue, Charcoal Grey, Black, or White for a<br><br>professional, polished look.<br><br><strong>Accent Colors:</strong> Soft pastels such as Blush Pink, Powder Blue, or Lavender for a subtle<br><br>feminine touch.<br><br><strong>Avoid:</strong> Overly bold or flashy colors like bright red or neon tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Trousers/Skirt:</strong><br><br><strong>Blazer Color:</strong> Navy Blue, Charcoal Grey, or Black for a timeless formal appearance.<br><br><strong>Inner Layer:</strong> A fitted blouse in White, Light Blue, or Lavender with minimal<br><br>embellishments.<br><br><strong>Trousers/Skirt Color:</strong> Matching the blazer for a monochromatic look, or in a<br><br>complementing shade like Light Grey or Beige.<br><br><strong>Style:</strong> Opt for tailored trousers or a pencil skirt with a modest hemline.<br><br><strong>Formal Dress:</strong><br><br><strong>Dress Color:</strong> Navy Blue, Charcoal Grey, or Soft Pink for a refined look.<br><br><strong>Style:</strong> Choose a sheath or A-line dress with clean lines and minimal detailing.<br><br><strong>Layering:</strong> Pair with a structured blazer in Black or Grey for added<br><br>professionalism.<br><br><strong>Details:</strong> Neckline options like a boat neck or V-neck keep the look elegant<br><br>without being too bold.<br><br><strong>Button-Up Shirt with Trousers:</strong><br><br><strong>Shirt Color:</strong> White, Soft Lavender, or Light Grey for a crisp and professional vibe.<br><br><strong>Trousers Color:</strong> Navy Blue, Black, or Charcoal Grey for a balanced outfit.<br><br><strong>Style:</strong> Choose slim-fit or straight-leg trousers for a modern and tailored<br><br>appearance.<br><br><strong>Details:</strong> Subtle pinstripes or textured fabrics can add a sophisticated touch.<br><br><strong>Kurta and Cigarette Pants (For Traditional Office Settings):</strong><br><br><strong>Kurta Color:</strong> White, Ivory, or Pastel Pink with minimal embroidery or clean lines.<br><br><strong>Pants Color:</strong> Light Grey or Beige to maintain a balanced and formal look.<br><br><strong>Style:</strong> A straight-cut or A-line kurta with 3/4 sleeves and a modest neckline.<br><br><strong>Peplum Top and Trousers:</strong><br><br><strong>Top Color:</strong> Charcoal Grey, Blush Pink, or Light Blue with minimal patterns or detailing.<br><br><strong>Trousers Color:</strong> Navy Blue or Black for contrast.<br><br><strong>Style:</strong> A fitted peplum top with clean lines and a tailored pair of trousers creates a<br><br>professional yet modern look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft Blush, Champagne, Light Blue, or Rose Gold for an enchanting<br><br>and youthful vibe.<br><br><strong>Accent Colors:</strong> Metallics like Gold or Silver, or muted tones such as Dusty Pink or Mint<br><br>Green for added elegance.<br><br><strong>Avoid:</strong> Harsh colors like Neon Green or overly dark shades like Deep Black.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Champagne, Blush Pink, or Light Blue for a soft and romantic look.<br><br><strong>Style:</strong> Opt for an A-line, fit-and-flare, or sheath dress with delicate details like<br><br>lace, sequins, or a subtle shimmer.<br><br><strong>Length:</strong> Knee-length or midi dresses work well for a balanced yet alluring<br><br>appearance.<br><br><strong>Neckline:</strong> Sweetheart, halter, or off-shoulder styles to highlight the neckline.<br><br><strong>Stylish Top and Skirt:</strong><br><br><strong>Top Color:</strong> Soft Gold, Ivory, or Rose Pink for a radiant glow.<br><br><strong>Skirt Color:</strong> Light Grey, Champagne, or Pastel Blue for a harmonious contrast.<br><br><strong>Style:</strong> A crop top or fitted blouse paired with a high-waisted pleated or pencil skirt<br><br>creates a chic silhouette.<br><br><strong>Jumpsuit or Romper:</strong><br><br><strong>Color:</strong> Dusty Rose, Light Grey, or Mint Green for a trendy yet elegant touch.<br><br><strong>Style:</strong> Choose a jumpsuit with a cinched waist or wide-leg pants for a flattering<br><br>look.<br><br><strong>Details:</strong> Add soft ruffles or a bow detail for a playful element.<br><br><strong>Traditional Saree-Inspired Outfit:</strong><br><br><strong>Blouse Color:</strong> Gold or Ivory with light embellishments.<br><br><strong>Saree/Drape Color:</strong> Soft Pastel Pink or Mint Green for a dreamy, youthful vibe.<br><br><strong>Style:</strong> Opt for a pre-stitched saree or draped lehenga for a modern take on<br><br>traditional wear.<br><br><strong>Chic Two-Piece Set:</strong><br><br><strong>Top Color:</strong> Metallic Silver, Rose Gold, or Light Lavender.<br><br><strong>Bottom Color:</strong> Light Beige or Soft Blue for an understated yet elegant finish.<br><br><strong>Style:</strong> A fitted top with a flared skirt or wide-legged pants for a mix of comfort and<br><br>style.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Emerald Green, Navy, or Royal Blue to create a bold and<br><br>striking contrast.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Soft Neutrals like Beige or Ivory to enhance<br><br>sophistication.<br><br><strong>Avoid:</strong> Overly muted shades like Pale Yellow or washed-out tones that don’t highlight<br><br>your natural contrast.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Deep Red, Navy, or Emerald Green for a classic yet glamorous look.<br><br><strong>Style:</strong> Opt for a floor-length gown, a midi wrap dress, or an A-line dress with<br><br>details like lace, sequins, or a satin finish.<br><br><strong>Neckline:</strong> Consider a V-neck, off-shoulder, or halter neckline to complement dark<br><br>hair.<br><br><strong>Stylish Top and Skirt:</strong><br><br><strong>Top Color:</strong> Ivory, Gold, or Champagne for a soft, glowing effect.<br><br><strong>Skirt Color:</strong> Deep Navy or Charcoal for an elegant contrast.<br><br><strong>Style:</strong> A fitted crop top or embellished blouse paired with a high-waisted flowy or<br><br>pencil skirt for a chic, balanced look.<br><br><strong>Jumpsuit or Romper:</strong><br><br><strong>Color:</strong> Rich Burgundy, Dark Teal, or Navy for a modern, sophisticated vibe.<br><br><strong>Style:</strong> Go for a tailored jumpsuit with a cinched waist and wide-leg pants for a<br><br>sleek silhouette.<br><br><strong>Details:</strong> Subtle embellishments or a sash belt can add a touch of elegance.<br><br><strong>Traditional Saree-Inspired Outfit:</strong><br><br><strong>Blouse Color:</strong> Gold, Deep Red, or Midnight Blue for a regal effect.<br><br><strong>Saree/Drape Color:</strong> Navy or Deep Green with metallic accents to highlight fair<br><br>skin and dark hair.<br><br><strong>Style:</strong> Choose a pre-stitched saree or draped lehenga with modern cuts and bold<br><br>patterns for a unique flair.<br><br><strong>Chic Two-Piece Set:</strong><br><br><strong>Top Color:</strong> Deep Red, Emerald Green, or Royal Blue for a bold statement.<br><br><strong>Bottom Color:</strong> Gold, Ivory, or Dark Grey for a polished finish.<br><br><strong>Style:</strong> A fitted top with a matching flared skirt or wide-legged pants for an<br><br>effortlessly stylish look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Peach, Mint Green, Lavender, or Light Coral for a soft and feminine<br><br>appeal.<br><br><strong>Accent Colors:</strong> Gold, Rose Gold, or Ivory to add elegance and sophistication.<br><br><strong>Avoid:</strong> Dark or overly bold shades like Black or Deep Red that might overshadow your<br><br>light skin and hair tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Kurta Set:</strong><br><br><strong>○ Kurta Color:</strong> Peach, Mint Green, or Lavender with subtle embroidery or floral<br><br>patterns.<br><br><strong>○ Bottom Color:</strong> Cream, Beige, or Soft Gold for a harmonious blend.<br><br><strong>○ Style:</strong> A long, flowy Anarkali or straight-cut kurta with delicate zari or mirror work.<br><br><strong>Saree or Lehenga-Inspired Outfit:</strong><br><br><strong>○ Blouse Color:</strong> Gold, Ivory, or Rose Gold for a radiant look.<br><br><strong>○ Saree/Lehenga Color:</strong> Pastel Pink, Light Green, or Soft Coral with intricate<br><br>designs or embellishments.<br><br><strong>○ Style:</strong> Opt for a pre-stitched saree or an A-line lehenga for comfort and elegance.<br><br><strong>Traditional Skirt and Top:</strong><br><br><strong>○ Top Color:</strong> Light Peach, Lilac, or Champagne with embroidery or lace details.<br><br><strong>○ Skirt Color:</strong> Mint Green or Ivory with metallic accents.<br><br><strong>○ Style:</strong> A fitted top paired with a flared skirt for a chic traditional vibe.<br><br><strong>Chic Salwar Suit:</strong><br><br><strong>○ Kameez Color:</strong> Soft Coral or Baby Pink with detailed thread or beadwork.<br><br><strong>○ Bottom and Dupatta Color:</strong> Beige or Gold with complementary embellishments.<br><br><strong>○ Style:</strong> Choose a tailored salwar suit with a flowy dupatta for a timeless traditional<br><br>look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Emerald Green, Maroon, or Royal Blue to create a bold and<br><br>classic look.<br><br><strong>Accent Colors:</strong> Gold, Bronze, or Ivory to enhance elegance and sophistication.<br><br><strong>Avoid:</strong> Overly pale shades like Soft Yellow or Washed-Out Pink that may not highlight<br><br>the contrast of light skin and dark hair.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Kurta Set:</strong><br><br><strong>Kurta Color:</strong> Deep Red, Maroon, or Royal Blue with intricate zari or thread<br><br>embroidery.<br><br><strong>Bottom Color:</strong> Cream, Gold, or Beige for a polished look.<br><br><strong>Style:</strong> A long, straight-cut kurta or flared Anarkali for a regal vibe.<br><br><strong>Saree or Lehenga-Inspired Outfit:</strong><br><br><strong>Blouse Color:</strong> Gold, Ivory, or Dark Green for a striking effect.<br><br><strong>Saree/Lehenga Color:</strong> Emerald Green, Maroon, or Navy with bold borders and<br><br>metallic accents.<br><br><strong>Style:</strong> Opt for a traditional saree with a modern drape or a flared lehenga for<br><br>effortless grace.<br><br><strong>Traditional Skirt and Top:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Rose Gold with subtle sequin or bead<br><br>embellishments.<br><br><strong>Skirt Color:</strong> Deep Green, Burgundy, or Midnight Blue for a rich contrast.<br><br><strong>Style:</strong> A fitted crop top or blouse paired with a flared skirt for a balanced<br><br>traditional look.<br><br><strong>Chic Salwar Suit:</strong><br><br><strong>Kameez Color:</strong> Royal Blue, Deep Red, or Emerald Green with delicate<br><br>embroidery or mirror work.<br><br><strong>Bottom and Dupatta Color:</strong> Gold or Beige to harmonize with the overall outfit.<br><br><strong>Style:</strong> Go for a straight-fit salwar suit or a sharara for a graceful and trendy<br><br>traditional outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft Pastels, Light Grey, Dusty Rose, or Light Blue for a professional<br><br>yet elegant look.<br><br><strong>Accent Colors:</strong> Navy, Charcoal, or Soft Metallics like Silver to add sophistication.<br><br><strong>Avoid:</strong> Overly bright or bold colors like Neon Yellow or Orange that might distract in a<br><br>formal setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p>Tailored Blouse and Trousers<br><br><strong>Blouse Color:</strong> Soft Rose, Light Blue, or Ivory with subtle patterns or minimalistic<br><br>detailing.<br><br><strong>Trouser Color:</strong> Charcoal, Navy, or Beige for a professional, streamlined look.<br><br><strong>Style:</strong> A fitted blouse tucked into high-waisted trousers or a pencil skirt for a<br><br>clean, chic silhouette.<br><br><strong>Structured Sheath Dress:</strong><br><br><strong>Dress Color:</strong> Dusty Rose, Light Grey, or Navy for a refined, modern look.<br><br><strong>Style:</strong> A knee-length sheath dress with a slightly cinched waist for a flattering,<br><br>elegant fit.<br><br><strong>Blazer and Midi Skirt:</strong><br><br><strong>Blazer Color:</strong> Navy, Charcoal, or Soft Black for a classic office look.<br><br><strong>Skirt Color:</strong> Light Grey, Black, or Soft Beige for balance.<br><br><strong>Style:</strong> A tailored blazer worn with a midi skirt for a polished, professional<br><br>appearance.<br><br><strong>Smart Jumpsuit:</strong><br><br><strong>Jumpsuit Color:</strong> Light Blue, Soft Grey, or Ivory for a refreshing yet formal vibe.<br><br><strong>Style:</strong> A well-fitted, high-waisted jumpsuit with a subtle v-neckline and tapered<br><br>legs for a contemporary formal look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy, Charcoal Grey, Deep Burgundy, or Emerald Green for a bold,<br><br>professional appearance.<br><br><strong>Accent Colors:</strong> Ivory, White, or Silver to add a touch of elegance and contrast.<br><br><strong>Avoid:</strong> Overly bright or flashy colors like Neon or Fluorescent shades that may be too<br><br>attention-grabbing for a formal office setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blouse and Trousers:</strong><br><br><strong>Blouse Color:</strong> Ivory, Light Pink, or Soft White for a fresh and professional look.<br><br><strong>Trouser Color:</strong> Navy, Charcoal, or Black for a clean and polished appearance.<br><br><strong>Style:</strong> A well-tailored blouse paired with straight-leg trousers or a pencil skirt for a<br><br>sharp and elegant silhouette.<br><br><strong>Structured Sheath Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy, Charcoal Grey, or Navy for a chic,<br><br>office-appropriate statement.<br><br><strong>Style:</strong> A knee-length sheath dress with clean lines and minimalistic detailing for a<br><br>sophisticated, streamlined look.<br><br><strong>Blazer and Pencil Skirt:</strong><br><br><strong>Blazer Color:</strong> Navy, Charcoal, or Black for a classic professional look.<br><br><strong>Skirt Color:</strong> Black, Beige, or Soft Grey for a balanced and refined appearance.<br><br><strong>Style:</strong> A fitted blazer worn with a pencil skirt for a sleek, timeless ensemble.<br><br><strong>Smart Jumpsuit:</strong><br><br><strong>Jumpsuit Color:</strong> Navy, Deep Green, or Charcoal for a modern and professional<br><br>vibe.<br><br><strong>Style:</strong> A well-tailored jumpsuit with a structured waist and subtle details like a<br><br>v-neck or pleats for a contemporary formal look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Emerald Green, Royal Blue, or Black for a bold, glamorous<br><br>effect.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Soft Neutrals like Beige or Ivory to enhance<br><br>sophistication.<br><br><strong>Avoid:</strong> Pale or pastel shades like Soft Yellow or Light Pink that may not create enough<br><br>contrast with light skin and hair.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Deep Red, Emerald Green, or Royal Blue for a striking,<br><br>eye-catching look.<br><br><strong>Style:</strong> Opt for a form-fitting dress with a slightly flared skirt or a bodycon style<br><br>with a flattering silhouette. Consider details like lace, satin, or sequins for a more<br><br>luxurious touch.<br><br><strong>Neckline:</strong> A V-neck, off-shoulder, or halter neckline to create a chic and flattering<br><br>profile.<br><br><strong>Stylish Top and Skirt:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Soft Gold for a glowing, elegant effect.<br><br><strong>Skirt Color:</strong> Deep Navy, Burgundy, or Charcoal for a contrasting yet polished<br><br>finish.<br><br><strong>Style:</strong> A fitted crop top or embellished blouse paired with a high-waisted, flowy<br><br>skirt for a balance of chic and playful.<br><br><strong>Chic Jumpsuit:</strong><br><br><strong>Color:</strong> Rich Burgundy, Navy, or Black for a modern, sophisticated vibe.<br><br><strong>Style:</strong> A tailored jumpsuit with a cinched waist and wide-leg pants or a fitted<br><br>design for a sleek, polished look.<br><br><strong>Details:</strong> Subtle embellishments like gold buttons, a sash belt, or ruffle details can<br><br>add a touch of glamour.<br><br><strong>Saree-Inspired Outfit:</strong><br><br><strong>Blouse Color:</strong> Gold, Deep Red, or Midnight Blue for a regal effect.<br><br><strong>Saree/Drape Color:</strong> Navy, Deep Green, or Charcoal with metallic accents or<br><br>intricate borders.<br><br><strong>Style:</strong> Choose a pre-stitched saree or a draped lehenga with modern cuts and<br><br>bold patterns for a unique and sophisticated flair.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Emerald Green, Sapphire Blue, or Charcoal for a bold,<br><br>elegant appearance.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Ivory for a sophisticated, polished look.<br><br><strong>Avoid:</strong> Overly light or pastel shades like Pale Pink or Light Lavender that may not<br><br>provide enough contrast.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Deep Red, Emerald Green, or Sapphire Blue for a striking,<br><br>glamorous effect.<br><br><strong>Style:</strong> A floor-length gown or a figure-flattering midi dress with details like lace,<br><br>sequins, or satin to elevate the look.<br><br><strong>Neckline:</strong> A V-neck, off-shoulder, or sweetheart neckline to complement dark hair<br><br>and highlight the collarbone.<br><br><strong>Chic Top and Skirt:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Soft Gold for a radiant, refined look.<br><br><strong>Skirt Color:</strong> Charcoal, Navy, or Burgundy for a bold and elegant contrast.<br><br><strong>Style:</strong> A fitted blouse with delicate embroidery or embellishments paired with a<br><br>high-waisted, flowy skirt for a balanced yet chic ensemble.<br><br><strong>Jumpsuit or Romper:</strong><br><br><strong>Color:</strong> Burgundy, Deep Navy, or Charcoal for a modern, sophisticated vibe.<br><br><strong>Style:</strong> A tailored jumpsuit with a cinched waist and wide-leg pants, or a sleek,<br><br>fitted design for a clean silhouette.<br><br><strong>Details:</strong> Embellishments like a sash belt, ruffles, or metallic accents can add an<br><br>extra touch of glamour.<br><br><strong>Saree-Inspired Outfit:</strong><br><br><strong>Blouse Color:</strong> Gold, Ivory, or Deep Red for an opulent effect.<br><br><strong>Saree/Drape Color:</strong> Navy, Deep Green, or Charcoal with metallic accents or<br><br>intricate borders for a bold, sophisticated look.<br><br><strong>Style:</strong> Opt for a pre-stitched saree or draped lehenga with modern cuts, or go for<br><br>a unique fusion outfit with a tailored blouse and a chic drape.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich Red, Deep Green, Mustard Yellow, or Royal Blue for a vibrant,<br><br>bold contrast with medium/olive skin tones.<br><br><strong>Accent Colors:</strong> Gold, Bronze, or Ivory to enhance the richness and complement both<br><br>skin and hair.<br><br><strong>Avoid:</strong> Too pale or washed-out shades like Soft Pink or Light Beige that may not provide<br><br>enough contrast or warmth.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Traditional Saree:</strong><br><br><strong>Blouse Color:</strong> Gold, Burgundy, or Deep Red for an opulent effect.<br><br><strong>Saree Color:</strong> Royal Blue, Deep Green, or Mustard Yellow with metallic borders<br><br>or embroidery for a striking look.<br><br><strong>Style:</strong> Opt for a traditional saree drape or a lehenga-style saree for a more<br><br>contemporary flair, adding intricate embellishments for extra glam.<br><br><strong>Anarkali or Long Kurta Set:</strong><br><br><strong>Kurta Color:</strong> Rich Red, Mustard Yellow, or Emerald Green for a regal and bright<br><br>look.<br><br><strong>Bottom Color:</strong> Gold, Beige, or Deep Green to complement the kurta and add a<br><br>refined touch.<br><br><strong>Style:</strong> A flowy Anarkali or a long, straight-cut kurta with embroidery or mirror work<br><br>for added sophistication.<br><br><strong>Chic Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Gold, Deep Red, or Bronze for a bold, festive touch.<br><br><strong>Lehenga Color:</strong> Royal Blue, Mustard Yellow, or Green for an eye-catching<br><br>contrast with the choli.<br><br><strong>Style:</strong> A lehenga choli set with detailed work like sequins or zari to add an<br><br>elegant yet festive appeal.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Royal Blue, Emerald Green, or Burgundy for a rich, vibrant look.<br><br><strong>Bottom and Dupatta Color:</strong> Gold, Beige, or Deep Red for balance and<br><br>refinement.<br><br><strong>Style:</strong> Opt for a straight-fit or flared salwar kameez with detailed embroidery or a<br><br>dupatta with embellishments for a traditional but trendy outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ruby Red, Deep Green, Turquoise, or Copper for a rich, elegant<br><br>contrast with medium/olive skin tones.<br><br><strong>Accent Colors:</strong> Gold, Bronze, or Ivory to enhance the vibrancy and warmth of both the<br><br>skin and hair.<br><br><strong>Avoid:</strong> Overly light or pastel shades like Soft Pink or Pale Peach that may not provide<br><br>enough contrast with the deeper tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Traditional Saree:</strong><br><br><strong>Blouse Color:</strong> Gold, Deep Red, or Copper for a luxe, bold statement.<br><br><strong>Saree Color:</strong> Ruby Red, Emerald Green, or Turquoise with intricate zari or<br><br>metallic borders for a striking effect.<br><br><strong>Style:</strong> Choose a classic saree drape or a modern lehenga-style saree for a blend<br><br>of tradition and contemporary style, adorned with embroidery or embellishments.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Gold, Deep Red, or Maroon for an elegant, festive look.<br><br><strong>Lehenga Color:</strong> Rich Green, Copper, or Turquoise to provide a bold and colorful<br><br>contrast.<br><br><strong>Style:</strong> A lehenga choli set with detailed embroidery, sequins, or stonework for a<br><br>luxurious, celebratory look.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Anarkali Color:</strong> Deep Burgundy, Royal Blue, or Green for a regal and dramatic<br><br>effect.<br><br><strong>Bottom Color:</strong> Gold, Beige, or Matching Deep Green for an elegant balance.<br><br><strong>Style:</strong> An embroidered Anarkali suit with delicate mirror work or floral prints for an<br><br>elegant yet traditional look.<br><br><strong>Kurta and Palazzo Set:</strong><br><br><strong>Kurta Color:</strong> Ruby Red, Emerald Green, or Dark Maroon for a bold, striking<br><br>appearance.<br><br><strong>Palazzo Color:</strong> Gold, Charcoal, or Matching Green for harmony with the kurta.<br><br><strong>Style:</strong> A long, flowy kurta with geometric or floral designs paired with palazzo<br><br>pants for a modern twist on a traditional outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal, Navy Blue, Deep Burgundy, or Forest Green for a<br><br>professional, polished look that complements medium/olive skin tones.<br><br><strong>Accent Colors:</strong> Ivory, Soft Gold, or Dusty Rose for subtle elegance.<br><br><strong>Avoid:</strong> Bright or neon shades like Fluorescent Pink or Neon Green that may not suit a<br><br>formal office setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Blazer Color:</strong> Charcoal, Navy Blue, or Deep Burgundy for a sharp, professional<br><br>appearance.<br><br><strong>Pants/Skirt Color:</strong> Matching Charcoal, Navy, or Black for a clean, coordinated<br><br>look.<br><br><strong>Style:</strong> Opt for a well-fitted blazer with single-breasted or double-breasted details<br><br>paired with matching trousers or a pencil skirt. A crisp button-down shirt<br><br>underneath adds a refined touch.<br><br><strong>Sheath Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy, Navy, or Forest Green for a sophisticated yet bold<br><br>choice.<br><br><strong>Style:</strong> A knee-length or midi sheath dress that flatters the silhouette, with minimal<br><br>embellishment or subtle pleats. The dress should have a clean cut, perfect for a<br><br>business setting.<br><br><strong>Blouse and Trousers:</strong><br><br><strong>Blouse Color:</strong> Ivory, Dusty Rose, or Soft Blue for a gentle, professional look.<br><br><strong>Trousers Color:</strong> Navy, Charcoal, or Black to maintain a professional and classic<br><br>appearance.<br><br><strong>Style:</strong> A fitted blouse or button-up shirt with structured trousers for a sharp,<br><br>tailored look. Consider adding a blazer for extra polish.<br><br><strong>A-Line Skirt and Top:</strong><br><br><strong>Top Color:</strong> Ivory, Soft Pink, or Light Grey for a refined, elegant appearance.<br><br><strong>Skirt Color:</strong> Navy, Charcoal, or Deep Burgundy for a solid, formal contrast.<br><br><strong>Style:</strong> A classic A-line skirt paired with a blouse or light knit top. The skirt should<br><br>be knee-length or just below the knee for a polished office look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal, Forest Green, or Deep Burgundy for a<br><br>sophisticated, professional look that complements medium/olive skin tones.<br><br><strong>Accent Colors:</strong> Ivory, Soft Gold, or Blush Pink for a subtle and elegant touch.<br><br><strong>Avoid:</strong> Bright or overly saturated colors like Neon Yellow or Hot Pink that may not be<br><br>suitable for a formal office setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer and Trouser Set:</strong><br><br><strong>Blazer Color:</strong> Navy Blue, Charcoal, or Deep Burgundy for a classic and refined<br><br>look.<br><br><strong>Trouser Color:</strong> Matching Navy, Charcoal, or Black for a polished, cohesive outfit.<br><br><strong>Style:</strong> A well-tailored single-breasted blazer with structured trousers for a<br><br>professional, sleek appearance. Pair with a crisp white or light ivory blouse for a<br><br>balanced and sophisticated outfit.<br><br><strong>Sheath Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy, Navy, or Forest Green for a rich, elegant choice<br><br>that pairs well with dark hair.<br><br><strong>Style:</strong> A knee-length or midi sheath dress with a clean silhouette and minimal<br><br>embellishments for a professional and polished look.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Blouse Color:</strong> Ivory, Soft Blush, or Light Grey for a neutral, elegant appearance.<br><br><strong>Skirt Color:</strong> Navy, Charcoal, or Deep Green for a contrast that complements the<br><br>blouse.<br><br><strong>Style:</strong> A pencil skirt with a tailored blouse or button-up shirt tucked in for a sleek,<br><br>office-ready look. Consider adding a structured blazer for an added layer of<br><br>professionalism.<br><br><strong>A-Line Skirt and Fitted Top:</strong><br><br><strong>Top Color:</strong> Ivory, Blush Pink, or Soft Blue for a gentle, professional appearance.<br><br><strong>Skirt Color:</strong> Charcoal, Deep Burgundy, or Navy for a formal contrast.<br><br><strong>Style:</strong> A knee-length A-line skirt with a fitted top or blouse, perfect for an elegant,<br><br>yet comfortable office look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ruby Red, Deep Burgundy, Emerald Green, or Midnight Blue for a<br><br>bold, striking contrast with medium/olive skin tones.<br><br><strong>Accent Colors:</strong> Gold, Rose Gold, or Soft Ivory for an elegant touch that enhances your<br><br>look.<br><br><strong>Avoid:</strong> Pastel or overly light colors like Soft Pink or Pale Peach, which may not highlight<br><br>the contrast effectively.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Ruby Red, Deep Burgundy, or Emerald Green for a bold,<br><br>eye-catching appearance.<br><br><strong>Style:</strong> A floor-length gown, wrap dress, or form-fitting midi dress with details like<br><br>lace, sequins, or satin finishes for added glamour.<br><br><strong>Neckline:</strong> Consider a plunging V-neck, off-shoulder, or halter neckline to<br><br>enhance the look and create a balanced silhouette.<br><br><strong>Chic Jumpsuit or Romper:</strong><br><br><strong>Color:</strong> Midnight Blue, Dark Teal, or Burgundy for a sophisticated, modern vibe.<br><br><strong>Style:</strong> Opt for a tailored jumpsuit with a cinched waist, wide-legged pants, or a<br><br>fitted romper with unique detailing, such as embellished straps or a deep neckline<br><br>for a daring touch.<br><br><strong>Stylish Top and Skirt:</strong><br><br><strong>Top Color:</strong> Ivory, Soft Gold, or Champagne for a subtle, glowing effect.<br><br><strong>Skirt Color:</strong> Deep Burgundy, Charcoal, or Black for a bold contrast.<br><br><strong>Style:</strong> A fitted crop top or embellished blouse paired with a high-waisted pencil<br><br>skirt or a flowy midi skirt for a sophisticated yet trendy look.<br><br><strong>Bodycon Dress:</strong><br><br><strong>Color:</strong> Midnight Blue, Burgundy, or Rich Black for a classic, sleek look.<br><br><strong>Style:</strong> A fitted bodycon dress with subtle detailing such as ruching or lace inserts<br><br>for a modern and sensual appearance.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ruby Red, Deep Burgundy, Emerald Green, or Sapphire Blue for a<br><br>striking, bold contrast with medium/olive skin tones.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Soft Ivory to add a touch of luxury and highlight the<br><br>natural tones.<br><br><strong>Avoid:</strong> Overly light or pastel shades like Soft Peach or Baby Pink that may not<br><br>complement the deeper tones of your skin and hair.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Ruby Red, Deep Burgundy, or Emerald Green for a bold,<br><br>attention-grabbing effect.<br><br><strong>Style:</strong> A floor-length gown, midi wrap dress, or bodycon dress with details like<br><br>lace, satin, or sequins for a glamorous and sophisticated appearance.<br><br><strong>Neckline:</strong> A plunging V-neck, off-shoulder, or halter neckline to accentuate your<br><br>features and add a daring touch.<br><br><strong>Chic Jumpsuit:</strong><br><br><strong>Color:</strong> Midnight Blue, Burgundy, or Dark Teal for a modern, elegant vibe.<br><br><strong>Style:</strong> A tailored jumpsuit with a fitted waist, wide-leg pants, or a belted waist for<br><br>a sleek silhouette. Consider added embellishments or a low back for extra allure.<br><br><strong>Top and Skirt Combo:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Soft Gold for a radiant, glowing effect.<br><br><strong>Skirt Color:</strong> Deep Burgundy, Black, or Charcoal for a bold, contrasting<br><br>statement.<br><br><strong>Style:</strong> A fitted crop top or embellished blouse paired with a high-waisted pencil<br><br>skirt or a flowy A-line skirt to create a chic, balanced look.<br><br><strong>Bodycon Dress:</strong><br><br><strong>Color:</strong> Sapphire Blue, Burgundy, or Black for a sleek, modern look.<br><br><strong>Style:</strong> A fitted bodycon dress with subtle detailing like lace or a mesh panel for an<br><br>alluring, figure-flattering appearance.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Emerald Green, Royal Blue, or Rich Purple to create a<br><br>striking contrast against brown skin tones.<br><br><strong>Accent Colors:</strong> Gold, Bronze, or Soft Ivory for a luxurious, radiant touch.<br><br><strong>Avoid:</strong> Light pastel shades such as Pale Pink or Mint Green, which may not highlight the<br><br>vibrancy of your skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Traditional Saree:</strong><br><br><strong>Blouse Color:</strong> Gold, Deep Red, or Rich Purple for a regal and vibrant<br><br>appearance.<br><br><strong>Saree Color:</strong> Emerald Green, Navy Blue, or Ruby Red with intricate metallic<br><br>accents to complement the richness of your brown skin and light hair.<br><br><strong>Style:</strong> Choose a pre-stitched saree or draped lehenga with modern cuts and bold<br><br>patterns for a unique flair. Pair with traditional jewelry like jhumkas or a statement<br><br>necklace.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Suit Color:</strong> Deep Red, Emerald Green, or Royal Blue for a rich, sophisticated<br><br>look.<br><br><strong>Style:</strong> A flowing Anarkali dress with intricate embroidery or lacework that<br><br>elongates the body and enhances the elegance of the outfit. Pair with a dupatta<br><br>in a contrasting color to elevate the traditional look.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Gold, Burgundy, or Deep Green for a luxurious feel.<br><br><strong>Lehenga Color:</strong> Emerald Green, Charcoal, or Sapphire Blue for a bold,<br><br>contrasting effect.<br><br><strong>Style:</strong> A heavily embroidered lehenga with a traditional choli for a grand and<br><br>festive appearance. You can add a dupatta or scarf draped over your shoulders<br><br>for a complete look.<br><br><strong>Chic Two-Piece Set:</strong><br><br><strong>Top Color:</strong> Deep Red, Royal Blue, or Emerald Green for a dramatic statement.<br><br><strong>Bottom Color:</strong> Gold, Ivory, or Dark Grey for a polished finish.<br><br><strong>Style:</strong> A fitted top with a matching flared skirt or wide-legged pants for an<br><br>effortlessly stylish and modern traditional outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Rich Gold, Burgundy, or Emerald Green to create a striking<br><br>contrast with brown skin tones and dark hair.<br><br><strong>Accent Colors:</strong> Bronze, Copper, or Soft Ivory for an elegant and radiant touch.<br><br><strong>Avoid:</strong> Light or pastel shades like Pale Pink or Baby Blue that might not complement the<br><br>richness of your skin and hair tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Traditional Saree:</strong><br><br><strong>Blouse Color:</strong> Gold, Deep Red, or Midnight Blue for a regal and sophisticated<br><br>effect.<br><br><strong>Saree Color:</strong> Emerald Green, Ruby Red, or Deep Burgundy with metallic<br><br>accents to enhance your rich brown skin and dark hair.<br><br><strong>Style:</strong> Choose a pre-stitched saree or a classic draped style with intricate<br><br>embroidery and bold patterns. Pair with traditional jewelry like chandbalis or a<br><br>statement necklace to complete the look.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Suit Color:</strong> Burgundy, Deep Red, or Navy Blue for a bold, elegant look.<br><br><strong>Style:</strong> A floor-length Anarkali dress with detailed embroidery, lace, or sequin<br><br>work. This flowing silhouette will flatter your figure and give you a regal<br><br>appearance. A contrasting dupatta adds a sophisticated touch.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Gold, Deep Red, or Charcoal for a rich, luxurious look.<br><br><strong>Lehenga Color:</strong> Emerald Green, Navy, or Dark Purple for a striking contrast.<br><br><strong>Style:</strong> A heavily embroidered lehenga with a matching choli. Opt for a dupatta to<br><br>drape over your shoulders or around your arms for an elegant finish.<br><br><strong>Chic Two-Piece Set:</strong><br><br><strong>Top Color:</strong> Deep Red, Burgundy, or Emerald Green for a statement color.<br><br><strong>Bottom Color:</strong> Gold, Ivory, or Charcoal for a sophisticated contrast.<br><br><strong>Style:</strong> A fitted top paired with a voluminous skirt or wide-leg pants for a modern<br><br>yet traditional look, ideal for festive or celebratory occasions.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Gray, Forest Green, or Deep Burgundy to create<br><br>a professional and sophisticated look that complements brown skin tones.<br><br><strong>Accent Colors:</strong> Soft Ivory, Light Beige, or Blush Pink for a refined and polished<br><br>appearance.<br><br><strong>Avoid:</strong> Overly bright or neon shades such as Electric Yellow or Fluorescent Green,<br><br>which may appear too casual or bold for office/formal settings.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Navy Blue, Charcoal Gray, or Deep Burgundy for a sharp and<br><br>professional look.<br><br><strong>Trousers Color:</strong> Matching the blazer for a cohesive look, or you could pair with<br><br>neutral tones like Beige or Light Gray for contrast.<br><br><strong>Style:</strong> A fitted blazer with structured shoulders and a slim fit, paired with<br><br>straight-leg or wide-legged trousers for a modern yet classic appearance.<br><br><strong>Sheath Dress:</strong><br><br><strong>Dress Color:</strong> Navy, Forest Green, or Charcoal for a sleek, business-appropriate<br><br>option.<br><br><strong>Style:</strong> A knee-length sheath dress with a clean, minimalistic design for a polished<br><br>look. Pair with a blazer or cardigan for added professionalism.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Blouse Color:</strong> Soft Ivory, Blush Pink, or Light Beige for a subtle yet sophisticated<br><br>contrast with brown skin.<br><br><strong>Skirt Color:</strong> Charcoal Gray, Black, or Navy for a balanced and elegant look.<br><br><strong>Style:</strong> A tucked-in blouse with a high-waisted pencil skirt. Go for a blouse with<br><br>subtle details like a bow tie, pleats, or a slight drape to add interest.<br><br><strong>Midi Dress with Cardigan:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy, Navy Blue, or Forest Green for a mature,<br><br>professional vibe.<br><br><strong>Cardigan or Jacket Color:</strong> Soft Ivory or Beige to complement the dress.<br><br><strong>Style:</strong> A midi-length dress with a wrap or A-line cut, layered with a fitted cardigan<br><br>or lightweight blazer.<br><br><strong>Shift Dress:</strong><br><br><strong>Color:</strong> Navy, Forest Green, or Charcoal for a classic office look.<br><br><strong>Style:</strong> A simple, well-fitted shift dress paired with a structured handbag and<br><br>minimal jewelry. This look is professional and effortlessly chic.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Gray, Deep Burgundy, or Forest Green to<br><br>complement brown skin tones and dark hair while maintaining a professional, polished<br><br>look.<br><br><strong>Accent Colors:</strong> Soft Ivory, Light Beige, or Blush Pink to add a touch of lightness and<br><br>warmth, perfect for office attire.<br><br><strong>Avoid:</strong> Bright neon shades like Electric Yellow or too vibrant hues, which may not project<br><br>the desired formal or professional image.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Navy Blue, Charcoal Gray, or Deep Burgundy for a sharp,<br><br>business-appropriate look.<br><br><strong>Trousers Color:</strong> A matching set or neutral tones like Light Gray or Black for an<br><br>easy, sophisticated pairing.<br><br><strong>Style:</strong> A fitted blazer with structured shoulders, paired with straight-leg trousers<br><br>or wide-leg pants for a contemporary, stylish office look.<br><br><strong>Sheath Dress:</strong><br><br><strong>Dress Color:</strong> Navy, Forest Green, or Charcoal for a sleek, elegant vibe.<br><br><strong>Style:</strong> A knee-length sheath dress with a minimalist design for a clean and<br><br>professional appearance. You can layer it with a blazer or cardigan for added<br><br>formality.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Blouse Color:</strong> Soft Ivory, Blush Pink, or Light Beige for a soft, complementary<br><br>contrast to brown skin.<br><br><strong>Skirt Color:</strong> Charcoal Gray, Navy, or Black for a timeless, balanced look.<br><br><strong>Style:</strong> A fitted blouse tucked into a high-waisted pencil skirt. Opt for blouse<br><br>details like subtle pleats or a bow tie for extra elegance.<br><br><strong>Midi Dress with Cardigan or Blazer:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy, Charcoal, or Navy Blue for a chic,<br><br>business-appropriate outfit.<br><br><strong>Cardigan/Blazer Color:</strong> Ivory or Soft Beige to complement the dress.<br><br><strong>Style:</strong> A midi-length dress with a wrap or A-line silhouette, paired with a cardigan<br><br>or fitted blazer for a structured, professional look.<br><br><strong>Shift Dress:</strong><br><br><strong>Color:</strong> Navy Blue, Charcoal, or Forest Green for a refined office look.<br><br><strong>Style:</strong> A simple, clean-cut shift dress with subtle details like side slits or an<br><br>embellished collar. Pair it with classic accessories and a structured handbag for a<br><br>polished finish.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Burgundy, Navy Blue, or Emerald Green to create a striking<br><br>contrast with brown skin and light hair.<br><br><strong>Accent Colors:</strong> Gold, Champagne, or Soft Ivory to enhance your natural glow and add a<br><br>touch of elegance.<br><br><strong>Avoid:</strong> Muted or pastel shades like Light Yellow or Pale Pink, as they may not<br><br>complement the richness of brown skin tones and light hair.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Deep Red, Burgundy, Navy, or Emerald Green for a bold and<br><br>eye-catching look.<br><br><strong>Style:</strong> Opt for a bodycon dress, an A-line silhouette, or a wrap dress with details<br><br>like sequins, lace, or satin fabric for a glamorous touch.<br><br><strong>Neckline:</strong> Consider a V-neck, off-shoulder, or halter neckline to highlight your<br><br>features and add sophistication to the look.<br><br><strong>Chic Jumpsuit:</strong><br><br><strong>Color:</strong> Rich Burgundy, Deep Teal, or Navy for a sleek, modern vibe.<br><br><strong>Style:</strong> Go for a tailored jumpsuit with a cinched waist and wide-leg pants for a<br><br>flattering silhouette. Embellishments like a sash belt or metallic accents can add<br><br>a refined touch.<br><br><strong>Stylish Top and Skirt Combo:</strong><br><br><strong>Top Color:</strong> Ivory, Gold, or Champagne for a soft, glowing effect against brown<br><br>skin.<br><br><strong>Skirt Color:</strong> Deep Navy, Charcoal, or Black for a chic, contrasting base.<br><br><strong>Style:</strong> Pair a fitted top, such as a silk blouse or an embellished crop top, with a<br><br>high-waisted, flowy or pencil skirt for a balanced, elegant look.<br><br><strong>Modern Two-Piece Set:</strong><br><br><strong>Top Color:</strong> Burgundy, Emerald Green, or Navy for a striking look.<br><br><strong>Bottom Color:</strong> Gold, Black, or Charcoal for a complementary contrast.<br><br><strong>Style:</strong> A fitted top paired with a high-waisted skirt or wide-legged pants. The<br><br>ensemble is perfect for creating an effortlessly stylish vibe for a party or date<br><br>night.<br><br><strong>Cocktail Dress:</strong><br><br><strong>Color:</strong> Deep Red, Midnight Blue, or Charcoal for an elegant yet bold statement.<br><br><strong>Style:</strong> A knee-length or midi cocktail dress with a flattering fit. Details like lace<br><br>inserts, sequins, or a halter neck can elevate the look. Pair with high heels or<br><br>statement jewelry for added flair.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Burgundy, Emerald Green, or Royal Blue for a striking and<br><br>sophisticated contrast with brown skin and dark hair.<br><br><strong>Accent Colors:</strong> Gold, Champagne, or Soft Ivory to add elegance and warmth to your<br><br>look.<br><br><strong>Avoid:</strong> Overly bright shades like Neon Yellow or Fluorescent Green, which may clash<br><br>with your skin tone and appear too casual for a party/date night setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Deep Red, Burgundy, Emerald Green, or Royal Blue for a bold,<br><br>elegant appearance.<br><br><strong>Style:</strong> Opt for a floor-length gown, a midi wrap dress, or an A-line dress with<br><br>luxurious fabrics such as satin, lace, or velvet.<br><br><strong>Neckline:</strong> Consider a V-neck, off-shoulder, or halter neckline to highlight your<br><br>features and add sophistication.<br><br><strong>Chic Jumpsuit:</strong><br><br><strong>Color:</strong> Rich Burgundy, Navy Blue, or Deep Teal for a modern, polished look.<br><br><strong>Style:</strong> A tailored jumpsuit with a cinched waist and wide-leg pants offers a sleek,<br><br>flattering silhouette. You can enhance the outfit with subtle embellishments or a<br><br>statement belt.<br><br><strong>Stylish Top and Skirt Combo:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Soft Gold for a glowing effect that complements<br><br>brown skin.<br><br><strong>Skirt Color:</strong> Deep Navy, Charcoal, or Black for a striking contrast.<br><br><strong>Style:</strong> A fitted, embellished crop top or blouse with a high-waisted pencil skirt or<br><br>A-line skirt for a feminine yet chic look.<br><br><strong>Modern Two-Piece Set:</strong><br><br><strong>Top Color:</strong> Deep Red, Emerald Green, or Burgundy for a bold statement.<br><br><strong>Bottom Color:</strong> Gold, Charcoal, or Black for a complementary contrast.<br><br><strong>Style:</strong> A fitted top paired with a matching flared skirt or wide-legged pants for an<br><br>effortlessly stylish vibe.<br><br><strong>Cocktail Dress:</strong><br><br><strong>Color:</strong> Deep Red, Midnight Blue, or Charcoal for a classic yet bold party outfit.<br><br><strong>Style:</strong> A knee-length or midi dress with a flattering fit, ideal for a party or date<br><br>night. Look for designs with special details like lace, sequins, or an open back to<br><br>make a statement.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Bright Red, Royal Blue, Emerald Green, or Gold to create a stunning<br><br>contrast with deep skin tones and light hair.<br><br><strong>Accent Colors:</strong> Soft Beige, Ivory, or Champagne to add warmth and sophistication to<br><br>the look.<br><br><strong>Avoid:</strong> Pastel colors like Light Pink or Pale Yellow, which may not stand out against<br><br>deeper skin tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Traditional Saree:</strong><br><br><strong>Blouse Color:</strong> Gold, Deep Red, or Royal Blue to add a regal touch against deep<br><br>skin tones.<br><br><strong>Saree Color:</strong> Emerald Green, Deep Burgundy, or Navy Blue with metallic or<br><br>embroidered accents to highlight the natural beauty of deep skin and light hair.<br><br><strong>Style:</strong> Choose a saree with intricate designs, like brocade or zari work, to add<br><br>glamour. A pre-stitched or draped style with bold patterns can create a unique<br><br>traditional look.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Deep Red, Emerald Green, or Bright Gold for a festive and<br><br>traditional vibe.<br><br><strong>Lehenga Color:</strong> Royal Blue, Burgundy, or Black for a dramatic contrast.<br><br><strong>Style:</strong> Opt for a lehenga with heavy embellishments or intricate embroidery<br><br>paired with a fitted choli. The combination of rich colors and luxurious fabrics will<br><br>enhance the look for any traditional celebration.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Top Color:</strong> Gold, Deep Red, or Midnight Blue to create a striking effect against<br><br>deep skin tones.<br><br><strong>Bottom Color:</strong> Black, Charcoal, or Deep Green for a bold yet balanced look.<br><br><strong>Style:</strong> A floor-length Anarkali with heavy embroidery, zari work, or mirror details<br><br>will create an elegant silhouette. Pair it with a matching dupatta to complete the<br><br>traditional ensemble.<br><br><strong>Saree Gown:</strong><br><br><strong>Color:</strong> Deep Burgundy, Emerald Green, or Gold for a glamorous, modern take on<br><br>traditional attire.<br><br><strong>Style:</strong> A gown that mimics the look of a saree with draping details, pleats, and a<br><br>tailored bodice. This outfit combines the grace of a saree with the convenience of<br><br>a gown, ideal for a formal traditional occasion.<br><br><strong>Kurti and Palazzos:</strong><br><br><strong>Kurti Color:</strong> Bright Red, Deep Blue, or Rich Maroon to stand out against the rich<br><br>skin tone.<br><br><strong>Palazzo Color:</strong> Ivory, Gold, or Charcoal for a complementary contrast.<br><br><strong>Style:</strong> Pair a heavily embroidered or silk kurti with high-waisted palazzos for a<br><br>relaxed yet elegant traditional look. Add a dupatta with similar embroidery or a<br><br>light silk finish to complete the outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Emerald Green, Royal Blue, or Bright Gold to create a<br><br>striking contrast with deep skin and dark hair.<br><br><strong>Accent Colors:</strong> Champagne, Ivory, or Soft Beige to add warmth and sophistication while<br><br>balancing bold tones.<br><br><strong>Avoid:</strong> Lighter pastels like Soft Pink or Lavender, as they may not create as bold a<br><br>contrast with deep skin and dark hair.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Traditional Saree:</strong><br><br><strong>Blouse Color:</strong> Gold, Deep Red, or Midnight Blue to enhance the rich tones of<br><br>deep skin and dark hair.<br><br><strong>Saree Color:</strong> Emerald Green, Deep Burgundy, or Royal Blue with metallic or<br><br>embroidered accents to add vibrancy.<br><br><strong>Style:</strong> Opt for a saree with intricate detailing such as zari or stonework. A<br><br>pre-stitched saree or a draped lehenga with bold patterns can give a modern<br><br>twist to this traditional outfit.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Bright Gold, Deep Red, or Emerald Green for a royal and festive<br><br>look.<br><br><strong>Lehenga Color:</strong> Royal Blue, Charcoal, or Deep Burgundy for an elegant,<br><br>dramatic contrast.<br><br><strong>Style:</strong> Choose a lehenga with embellishments, embroidery, or mirror work for a<br><br>luxurious finish. Pair with a matching dupatta for a cohesive, stunning<br><br>appearance.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Top Color:</strong> Gold, Midnight Blue, or Deep Red to create a bold statement.<br><br><strong>Bottom Color:</strong> Black, Charcoal, or Deep Green for a striking contrast and to<br><br>balance the top.<br><br><strong>Style:</strong> A floor-length Anarkali with heavy embroidery or mirror work will provide<br><br>elegance and grace. Pair with a matching dupatta to complete the ensemble.<br><br><strong>Saree Gown:</strong><br><br><strong>Color:</strong> Deep Burgundy, Royal Blue, or Bright Gold to give a luxurious feel to the<br><br>outfit.<br><br><strong>Style:</strong> Choose a gown that incorporates saree-like draping, pleats, and detailed<br><br>work. This modern take on the saree combines both comfort and tradition, perfect<br><br>for a formal traditional occasion.<br><br><strong>Kurti and Palazzos:</strong><br><br><strong>Kurti Color:</strong> Deep Red, Emerald Green, or Bright Gold for a regal and festive<br><br>look.<br><br><strong>Palazzo Color:</strong> Ivory, Gold, or Charcoal to balance the bold kurti.<br><br><strong>Style:</strong> A heavily embellished or silk kurti paired with high-waisted palazzos will<br><br>give a relaxed yet chic traditional vibe. Add a dupatta with matching<br><br>embellishments or an elegant finish to complete the outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Grey, Deep Burgundy, or Black for a professional<br><br>and polished look that complements deep skin tones and light hair.<br><br><strong>Accent Colors:</strong> Ivory, Soft Beige, or Gold to add subtle contrast and sophistication to<br><br>the outfit.<br><br><strong>Avoid:</strong> Bright pastels like Light Pink or Soft Yellow, which may not complement deep<br><br>skin tones effectively in a formal setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p>Tailored Blazer and Trouser Set<br><br><strong>Blazer Color:</strong> Charcoal Grey, Navy Blue, or Black to create a sharp, professional<br><br>silhouette.<br><br><strong>Trouser Color:</strong> Matching Grey, Black, or Dark Burgundy for a coordinated look.<br><br><strong>Style:</strong> Opt for a fitted blazer with clean lines, paired with high-waisted trousers for<br><br>a chic yet formal look. A subtle plaid or pinstripe pattern can add depth while<br><br>keeping the outfit business-appropriate.<br><br><strong>Shift Dress:</strong><br><br><strong>Color:</strong> Navy Blue, Deep Burgundy, or Charcoal Grey for a modern and<br><br>professional vibe.<br><br><strong>Style:</strong> A knee-length shift dress with structured seams will provide a sleek,<br><br>elegant look. You can add a belt or a minimalistic necklace to enhance the<br><br>simplicity of the design while keeping it office-friendly.<br><br><strong>Pencil Skirt and Blouse Combo:</strong><br><br><strong>Blouse Color:</strong> Ivory, Soft Beige, or Light Gold for an elegant and balanced<br><br>contrast with deep skin tones.<br><br><strong>Skirt Color:</strong> Navy Blue, Black, or Deep Burgundy for a polished appearance.<br><br><strong>Style:</strong> Pair a fitted blouse with a high-waisted pencil skirt for a sophisticated,<br><br>professional look. Opt for blouses with subtle embellishments or details like<br><br>pleats or minimal embroidery for added texture.<br><br><strong>A-Line Dress:</strong><br><br><strong>Color:</strong> Deep Burgundy, Charcoal Grey, or Navy Blue for a refined, office-ready<br><br>outfit.<br><br><strong>Style:</strong> A knee-length A-line dress with a structured top and slightly flared skirt<br><br>provides a polished yet comfortable look. Choose a dress with a simple round<br><br>neck or subtle V-neck for a clean, professional appearance.<br><br><strong>Midi Skirt and Structured Top:</strong><br><br><strong>Top Color:</strong> Ivory, Soft Beige, or Black for a neutral and polished aesthetic.<br><br><strong>Skirt Color:</strong> Charcoal Grey, Navy Blue, or Black for a coordinated,<br><br>office-appropriate look.<br><br><strong>Style:</strong> A midi skirt with a fitted structured top will provide a sophisticated yet<br><br>comfortable ensemble for office wear. Choose a blouse with elegant detailing,<br><br>like a bow tie or a clean, crisp collar, to add some flair to the outfit without being<br><br>over-the-top.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Grey, Black, or Deep Burgundy for a sleek,<br><br>professional appearance that complements deep skin and dark hair.<br><br><strong>Accent Colors:</strong> Ivory, Soft Beige, or Warm Taupe to create balance and elegance while<br><br>enhancing the overall look.<br><br><strong>Avoid:</strong> Lighter pastel colors like Soft Pink or Light Lavender, which may not complement<br><br>deep skin tones in a formal office environment.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit (Blazer and Pants):</strong><br><br><strong>Blazer Color:</strong> Navy Blue, Charcoal Grey, or Black for a sharp and professional<br><br>look.<br><br><strong>Pants Color:</strong> Matching Navy Blue, Charcoal, or Deep Burgundy to create a<br><br>polished and coordinated outfit.<br><br><strong>Style:</strong> Opt for a well-fitted blazer with a slim cut and a pair of high-waisted,<br><br>tapered trousers. A double-breasted blazer with subtle details like thin pinstripes<br><br>can add a touch of personality while remaining formal.<br><br><strong>Pencil Skirt and Blouse Combo:</strong><br><br><strong>Blouse Color:</strong> Ivory, Soft Beige, or Light Taupe for an elegant, complementary<br><br>look against deep skin tones.<br><br><strong>Skirt Color:</strong> Black, Charcoal, or Deep Burgundy to maintain a professional and<br><br>sophisticated appearance.<br><br><strong>Style:</strong> A high-waisted pencil skirt paired with a tailored blouse will create a<br><br>flattering silhouette. Look for blouses with minimalistic designs, like a<br><br>button-down or a blouse with a bow tie collar, for a touch of refinement.<br><br><strong>Sheath Dress:</strong><br><br><strong>Color:</strong> Deep Burgundy, Navy Blue, or Black for a timeless and polished office<br><br>look.<br><br><strong>Style:</strong> A knee-length sheath dress will enhance your natural shape while<br><br>maintaining a sleek, business-ready appearance. Choose a dress with clean<br><br>lines and minimal details, perfect for a formal setting.<br><br><strong>A-Line Skirt and Blouse:</strong><br><br><strong>Blouse Color:</strong> Ivory, Soft Beige, or Warm Taupe for a professional, understated<br><br>look.<br><br><strong>Skirt Color:</strong> Black, Navy Blue, or Charcoal for a structured, formal vibe.<br><br><strong>Style:</strong> A fitted blouse tucked into a high-waisted A-line skirt provides both comfort<br><br>and style. A blouse with small detailing, like cuffed sleeves or a structured collar,<br><br>can add depth without being too bold.<br><br><strong>Maxi Dress with Blazer:</strong><br><br><strong>Dress Color:</strong> Black, Charcoal Grey, or Deep Burgundy for a chic and<br><br>sophisticated look.<br><br><strong>Blazer Color:</strong> Navy Blue or Charcoal Grey for a well-coordinated,<br><br>office-appropriate appearance.<br><br><strong>Style:</strong> A floor-length, tailored maxi dress with a structured blazer will give you a<br><br>confident, powerful look. Opt for a dress with subtle embellishments like a<br><br>pleated waist or a slight slit for added movement.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Emerald Green, Navy Blue, or Royal Blue to create a<br><br>rich, eye-catching contrast with deep skin and light hair.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Ivory to add sophistication and elegance to your look.<br><br><strong>Avoid:</strong> Pastels like Light Pink or Soft Yellow, which may not complement deep skin tones<br><br>as well in a party or date night setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy, Emerald Green, or Navy Blue for a luxurious and<br><br>striking appearance.<br><br><strong>Style:</strong> Choose a floor-length gown, a midi wrap dress, or an A-line dress with<br><br>special details like sequins, lace, or satin for added glam.<br><br><strong>Neckline:</strong> A V-neck, off-shoulder, or halter neckline will complement your light<br><br>hair and create a flattering silhouette.<br><br><strong>Chic Jumpsuit:</strong><br><br><strong>Color:</strong> Navy Blue, Deep Burgundy, or Emerald Green for a refined yet bold look.<br><br><strong>Style:</strong> Go for a tailored jumpsuit with a cinched waist and wide-leg pants for a<br><br>modern, sophisticated feel. Opt for subtle embellishments like a delicate belt or<br><br>metallic details for an extra touch of elegance.<br><br><strong>Two-Piece Set:</strong><br><br><strong>Top Color:</strong> Gold, Deep Red, or Royal Blue to make a statement.<br><br><strong>Bottom Color:</strong> Ivory, Charcoal, or Dark Grey to balance out the boldness of the<br><br>top.<br><br><strong>Style:</strong> A fitted top paired with a high-waisted skirt or wide-legged pants for a<br><br>contemporary and stylish look. Look for tops with unique details like ruffles or<br><br>intricate beading for a festive vibe.<br><br><strong>Maxi Skirt and Embellished Top:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Gold for a luxurious, soft effect.<br><br><strong>Skirt Color:</strong> Deep Burgundy, Emerald Green, or Navy Blue for an elegant<br><br>contrast.<br><br><strong>Style:</strong> Pair a silky, embellished blouse or crop top with a high-waisted maxi skirt.<br><br>Choose a skirt with movement, such as pleats or a satin finish, for a refined yet<br><br>playful look.<br><br><strong>Bodycon Dress:</strong><br><br><strong>Color:</strong> Deep Red, Black, or Emerald Green for a sleek and sultry vibe.<br><br><strong>Style:</strong> A form-fitting bodycon dress with clean lines and minimal details allows<br><br>you to showcase your natural curves while maintaining a sophisticated look. A<br><br>dress with a slight open back or subtle side slit can add a bit of allure without<br><br>being over-the-top.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Young Adult (20-29)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Royal Blue, Emerald Green, or Charcoal Grey to<br><br>create an elegant, striking contrast with deep skin and dark hair.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Soft Neutrals like Ivory or Champagne to add<br><br>sophistication and light balance.<br><br><strong>Avoid:</strong> Lighter pastel shades like Soft Pink or Pale Yellow, which may not stand out<br><br>against deep skin tones in a party or date night setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy, Emerald Green, or Royal Blue for a bold yet<br><br>refined look.<br><br><strong>Style:</strong> Choose a midi or floor-length gown, wrap dress, or A-line dress with<br><br>luxurious details like sequins, satin, or lace for a glamorous effect.<br><br><strong>Neckline:</strong> A V-neck, off-shoulder, or halter neckline to complement your dark hair<br><br>and enhance the overall chic appearance.<br><br><strong>Chic Jumpsuit:</strong><br><br><strong>Color:</strong> Charcoal Grey, Deep Burgundy, or Navy Blue for a modern, sleek vibe.<br><br><strong>Style:</strong> A fitted jumpsuit with a cinched waist and wide-leg pants will create a<br><br>streamlined silhouette. You can opt for subtle details like a statement belt or<br><br>metallic embellishments for added flair.<br><br><strong>Two-Piece Set:</strong><br><br><strong>Top Color:</strong> Gold, Deep Red, or Black for a bold and attention-grabbing<br><br>statement.<br><br><strong>Bottom Color:</strong> Charcoal, Dark Grey, or Ivory to balance the look.<br><br><strong>Style:</strong> A fitted top paired with a high-waisted skirt or wide-legged pants for an<br><br>effortlessly stylish look. Look for tops with unique elements like ruffles, intricate<br><br>beading, or sequins to elevate the ensemble.<br><br><strong>Maxi Skirt and Embellished Top:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Soft Gold for a luxurious touch.<br><br><strong>Skirt Color:</strong> Deep Burgundy, Charcoal Grey, or Navy Blue for a classic yet<br><br>contemporary contrast.<br><br><strong>Style:</strong> Pair a flowing maxi skirt with a silk or satin top. Opt for tops with delicate<br><br>embellishments like beads or lace to add texture while keeping the look<br><br>sophisticated.<br><br><strong>Bodycon Dress:</strong><br><br><strong>Color:</strong> Deep Red, Emerald Green, or Black for a confident, sultry vibe.<br><br><strong>Style:</strong> A form-fitting bodycon dress that enhances your natural silhouette while<br><br>offering elegance. Look for dresses with clean lines or slight cut-out details for<br><br>added intrigue without being too bold.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich Gold, Burgundy, Emerald Green, or Deep Purple to create a<br><br>sophisticated contrast with fair skin and light hair.<br><br><strong>Accent Colors:</strong> Soft Neutrals like Ivory, Champagne, or Silver to enhance elegance and<br><br>soften the overall look.<br><br><strong>Avoid:</strong> Too bright or neon colors like Neon Yellow or Fluorescent Pink, as they might not<br><br>complement the traditional, refined aesthetic for this occasion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Traditional Saree:</strong><br><br><strong>Blouse Color:</strong> Gold, Burgundy, or Deep Purple to create a regal and timeless<br><br>appeal.<br><br><strong>Saree Color:</strong> Rich Burgundy, Deep Green, or Royal Blue with intricate metallic<br><br>accents to complement your fair skin and light hair.<br><br><strong>Style:</strong> Choose a traditional saree with ornate details or modern cuts. Consider<br><br>draping it in an innovative way or opting for a pre-stitched version for added<br><br>convenience and style.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Top Color:</strong> Deep Burgundy, Gold, or Emerald Green to create a luxurious,<br><br>elegant look.<br><br><strong>Bottom Color:</strong> Ivory, Champagne, or Soft Gold for a contrasting yet cohesive<br><br>finish.<br><br><strong>Style:</strong> Opt for an Anarkali suit with a flowing skirt and a fitted bodice.<br><br>Embellishments like embroidery or stonework will add a festive and traditional<br><br>touch while maintaining sophistication.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Blouse Color:</strong> Gold, Silver, or Deep Purple for a bold and luxurious effect.<br><br><strong>Skirt Color:</strong> Burgundy, Emerald Green, or Navy Blue to create a striking<br><br>contrast.<br><br><strong>Style:</strong> Choose a lehenga with traditional embroidery or mirror work paired with a<br><br>modern choli design. The outfit should be elegant yet comfortable, with details<br><br>like a dupatta or scarf for added flair.<br><br><strong>Kurtas with Palazzo or Skirt:</strong><br><br><strong>Kurta Color:</strong> Deep Burgundy, Rich Gold, or Emerald Green for a strong yet<br><br>graceful look.<br><br><strong>Palazzo/Skirt Color:</strong> Ivory, Charcoal, or Soft Gold to complement the kurta and<br><br>provide contrast.<br><br><strong>Style:</strong> Choose a long kurta with intricate embroidery, paired with a palazzo or<br><br>flared skirt. Opt for a dupatta with light embroidery or detailing to complete the<br><br>traditional look with a touch of modern flair.<br><br><strong>Sharara Set:</strong><br><br><strong>Top Color:</strong> Rich Burgundy, Gold, or Deep Green to create a bold, refined look.<br><br><strong>Bottom Color:</strong> Ivory, Champagne, or Dark Grey for balance.<br><br><strong>Style:</strong> A sharara set with a long, embellished tunic paired with flared pants will<br><br>exude traditional elegance while offering comfort. Consider adding a dupatta or<br><br>shawl for an added touch of grace.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich Burgundy, Deep Purple, Emerald Green, or Sapphire Blue to<br><br>complement fair skin and dark hair with a vibrant yet elegant contrast.<br><br><strong>Accent Colors:</strong> Gold, Silver, Ivory, or Champagne to enhance sophistication and create<br><br>a harmonious balance with the primary colors.<br><br><strong>Avoid:</strong> Bright neon colors like Fluorescent Yellow or Neon Orange, as they may<br><br>overwhelm the traditional look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Traditional Saree:</strong><br><br><strong>Blouse Color:</strong> Gold, Deep Burgundy, or Midnight Blue for a regal and<br><br>sophisticated touch.<br><br><strong>Saree Color:</strong> Deep Purple, Emerald Green, or Burgundy with metallic accents to<br><br>enhance fair skin and dark hair.<br><br><strong>Style:</strong> Opt for a classic drape or a pre-stitched saree for ease. Look for ornate<br><br>details like zari work, embroidery, or beading to add glamour and tradition.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Top Color:</strong> Burgundy, Deep Green, or Gold for an elegant, warm look.<br><br><strong>Bottom Color:</strong> Ivory, Champagne, or Soft Gold for a refined contrast.<br><br><strong>Style:</strong> An Anarkali suit with a floor-length skirt and an intricately embroidered<br><br>bodice will give you a traditional yet graceful appearance. Pair with a dupatta or<br><br>scarf with subtle detailing to enhance the outfit.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Blouse Color:</strong> Gold, Deep Red, or Silver to create a luxurious vibe.<br><br><strong>Skirt Color:</strong> Sapphire Blue, Deep Burgundy, or Emerald Green for a balanced,<br><br>elegant look.<br><br><strong>Style:</strong> Choose a lehenga with intricate embroidery or embellishments for a festive<br><br>appearance. Pair it with a matching dupatta to complete the traditional ensemble.<br><br><strong>Kurtas with Palazzo or Skirt:</strong><br><br><strong>Kurta Color:</strong> Sapphire Blue, Burgundy, or Deep Green for a bold, sophisticated<br><br>effect.<br><br><strong>Palazzo/Skirt Color:</strong> Ivory, Champagne, or Soft Gold to complement the kurta.<br><br><strong>Style:</strong> A long kurta with intricate details paired with a flowing palazzo or skirt will<br><br>create a comfortable yet elegant traditional outfit. Add a dupatta with matching<br><br>embroidery to elevate the look.<br><br><strong>Sharara Set:</strong><br><br><strong>Top Color:</strong> Deep Burgundy, Gold, or Sapphire Blue for an elegant, classic look.<br><br><strong>Bottom Color:</strong> Ivory, Champagne, or Charcoal for a balanced finish.<br><br><strong>Style:</strong> A sharara set with an embellished tunic and flared pants creates a<br><br>sophisticated, modern traditional look. Pair with a dupatta or shawl for added<br><br>grace and to complete the ensemble.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy, Charcoal Grey, Burgundy, or Soft Teal for a professional and<br><br>polished look that complements fair skin and light hair.<br><br><strong>Accent Colors:</strong> Ivory, Light Beige, Silver, or Soft Blush to add balance and softness<br><br>without overwhelming the outfit.<br><br><strong>Avoid:</strong> Overly bright or neon colors like Neon Yellow or Hot Pink, which can distract from<br><br>the formal nature of the occasion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer and Trouser Set:</strong><br><br><strong>Blazer Color:</strong> Navy, Charcoal Grey, or Deep Burgundy to create a professional,<br><br>clean-lined look.<br><br><strong>Trouser Color:</strong> Grey, Black, or Ivory to balance and complement the blazer.<br><br><strong>Style:</strong> A well-fitted blazer with a crisp, tailored pant will create a sharp,<br><br>sophisticated look. Pair with a button-down shirt or silk blouse underneath for a<br><br>refined finish.<br><br><strong>Shift Dress:</strong><br><br><strong>Dress Color:</strong> Charcoal Grey, Navy, or Soft Teal for a classic and professional<br><br>appearance.<br><br><strong>Style:</strong> A knee-length shift dress with simple, elegant details such as a structured<br><br>waistline or subtle pleats. Pair with a blazer or cardigan for a more formal look,<br><br>and opt for minimal accessories for a clean aesthetic.<br><br><strong>Pencil Skirt and Blouse Combo:</strong><br><br><strong>Skirt Color:</strong> Navy, Black, or Charcoal Grey for a professional, slimming effect.<br><br><strong>Blouse Color:</strong> Ivory, Soft Blush, or Light Grey for a soft and elegant balance.<br><br><strong>Style:</strong> A fitted pencil skirt paired with a silk or cotton blouse tucked in for a<br><br>sophisticated silhouette. Add a cardigan or structured jacket for added<br><br>professionalism.<br><br><strong>Culottes and Blazer Set:</strong><br><br><strong>Culottes Color:</strong> Charcoal Grey, Navy, or Black for a classic and versatile look.<br><br><strong>Blazer Color:</strong> Soft Teal, Navy, or Charcoal Grey to maintain cohesion and<br><br>professionalism.<br><br><strong>Style:</strong> Pair a well-fitted blazer with high-waisted culottes for a modern twist on the<br><br>traditional office look. Choose a button-down shirt or silk blouse to complement<br><br>the ensemble.<br><br><strong>A-Line Midi Skirt and Sweater:</strong><br><br><strong>Skirt Color:</strong> Navy, Black, or Burgundy for a flattering and professional silhouette.<br><br><strong>Sweater Color:</strong> Ivory, Soft Beige, or Light Grey for a soft, polished look.<br><br><strong>Style:</strong> An A-line midi skirt with a tucked-in fitted sweater will provide a smart yet<br><br>comfortable office look. Pair with a structured handbag and simple, elegant<br><br>jewelry for a complete look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy, Charcoal Grey, Black, or Deep Burgundy for a polished and<br><br>professional appearance that complements fair skin and dark hair.<br><br><strong>Accent Colors:</strong> Ivory, Light Grey, Blush, or Silver to add subtle contrast and<br><br>sophistication.<br><br><strong>Avoid:</strong> Bright neon colors like Fluorescent Yellow or Neon Green, as they can be too<br><br>casual or distracting for a formal setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer and Trouser Set:</strong><br><br><strong>Blazer Color:</strong> Navy, Charcoal Grey, or Black to create a sleek and professional<br><br>appearance.<br><br><strong>Trouser Color:</strong> Black, Grey, or Ivory to balance and complement the blazer.<br><br><strong>Style:</strong> A well-fitted, structured blazer with a matching pair of trousers will provide<br><br>a sharp, sophisticated look. Pair with a button-up shirt or silk blouse underneath<br><br>to maintain a formal aesthetic.<br><br><strong>Shift Dress:</strong><br><br><strong>Dress Color:</strong> Charcoal Grey, Navy, or Deep Burgundy for an elegant,<br><br>professional vibe.<br><br><strong>Style:</strong> A knee-length shift dress with subtle details, like a slight waistline definition<br><br>or a small slit at the back, for added elegance. Pair with a blazer or cardigan for a<br><br>polished finish, and add minimal jewelry for a professional look.<br><br><strong>Pencil Skirt and Blouse Combo:</strong><br><br><strong>Skirt Color:</strong> Black, Charcoal Grey, or Navy for a clean, formal silhouette.<br><br><strong>Blouse Color:</strong> Ivory, Soft Blush, or Light Grey for a complementary, soft contrast.<br><br><strong>Style:</strong> A fitted pencil skirt paired with a silk blouse tucked in for a refined office<br><br>look. Add a cardigan or tailored blazer for a more formal touch.<br><br><strong>A-Line Midi Skirt and Sweater:</strong><br><br><strong>Skirt Color:</strong> Black, Navy, or Charcoal Grey for a professional, flattering look.<br><br><strong>Sweater Color:</strong> Ivory, Light Beige, or Soft Blush to add a lighter touch to the<br><br>outfit.<br><br><strong>Style:</strong> Pair an A-line midi skirt with a tucked-in, fitted sweater for a chic and<br><br>sophisticated office look. Add a structured handbag and subtle jewelry for a<br><br>polished finish.<br><br><strong>Culottes and Blazer Set:</strong><br><br><strong>Culottes Color:</strong> Navy, Charcoal Grey, or Black for a timeless, professional<br><br>appearance.<br><br><strong>Blazer Color:</strong> Charcoal Grey, Black, or Soft Teal to complement the culottes.<br><br><strong>Style:</strong> A tailored blazer with high-waisted culottes creates a modern, comfortable<br><br>office look. Pair with a blouse or turtleneck for a refined silhouette.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Navy, Emerald Green, or Charcoal for a dramatic yet<br><br>elegant look that complements fair skin and light hair.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Soft Blush for a glamorous touch without overpowering<br><br>the outfit.<br><br><strong>Avoid:</strong> Bright, neon colors like Neon Pink or Neon Yellow, as they might detract from the<br><br>sophistication of the occasion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Cocktail Dress:</strong><br><br><strong>Dress Color:</strong> Deep Red, Navy, or Emerald Green to create a bold, sophisticated<br><br>look.<br><br><strong>Style:</strong> A knee-length or midi dress with structured detailing or a fit-and-flare<br><br>silhouette. Opt for a dress with lace, satin, or sequin accents to add a touch of<br><br>glamour.<br><br><strong>Neckline:</strong> Consider a plunging V-neck, off-shoulder, or sweetheart neckline to<br><br>enhance the elegant vibe.<br><br><strong>Chic Jumpsuit:</strong><br><br><strong>Color:</strong> Burgundy, Charcoal, or Midnight Blue for a modern, stylish appearance.<br><br><strong>Style:</strong> A tailored jumpsuit with a cinched waist or a wide-leg cut to add<br><br>sophistication. Look for details like delicate embellishments, a belt, or a plunging<br><br>neckline for a more alluring touch.<br><br><strong>Details:</strong> Subtle embellishments or a bow-tie belt can enhance the look without<br><br>overpowering it.<br><br><strong>A-Line Midi Skirt and Top Combo:</strong><br><br><strong>Top Color:</strong> Soft Blush, Ivory, or Metallic Gold for an elegant, soft glow.<br><br><strong>Skirt Color:</strong> Deep Red, Navy, or Black for a dramatic contrast.<br><br><strong>Style:</strong> Pair an A-line midi skirt with a fitted or cropped top in a complementary<br><br>color. Look for tops with delicate details such as ruffles, sequins, or lace for an<br><br>extra dose of glam.<br><br><strong>Maxi Dress with High Slit:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy, Emerald Green, or Black for a rich, sophisticated<br><br>appearance.<br><br><strong>Style:</strong> A floor-length dress with a high slit or an open back for a modern, daring<br><br>edge. Choose dresses made of satin, velvet, or chiffon to add depth and luxury to<br><br>the look.<br><br><strong>Details:</strong> Look for minimal but impactful details like crystal straps, a plunging<br><br>neckline, or a delicate lace overlay.<br><br><strong>Peplum Top and Skinny Pants:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Soft Gold for a delicate and refined look.<br><br><strong>Pants Color:</strong> Black, Navy, or Charcoal Grey to complement the soft top.<br><br><strong>Style:</strong> A peplum top with embellished details paired with skinny or high-waisted<br><br>pants will give a chic yet daring vibe for the night. Add heels or sleek flats to<br><br>complete the look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Navy, Emerald Green, or Charcoal for a bold and<br><br>sophisticated look that complements fair skin and dark hair.<br><br><strong>Accent Colors:</strong> Silver, Gold, or Soft Blush to add elegance and shimmer without<br><br>overwhelming the look.<br><br><strong>Avoid:</strong> Bright neon shades like Neon Pink or Neon Yellow, which can be too flashy for an<br><br>evening occasion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Chic Midi Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy, Emerald Green, or Charcoal to create a rich and<br><br>elegant appearance.<br><br><strong>Style:</strong> Opt for a sleek, form-fitting midi dress with subtle details like a fitted waist,<br><br>a high slit, or a slight off-shoulder neckline for added allure.<br><br><strong>Neckline:</strong> A plunging V-neck, sweetheart, or halter neckline can beautifully<br><br>complement dark hair.<br><br><strong>V-neck Satin Slip Dress:</strong><br><br><strong>Color:</strong> Navy, Deep Red, or Midnight Blue for a striking, sophisticated vibe.<br><br><strong>Style:</strong> A satin slip dress with a loose, flowing silhouette that gracefully highlights<br><br>your figure. Look for dresses with minimalistic details such as a delicate chain<br><br>strap or an open back.<br><br><strong>Details:</strong> A soft V-neckline or a high slit will enhance the dress's elegance without<br><br>being too revealing.<br><br><strong>Tailored Jumpsuit:</strong><br><br><strong>Color:</strong> Charcoal Grey, Burgundy, or Black for a sleek and modern look.<br><br><strong>Style:</strong> A tailored jumpsuit with a cinched waist and wide-leg trousers. Add a<br><br>plunging neckline or off-shoulder details to create a statement piece.<br><br><strong>Details:</strong> Look for dresses with metallic accents, delicate embellishments, or a<br><br>soft sash belt for added sophistication.<br><br><strong>Sequined Top and A-Line Skirt:</strong><br><br><strong>Top Color:</strong> Silver, Gold, or Blush to add sparkle and shine.<br><br><strong>Skirt Color:</strong> Deep Burgundy, Charcoal Grey, or Black for a more subdued,<br><br>elegant contrast.<br><br><strong>Style:</strong> A sequined or metallic top with a high-waisted A-line skirt creates a<br><br>glamorous look with an understated elegance. Pair with high heels for a polished<br><br>effect.<br><br><strong>Bodycon Dress with Sheer Details:</strong><br><br><strong>Dress Color:</strong> Navy, Black, or Deep Red for a striking and confident look.<br><br><strong>Style:</strong> A bodycon dress with sheer detailing on the sleeves, back, or neckline<br><br>adds a touch of sensuality while maintaining sophistication.<br><br><strong>Neckline:</strong> A deep V-neck or boat neck with sheer sleeves or cutouts will add an<br><br>edge to the classic silhouette.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft pastels like Powder Blue, Lavender, Mint Green, or Light Pink to<br><br>create a delicate and graceful look that complements light skin and light hair.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Pearl White for a luxurious touch that enhances the<br><br>overall elegance.<br><br><strong>Avoid:</strong> Bright neon or overly saturated colors such as Neon Yellow or Electric Orange,<br><br>as they can clash with the soft tones typically worn for traditional occasions.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Blouse Color:</strong> Soft Gold, Champagne, or Light Pink for an ethereal effect.<br><br><strong>Saree Color:</strong> Powder Blue, Lavender, or Mint Green with delicate embroidery or<br><br>metallic threadwork in silver or gold to add sophistication.<br><br><strong>Style:</strong> A traditional saree with a modern drape or pre-stitched style for easy wear.<br><br>Look for sarees with intricate embellishments like zari work or Swarovski crystals<br><br>to enhance the elegance.<br><br><strong>Details:</strong> A well-fitted blouse with a halter neck or deep neckline can create a bold<br><br>yet graceful appearance.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Top Color:</strong> Light Pink, Lavender, or Cream for a soft and feminine look.<br><br><strong>Bottom Color:</strong> Deep Navy, Charcoal, or White to create an elegant contrast.<br><br><strong>Style:</strong> A long Anarkali dress with a flared skirt, adorned with delicate embroidery<br><br>or beadwork. Look for an Anarkali that features a high-low hem or a traditional<br><br>floor-length option for maximum impact.<br><br><strong>Details:</strong> A high neckline with intricate detailing, or a cape-style sleeve, can add<br><br>extra flair.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Light Gold, Soft Champagne, or Blush Pink for a warm, radiant<br><br>effect.<br><br><strong>Lehenga Color:</strong> Powder Blue, Lavender, or Mint Green with subtle patterns or<br><br>hand-embellishments.<br><br><strong>Style:</strong> A lehenga with a structured, flared skirt paired with a fitted, elegant choli.<br><br>Look for skirts with subtle detailing like mirror work or bead embroidery to add<br><br>depth.<br><br><strong>Details:</strong> A deep neckline or off-shoulder choli will add a modern twist to the<br><br>traditional ensemble.<br><br><strong>Traditional Kaftan:</strong><br><br><strong>Color:</strong> Soft Gold, Pastel Pink, or Mint Green with intricate gold embroidery or<br><br>sequin work for a touch of glamour.<br><br><strong>Style:</strong> A flowy kaftan with a fitted bodice and an A-line or flowing silhouette. Ideal<br><br>for a traditional occasion where comfort and elegance blend seamlessly.<br><br><strong>Details:</strong> Look for kaftans with delicate beadwork, sequins, or lace trimming along<br><br>the hem and sleeves for added sophistication.<br><br><strong>Palazzo Suit:</strong><br><br><strong>Top Color:</strong> Blush Pink, Light Yellow, or Soft Ivory for a warm, soft appearance.<br><br><strong>Bottom Color:</strong> Deep Navy, Black, or Charcoal Grey for contrast and to keep the<br><br>look grounded.<br><br><strong>Style:</strong> A flowing top with a high-neck or boat-neck paired with wide-legged<br><br>palazzo pants for an elegant, comfortable outfit.<br><br><strong>Details:</strong> Embellishments on the neckline or a beaded belt around the waist will<br><br>enhance the look without overwhelming it.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich hues like Deep Red, Emerald Green, Burgundy, or Royal Blue to<br><br>create a striking contrast with light skin and dark hair, while maintaining a traditional<br><br>elegance.<br><br><strong>Accent Colors:</strong> Gold, Silver, or Ivory for a sophisticated and regal touch.<br><br><strong>Avoid:</strong> Very pale shades like Baby Pink or Light Peach, as they may wash out lighter<br><br>skin tones and may not provide enough contrast with dark hair.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Blouse Color:</strong> Deep Gold, Maroon, or Midnight Blue for a luxurious, regal feel.<br><br><strong>Saree Color:</strong> Deep Red, Emerald Green, or Royal Blue with intricate patterns or<br><br>metallic threadwork in gold or silver to enhance the visual impact.<br><br><strong>Style:</strong> Opt for a traditional saree with a modern twist, such as a pre-stitched or<br><br>draped saree with sharp, clean lines.<br><br><strong>Details:</strong> A blouse with a high neckline or intricate embroidery will add a modern<br><br>edge while keeping the traditional charm intact.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Top Color:</strong> Burgundy, Deep Red, or Maroon for a bold yet elegant appearance.<br><br><strong>Bottom Color:</strong> Charcoal Grey, Ivory, or Gold to add contrast and refinement.<br><br><strong>Style:</strong> A floor-length Anarkali with rich, detailed embroidery and a flowing skirt for<br><br>an elegant look.<br><br><strong>Details:</strong> Look for an Anarkali with a high neckline, full sleeves, or delicate lace<br><br>trimming to add a contemporary twist to the traditional outfit.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Deep Gold, Burgundy, or Black for a sophisticated, modern look.<br><br><strong>Lehenga Color:</strong> Emerald Green, Royal Blue, or Deep Red with<br><br>hand-embroidered accents or beadwork.<br><br><strong>Style:</strong> A lehenga with a structured, flared skirt paired with a fitted choli or a crop<br><br>top for a chic, traditional appeal.<br><br><strong>Details:</strong> Intricate embroidery, mirror work, or pearl embellishments on the<br><br>lehenga and choli will elevate the outfit.<br><br><strong>Traditional Kaftan:</strong><br><br><strong>Color:</strong> Emerald Green, Maroon, or Deep Red with golden or silver<br><br>embellishments for a regal touch.<br><br><strong>Style:</strong> A flowy kaftan dress with a loose silhouette and delicate embroidery or<br><br>beadwork around the neckline or sleeves for added elegance.<br><br><strong>Details:</strong> Look for a kaftan with a V-neckline or a high-low hem for a stylish,<br><br>flattering silhouette.<br><br><strong>Palazzo Suit:</strong><br><br><strong>Top Color:</strong> Burgundy, Maroon, or Emerald Green for a rich, vibrant appearance.<br><br><strong>Bottom Color:</strong> Ivory, Black, or Charcoal Grey for balance and sophistication.<br><br><strong>Style:</strong> A flowy tunic-style top with a high collar or a boat-neck paired with<br><br>wide-legged palazzo pants for an elegant, modern traditional look.<br><br><strong>Details:</strong> Consider a top with intricate embroidery, pleats, or delicate beadwork<br><br>along the hem or neckline for an elevated design.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft, sophisticated shades like Navy Blue, Charcoal Grey, Black, and<br><br>Taupe to create a professional and polished look.<br><br><strong>Accent Colors:</strong> Ivory, Light Pink, or Dusty Rose for a subtle yet refined contrast.<br><br><strong>Avoid:</strong> Bright or neon colors like Fluorescent Yellow or Lime Green, which may appear<br><br>too casual for formal office settings.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Blazer Color:</strong> Navy Blue, Charcoal Grey, or Black for a classic, professional look.<br><br><strong>Pants/Skirt Color:</strong> Matching the blazer color for a well-coordinated, formal outfit.<br><br>Opt for a straight-leg pant or pencil skirt to maintain a polished silhouette.<br><br><strong>Style:</strong> A fitted blazer with structured shoulders and slim-fit pants or a knee-length<br><br>pencil skirt.<br><br><strong>Details:</strong> A single-breasted blazer with subtle details like a gold button or a<br><br>patterned lining can add elegance.<br><br><strong>Shift Dress:</strong><br><br><strong>Color:</strong> Black, Navy Blue, or Charcoal Grey for a sleek and versatile foundation.<br><br><strong>Style:</strong> A knee-length, sleeveless or short-sleeve dress with clean lines for a<br><br>simple yet sophisticated appearance.<br><br><strong>Details:</strong> Add a statement belt or elegant accessories, like a simple necklace or<br><br>stud earrings, to elevate the look.<br><br><strong>Blouse and Trousers:</strong><br><br><strong>Blouse Color:</strong> Ivory, Soft Pink, or Light Lavender for a soft, feminine touch.<br><br><strong>Trousers Color:</strong> Black, Navy, or Charcoal Grey to maintain a sharp, structured<br><br>look.<br><br><strong>Style:</strong> A tailored blouse with a high collar or V-neck paired with straight-leg<br><br>trousers for a professional silhouette.<br><br><strong>Details:</strong> Opt for a blouse with minimal patterns or textures, such as pinstripes or<br><br>a subtle print, to avoid distractions in a formal environment.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Blouse Color:</strong> Ivory, Light Blue, or Soft Beige for a sophisticated touch.<br><br><strong>Skirt Color:</strong> Black, Navy, or Grey for a neutral, office-appropriate base.<br><br><strong>Style:</strong> A fitted blouse tucked into a knee-length pencil skirt for a sleek and<br><br>flattering shape.<br><br><strong>Details:</strong> Choose a blouse with a high neck or modest scoop neckline and opt for<br><br>a skirt with a clean, streamlined design.<br><br><strong>Sheath Dress:</strong><br><br><strong>Color:</strong> Navy, Black, or Deep Burgundy for a refined and professional look.<br><br><strong>Style:</strong> A knee-length, form-fitting sheath dress that flatters the figure without<br><br>being too tight.<br><br><strong>Details:</strong> Look for dresses with minimal embellishments, perhaps a subtle pattern<br><br>or textured fabric, to keep the focus on a professional appearance.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Classic neutrals like Charcoal Grey, Navy Blue, Black, and Deep<br><br>Burgundy to create an elegant, professional vibe.<br><br><strong>Accent Colors:</strong> Ivory, Cream, Soft Peach, or Blush for a refined and light contrast.<br><br><strong>Avoid:</strong> Bright and flashy shades like Neon Yellow or Orange, as they can appear too<br><br>casual for office settings.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey, Navy Blue, or Black for a timeless and professional<br><br>look.<br><br><strong>Pants/Skirt Color:</strong> Matching the blazer for a cohesive, polished appearance.<br><br>Choose slim-leg trousers or a pencil skirt for a sleek silhouette.<br><br><strong>Style:</strong> Opt for a fitted blazer with structured shoulders and a slim cut to maintain<br><br>a sharp and tailored profile.<br><br><strong>Details:</strong> A subtle texture like pinstripes or a delicate fabric like wool can enhance<br><br>the outfit while keeping it formal.<br><br><strong>Shift Dress:</strong><br><br><strong>Color:</strong> Navy, Charcoal, or Deep Burgundy for a powerful yet understated look.<br><br><strong>Style:</strong> A simple, knee-length dress with a slight A-line or fitted shape for a<br><br>graceful, professional silhouette.<br><br><strong>Details:</strong> Keep accessories minimal but elegant—consider stud earrings and a<br><br>classic watch.<br><br><strong>Blouse and Trousers:</strong><br><br><strong>Blouse Color:</strong> Ivory, Soft Peach, or Light Blue for a refined, understated<br><br>elegance.<br><br><strong>Trousers Color:</strong> Black, Navy, or Charcoal to keep the outfit grounded and<br><br>formal.<br><br><strong>Style:</strong> A button-down blouse with a slight ruffle or bow tie at the collar, paired with<br><br>straight-leg or slightly cropped trousers for a modern touch.<br><br><strong>Details:</strong> A blouse with subtle embroidery or a lightweight fabric can add depth to<br><br>the look while maintaining professionalism.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Blouse Color:</strong> Ivory, Cream, or Soft Pink to soften the look while keeping it<br><br>appropriate for the office.<br><br><strong>Skirt Color:</strong> Black, Navy, or Charcoal for a versatile and flattering base.<br><br><strong>Style:</strong> A fitted blouse tucked into a knee-length pencil skirt, offering a feminine<br><br>silhouette that stays professional.<br><br><strong>Details:</strong> Choose blouses with interesting but subtle details, such as pleats or<br><br>gentle draping, and avoid loud patterns.<br><br><strong>Sheath Dress:</strong><br><br><strong>Color:</strong> Black, Navy, or Deep Burgundy for an elegant, form-fitting option.<br><br><strong>Style:</strong> A knee-length sheath dress that offers structure while maintaining comfort<br><br>for the office.<br><br><strong>Details:</strong> Pair with a thin belt to cinch the waist, adding shape while keeping the<br><br>look sleek and modern.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft pastels like Blush Pink, Lavender, or Mint Green, paired with<br><br>deeper shades like Burgundy or Navy Blue for a balanced and chic look.<br><br><strong>Accent Colors:</strong> Gold, Champagne, or Silver to add a touch of elegance and luxury.<br><br><strong>Avoid:</strong> Overly dark or heavy colors like deep browns or blacks, which may appear too<br><br>somber for a celebratory event.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Cocktail Dress:</strong><br><br><strong>Color:</strong> Blush Pink, Lavender, or Mint Green for a light and sophisticated vibe.<br><br><strong>Style:</strong> A form-fitting dress with a flattering neckline like a V-neck or halter style to<br><br>highlight your features. A midi or knee-length dress with a flared skirt or bodycon<br><br>fit will enhance your silhouette.<br><br><strong>Details:</strong> Choose dresses with subtle embellishments like sequins, lace, or<br><br>beading to add sparkle without overpowering the look.<br><br><strong>A-Line Dress with Belt:</strong><br><br><strong>Color:</strong> Burgundy or Navy Blue for a deeper, refined statement.<br><br><strong>Style:</strong> A classic A-line dress that cinches at the waist, paired with a matching or<br><br>contrasting belt to accentuate your figure. A sweetheart or off-shoulder neckline<br><br>adds romance and elegance to the outfit.<br><br><strong>Details:</strong> Keep the accessories simple with dainty jewelry, such as a thin gold<br><br>chain necklace and studs.<br><br><strong>Silk or Satin Top and Skirt Combo:</strong><br><br><strong>Top Color:</strong> Champagne, Ivory, or Soft Gold for an elegant and luxurious<br><br>appearance.<br><br><strong>Skirt Color:</strong> Deep Burgundy, Charcoal, or Navy to balance the soft top.<br><br><strong>Style:</strong> A fitted satin blouse with draped or pleated details, paired with a<br><br>high-waisted, flowy skirt for a romantic and graceful look.<br><br><strong>Details:</strong> Opt for metallic heels and statement earrings to elevate the outfit.<br><br><strong>Jumpsuit or Romper:</strong><br><br><strong>Color:</strong> Burgundy, Navy, or Soft Rose for a chic, modern vibe.<br><br><strong>Style:</strong> A tailored jumpsuit with wide-leg trousers or a romper with a flattering<br><br>neckline like an off-shoulder or plunging V-neck.<br><br><strong>Details:</strong> Add a sleek belt to define the waist and choose accessories that provide<br><br>a subtle shine, such as a clutch and metallic bangles.<br><br><strong>Off-Shoulder Dress:</strong><br><br><strong>Color:</strong> Soft Blush or Pastel Lavender for a playful yet elegant look.<br><br><strong>Style:</strong> An off-shoulder, figure-hugging dress that falls to knee length or mid-calf.<br><br>The bare shoulders provide a feminine and alluring touch.<br><br><strong>Details:</strong> Pair with delicate silver or gold jewelry, and wear strappy heels or<br><br>pointed-toe pumps to complete the outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Elegant hues such as Emerald Green, Sapphire Blue, Burgundy, and<br><br>Charcoal Gray to create a striking and sophisticated contrast.<br><br><strong>Accent Colors:</strong> Metallic shades like Gold, Silver, and Copper for a touch of opulence.<br><br>Soft neutrals like Cream or Ivory to balance bold tones.<br><br><strong>Avoid:</strong> Muted tones such as Beige or Olive, which may not provide enough contrast<br><br>against light skin tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant A-Line Dress:</strong><br><br><strong>Color:</strong> Emerald Green, Sapphire Blue, or Burgundy for a deep, rich look that<br><br>complements dark hair and light skin.<br><br><strong>Style:</strong> A knee-length or midi A-line dress with a flattering neckline, such as<br><br>V-neck, boat neck, or sweetheart. The A-line silhouette enhances the figure and<br><br>adds an air of grace.<br><br><strong>Details:</strong> Choose dresses with lace detailing, sequins, or subtle embellishments<br><br>for a sparkling yet refined appearance.<br><br><strong>Maxi Dress with Dramatic Sleeves:</strong><br><br><strong>Color:</strong> Charcoal Gray, Midnight Blue, or Deep Burgundy for a powerful,<br><br>glamorous look.<br><br><strong>Style:</strong> A flowing maxi dress with dramatic sleeves (bell sleeves or off-shoulder).<br><br>A plunging neckline adds sensuality without being too revealing.<br><br><strong>Details:</strong> Pair with a statement clutch and simple yet elegant jewelry, like a<br><br>delicate bracelet or drop earrings.<br><br><strong>Tailored Jumpsuit:</strong><br><br><strong>Color:</strong> Navy, Burgundy, or Black for an understated yet chic look.<br><br><strong>Style:</strong> A sleek, tailored jumpsuit with a cinched waist and wide-leg trousers. Look<br><br>for designs with flattering details like a fitted bodice or ruffled sleeves for a<br><br>feminine touch.<br><br><strong>Details:</strong> Add metallic accents such as a gold belt, statement necklace, or cuff<br><br>bracelet for added elegance.<br><br><strong>Silk Blouse and Pencil Skirt Combo:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Soft Gold for a luxurious and polished<br><br>appearance.<br><br><strong>Skirt Color:</strong> Charcoal Gray, Navy, or Black for a sophisticated balance.<br><br><strong>Style:</strong> A silk blouse with a bow tie or delicate ruffles paired with a high-waisted<br><br>pencil skirt for a classic and flattering silhouette.<br><br><strong>Details:</strong> Complete the look with a pair of sleek heels, either in a metallic or<br><br>neutral tone, and a matching clutch.<br><br><strong>Satin Off-Shoulder Dress:</strong><br><br><strong>Color:</strong> Rich Burgundy, Deep Green, or Navy Blue for a bold yet refined<br><br>statement.<br><br><strong>Style:</strong> A satin off-shoulder dress with a bodycon fit, highlighting the collarbones<br><br>and shoulders. The fabric adds a luxurious feel, making the outfit ideal for a night<br><br>out.<br><br><strong>Details:</strong> Keep the accessories minimal with dainty jewelry like stud earrings and<br><br>a thin bracelet, allowing the dress to stand out.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich and earthy tones such as Olive Green, Maroon, Terracotta, and<br><br>Deep Turquoise that beautifully complement medium to olive skin tones.<br><br><strong>Accent Colors:</strong> Gold, Copper, and Warm Neutrals like Beige or Cream to add warmth<br><br>and sophistication to the ensemble.<br><br><strong>Avoid:</strong> Very pale or washed-out shades like Pastel Pink or Light Lavender, as they may<br><br>blend too much with the skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree with Embellished Blouse:</strong><br><br><strong>Saree Color:</strong> Deep Maroon, Olive Green, or Rich Burgundy for an elegant and<br><br>timeless look that pairs well with light hair and medium skin tones.<br><br><strong>Blouse Color:</strong> Gold, Copper, or Ivory to create a striking contrast with the saree<br><br>while adding a touch of luxury.<br><br><strong>Style:</strong> Opt for a traditional saree drape, or a pre-stitched saree for ease of wear,<br><br>with intricate embroidery or zari work for added festivity. A sheer blouse with<br><br>embellishments will elevate the look.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Top Color:</strong> Deep Terracotta, Maroon, or Turquoise to highlight both skin and hair<br><br>tone.<br><br><strong>Bottom Color:</strong> Beige or Gold for a balanced, elegant contrast that doesn’t<br><br>overpower the ensemble.<br><br><strong>Style:</strong> A flowy Anarkali with delicate embroidery or mirror work, featuring a high<br><br>collar or a sweetheart neckline to add grace.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Ivory, Gold, or Deep Red to complement both medium skin and light<br><br>hair.<br><br><strong>Lehenga Color:</strong> Rich Maroon, Burgundy, or Olive Green with minimal but<br><br>detailed embellishments or embroidery.<br><br><strong>Style:</strong> A fitted choli paired with a voluminous lehenga, designed with beautiful<br><br>embroidery or mirror work. The lehenga should have a flattering silhouette that is<br><br>both festive and elegant.<br><br><strong>Details:</strong> A heavy dupatta can be draped over the shoulder or worn around the<br><br>arms to complete the traditional look.<br><br><strong>Kurtis and Palazzos:</strong><br><br><strong>Kurti Color:</strong> Maroon, Deep Turquoise, or Forest Green for a vibrant yet classy<br><br>touch.<br><br><strong>Palazzo Color:</strong> Beige, Gold, or Cream to balance the deep hues of the kurti.<br><br><strong>Style:</strong> A long kurti with intricate detailing like threadwork, beadwork, or<br><br>embroidery, paired with wide-legged palazzo pants for a comfortable yet chic<br><br>look.<br><br><strong>Silk Salwar Kameez:</strong><br><br><strong>Top Color:</strong> Olive Green, Deep Red, or Maroon to harmonize with the medium<br><br>skin and light hair.<br><br><strong>Bottom Color:</strong> Beige, White, or Soft Gold to maintain a light and airy feel.<br><br><strong>Style:</strong> A traditional silk salwar kameez with a long, flowy top and a tailored salwar<br><br>that tapers at the ankle. Choose an outfit with delicate patterns or gold detailing<br><br>for a subtle, yet festive look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Olive Green, and Emerald for an elegant, rich look.<br><br><strong>Accent Colors:</strong> Gold, Copper, and Soft Neutrals like Beige and Ivory to add warmth and<br><br>sophistication.<br><br><strong>Avoid:</strong> Light pastel shades or overly muted colors that may not enhance the natural<br><br>vibrancy of medium/olive skin tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Burgundy, Deep Olive, or Emerald Green for a regal look that<br><br>complements dark hair and medium skin.<br><br><strong>Blouse Color:</strong> Gold or Copper to create a balanced contrast with the saree,<br><br>highlighting both colors effectively.<br><br><strong>Style:</strong> Traditional draped saree with subtle embellishments and modern cuts for a<br><br>contemporary twist.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Top Color:</strong> Deep Burgundy, Olive Green, or Emerald for a bold statement.<br><br><strong>Bottom Color:</strong> Soft Gold or Ivory for an elegant balance.<br><br><strong>Style:</strong> A floor-length Anarkali with intricate embroidery, designed for a graceful<br><br>and flattering silhouette.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Gold, Deep Maroon, or Ivory.<br><br><strong>Lehenga Color:</strong> Rich Burgundy, Olive, or Emerald with fine detailing to enhance<br><br>the richness of the outfit.<br><br><strong>Style:</strong> Classic lehenga with minimal embellishments, maintaining an elegant and<br><br>streamlined look.<br><br><strong>Silk Salwar Kameez:</strong><br><br><strong>Top Color:</strong> Olive or Deep Burgundy for a sophisticated effect.<br><br><strong>Bottom Color:</strong> Ivory or Soft Gold to create a soft contrast.<br><br><strong>Style:</strong> Traditional silk fabric with simple yet elegant embroidery, creating a refined<br><br>and timeless look.<br><br><strong>Straight Cut Kurta and Palazzo Set:</strong><br><br><strong>Kurta Color:</strong> Burgundy or Olive for a flattering appearance.<br><br><strong>Palazzo Color:</strong> Soft Beige or Gold to complement the kurta’s bold hues.<br><br><strong>Style:</strong> A tailored kurta with a straight cut, paired with a chic palazzo for an<br><br>elegant and comfortable outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Gray, Forest Green, and Burgundy for a<br><br>professional yet stylish look.<br><br><strong>Accent Colors:</strong> Light Beige, Soft White, or Blush Pink for a clean, sophisticated<br><br>contrast.<br><br><strong>Avoid:</strong> Bright neon shades or overly dark tones that might feel too heavy for a<br><br>professional setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer and Trouser Set:</strong><br><br><strong>Blazer Color:</strong> Navy Blue or Charcoal Gray for a polished, confident look.<br><br><strong>Trouser Color:</strong> Black or Dark Gray for a sleek and professional vibe.<br><br><strong>Style:</strong> A fitted blazer with a single-button closure, paired with tailored trousers for<br><br>a timeless, elegant appearance.<br><br><strong>Pencil Skirt and Blouse Combo:</strong><br><br><strong>Blouse Color:</strong> Soft White, Blush Pink, or Light Beige to add a subtle touch of<br><br>color and contrast to the darker skirt.<br><br><strong>Skirt Color:</strong> Charcoal Gray, Navy Blue, or Deep Burgundy for a professional yet<br><br>stylish silhouette.<br><br><strong>Style:</strong> A form-fitting pencil skirt paired with a blouse that has subtle details like<br><br>pleats or delicate embroidery for a sophisticated office look.<br><br><strong>Shift Dress:</strong><br><br><strong>Dress Color:</strong> Navy, Burgundy, or Dark Green for a classic and elegant<br><br>appearance.<br><br><strong>Style:</strong> A knee-length shift dress with a structured fit to create a sleek and<br><br>professional outfit, perfect for an office environment.<br><br><strong>A-Line Skirt and Button-Down Shirt:</strong><br><br><strong>Shirt Color:</strong> White, Light Blue, or Soft Beige for a crisp and professional<br><br>appearance.<br><br><strong>Skirt Color:</strong> Charcoal Gray, Navy, or Burgundy for a balanced, refined look.<br><br><strong>Style:</strong> A classic A-line skirt paired with a button-down shirt for a polished,<br><br>corporate look. Tuck the shirt in for a more formal appearance.<br><br><strong>Midi Dress:</strong><br><br><strong>Dress Color:</strong> Navy Blue, Charcoal Gray, or Forest Green for a professional but<br><br>not too flashy option.<br><br><strong>Style:</strong> A knee-length midi dress with a simple, structured cut that maintains a<br><br>sense of professionalism while remaining stylish and comfortable.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Navy, Charcoal Gray, Teal, and Dark Plum for a refined and<br><br>professional aesthetic.<br><br><strong>Accent Colors:</strong> Ivory, Soft Peach, or Light Gray to add brightness and contrast.<br><br><strong>Avoid:</strong> Overly bright or flashy colors like neon tones that may distract from the<br><br>professional setting.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer and Straight-Leg Pants:</strong><br><br><strong>Blazer Color:</strong> Charcoal Gray or Deep Navy for a sophisticated look.<br><br><strong>Pants Color:</strong> Black or Dark Gray for a sleek and polished appearance.<br><br><strong>Style:</strong> A classic single-breasted tailored blazer with a lapel collar, paired with<br><br>straight-leg pants for a flattering, professional silhouette.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Blouse Color:</strong> Ivory, Soft Peach, or Light Gray for a subtle, polished appearance.<br><br><strong>Skirt Color:</strong> Deep Navy or Charcoal Gray for a balanced and professional look.<br><br><strong>Style:</strong> A knee-length pencil skirt paired with a button-down or wrap blouse for a<br><br>flattering yet office-appropriate outfit.<br><br><strong>Shift Dress:</strong><br><br><strong>Dress Color:</strong> Navy, Plum, or Teal for a bold yet professional style.<br><br><strong>Style:</strong> A knee-length shift dress with a structured fit for a clean, polished<br><br>appearance. Pair with a simple necklace or stud earrings for added elegance.<br><br><strong>A-Line Skirt and Tailored Shirt:</strong><br><br><strong>Shirt Color:</strong> White, Light Gray, or Soft Blue for a crisp, professional look.<br><br><strong>Skirt Color:</strong> Dark Gray, Navy, or Burgundy for a stylish and sophisticated<br><br>contrast.<br><br><strong>Style:</strong> A well-fitted A-line skirt with a classic button-down shirt tucked in for a<br><br>timeless and polished office outfit.<br><br><strong>Midi Dress:</strong><br><br><strong>Dress Color:</strong> Charcoal Gray, Dark Teal, or Burgundy for a sleek, formal option.<br><br><strong>Style:</strong> A midi dress with a simple design, such as a sheath or belted waist,<br><br>offering both comfort and style suitable for the office.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich Burgundy, Dark Teal, Emerald Green, or Deep Plum for a bold<br><br>and elegant look.<br><br><strong>Accent Colors:</strong> Soft Gold, Champagne, or Ivory to add a touch of sophistication and<br><br>shine.<br><br><strong>Avoid:</strong> Bright neon tones or overly pastel shades that may detract from the overall<br><br>boldness and elegance.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Floor-Length Gown:</strong><br><br><strong>Dress Color:</strong> Burgundy, Emerald Green, or Deep Plum for a luxurious and<br><br>eye-catching appearance.<br><br><strong>Style:</strong> A fitted gown with subtle embellishments, such as sequins or lace, and a<br><br>slight flare at the bottom for a dramatic, yet graceful look.<br><br><strong>Neckline:</strong> Consider a deep V-neck or off-shoulder design for an added touch of<br><br>sensuality.<br><br><strong>Sleek Midi Dress:</strong><br><br><strong>Dress Color:</strong> Dark Teal or Black with Metallic Accents for a modern yet timeless<br><br>vibe.<br><br><strong>Style:</strong> A figure-hugging midi dress with a smooth silhouette and minimal details,<br><br>such as a cutout or high slit to add a hint of intrigue.<br><br><strong>Chic Jumpsuit:</strong><br><br><strong>Color:</strong> Deep Burgundy, Navy, or Teal for a sleek, sophisticated feel.<br><br><strong>Style:</strong> A tailored jumpsuit with a cinched waist, wide-leg pants, and a plunging<br><br>neckline for a bold and fashion-forward look.<br><br><strong>Details:</strong> Pair with statement earrings or a sleek clutch for a standout ensemble.<br><br><strong>Embellished Top and High-Waisted Skirt:</strong><br><br><strong>Top Color:</strong> Soft Gold, Champagne, or Ivory for a glowing effect.<br><br><strong>Skirt Color:</strong> Deep Navy, Charcoal, or Burgundy for a balanced contrast.<br><br><strong>Style:</strong> A sparkly or beaded top with a flowy, high-waisted skirt that creates an<br><br>elegant yet fun look for the night.<br><br><strong>Romantic A-Line Dress:</strong><br><br><strong>Dress Color:</strong> Teal, Deep Plum, or Emerald Green for a striking yet sophisticated<br><br>vibe.<br><br><strong>Style:</strong> An A-line dress with a fitted bodice and voluminous skirt for a romantic,<br><br>feminine silhouette. Accessorize with delicate jewelry and a sleek hairstyle for a<br><br>chic effect.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich Burgundy, Emerald Green, Navy, or Dark Teal for a dramatic,<br><br>refined appearance.<br><br><strong>Accent Colors:</strong> Gold, Champagne, or Ivory to bring a touch of luxury and warmth to the<br><br>look.<br><br><strong>Avoid:</strong> Overly bright colors like neon shades or pale pastels that might clash with deeper<br><br>tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Floor-Length Evening Gown:</strong><br><br><strong>Dress Color:</strong> Burgundy, Emerald Green, or Navy for an elegant, timeless look.<br><br><strong>Style:</strong> A figure-hugging gown with an A-line silhouette and subtle details like lace,<br><br>sequins, or beadwork for extra glamour.<br><br><strong>Neckline:</strong> A deep V-neck or off-shoulder neckline to emphasize the collarbones<br><br>and enhance the overall chic vibe.<br><br><strong>Tailored Jumpsuit:</strong><br><br><strong>Color:</strong> Dark Teal, Burgundy, or Midnight Blue for a sophisticated yet<br><br>contemporary touch.<br><br><strong>Style:</strong> A tailored jumpsuit with a cinched waist and wide-leg pants to create a<br><br>polished and sleek silhouette.<br><br><strong>Details:</strong> Opt for a plunging neckline or a statement belt to add depth to the outfit.<br><br><strong>Chic Midi Dress:</strong><br><br><strong>Color:</strong> Charcoal, Deep Plum, or Navy for an understated yet impactful<br><br>appearance.<br><br><strong>Style:</strong> A fitted midi dress with clean lines and a sophisticated design. Consider<br><br>subtle embellishments or a textured fabric for added interest.<br><br><strong>Neckline:</strong> A classic boat neck or a halter style to highlight the shoulders and<br><br>neckline.<br><br><strong>Elegant Top and High-Waisted Skirt:</strong><br><br><strong>Top Color:</strong> Champagne, Gold, or Ivory for a soft, radiant glow.<br><br><strong>Skirt Color:</strong> Deep Burgundy, Navy, or Charcoal to create a perfect contrast with<br><br>the top.<br><br><strong>Style:</strong> A fitted, embellished blouse with a high-waisted, pleated, or pencil skirt for<br><br>a chic, balanced look.<br><br><strong>Statement Midi Skirt and Blouse Set:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Gold for a light, reflective contrast against the<br><br>deep tones of the skirt.<br><br><strong>Skirt Color:</strong> Deep Teal, Burgundy, or Midnight Blue for a rich, classy<br><br>appearance.<br><br><strong>Style:</strong> A structured blouse tucked into a voluminous midi skirt to achieve a<br><br>fashionable and graceful ensemble.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Mustard Yellow, Emerald Green, or Burgundy to create a<br><br>vibrant, striking look that complements brown skin tones.<br><br><strong>Accent Colors:</strong> Gold, Copper, or Ivory for an added touch of elegance and luxury.<br><br><strong>Avoid:</strong> Extremely pale shades or overly bright colors that might wash out the skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Traditional Saree:</strong><br><br><strong>Blouse Color:</strong> Gold, Deep Red, or Copper for a rich, regal appearance.<br><br><strong>Saree Color:</strong> Deep Burgundy, Emerald Green, or Mustard Yellow to create a<br><br>stunning contrast with the skin tone.<br><br><strong>Style:</strong> Choose a traditional drape or a modern pre-stitched saree for ease, with<br><br>intricate borders or embellishments to add a touch of sophistication.<br><br><strong>Anarkali Dress:</strong><br><br><strong>Color:</strong> Burgundy, Emerald Green, or Deep Red for a bold, classic look.<br><br><strong>Style:</strong> An ankle-length Anarkali dress with flowing fabric and delicate embroidery<br><br>or embellishments for a timeless and graceful look.<br><br><strong>Neckline:</strong> A high-neck or keyhole style to give a refined touch to the outfit.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Gold, Champagne, or Deep Red for a luxurious, striking look.<br><br><strong>Lehenga Color:</strong> Burgundy, Mustard Yellow, or Emerald Green to add contrast<br><br>and vibrancy.<br><br><strong>Style:</strong> A heavily embellished lehenga with intricate patterns and a statement<br><br>blouse to create a standout ensemble.<br><br><strong>Kurti and Palazzo Set:</strong><br><br><strong>Kurti Color:</strong> Mustard Yellow, Burgundy, or Deep Red for bold statements.<br><br><strong>Palazzo Color:</strong> Ivory, Copper, or Dark Green to create a balanced, elegant look.<br><br><strong>Style:</strong> A knee-length kurti with intricate embroidery, paired with a high-waisted<br><br>palazzo for a comfortable yet chic traditional outfit.<br><br><strong>Chic Traditional Gown:</strong><br><br><strong>Color:</strong> Emerald Green, Burgundy, or Deep Blue for a rich and sophisticated<br><br>appearance.<br><br><strong>Style:</strong> A traditional floor-length gown with intricate beadwork or embroidery to<br><br>maintain a regal yet modern look.<br><br><strong>Details:</strong> Consider a statement neckline or a cape for added flair.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Red, Burgundy, Mustard Yellow, or Navy Blue for a bold yet<br><br>elegant look that highlights brown skin tones.<br><br><strong>Accent Colors:</strong> Gold, Copper, or Ivory for added sophistication and a radiant finish.<br><br><strong>Avoid:</strong> Very pale or overly bright shades that might not complement the richness of the<br><br>skin tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Traditional Saree:</strong><br><br><strong>Blouse Color:</strong> Gold, Deep Red, or Copper for a regal and timeless look.<br><br><strong>Saree Color:</strong> Deep Burgundy, Mustard Yellow, or Navy Blue for a contrast that<br><br>enhances the richness of brown skin.<br><br><strong>Style:</strong> Opt for a classic drape or a modern pre-stitched saree with intricate<br><br>detailing to highlight your personality.<br><br><strong>Anarkali Dress:</strong><br><br><strong>Color:</strong> Burgundy, Mustard Yellow, or Emerald Green for a warm and inviting look.<br><br><strong>Style:</strong> An ankle-length Anarkali dress with delicate embroidery or embellishments<br><br>that create an elegant and graceful silhouette.<br><br><strong>Neckline:</strong> A high-neck or scoop-neck style to accentuate your features and add a<br><br>refined touch to the outfit.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Deep Red, Copper, or Gold for a rich, bold statement.<br><br><strong>Lehenga Color:</strong> Burgundy, Emerald Green, or Navy Blue for a striking contrast<br><br>that complements your skin tone.<br><br><strong>Style:</strong> A heavily embellished lehenga paired with a statement blouse to elevate<br><br>the overall look.<br><br><strong>Kurti and Palazzo Set:</strong><br><br><strong>Kurti Color:</strong> Mustard Yellow, Burgundy, or Deep Red to make a statement.<br><br><strong>Palazzo Color:</strong> Ivory, Copper, or Dark Green to create a harmonious and<br><br>balanced outfit.<br><br><strong>Style:</strong> A knee-length or mid-length kurti with delicate embroidery, paired with<br><br>high-waisted palazzo pants for a chic yet comfortable traditional look.<br><br><strong>Chic Traditional Gown:</strong><br><br><strong>Color:</strong> Burgundy, Navy Blue, or Deep Green for a sophisticated and elegant feel.<br><br><strong>Style:</strong> A traditional floor-length gown with intricate beadwork or embroidery for an<br><br>opulent look.<br><br><strong>Details:</strong> Consider a statement neckline or a modern cape to enhance the outfit's<br><br>appeal.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            
            
            
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Gray, Deep Burgundy, Navy Blue, or Olive Green for a rich<br><br>yet professional look that suits brown skin tones.<br><br><strong>Accent Colors:</strong> Soft Beige, Ivory, or Silver to add subtle elegance and contrast without<br><br>overwhelming the outfit.<br><br><strong>Avoid:</strong> Bright, overly saturated colors like neon or bold prints that could detract from the<br><br>formal look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Structured Suit:</strong><br><br><strong>Blouse Color:</strong> Ivory, Soft Beige, or Light Gray for a clean, sophisticated base.<br><br><strong>Blazer Color:</strong> Charcoal Gray, Navy Blue, or Deep Burgundy for a sharp,<br><br>professional appearance.<br><br><strong>Pants/Skirt Color:</strong> Matching Charcoal Gray or Navy Blue for a cohesive, tailored<br><br>look.<br><br><strong>Style:</strong> A well-tailored blazer with either straight-leg trousers or a pencil skirt to<br><br>maintain a sharp, professional aesthetic.<br><br><strong>Sheath Dress:</strong><br><br><strong>Color:</strong> Burgundy, Navy Blue, or Olive Green for a refined and powerful<br><br>statement.<br><br><strong>Style:</strong> Knee-length sheath dress with a fitted silhouette to accentuate your frame.<br><br>Choose a slight V-neck or crew-neck for a flattering yet professional neckline.<br><br><strong>Blouse and Trousers:</strong><br><br><strong>Blouse Color:</strong> Soft Beige, Ivory, or Light Gray for a neutral base that<br><br>complements deeper tones.<br><br><strong>Trousers Color:</strong> Charcoal Gray, Navy Blue, or Dark Brown for a sleek,<br><br>professional appearance.<br><br><strong>Style:</strong> A button-up blouse with a slightly relaxed fit paired with tailored trousers to<br><br>keep the outfit polished but comfortable.<br><br><strong>Midi Skirt and Top:</strong><br><br><strong>Top Color:</strong> Deep Burgundy, Navy Blue, or Ivory to add a pop of color while<br><br>maintaining professionalism.<br><br><strong>Skirt Color:</strong> Charcoal Gray, Black, or Dark Brown for a balanced, classic look.<br><br><strong>Style:</strong> A midi skirt paired with a fitted top, tucked in for a refined and modest<br><br>appearance.<br><br><strong>Jumpsuit:</strong><br><br><strong>Color:</strong> Charcoal Gray, Navy Blue, or Deep Burgundy for a sophisticated and<br><br>streamlined outfit.<br><br><strong>Style:</strong> A well-tailored jumpsuit with a defined waist, paired with a structured<br><br>blazer or cardigan for an office-appropriate appearance.<br><br><strong>Details:</strong> Keep accessories minimal to maintain a clean and professional look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich Jewel Tones like Emerald Green, Deep Purple, Ruby Red, or<br><br>Sapphire Blue to complement brown skin tones beautifully.<br><br><strong>Accent Colors:</strong> Soft Blush Pink or Metallics like Gold for a touch of glamour.<br><br><strong>Avoid:</strong> Light pastels and overly bright/neon colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p>Little Black Dress (LBD)<br><br><strong>Color:</strong> Classic black.<br><br><strong>Style:</strong> A fitted A-line or sheath dress with a deep neckline or off-shoulder design<br><br>for an elegant, sultry look.<br><br><strong>Jumpsuit with Statement Sleeves:</strong><br><br><strong>Color:</strong> Deep Purple, Emerald Green, or Ruby Red.<br><br><strong>Style:</strong> A sleek, fitted jumpsuit with dramatic statement sleeves or a plunging<br><br>neckline for a balanced and edgy look.<br><br><strong>Off-Shoulder Top and High-Waisted Skirt:</strong><br><br><strong>Top Color:</strong> Ivory, Deep Burgundy, or Gold.<br><br><strong>Skirt Color:</strong> Charcoal Gray, Black, or Navy Blue.<br><br><strong>Style:</strong> A fitted off-shoulder top paired with a flowy, high-waisted skirt to add<br><br>movement and elegance.<br><br><strong>Bodycon Dress:</strong><br><br><strong>Color:</strong> Sapphire Blue, Emerald Green, or Ruby Red.<br><br><strong>Style:</strong> A form-fitting bodycon dress with a square or sweetheart neckline for a<br><br>bold, confident look.<br><br><strong>Tailored Pants and Blouse with Lace or Silk Details:</strong><br><br><strong>Top Color:</strong> Deep Burgundy, Charcoal, or a soft metallic.<br><br><strong>Pants Color:</strong> Black, Navy, or Charcoal Gray.<br><br><strong>Style:</strong> A silky or lace blouse with high-waisted pants for a chic, sophisticated<br><br>look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich tones like Deep Burgundy, Emerald Green, and Midnight Blue to<br><br>complement brown skin with dark hair.<br><br><strong>Accent Colors:</strong> Soft Gold, Champagne, or Ivory for a touch of elegance.<br><br><strong>Avoid:</strong> Overly bright or neon colors that might clash with your natural tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Floor-Length Evening Gown:</strong><br><br><strong>Color:</strong> Deep Burgundy or Midnight Blue.<br><br><strong>Style:</strong> A floor-length, form-fitting gown with a slight flare, featuring details like<br><br>lace, satin, or sequins for added glamour.<br><br><strong>A-Line Dress with Sleeves:</strong><br><br><strong>Color:</strong> Emerald Green or Champagne.<br><br><strong>Style:</strong> An A-line dress with a slightly high waist and delicate sleeves, perfect for<br><br>creating an elegant and flattering silhouette.<br><br><strong>Tailored Jumpsuit:</strong><br><br><strong>Color:</strong> Deep Burgundy or Charcoal.<br><br><strong>Style:</strong> A tailored jumpsuit with a cinched waist and a wide leg, paired with a deep<br><br>neckline or off-shoulder design for a sophisticated and chic look.<br><br><strong>Satin Slip Dress:</strong><br><br><strong>Color:</strong> Soft Gold or Ruby Red.<br><br><strong>Style:</strong> A satin slip dress with a bias cut, ideal for showing off your figure while<br><br>maintaining a refined look. Pair it with heels for a sharp finish.<br><br><strong>Chic Satin Top and High-Waisted Pants:</strong><br><br><strong>Top Color:</strong> Ivory, Champagne, or Deep Red.<br><br><strong>Pants Color:</strong> Charcoal Gray or Black.<br><br><strong>Style:</strong> A satin blouse with a V-neck paired with high-waisted tailored trousers,<br><br>offering a blend of comfort and elegance.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Jewel tones like Sapphire Blue, Ruby Red, and Emerald Green<br><br>complement deep skin with light hair.<br><br><strong>Accent Colors:</strong> Gold, Copper, or Deep Burgundy to add warmth and elegance.<br><br><strong>Avoid:</strong> Too many neutral or pastel shades that may wash out your complexion.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Anarkali Suit:</strong><br><br><strong>Color:</strong> Sapphire Blue or Ruby Red.<br><br><strong>Style:</strong> A floor-length Anarkali with intricate embroidery or lace details, ideal for<br><br>traditional occasions, offering an elegant and regal silhouette.<br><br><strong>Saree:</strong><br><br><strong>Color:</strong> Emerald Green with Gold Accents.<br><br><strong>Style:</strong> A draped saree in a rich jewel tone paired with a gold-bordered pallu. The<br><br>saree can be accessorized with gold jewelry and a subtle blouse design.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Color:</strong> Deep Burgundy or Royal Purple.<br><br><strong>Style:</strong> A lehenga with intricate embroidery or mirror work paired with a matching<br><br>choli. The flared lehenga offers grace, while the choli can feature delicate<br><br>beadwork.<br><br><strong>Kurta with Palazzo Pants:</strong><br><br><strong>Color:</strong> Deep Burgundy or Teal.<br><br><strong>Style:</strong> A long kurta with intricate designs, paired with wide-legged palazzo pants.<br><br>This look blends modernity with tradition and provides comfort while still looking<br><br>elegant.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Color:</strong> Copper or Gold.<br><br><strong>Style:</strong> A classic salwar kameez with beautiful embellishments like beads or<br><br>embroidery. The deep tones combined with metallic accents make this attire<br><br>perfect for festive celebrations.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich, deep jewel tones such as Emerald Green, Ruby Red, and<br><br>Amethyst Purple that contrast beautifully with deep skin tones and dark hair.<br><br><strong>Accent Colors:</strong> Gold, Copper, or Brass for a luxurious, warm touch.<br><br><strong>Avoid:</strong> Light pastel or washed-out shades that might not complement the deeper skin<br><br>tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Color:</strong> Amethyst Purple or Deep Ruby Red.<br><br><strong>Style:</strong> A luxurious silk or satin saree with intricate gold zari work. The draping<br><br>and rich colors add elegance, while the gold accents add warmth and depth to<br><br>the overall look.<br><br><strong>Anarkali Dress:</strong><br><br><strong>Color:</strong> Emerald Green or Teal.<br><br><strong>Style:</strong> A long Anarkali dress with intricate embroidery around the neckline or<br><br>waist, flowing beautifully to the floor. Pair with a dupatta in a contrasting gold or<br><br>metallic tone for extra glam.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Color:</strong> Deep Burgundy or Forest Green.<br><br><strong>Style:</strong> A lehenga with delicate embellishments and a beautifully embroidered<br><br>choli. This traditional set radiates royal elegance, perfect for grand occasions.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Color:</strong> Golden Bronze or Dark Copper.<br><br><strong>Style:</strong> A salwar kameez featuring embroidery or sequins with a deep, metallic<br><br>color palette, which creates a harmonious look against deep skin tones. A long,<br><br>flowing kameez adds sophistication.<br><br><strong>Straight-Cut Kurta with Straight Pants:</strong><br><br><strong>Color:</strong> Rich Wine or Deep Plum.<br><br><strong>Style:</strong> A straight-cut kurta with subtle embroidery paired with straight pants or<br><br>churidar. The minimalist style makes it easy to carry while remaining chic.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Navy, Charcoal Gray, and Classic Black which pair beautifully<br><br>with deep skin tones and light hair, creating a professional and sophisticated<br><br>appearance.<br><br><strong>Accent Colors:</strong> White, Cream, or Soft Metallics like Silver to add a modern yet elegant<br><br>touch.<br><br><strong>Avoid:</strong> Too bright or neon shades that might overpower the look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer and Pantsuit:</strong><br><br><strong>Color:</strong> Deep Navy or Charcoal Gray.<br><br><strong>Style:</strong> A tailored blazer with matching trousers or a pencil skirt. The clean,<br><br>structured lines will exude professionalism, while the deeper shades enhance the<br><br>skin tone.<br><br><strong>Sheath Dress:</strong><br><br><strong>Color:</strong> Classic Black or Dark Teal.<br><br><strong>Style:</strong> A simple, sleek sheath dress that fits close to the body. This minimalist<br><br>silhouette is flattering and suitable for both meetings and formal presentations.<br><br><strong>A-Line Skirt and Button-Down Shirt:</strong><br><br><strong>Color:</strong> Deep Burgundy or Slate Gray for the skirt, with a Soft Cream or White<br><br>shirt.<br><br><strong>Style:</strong> A structured A-line skirt paired with a crisp button-down shirt. This look is<br><br>comfortable, professional, and timeless.<br><br><strong>Pencil Skirt and Blouse Combo:</strong><br><br><strong>Color:</strong> Charcoal Gray pencil skirt with a Soft Silver or White blouse.<br><br><strong>Style:</strong> A pencil skirt that hugs the curves and a delicate blouse with subtle<br><br>detailing or lace accents. Pair with sleek heels for an office-appropriate yet stylish<br><br>ensemble.<br><br><strong>Maxi Dress with Cardigan:</strong><br><br><strong>Color:</strong> Midnight Blue or Dark Olive for the maxi dress with a light gray cardigan.<br><br><strong>Style:</strong> A simple maxi dress with a cardigan or light blazer layered over for a<br><br>polished look. This outfit is both comfortable and chic for a busy office day.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Rich Charcoal, Deep Navy, and Black for a classic and professional<br><br>look that complements deep skin tones.<br><br><strong>Accent Colors:</strong> Soft White, Ivory, and Gold for subtle highlights that add sophistication.<br><br><strong>Avoid:</strong> Bright neon or overly vibrant colors that may detract from the polished office vibe.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer and Trouser Set:</strong><br><br><strong>Color:</strong> Deep Navy or Charcoal Gray.<br><br><strong>Style:</strong> A sharp, fitted blazer paired with tailored trousers. This is the go-to<br><br>professional outfit for a refined look. Pair with a white or light ivory blouse for<br><br>contrast.<br><br><strong>A-Line Dress:</strong><br><br><strong>Color:</strong> Charcoal Gray or Black.<br><br><strong>Style:</strong> A structured A-line dress with a modest neckline and knee-length. It’s<br><br>flattering for deeper skin tones while keeping the formal look intact. A thin gold<br><br>necklace or bracelet could subtly elevate the ensemble.<br><br><strong>Sheath Dress:</strong><br><br><strong>Color:</strong> Dark Teal or Classic Black.<br><br><strong>Style:</strong> A simple sheath dress that follows the body’s natural lines. Perfect for<br><br>formal office settings, and can be paired with a blazer or long cardigan.<br><br><strong>Pencil Skirt with Button-Down Shirt:</strong><br><br><strong>Color:</strong> Black pencil skirt with a crisp white or ivory blouse.<br><br><strong>Style:</strong> Classic and timeless, this combination is both professional and chic. A<br><br>sleek pair of flats or low heels would complement this look well.<br><br><strong>Maxi Dress with Structured Jacket:</strong><br><br><strong>Color:</strong> Midnight Blue for the dress and a tailored black jacket.<br><br><strong>Style:</strong> A simple maxi dress layered with a tailored jacket for a sophisticated yet<br><br>comfortable outfit. This is ideal for both office meetings and after-hours events.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Bold Ruby Red, Deep Burgundy, and Black for an elegant yet striking<br><br>look that complements deep skin tones.<br><br><strong>Accent Colors:</strong> Soft Gold, Champagne, and Blush Pink for a warm and glamorous<br><br>touch.<br><br><strong>Avoid:</strong> Neon or overly bright shades that may clash with deeper skin tones.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Sleek Midi Dress:</strong><br><br><strong>Color:</strong> Burgundy or Deep Red.<br><br><strong>Style:</strong> A fitted midi dress with a slight flare at the bottom, accentuating curves.<br><br>The deep red hues bring out the richness of your skin tone and create an<br><br>elegant, romantic vibe. Pair with nude or gold heels for a balanced look.<br><br><strong>Off-Shoulder Maxi Dress:</strong><br><br><strong>Color:</strong> Midnight Black or Dark Teal.<br><br><strong>Style:</strong> A sophisticated off-shoulder maxi dress that showcases a relaxed yet chic<br><br>vibe. The off-shoulder design adds a flirty element, while the dark colors maintain<br><br>an air of elegance.<br><br><strong>Plunging V-neck Satin Top with High-Waisted Skirt:</strong><br><br><strong>Color:</strong> Champagne for the top and Deep Burgundy for the skirt.<br><br><strong>Style:</strong> The satin top with a plunging neckline adds drama, while the high-waisted<br><br>skirt balances the outfit. It’s perfect for a date night look. Pair with subtle gold<br><br>jewelry and a clutch.<br><br><strong>A-Line Cocktail Dress:</strong><br><br><strong>Color:</strong> Charcoal Gray or Rich Red.<br><br><strong>Style:</strong> A classic A-line silhouette for a flattering look, the cocktail dress creates a<br><br>perfect balance of sophisticated and playful. Pair with strappy sandals or classic<br><br>stilettos.<br><br><strong>Tailored Jumpsuit:</strong><br><br><strong>Color:</strong> Black or Dark Purple.<br><br><strong>Style:</strong> A sleek tailored jumpsuit that gives off a bold, confident look. The clean<br><br>lines and fitted design bring a modern touch to any party or date night. Pair with a<br><br>statement belt or earrings to elevate the outfit.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Adult (30-50)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Vibrant Emerald Green, Rich Purple, and Classic Black to create a bold<br><br>yet refined look.<br><br><strong>Accent Colors:</strong> Gold, Silver, and Blush Pink to add glamour and sophistication.<br><br><strong>Avoid:</strong> Neon shades that may overwhelm the natural undertones of deep skin.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Off-Shoulder Sequin Dress:</strong><br><br><strong>Color:</strong> Emerald Green or Deep Burgundy.<br><br><strong>Style:</strong> A fitted off-shoulder dress with sequin detailing that sparkles under the<br><br>lights. The rich emerald green or deep burgundy will contrast beautifully with your<br><br>skin, creating a striking and festive appearance.<br><br><strong>Tailored Satin Slip Dress:</strong><br><br><strong>Color:</strong> Dark Purple or Midnight Blue.<br><br><strong>Style:</strong> A sleek satin slip dress that drapes gracefully, offering a minimalist yet<br><br>sensual silhouette. The dark purple or midnight blue adds a luxurious touch,<br><br>perfect for a night out or date.<br><br><strong>High-Waisted Trousers with a Silk Blouse:</strong><br><br><strong>Color:</strong> Black trousers and Gold silk blouse.<br><br><strong>Style:</strong> A combination of high-waisted, wide-leg black trousers with a flowy gold<br><br>blouse creates a modern yet chic vibe. The silk material adds elegance, and gold<br><br>complements deep skin tones beautifully.<br><br><strong>Fitted Velvet Bodycon Dress:</strong><br><br><strong>Color:</strong> Rich Red or Plum.<br><br><strong>Style:</strong> A bodycon velvet dress that hugs your curves and offers a timeless look<br><br>for any party or date night. The deep red or plum brings out the warmth of your<br><br>skin while providing an eye-catching effect.<br><br><strong>Asymmetrical One-Shoulder Dress:</strong><br><br><strong>Color:</strong> Classic Black or Charcoal Gray.<br><br><strong>Style:</strong> A sleek asymmetrical one-shoulder dress that adds a touch of modernity<br><br>to the traditional look. The bold black or charcoal gray is classic, ensuring a<br><br>polished and chic appearance for any special occasion.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft Pastels (Peach, Lavender, Mint Green) and Elegant Neutrals<br><br>(Beige, Cream, Pale Gold).<br><br><strong>Accent Colors:</strong> Subtle Metallics (Silver, Rose Gold).<br><br><strong>Avoid:</strong> Overly bright or neon colors to maintain a graceful and refined look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Chiffon Saree with Subtle Embroidery:</strong><br><br><strong>Color:</strong> Peach or Pale Gold.<br><br><strong>Style:</strong> A lightweight chiffon saree with delicate embroidery on the border and<br><br>pallu. Pair it with a matching blouse in a simple design for an elegant and<br><br>timeless look.<br><br><strong>Silk Anarkali Suit:</strong><br><br><strong>Color:</strong> Mint Green or Lavender.<br><br><strong>Style:</strong> A full-length silk Anarkali with intricate thread or zari work. Opt for a high<br><br>neckline and three-quarter sleeves to keep the look sophisticated and<br><br>age-appropriate.<br><br><strong>Banarasi Saree:</strong><br><br><strong>Color:</strong> Cream with Gold Accents.<br><br><strong>Style:</strong> A traditional cream Banarasi saree with golden motifs or border, paired<br><br>with a fitted blouse in a matching or slightly contrasting shade (like blush pink).<br><br><strong>Floor-Length Kurta with Palazzo:</strong><br><br><strong>Color:</strong> Soft Rose Pink or Ivory.<br><br><strong>Style:</strong> A floor-length A-line kurta with subtle thread embroidery, paired with flowy<br><br>palazzo pants. Add a sheer dupatta with matching borders for a polished look.<br><br><strong>Handloom Cotton Saree:</strong><br><br><strong>Color:</strong> Beige with Pastel Accents.<br><br><strong>Style:</strong> A lightweight handloom saree in beige, with a pastel border or pallu.<br><br>Perfect for comfort and elegance at a traditional gathering.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Warm Neutrals (Beige, Ivory, Sand), Jewel Tones (Emerald Green,<br><br>Ruby Red, Deep Blue).<br><br><strong>Accent Colors:</strong> Gold and Bronze for an opulent touch.<br><br><strong>Avoid:</strong> Overly bright or stark shades like neon or pure white to maintain a soft,<br><br>sophisticated vibe.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Kanjeevaram Silk Saree:</strong><br><br><strong>Color:</strong> Deep Blue with Gold Border.<br><br><strong>Style:</strong> A classic Kanjeevaram saree with intricate gold motifs, paired with a rich<br><br>gold blouse in a traditional cut (elbow-length sleeves).<br><br><strong>Chikankari Anarkali Suit:</strong><br><br><strong>Color:</strong> Ivory or Sand.<br><br><strong>Style:</strong> A full-length Anarkali suit with detailed Chikankari embroidery. Pair it with a<br><br>sheer dupatta featuring subtle embroidery for an understated yet elegant look.<br><br><strong>Georgette Saree with Subtle Embellishments:</strong><br><br><strong>Color:</strong> Ruby Red or Emerald Green.<br><br><strong>Style:</strong> A lightweight georgette saree with minimal embellishments along the<br><br>border, paired with a matching blouse. This creates a bold yet refined<br><br>appearance.<br><br><strong>Banarasi Silk Kurta Set:</strong><br><br><strong>Color:</strong> Beige with Bronze Accents.<br><br><strong>Style:</strong> A straight-cut Banarasi silk kurta with subtle patterns, paired with slim-fit<br><br>pants and a dupatta featuring bronze zari work.<br><br><strong>Cotton Silk Saree with Contrasting Pallu:</strong><br><br><strong>Color:</strong> Sand with Deep Maroon Pallu.<br><br><strong>Style:</strong> A cotton silk saree that blends comfort with tradition, paired with a maroon<br><br>blouse in a high-neck or boat-neck design.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Neutral Tones (Beige, Taupe, Light Gray, Ivory).<br><br><strong>Accent Colors:</strong> Pastel Shades (Dusty Pink, Powder Blue, Sage Green), Muted Metallics<br><br>(Silver, Rose Gold).<br><br><strong>Avoid:</strong> Overly dark shades like black or navy as primary colors to maintain a soft,<br><br>approachable professional look.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Pantsuit:</strong><br><br><strong>Color:</strong> Light Gray or Beige.<br><br><strong>Style:</strong> A structured pantsuit with a single-button blazer and straight-leg trousers.<br><br>Pair it with a soft blouse in pastel pink or white for a polished appearance.<br><br><strong>A-Line Midi Dress with Blazer:</strong><br><br><strong>Color:</strong> Ivory or Dusty Pink.<br><br><strong>Style:</strong> A sleeveless A-line midi dress, paired with a fitted blazer in a<br><br>complementary neutral shade. This offers a professional yet comfortable look.<br><br><strong>Pencil Skirt and Silk Blouse Combo:</strong><br><br><strong>Color:</strong> Taupe Skirt with a Sage Green Blouse.<br><br><strong>Style:</strong> A high-waisted pencil skirt paired with a silk or satin blouse with long<br><br>sleeves and a soft bow detail at the neck.<br><br><strong>Straight-Cut Trousers and Button-Up Shirt:</strong><br><br><strong>Color:</strong> Light Beige Trousers with a White or Powder Blue Shirt.<br><br><strong>Style:</strong> Straight-cut trousers with a neatly tucked-in button-up shirt. Add a<br><br>lightweight cardigan or tailored vest for layering.<br><br><strong>Wrap Dress:</strong><br><br><strong>Color:</strong> Soft Gray or Blush Pink.<br><br><strong>Style:</strong> A wrap dress with a modest V-neckline and knee-length hem. Choose a<br><br>design with subtle patterns like pinstripes for added sophistication.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Neutral Tones (Charcoal Gray, Navy, Taupe, Ivory).<br><br><strong>Accent Colors:</strong> Rich Earthy Shades (Deep Teal, Burgundy, Forest Green).<br><br><strong>Avoid:</strong> Overly vibrant hues or pastels that might clash with the mature and formal<br><br>aesthetic.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Classic Pantsuit:</strong><br><br><strong>Color:</strong> Charcoal Gray or Navy.<br><br><strong>Style:</strong> A well-tailored pantsuit with a double-breasted blazer and straight-leg<br><br>trousers. Pair it with an ivory blouse for a timeless professional look.<br><br><strong>Midi-Length Sheath Dress with Blazer:</strong><br><br><strong>Color:</strong> Taupe or Forest Green.<br><br><strong>Style:</strong> A sleeveless sheath dress with a tailored blazer in a complementary<br><br>neutral shade. Ideal for formal meetings or presentations.<br><br><strong>Pencil Skirt and Knit Top:</strong><br><br><strong>Color:</strong> Navy Pencil Skirt with a Burgundy or Deep Teal Knit Top.<br><br><strong>Style:</strong> A knee-length pencil skirt paired with a soft knit top featuring a modest<br><br>neckline and three-quarter sleeves.<br><br><strong>Wide-Leg Trousers with Button-Up Shirt:</strong><br><br><strong>Color:</strong> Taupe or Ivory Trousers with a Light Blue or White Shirt.<br><br><strong>Style:</strong> Wide-leg trousers with a tucked-in crisp button-up shirt. Add a lightweight<br><br>scarf in a subtle pattern for layering.<br><br><strong>Wrap Blouse with A-Line Skirt:</strong><br><br><strong>Color:</strong> Ivory or Deep Teal Blouse with a Charcoal Gray Skirt.<br><br><strong>Style:</strong> A wrap blouse with long sleeves paired with an A-line midi skirt. This<br><br>combination offers elegance and ease of movement.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Pastels (Blush Pink, Lavender, Soft Peach), Neutral Tones (Ivory,<br><br>Champagne).<br><br><strong>Accent Colors:</strong> Metallic Shades (Gold, Silver, Rose Gold), Jewel Tones (Emerald<br><br>Green, Sapphire Blue).<br><br><strong>Avoid:</strong> Neon shades or overly bright colors that may overpower the elegant tone.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant A-Line Gown:</strong><br><br><strong>Color:</strong> Champagne or Blush Pink.<br><br><strong>Style:</strong> A floor-length or tea-length gown with soft pleats, sheer sleeves, and a<br><br>delicate neckline. Perfect for a formal party or a sophisticated dinner date.<br><br><strong>Lace Midi Dress:</strong><br><br><strong>Color:</strong> Lavender or Soft Peach.<br><br><strong>Style:</strong> A fitted lace midi dress with three-quarter sleeves and a scalloped hem.<br><br>The lace adds a touch of romance and elegance.<br><br><strong>Silk Wrap Dress:</strong><br><br><strong>Color:</strong> Emerald Green or Sapphire Blue.<br><br><strong>Style:</strong> A wrap dress with a belted waist and a slight shimmer. The luxurious silk<br><br>fabric elevates the look for evening occasions.<br><br><strong>Embellished Tunic with Palazzo Pants:</strong><br><br><strong>Color:</strong> Ivory or Rose Gold.<br><br><strong>Style:</strong> A long, embellished tunic paired with flowy palazzo pants. This outfit is<br><br>stylish and provides ease of movement for a relaxed party setting.<br><br><strong>Off-Shoulder Top with Flared Skirt:</strong><br><br><strong>Color:</strong> Soft Peach Top with a Gold Flared Skirt.<br><br><strong>Style:</strong> An off-shoulder or bateau neckline top paired with a voluminous skirt.<br><br>Adds a youthful and festive touch.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Fair' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Neutrals (Charcoal Grey, Navy Blue, Burgundy), Soft Pastels<br><br>(Powder Blue, Blush Pink).<br><br><strong>Accent Colors:</strong> Metallic Tones (Silver, Platinum, Rose Gold), Jewel Tones (Ruby Red,<br><br>Emerald Green).<br><br><strong>Avoid:</strong> Overly vibrant colors or harsh contrasts; aim for understated elegance.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p>Embellished Evening Gown<br><br><strong>Color:</strong> Navy Blue or Charcoal Grey.<br><br><strong>Style:</strong> A floor-length gown with subtle embellishments at the neckline or<br><br>waistline. Choose cap sleeves or a wrap design for a flattering silhouette.<br><br><strong>Knee-Length A-Line Dress:</strong><br><br><strong>Color:</strong> Burgundy or Powder Blue.<br><br><strong>Style:</strong> A well-structured A-line dress with three-quarter sleeves and a delicate<br><br>lace overlay. Perfect for a semi-formal evening setting.<br><br><strong>Silk Tunic with Straight-Cut Pants:</strong><br><br><strong>Color:</strong> Emerald Green or Platinum Silver.<br><br><strong>Style:</strong> A long, silk tunic with subtle embroidery or embellishments, paired with<br><br>sleek, straight-cut trousers. Combines elegance with comfort.<br><br><strong>Chiffon Wrap Dress:</strong><br><br><strong>Color:</strong> Ruby Red or Blush Pink.<br><br><strong>Style:</strong> A midi or ankle-length wrap dress with a flowing chiffon skirt. The wrap<br><br>design adds sophistication and complements a variety of body types.<br><br><strong>Sequined Top with Flared Skirt:</strong><br><br><strong>Color:</strong> Silver Top with Navy Skirt.<br><br><strong>Style:</strong> A subtle sequined top paired with a high-waisted flared skirt. Adds a<br><br>festive yet age-appropriate flair.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Pastel Hues (Peach, Mint Green, Lavender), Neutral Shades (Cream,<br><br>Sand).<br><br><strong>Accent Colors:</strong> Gold, Soft Rose, Coral.<br><br><strong>Avoid:</strong> Very bright or overly dark shades.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Chanderi Silk Saree:</strong><br><br><strong>Color:</strong> Peach with Gold Border.<br><br><strong>Style:</strong> A light Chanderi silk saree paired with a matching short-sleeve blouse. Opt<br><br>for minimal embroidery for an elegant appearance.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Color:</strong> Mint Green with Golden Highlights.<br><br><strong>Style:</strong> A floor-length Anarkali with subtle zari work or embroidery. A high neckline<br><br>with full or three-quarter sleeves enhances elegance.<br><br><strong>Cotton Silk Salwar Kameez:</strong><br><br><strong>Color:</strong> Cream with Soft Coral Dupatta.<br><br><strong>Style:</strong> A straight-cut salwar kameez with delicate thread embroidery, paired with<br><br>a vibrant coral dupatta for contrast.<br><br><strong>Light Lehenga with Dupatta:</strong><br><br><strong>Color:</strong> Lavender with Rose Gold Embroidery.<br><br><strong>Style:</strong> A lightweight lehenga with a semi-stitched blouse and a sheer dupatta,<br><br>perfect for comfort and traditional aesthetics.<br><br><strong>Banarasi Kurta Set:</strong><br><br><strong>Color:</strong> Sand Beige with Gold Motifs.<br><br><strong>Style:</strong> A knee-length Banarasi kurta paired with straight pants and a dupatta<br><br>featuring matching motifs.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft Neutrals (Ivory, Beige, Pale Pink), Earthy Tones (Sage Green,<br><br>Rust).<br><br><strong>Accent Colors:</strong> Maroon, Gold, Deep Rose.<br><br><strong>Avoid:</strong> Overly bold or fluorescent shades.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p>Banarasi Silk Saree<br><br><strong>Color:</strong> Ivory with Maroon Border.<br><br><strong>Style:</strong> A timeless Banarasi saree with intricate golden zari work and a contrasting<br><br>blouse for a classic look.<br><br><strong>Chikankari Anarkali Suit:</strong><br><br><strong>Color:</strong> Pale Pink with White Threadwork.<br><br><strong>Style:</strong> A floor-length Anarkali with Chikankari embroidery, paired with a matching<br><br>dupatta for an understated yet elegant appearance.<br><br><strong>Cotton Silk Kurta Set:</strong><br><br><strong>Color:</strong> Sage Green with Gold Accents.<br><br><strong>Style:</strong> A straight-cut kurta with light embroidery, paired with palazzo pants and a<br><br>dupatta featuring subtle golden motifs.<br><br><strong>Kanjivaram Saree:</strong><br><br><strong>Color:</strong> Beige with Rust Orange Border.<br><br><strong>Style:</strong> A lightweight Kanjivaram saree with minimal embroidery and a half-sleeve<br><br>blouse for a refined traditional look.<br><br><strong>Sharara Suit:</strong><br><br><strong>Color:</strong> Deep Rose with Gold Highlights.<br><br><strong>Style:</strong> A short kurta with delicate embroidery, paired with a flared sharara and a<br><br>dupatta in complementary tones.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft Pastels (Powder Blue, Peach, Lavender), Neutral Shades (Beige,<br><br>Light Grey).<br><br><strong>Accent Colors:</strong> Navy, Burgundy, Forest Green.<br><br><strong>Avoid:</strong> Overly bright or harsh colors like neon or stark black.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blouse and Trousers:</strong><br><br><strong>Color:</strong> Beige Blouse with Navy Trousers.<br><br><strong>Style:</strong> A crisp button-down blouse paired with high-waisted trousers for a<br><br>polished and professional appearance.<br><br><strong>A-Line Midi Dress:</strong><br><br><strong>Color:</strong> Lavender or Soft Peach.<br><br><strong>Style:</strong> A simple A-line dress with elbow-length sleeves and a modest neckline.<br><br>Perfect for a formal yet elegant vibe.<br><br><strong>Pencil Skirt and Top:</strong><br><br><strong>Color:</strong> Light Grey Skirt with a Burgundy Top.<br><br><strong>Style:</strong> A tailored pencil skirt paired with a structured blouse or top for a refined<br><br>and sleek outfit.<br><br><strong>Kurta with Straight Pants:</strong><br><br><strong>Color:</strong> Pastel Blue Kurta with White Pants.<br><br><strong>Style:</strong> A straight-cut kurta with minimal detailing and matching pants for a<br><br>comfortable and office-appropriate traditional look.<br><br><strong>Blazer and Dress Combination:</strong><br><br><strong>Color:</strong> Forest Green Dress with a Beige Blazer.<br><br><strong>Style:</strong> A knee-length sleeveless dress layered with a tailored blazer for a<br><br>sophisticated office ensemble.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Cream, Soft Taupe, Light Blue, Charcoal Grey.<br><br><strong>Accent Colors:</strong> Deep Burgundy, Teal, Olive Green.<br><br><strong>Avoid:</strong> Overly vibrant shades like neon or patterns that are too loud.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Blazer and Trousers Set:</strong><br><br><strong>Color:</strong> Charcoal Grey Blazer with Matching Trousers.<br><br><strong>Style:</strong> Pair with a cream or soft blue blouse for a polished and commanding look.<br><br><strong>Knee-Length Sheath Dress:</strong><br><br><strong>Color:</strong> Teal or Olive Green.<br><br><strong>Style:</strong> A classic sheath dress with three-quarter sleeves for an elegant and<br><br>streamlined outfit.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Color:</strong> Light Taupe Skirt with a Soft Blue Blouse.<br><br><strong>Style:</strong> Tuck in the blouse and accessorize minimally for a sleek professional look.<br><br><strong>Straight-Cut Kurta with Palazzo Pants:</strong><br><br><strong>Color:</strong> Beige Kurta with Deep Burgundy Palazzo.<br><br><strong>Style:</strong> A structured kurta with subtle embroidery or pintuck details for a traditional<br><br>yet formal touch.<br><br><strong>Cardigan and Midi Skirt:</strong><br><br><strong>Color:</strong> Navy Cardigan with a Cream Midi Skirt.<br><br><strong>Style:</strong> Wear a fitted top beneath the cardigan for a cozy but professional<br><br>ensemble.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Soft Gold, Champagne, Dusty Rose, Black.<br><br><strong>Accent Colors:</strong> Emerald Green, Deep Plum, Silver.<br><br><strong>Avoid:</strong> Overly flashy neon or stark, bright colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Midi Dress:</strong><br><br><strong>Color:</strong> Champagne or Soft Gold.<br><br><strong>Style:</strong> A flattering A-line midi dress with delicate lace or sequin detailing for an<br><br>elegant look.<br><br>Fit-and-Flare Dress<br><br><strong>Color:</strong> Dusty Rose with Subtle Embroidery.<br><br><strong>Style:</strong> A fit-and-flare style that accentuates the waist, paired with a delicate<br><br>wraparound design or gentle pleats for movement.<br><br><strong>Maxi Dress with Draping:</strong><br><br><strong>Color:</strong> Deep Plum or Burgundy.<br><br><strong>Style:</strong> Soft draped fabric with a cinched waist. This style is great for a chic,<br><br>flowing silhouette.<br><br><strong>Silk Blouse and Wide-Leg Trousers:</strong><br><br><strong>Color:</strong> Soft Gold Blouse with Black Wide-Legged Trousers.<br><br><strong>Style:</strong> Pair a silk or satin blouse with high-waisted, wide-legged trousers for a<br><br>refined, stylish appearance.<br><br><strong>Tailored Jumpsuit:</strong><br><br><strong>Color:</strong> Emerald Green or Navy Blue.<br><br><strong>Style:</strong> A tailored jumpsuit with a plunging neckline or V-back for a more daring<br><br>yet classy look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Light' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Burgundy, Navy Blue, Charcoal Gray, Cream.<br><br><strong>Accent Colors:</strong> Gold, Silver, Soft Pink, Deep Purple.<br><br><strong>Avoid:</strong> Overly bright colors like neon or overly dark tones like black for this age group.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant A-Line Dress:</strong><br><br><strong>Color:</strong> Burgundy or Navy Blue.<br><br><strong>Style:</strong> An A-line dress that gracefully falls from the waist. A classic V-neck or boat<br><br>neckline can be flattering, paired with gentle ruching or lace for texture.<br><br><strong>Chic Shift Dress:</strong><br><br><strong>Color:</strong> Charcoal Gray with Subtle Detailing.<br><br><strong>Style:</strong> A shift dress with a bit of structure and a mid-length that works well for a<br><br>more mature, elegant silhouette. Look for details like a jeweled neckline or<br><br>delicate embellishments.<br><br><strong>Luxe Satin Blouse and Pencil Skirt:</strong><br><br><strong>Color:</strong> Soft Pink Satin Blouse paired with a Navy Blue Pencil Skirt.<br><br><strong>Style:</strong> A satin blouse with a slight sheen combined with a sleek, high-waisted<br><br>pencil skirt for a stylish yet sophisticated look.<br><br><strong>Maxi Dress with Sleeves:</strong><br><br><strong>Color:</strong> Deep Purple or Wine.<br><br><strong>Style:</strong> A flattering maxi dress with long sleeves or three-quarter sleeves,<br><br>designed with a modest V-neck and soft flowing fabric. Ideal for maintaining<br><br>elegance while still being comfortable.<br><br><strong>Tailored Jumpsuit:</strong><br><br><strong>Color:</strong> Cream or Navy Blue.<br><br><strong>Style:</strong> A tailored jumpsuit with a slightly structured top and soft, flowing pants. A<br><br>flattering cinched waist and V-neckline will provide a modern yet refined<br><br>appearance.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Emerald Green, Deep Red, Gold, Royal Blue.<br><br><strong>Accent Colors:</strong> Cream, Beige, Dark Brown.<br><br><strong>Avoid:</strong> Extremely bright or fluorescent shades.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Embroidered Saree:</strong><br><br><strong>Color:</strong> Deep Red with Gold embroidery.<br><br><strong>Style:</strong> A traditional saree with intricate gold work along the borders, paired with a<br><br>matching blouse. The fabric can be silk or georgette, offering a soft yet structured<br><br>look for a mature woman.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Color:</strong> Emerald Green with Gold accents.<br><br><strong>Style:</strong> A long Anarkali dress with delicate embellishments around the neckline<br><br>and hem. The A-line shape flatters the body and provides comfort without<br><br>sacrificing elegance.<br><br><strong>Floor-Length Kurta with Palazzo:</strong><br><br><strong>Color:</strong> Royal Blue Kurta with Gold patterns.<br><br><strong>Style:</strong> A long kurta with side slits and a flowy fit, paired with wide-leg palazzo<br><br>pants. A soft, rich fabric like crepe or silk will keep the look elegant and graceful.<br><br><strong>Traditional Lehenga Choli:</strong><br><br><strong>Color:</strong> Emerald Green with Cream or Gold detailing.<br><br><strong>Style:</strong> A lehenga with a fitted choli and a soft, flowing skirt. Embroidered with fine<br><br>gold or silver work, perfect for a traditional occasion. Pair it with a matching<br><br>dupatta for a complete look.<br><br><strong>Churidar Set with Dupatta:</strong><br><br><strong>Color:</strong> Dark Brown or Burgundy.<br><br><strong>Style:</strong> A churidar set with a flowy kurta and a lightweight dupatta, embellished<br><br>with minimal patterns for an understated traditional look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Burgundy, Forest Green, Gold, Deep Navy.<br><br><strong>Accent Colors:</strong> Cream, Beige, Charcoal Grey.<br><br><strong>Avoid:</strong> Neon or overly bright colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Silk Saree:</strong><br><br><strong>Color:</strong> Burgundy with Gold borders.<br><br><strong>Style:</strong> A luxurious silk saree with delicate gold thread work. The rich color<br><br>complements medium/olive skin tones and creates an elegant, timeless look. Pair<br><br>it with a matching blouse for a complete, traditional appeal.<br><br><strong>Anarkali Dress:</strong><br><br><strong>Color:</strong> Forest Green with Gold detailing.<br><br><strong>Style:</strong> A floor-length Anarkali dress with a structured waist and an A-line cut. The<br><br>gold embellishments along the neckline and hem give it a regal touch, while the<br><br>flowing fabric offers comfort and movement.<br><br><strong>Long Kurta with Churidar:</strong><br><br><strong>Color:</strong> Deep Navy with subtle embroidery.<br><br><strong>Style:</strong> A classic long kurta with intricate embroidery along the neckline and<br><br>sleeves, paired with a churidar. This sophisticated and elegant outfit offers a<br><br>formal yet traditional look suitable for mature women.<br><br><strong>Traditional Lehenga:</strong><br><br><strong>Color:</strong> Burgundy with Gold accents.<br><br><strong>Style:</strong> A lehenga with a richly embellished skirt and a fitted blouse. The<br><br>contrasting burgundy and gold combination exudes traditional grandeur. Opt for a<br><br>long, flowing dupatta for a balanced and graceful appearance.<br><br><strong>Chikan Embroidery Suit:</strong><br><br><strong>Color:</strong> Cream with Charcoal Grey embroidery.<br><br><strong>Style:</strong> A delicately embroidered kurta set with matching trousers or churidar. This<br><br>lightweight yet elegant outfit is perfect for an understated traditional look while<br><br>still making a statement.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Navy Blue, Olive Green, Mauve.<br><br><strong>Accent Colors:</strong> Soft Beige, Ivory, Blush Pink.<br><br><strong>Avoid:</strong> Very bright or neon colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer and Trousers:</strong><br><br><strong>Color:</strong> Charcoal Grey with a soft blush pink blouse.<br><br><strong>Style:</strong> A well-tailored blazer paired with matching trousers, complemented by a<br><br>soft blush pink blouse. This ensemble offers a professional and polished look,<br><br>with a subtle feminine touch from the blouse.<br><br><strong>Pencil Skirt with Silk Top:</strong><br><br><strong>Color:</strong> Navy Blue with a light ivory or soft beige silk blouse.<br><br><strong>Style:</strong> A sleek pencil skirt paired with a luxurious silk blouse. The navy blue<br><br>creates a professional tone, while the silk top offers elegance. A button-up style<br><br>or subtle pleating adds sophistication to the outfit.<br><br><strong>Shift Dress with Belt:</strong><br><br><strong>Color:</strong> Olive Green with dark brown or beige accents.<br><br><strong>Style:</strong> A form-fitting shift dress with a waist belt to define the silhouette. Olive<br><br>green is an excellent color choice for medium/olive skin tones, and it pairs<br><br>beautifully with a brown or beige belt to add structure and style.<br><br><strong>A-Line Skirt with Fitted Blouse:</strong><br><br><strong>Color:</strong> Mauve with a soft beige blouse.<br><br><strong>Style:</strong> A simple yet elegant A-line skirt paired with a fitted blouse. The mauve<br><br>adds a soft tone, while the fitted blouse ensures a sharp, formal look perfect for<br><br>the office.<br><br><strong>Midi Dress with Structured Jacket:</strong><br><br><strong>Color:</strong> Charcoal Grey with ivory or light beige accents.<br><br><strong>Style:</strong> A midi dress with a fitted cut, complemented by a structured jacket. The<br><br>monochromatic grey tones create a sleek and professional outfit, while the ivory<br><br>jacket lightens the look and adds refinement.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Charcoal Grey, Navy Blue, Deep Burgundy, Olive Green.<br><br><strong>Accent Colors:</strong> Soft Ivory, Warm Taupe, Dusty Rose.<br><br><strong>Avoid:</strong> Very bright or flashy colors, neon shades.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit (Blazer & Trousers):</strong><br><br><strong>Color:</strong> Charcoal Grey or Navy Blue with a soft ivory blouse.<br><br><strong>Style:</strong> A structured blazer paired with matching trousers and a soft ivory blouse<br><br>creates a refined and powerful look. Opt for a blazer with a sleek fit to ensure<br><br>sophistication, and the ivory blouse adds balance to the darker tones.<br><br><strong>A-Line Midi Skirt with Buttoned Blouse:</strong><br><br><strong>Color:</strong> Deep Burgundy blouse with an olive green A-line midi skirt.<br><br><strong>Style:</strong> The burgundy blouse adds richness and depth, while the olive green skirt<br><br>provides contrast and elegance. This combination allows for comfort and<br><br>movement while remaining professional and poised.<br><br><strong>Pencil Skirt with Peplum Top:</strong><br><br><strong>Color:</strong> Olive Green skirt with a soft taupe peplum top.<br><br><strong>Style:</strong> A sleek pencil skirt paired with a peplum top to create a sophisticated<br><br>silhouette. The soft taupe top is both flattering and professional, while the olive<br><br>skirt enhances the overall polished appearance.<br><br><strong>Shift Dress with Structured Blazer:</strong><br><br><strong>Color:</strong> Navy Blue with a deep burgundy blazer.<br><br><strong>Style:</strong> A classic shift dress in navy blue, accompanied by a structured deep<br><br>burgundy blazer. The navy dress offers versatility, and the burgundy blazer adds<br><br>a bold yet professional touch, perfect for meetings or presentations.<br><br><strong>Midi Dress with Belted Waist:</strong><br><br><strong>Color:</strong> Charcoal Grey with a soft dusty rose belt or accessories.<br><br><strong>Style:</strong> A midi dress with a defined waistline via a belt. The charcoal grey is ideal<br><br>for a formal setting, and the dusty rose belt provides a subtle pop of color without<br><br>overpowering the look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Rich Plum, Soft Gold, Olive Green.<br><br><strong>Accent Colors:</strong> Champagne, Warm Taupe, Soft Ivory.<br><br><strong>Avoid:</strong> Bright neon shades and too many contrasting colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Floor-Length Maxi Dress:</strong><br><br><strong>Color:</strong> Deep Burgundy with soft gold accents.<br><br><strong>Style:</strong> A floor-length maxi dress with a flattering A-line silhouette and delicate<br><br>gold accents along the neckline or waist. The deep burgundy adds sophistication,<br><br>while the gold accents provide a touch of glamour. This style is perfect for a<br><br>formal evening party or a romantic date night.<br><br><strong>Tailored Jumpsuit with Metallic Belt:</strong><br><br><strong>Color:</strong> Rich Plum with a champagne-colored metallic belt.<br><br><strong>Style:</strong> A sleek, tailored jumpsuit that enhances your silhouette with a metallic belt<br><br>at the waist. The rich plum offers a bold yet elegant appearance, and the<br><br>champagne metallic belt adds an element of shine and elegance for a<br><br>memorable evening look.<br><br><strong>Cocktail Dress with Sheer Overlay:</strong><br><br><strong>Color:</strong> Olive Green with soft ivory accents.<br><br><strong>Style:</strong> A sophisticated cocktail dress in olive green with a sheer overlay, creating<br><br>a soft, ethereal look. The ivory accents add a touch of brightness, balancing the<br><br>deeper tones of the olive dress, making it perfect for a party or elegant date night.<br><br><strong>Belted A-Line Dress:</strong><br><br><strong>Color:</strong> Soft Champagne with deep burgundy belt.<br><br><strong>Style:</strong> An A-line dress with a defined waistline via a deep burgundy belt, giving<br><br>the dress structure while maintaining an elegant flow. The champagne color<br><br>provides a soft, luxurious look, ideal for a romantic evening or celebration.<br><br><strong>Off-Shoulder Midi Dress:</strong><br><br><strong>Color:</strong> Rich Plum with a soft gold neckline detail.<br><br><strong>Style:</strong> A midi-length off-shoulder dress that highlights the collarbone and arms,<br><br>complemented by a soft gold neckline detail. The rich plum adds a regal touch,<br><br>and the off-shoulder style exudes confidence and elegance for a party<br><br>atmosphere.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Medium/Olive' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Teal, Rich Burgundy, Classic Black, Warm Bronze.<br><br><strong>Accent Colors:</strong> Soft Ivory, Champagne, Olive Green.<br><br><strong>Avoid:</strong> Overly bright neon shades or too many contrasting hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Velvet A-Line Dress:</strong><br><br><strong>Color:</strong> Deep Teal with soft ivory accents.<br><br><strong>Style:</strong> A luxurious velvet A-line dress in deep teal, offering elegance and comfort.<br><br>The soft ivory accents, whether in the form of lace details or embroidery, create a<br><br>delicate contrast, making it an ideal choice for a formal party or a romantic date<br><br>night.<br><br><strong>High-Waisted Pencil Skirt & Blouse:</strong><br><br><strong>Color:</strong> Rich Burgundy with a champagne-colored blouse.<br><br><strong>Style:</strong> A high-waisted pencil skirt paired with a flowing blouse in champagne. The<br><br>rich burgundy skirt adds sophistication, while the soft blouse balances the overall<br><br>look with a soft sheen, making it suitable for both evening parties and intimate<br><br>dates.<br><br><strong>Silk Wrap Dress:</strong><br><br><strong>Color:</strong> Classic Black with bronze accents.<br><br><strong>Style:</strong> A classic black wrap dress that cinches at the waist, highlighting your<br><br>figure while the bronze accents around the neckline or belt provide a hint of<br><br>metallic glamour. This style is timeless, sophisticated, and perfect for an upscale<br><br>party or elegant dinner date.<br><br><strong>Chiffon Maxi Dress:</strong><br><br><strong>Color:</strong> Warm Bronze with deep burgundy details.<br><br><strong>Style:</strong> A flowing chiffon maxi dress with a slight A-line silhouette. The warm<br><br>bronze base color exudes luxury, while the deep burgundy embellishments along<br><br>the waist or neckline add a rich, contrasting touch. This look is ideal for an<br><br>elegant party or a stylish date night.<br><br><strong>Tailored Jumpsuit with Flared Legs:</strong><br><br><strong>Color:</strong> Black with bronze detailing.<br><br><strong>Style:</strong> A tailored black jumpsuit with flared legs and a plunging neckline,<br><br>providing a chic and modern alternative to a dress. The bronze detailing at the<br><br>waist or cuffs adds a touch of glam, making it perfect for a more sophisticated<br><br>evening gathering.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Warm Gold, Rich Burgundy, Deep Emerald, Copper.<br><br><strong>Accent Colors:</strong> Soft Beige, Cream, Light Coral.<br><br><strong>Avoid:</strong> Bright neon or overly flashy colors that may clash with traditional themes.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Silk Saree with Embellishments:</strong><br><br><strong>Color:</strong> Rich Burgundy with gold zari work.<br><br><strong>Style:</strong> A luxurious silk saree in rich burgundy with intricate gold zari work around<br><br>the borders and pallu. The shimmering gold embroidery will enhance the<br><br>elegance and charm, perfect for traditional ceremonies or festive occasions.<br><br><strong>Anarkali Suit with Embroidered Detailing:</strong><br><br><strong>Color:</strong> Deep Emerald with copper accents.<br><br><strong>Style:</strong> An Anarkali suit in deep emerald with delicate copper embroidery along<br><br>the neckline and hem. The voluminous silhouette of the Anarkali dress is<br><br>graceful, and the combination of emerald and copper brings a royal and<br><br>traditional touch.<br><br><strong>Lehenga Choli Set:</strong><br><br><strong>Color:</strong> Warm Gold with soft beige or light coral blouse.<br><br><strong>Style:</strong> A warm gold lehenga paired with a soft beige or coral choli. The golden<br><br>lehenga can be adorned with subtle embroidery, giving it a festive yet traditional<br><br>appearance. Add a dupatta in a complementary light shade with light embroidery<br><br>for a cohesive look.<br><br><strong>Traditional Sharara Set:</strong><br><br><strong>Color:</strong> Copper with beige accents.<br><br><strong>Style:</strong> A traditional copper-colored sharara set with beige accents. The<br><br>loose-fitting sharara pants provide comfort and fluidity, while the beige kurta with<br><br>intricate copper embroidery at the neckline and sleeves adds elegance. A<br><br>matching dupatta with delicate border work would complement the outfit.<br><br><strong>Kameez with A-Line Skirt:</strong><br><br><strong>Color:</strong> Light Coral with warm gold detailing.<br><br><strong>Style:</strong> A soft light coral kameez with an A-line skirt in a contrasting gold tone. The<br><br>flowing nature of the A-line skirt gives the outfit movement, while the kameez is<br><br>adorned with small gold motifs.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Dark Green, Rich Charcoal, or Earthy Brown.<br><br><strong>Accent Colors:</strong> Gold, Off-white, or Cream.<br><br><strong>Avoid:</strong> Bright neon colors or overly flashy hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Deep Burgundy, Dark Green, or Earthy Brown to complement your<br><br>skin tone.<br><br><strong>Blouse Color:</strong> Gold or Off-white for a contrasting and elegant look.<br><br><strong>Dupatta:</strong> A matching or slightly contrasting dupatta in cream or gold to enhance<br><br>the overall traditional feel.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Deep Burgundy or Rich Charcoal for an elegant and<br><br>sophisticated look.<br><br><strong>Salwar Color:</strong> Beige or Off-white to complement the kameez.<br><br><strong>Dupatta:</strong> Add a golden or off-white dupatta for a luxurious touch.<br><br><strong>Anarkali Suit:</strong><br><br><strong>Anarkali Color:</strong> Rich Burgundy or Dark Green with subtle gold accents for a<br><br>royal appearance.<br><br><strong>Bottom:</strong> Off-white or beige salwar to contrast the richness of the Anarkali.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Lehenga Color:</strong> Deep Burgundy, Dark Green, or Charcoal Grey for a classic<br><br>traditional vibe.<br><br><strong>Choli Color:</strong> Off-white or Gold to bring contrast and highlight the lehenga.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Charcoal Grey, Navy Blue, Olive Green.<br><br><strong>Accent Colors:</strong> Light Beige, Cream, White, Silver.<br><br><strong>Avoid:</strong> Neon or overly bright hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Fitted Blazer and A-Line Skirt:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey or Navy Blue.<br><br><strong>Skirt Color:</strong> Olive Green or Deep Burgundy.<br><br><strong>Style:</strong> A structured blazer with a slim fit paired with a classic A-line skirt.<br><br><strong>Fabric:</strong> Wool blend or cotton blend for the blazer and skirt for a neat and formal finish.<br><br><strong>Details:</strong> The blazer should have sharp lapels and buttoned cuffs, while the A-line skirt<br><br>maintains a balanced and professional silhouette.<br><br><strong>Shift Dress:</strong><br><br><strong>Dress Color:</strong> Charcoal Grey or Navy Blue.<br><br><strong>Style:</strong> A knee-length shift dress with clean lines and a simple, no-fuss silhouette.<br><br><strong>Fabric:</strong> Cotton blend or wool for a refined and comfortable fit.<br><br><strong>Details:</strong> A straight cut that falls just above the knee, ideal for office environments. Pair with a<br><br>structured handbag and simple pumps.<br><br><strong>Tailored Trousers and Blouse:</strong><br><br><strong>Trousers Color:</strong> Charcoal Grey or Deep Burgundy.<br><br><strong>Blouse Color:</strong> Soft White or Light Beige.<br><br><strong>Style:</strong> High-waisted, tailored trousers with a fitted blouse.<br><br><strong>Fabric:</strong> Cotton blend or wool for the trousers and silk or cotton blend for the blouse.<br><br><strong>Details:</strong> The trousers should be neatly pressed, and the blouse can feature a simple bow tie or<br><br>delicate pleats for a subtle touch of elegance.<br><br><strong>Midi Skirt and Fitted Sweater:</strong><br><br><strong>Skirt Color:</strong> Navy Blue or Olive Green.<br><br><strong>Sweater Color:</strong> Light Beige or Soft White.<br><br><strong>Style:</strong> A midi skirt paired with a fitted, long-sleeve sweater.<br><br><strong>Fabric:</strong> Knit or wool for the sweater and a smooth, medium-weight fabric for the skirt.<br><br><strong>Details:</strong> The sweater may have a small collar or ribbed cuffs for added interest.<br><br><strong>Pencil Skirt and Button-Down Shirt:</strong><br><br><strong>Skirt Color:</strong> Deep Burgundy or Navy Blue.<br><br><strong>Shirt Color:</strong> White or Light Beige.<br><br><strong>Style:</strong> A pencil skirt with a button-down shirt tucked in for a sharp and tailored look.<br><br><strong>Fabric:</strong> A cotton blend or silk for the shirt, and stretchable fabric for the pencil skirt.<br><br><strong>Details:</strong> The shirt should have a sleek collar and the skirt should be mid-calf for an elegant and<br><br>professional finish.<br><br><strong>V-neck Dress:</strong><br><br><strong>Dress Color:</strong> Burgundy or Navy Blue.<br><br><strong>Style:</strong> A knee-length V-neck dress with simple, clean lines.<br><br><strong>Fabric:</strong> A soft, stretchable material like jersey or a cotton blend.<br><br><strong>Details:</strong> The V-neck offers a flattering touch without being too revealing, making it appropriate<br><br>for formal office settings.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Navy Blue, Charcoal Grey, Burgundy, Deep Green.<br><br><strong>Accent Colors:</strong> White, Cream, Silver, Light Beige.<br><br><strong>Avoid:</strong> Overly bright or neon hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer and Trousers:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey or Navy Blue.<br><br><strong>Trousers Color:</strong> Matching or coordinating in a deep tone such as black or dark green.<br><br><strong>Style:</strong> Slim-fit tailored blazer with a single-breasted button.<br><br><strong>Fabric:</strong> Wool blend or cotton blend for comfort and a structured look.<br><br><strong>Details:</strong> Classic lapels and a clean-cut finish for a professional, polished appearance.<br><br><strong>Pencil Skirt and Blouse:</strong><br><br><strong>Skirt Color:</strong> Burgundy or Charcoal Grey.<br><br><strong>Blouse Color:</strong> Soft White or Light Beige.<br><br><strong>Style:</strong> Fitted pencil skirt with a high waist paired with a long-sleeve blouse.<br><br><strong>Fabric:</strong> Cotton or silk blend for the blouse, and stretchable fabric for the skirt.<br><br><strong>Details:</strong> The blouse may feature minimal pleats or ruffles for a modern touch.<br><br><strong>Sheath Dress:</strong><br><br><strong>Dress Color:</strong> Navy Blue or Deep Green.<br><br><strong>Style:</strong> Knee-length sheath dress that hugs the figure.<br><br><strong>Fabric:</strong> A structured cotton-blend or wool blend for a professional finish.<br><br><strong>Details:</strong> Clean lines, no excessive patterns, ideal for a formal office setting.<br><br><strong>Wrap Dress:</strong><br><br><strong>Dress Color:</strong> Burgundy or Charcoal Grey.<br><br><strong>Style:</strong> Knee-length wrap dress with a deep V-neck and wrap-around tie waist.<br><br><strong>Fabric:</strong> Soft, comfortable fabric like jersey or cotton blend for easy movement.<br><br><strong>Details:</strong> Tied waist adds definition, while the V-neck adds a touch of femininity without being<br><br>too revealing.<br><br><strong>Wide-Legged Pants and Blouse:</strong><br><br><strong>Pants Color:</strong> Navy Blue or Charcoal Grey.<br><br><strong>Blouse Color:</strong> Light Beige or Soft White.<br><br><strong>Style:</strong> High-waisted, wide-legged trousers paired with a button-down blouse.<br><br><strong>Fabric:</strong> Flowing fabric for the trousers, crisp cotton or silk blend for the blouse.<br><br><strong>Details:</strong> Tuck in the blouse for a streamlined look and a belt to define the waist.<br><br><strong>Midi Skirt and Sweater:</strong><br><br><strong>Skirt Color:</strong> Charcoal Grey or Deep Green.<br><br><strong>Sweater Color:</strong> Soft White or Light Beige.<br><br><strong>Style:</strong> Midi-length skirt with a cozy fitted sweater.<br><br><strong>Fabric:</strong> Wool blend or knit for the sweater; silk or polyester for the skirt.<br><br><strong>Details:</strong> The sweater may have a subtle cable knit or ribbed texture for added elegance.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Midnight Blue, Dark Green, Charcoal Grey.<br><br><strong>Accent Colors:</strong> Gold, Off-white, or Cream.<br><br><strong>Avoid:</strong> Bright neon colors or overly flashy hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>A-Line Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy or Midnight Blue.<br><br><strong>Style:</strong> A-line cut with a V-neck or scoop neckline.<br><br><strong>Fabric:</strong> Velvet or satin.<br><br><strong>Details:</strong> Flattering on the figure and perfect for an elegant, evening look.<br><br><strong>Maxi Dress:</strong><br><br><strong>Dress Color:</strong> Dark Green or Charcoal Grey.<br><br><strong>Style:</strong> Full-length with a flowy bottom and fitted bodice.<br><br><strong>Fabric:</strong> Velvet or chiffon for a light, airy feel.<br><br><strong>Details:</strong> Side slit for added flair, perfect for a chic, sophisticated look.<br><br><strong>Bodycon Dress:</strong><br><br><strong>Dress Color:</strong> Rich Charcoal or Deep Burgundy.<br><br><strong>Style:</strong> Knee-length bodycon dress with a fitted silhouette.<br><br><strong>Fabric:</strong> Stretchy fabric like jersey or spandex for comfort and style.<br><br><strong>Details:</strong> Lace or sequin detailing for a touch of glamour.<br><br><strong>Wrap Dress:</strong><br><br><strong>Dress Color:</strong> Soft Gold or Off-white with dark green or burgundy accents.<br><br><strong>Style:</strong> Wrap style with a gathered waist for a flattering fit.<br><br><strong>Fabric:</strong> Silk or chiffon for a breezy, lightweight feel.<br><br><strong>Details:</strong> Elegant yet comfortable, perfect for a date night or evening event.<br><br><strong>Peplum Dress:</strong><br><br><strong>Dress Color:</strong> Dark Blue or Charcoal with gold accents.<br><br><strong>Style:</strong> Fitted with a peplum waist for an hourglass shape.<br><br><strong>Fabric:</strong> Crepe or cotton-blend for a structured look.<br><br><strong>Details:</strong> Elegant yet professional, ideal for a more formal party or evening.<br><br><strong>Off-Shoulder Dress:</strong><br><br><strong>Dress Color:</strong> Midnight Blue or Charcoal Grey.<br><br><strong>Style:</strong> Off-shoulder to highlight the neckline and collarbones.<br><br><strong>Fabric:</strong> Satin or silk for a luxurious, evening feel.<br><br><strong>Details:</strong> Lace or beaded detailing around the neckline for added glamour.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Brown' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Midnight Blue, Dark Green, Charcoal Grey.<br><br><strong>Accent Colors:</strong> Gold, Off-white, or Cream.<br><br><strong>Avoid:</strong> Bright neon colors or overly flashy hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>A-Line Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy or Midnight Blue.<br><br><strong>Style:</strong> A-line cut with a V-neck or scoop neckline.<br><br><strong>Fabric:</strong> Velvet or satin.<br><br><strong>Details:</strong> Flattering on the figure and perfect for an elegant, evening look.<br><br><strong>Maxi Dress:</strong><br><br><strong>Dress Color:</strong> Dark Green or Charcoal Grey.<br><br><strong>Style:</strong> Full-length with a flowy bottom and fitted bodice.<br><br><strong>Fabric:</strong> Velvet or chiffon for a light, airy feel.<br><br><strong>Details:</strong> Side slit for added flair, perfect for a chic, sophisticated look.<br><br><strong>Bodycon Dress:</strong><br><br><strong>Dress Color:</strong> Rich Charcoal or Deep Burgundy.<br><br><strong>Style:</strong> Knee-length bodycon dress with a fitted silhouette.<br><br><strong>Fabric:</strong> Stretchy fabric like jersey or spandex for comfort and style.<br><br><strong>Details:</strong> Lace or sequin detailing for a touch of glamour.<br><br><strong>Wrap Dress:</strong><br><br><strong>Dress Color:</strong> Soft Gold or Off-white with dark green or burgundy accents.<br><br><strong>Style:</strong> Wrap style with a gathered waist for a flattering fit.<br><br><strong>Fabric:</strong> Silk or chiffon for a breezy, lightweight feel.<br><br><strong>Details:</strong> Elegant yet comfortable, perfect for a date night or evening event.<br><br><strong>Peplum Dress:</strong><br><br><strong>Dress Color:</strong> Dark Blue or Charcoal with gold accents.<br><br><strong>Style:</strong> Fitted with a peplum waist for an hourglass shape.<br><br><strong>Fabric:</strong> Crepe or cotton-blend for a structured look.<br><br><strong>Details:</strong> Elegant yet professional, ideal for a more formal party or evening.<br><br><strong>Off-Shoulder Dress:</strong><br><br><strong>Dress Color:</strong> Midnight Blue or Charcoal Grey.<br><br><strong>Style:</strong> Off-shoulder to highlight the neckline and collarbones.<br><br><strong>Fabric:</strong> Satin or silk for a luxurious, evening feel.<br><br><strong>Details:</strong> Lace or beaded detailing around the neckline for added glamour.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Gold, Rich Charcoal, Emerald Green.<br><br><strong>Accent Colors:</strong> Off-white, Cream, Bronze.<br><br><strong>Avoid:</strong> Bright neon colors or overly flashy hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Deep Burgundy or Emerald Green with subtle golden or bronze embroidery.<br><br><strong>Blouse Color:</strong> Off-white or matching the saree color for a seamless look.<br><br><strong>Style:</strong> A traditional saree with a classic drape, paired with a fitted blouse.<br><br><strong>Fabric:</strong> Silk, cotton, or brocade for a regal appearance.<br><br><strong>Details:</strong> Golden or bronze embroidery along the border of the saree and blouse for a touch of<br><br>elegance.<br><br><strong>Anarkali Dress:</strong><br><br><strong>Dress Color:</strong> Rich Charcoal or Deep Burgundy.<br><br><strong>Style:</strong> A long, flowy Anarkali dress that reaches the floor with intricate patterns or embroidery.<br><br><strong>Fabric:</strong> Silk, georgette, or crepe for flowy elegance.<br><br><strong>Details:</strong> The dress should have intricate detailing along the bodice or sleeves, complemented<br><br>with delicate pleats.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Deep Burgundy or Emerald Green.<br><br><strong>Lehenga Color:</strong> Off-white or cream for contrast and elegance.<br><br><strong>Dupatta Color:</strong> Gold or Off-white for a traditional finish.<br><br><strong>Style:</strong> A lehenga with a flared skirt paired with a matching choli and a delicate dupatta.<br><br><strong>Fabric:</strong> Silk, brocade, or chiffon.<br><br><strong>Details:</strong> The lehenga can have minimal yet rich embroidery, while the dupatta should be<br><br>draped elegantly.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Emerald Green or Charcoal Grey with delicate gold embroidery.<br><br><strong>Salwar Color:</strong> Off-white or cream for balance and to highlight the kameez.<br><br><strong>Dupatta Color:</strong> Deep Burgundy or Off-white.<br><br><strong>Style:</strong> A traditional salwar kameez set with a long kameez and a matching salwar.<br><br><strong>Fabric:</strong> Cotton, silk, or georgette for comfort and fluidity.<br><br><strong>Details:</strong> The kameez may have elegant embroidery or embellishments near the neckline and<br><br>sleeves, paired with a soft, flowing dupatta.<br><br><strong>Bandhgala with Churidar:</strong><br><br><strong>Churidar Color:</strong> Deep Burgundy or Emerald Green.<br><br><strong>Kurta Color:</strong> Off-white or Cream.<br><br><strong>Jacket Color:</strong> Rich Charcoal or Deep Burgundy.<br><br><strong>Style:</strong> A classic bandhgala jacket with a churidar and long kurta underneath.<br><br><strong>Fabric:</strong> Wool, cotton, or silk for a sophisticated appearance.<br><br><strong>Details:</strong> The bandhgala jacket should feature rich detailing along the collar and cuffs, with the<br><br>churidar fitting snugly for a refined traditional look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Traditional') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Burgundy, Midnight Blue, Charcoal Grey, Emerald Green.<br><br><strong>Accent Colors:</strong> Off-white, Silver, Cream.<br><br><strong>Avoid:</strong> Bright neon colors or overly flashy hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Saree:</strong><br><br><strong>Saree Color:</strong> Deep Burgundy or Midnight Blue with silver or subtle golden embroidery.<br><br><strong>Blouse Color:</strong> Off-white or matching the saree for a seamless look.<br><br><strong>Style:</strong> A traditional saree draped elegantly with classic pleats, paired with a fitted blouse.<br><br><strong>Fabric:</strong> Silk, brocade, or chiffon for a luxurious and refined appearance.<br><br><strong>Details:</strong> Silver or golden embroidery along the borders and pallu for an added touch of<br><br>elegance.<br><br><strong>Anarkali Dress:</strong><br><br><strong>Dress Color:</strong> Charcoal Grey or Deep Burgundy.<br><br><strong>Style:</strong> A floor-length Anarkali dress with a flared skirt and intricate detailing on the bodice or<br><br>hem.<br><br><strong>Fabric:</strong> Georgette, silk, or crepe for a graceful, flowing silhouette.<br><br><strong>Details:</strong> Embellishments or patterns along the waistline, neckline, or sleeves to enhance the<br><br>traditional look.<br><br><strong>Lehenga Choli:</strong><br><br><strong>Choli Color:</strong> Deep Burgundy or Emerald Green.<br><br><strong>Lehenga Color:</strong> Off-white or Cream for contrast.<br><br><strong>Dupatta Color:</strong> Silver or Off-white to complement the richness of the lehenga.<br><br><strong>Style:</strong> A lehenga with a flared skirt and matching choli, paired with a delicately draped dupatta.<br><br><strong>Fabric:</strong> Silk, georgette, or brocade for a formal yet elegant look.<br><br><strong>Details:</strong> Intricate embroidery or beading along the lehenga and dupatta to give a regal, festive<br><br>vibe.<br><br><strong>Salwar Kameez:</strong><br><br><strong>Kameez Color:</strong> Charcoal Grey or Midnight Blue with fine silver embroidery.<br><br><strong>Salwar Color:</strong> Off-white or Cream for contrast and balance.<br><br><strong>Dupatta Color:</strong> Deep Burgundy or Off-white for a harmonious look.<br><br><strong>Style:</strong> A straight or A-line kameez with traditional salwar or churidar.<br><br><strong>Fabric:</strong> Cotton, silk, or chiffon for fluidity and comfort.<br><br><strong>Details:</strong> Embroidered details along the neckline, sleeves, or hem to enhance the traditional<br><br>style.<br><br><strong>Bandhgala with Churidar:</strong><br><br><strong>Kurta Color:</strong> Off-white or Cream.<br><br><strong>Churidar Color:</strong> Deep Burgundy or Charcoal Grey.<br><br><strong>Jacket Color:</strong> Midnight Blue or Deep Burgundy.<br><br><strong>Style:</strong> A classic bandhgala jacket worn over a kurta and churidar.<br><br><strong>Fabric:</strong> Wool, silk, or cotton for an elegant appearance.<br><br><strong>Details:</strong> The bandhgala jacket should feature fine embroidery on the collar and cuffs, and the<br><br>churidar should provide a fitted, sleek look for a sophisticated finish.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Deep Navy, Charcoal Grey, Teal, Rich Burgundy.<br><br><strong>Accent Colors:</strong> Off-white, Silver, Soft Beige.<br><br><strong>Avoid:</strong> Bright neon colors or overly flashy hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Suit:</strong><br><br><strong>Jacket Color:</strong> Charcoal Grey or Deep Navy for a professional, polished appearance.<br><br><strong>Blouse Color:</strong> Off-white or Soft Beige for a light, clean contrast.<br><br><strong>Pant Color:</strong> Charcoal Grey or Teal for a sleek, cohesive look.<br><br><strong>Style:</strong> A well-fitted blazer paired with straight-leg or tailored pants.<br><br><strong>Fabric:</strong> Wool, crepe, or cotton blends for a sharp and structured fit.<br><br><strong>Details:</strong> A single-breasted jacket with minimalistic silver buttons, giving a modern yet formal<br><br>look.<br><br><strong>Sheath Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy or Teal for a sophisticated, confident appearance.<br><br><strong>Style:</strong> A knee-length sheath dress with a modest neckline and clean lines.<br><br><strong>Fabric:</strong> Stretch crepe, wool blend, or cotton for comfortable wear and a figure-flattering<br><br>silhouette.<br><br><strong>Details:</strong> Subtle pleats or darts along the waist to create shape, and a streamlined, polished<br><br>look.<br><br><strong>A-Line Skirt with Blouse:</strong><br><br><strong>Blouse Color:</strong> Deep Navy or Charcoal Grey.<br><br><strong>Skirt Color:</strong> Rich Burgundy or Teal for a colorful yet professional touch.<br><br><strong>Style:</strong> A knee-length A-line skirt with a tailored blouse for a balanced and elegant ensemble.<br><br><strong>Fabric:</strong> Silk blends or polyester for durability and a smooth finish.<br><br><strong>Details:</strong> A slight pleated skirt with a simple blouse, paired with a small jacket or cardigan for an<br><br>extra layer of sophistication.<br><br><strong>Long Blazer with Pencil Skirt:</strong><br><br><strong>Blazer Color:</strong> Charcoal Grey or Deep Navy for an authoritative, professional look.<br><br><strong>Pencil Skirt Color:</strong> Deep Burgundy or Rich Charcoal.<br><br><strong>Blouse Color:</strong> Off-white or Soft Beige for a neutral balance.<br><br><strong>Style:</strong> A tailored, long blazer worn over a pencil skirt with a buttoned blouse.<br><br><strong>Fabric:</strong> Wool, polyester, or a wool blend for a sharp, structured silhouette.<br><br><strong>Details:</strong> A blazer with double-breasted buttons, a crisp collar, and a slim pencil skirt for a<br><br>sophisticated and formal appeal.<br><br><strong>Midi Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy or Charcoal Grey for a subtle yet elegant look.<br><br><strong>Style:</strong> A modest midi dress with a slight flare or straight cut for a professional appearance.<br><br><strong>Fabric:</strong> Cotton, silk blend, or crepe for a comfortable, breathable fit.<br><br><strong>Details:</strong> A simple, sleek design with a slightly fitted waist, and a minimalistic neckline for a<br><br>refined office look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Office/Formal') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Dark Plum, Charcoal Grey, Deep Blue, Emerald Green.<br><br><strong>Accent Colors:</strong> Off-white, Silver, Soft Taupe.<br><br><strong>Avoid:</strong> Bright neon colors or overly flashy hues.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Tailored Blazer with Trousers:</strong><br><br><strong>Jacket Color:</strong> Charcoal Grey or Dark Plum for a sophisticated, sharp look.<br><br><strong>Blouse Color:</strong> Off-white or Soft Taupe to brighten the outfit.<br><br><strong>Pant Color:</strong> Deep Blue or Charcoal Grey for a formal, polished appearance.<br><br><strong>Style:</strong> A single-breasted blazer with flat-front trousers for a clean, sleek silhouette.<br><br><strong>Fabric:</strong> Wool, wool-blend, or polyester for durability and a structured fit.<br><br><strong>Details:</strong> Blazer with subtle details like thin lapels and a slim, streamlined cut, paired with simple<br><br>trousers.<br><br><strong>Sheath Dress:</strong><br><br><strong>Dress Color:</strong> Dark Plum or Emerald Green for an elegant, professional look.<br><br><strong>Style:</strong> A knee-length sheath dress that fits the figure without being too tight.<br><br><strong>Fabric:</strong> Crepe, stretch wool, or polyester for comfortable wear and a smooth finish.<br><br><strong>Details:</strong> The dress can have a simple round neckline or a slight V-neck to add subtle<br><br>sophistication.<br><br><strong>Pencil Skirt with Buttoned Blouse:</strong><br><br><strong>Blouse Color:</strong> Off-white or Soft Taupe for a balanced, neutral pairing.<br><br><strong>Skirt Color:</strong> Charcoal Grey or Deep Blue for a timeless professional look.<br><br><strong>Style:</strong> A pencil skirt paired with a fitted, buttoned blouse for a sleek, office-ready ensemble.<br><br><strong>Fabric:</strong> Silk blends or cotton-blend fabric for a luxurious feel and easy movement.<br><br><strong>Details:</strong> The blouse can have a subtle bow tie or minimalistic collar to add a touch of<br><br>personality to the outfit.<br><br><strong>A-Line Skirt with Blouse and Cardigan:</strong><br><br><strong>Blouse Color:</strong> Deep Blue or Charcoal Grey for a refined, corporate appearance.<br><br><strong>Skirt Color:</strong> Dark Plum or Emerald Green for a touch of color without being overwhelming.<br><br><strong>Style:</strong> An A-line skirt combined with a button-up blouse and a cardigan for a professional yet<br><br>approachable look.<br><br><strong>Fabric:</strong> Wool, polyester, or cotton for comfort and structure.<br><br><strong>Details:</strong> The cardigan should be a fitted piece to maintain a streamlined silhouette.<br><br><strong>Midi Dress:</strong><br><br><strong>Dress Color:</strong> Deep Blue or Charcoal Grey for a minimalist, formal look.<br><br><strong>Style:</strong> A midi-length dress that falls just below the knee, perfect for a formal office environment.<br><br><strong>Fabric:</strong> Stretch wool, crepe, or polyester for a form-flattering, comfortable fit.<br><br><strong>Details:</strong> A simple design with clean lines and subtle detailing, such as a single pleat or a<br><br>delicate neckline, makes it both professional and elegant.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Light' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Ruby Red, Midnight Black, Deep Purple, Golden Yellow.<br><br><strong>Accent Colors:</strong> Silver, Champagne, Off-white.<br><br><strong>Avoid:</strong> Overly bright neon shades or overly glossy finishes.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Cocktail Dress:</strong><br><br><strong>Dress Color:</strong> Ruby Red or Deep Purple for a bold and captivating look.<br><br><strong>Style:</strong> A fitted cocktail dress that flatters the silhouette, falling just above the knee for a refined<br><br>yet flirty appearance.<br><br><strong>Fabric:</strong> Satin, silk, or crepe for a smooth, luxe feel.<br><br><strong>Details:</strong> A simple, elegant neckline such as a sweetheart or off-the-shoulder design adds<br><br>allure.<br><br><strong>A-Line Midi Dress:</strong><br><br><strong>Dress Color:</strong> Midnight Black or Deep Purple for a sophisticated and timeless vibe.<br><br><strong>Style:</strong> An A-line midi dress that cinches at the waist and flares out slightly for a flattering shape.<br><br><strong>Fabric:</strong> Silk blend or chiffon for fluidity and comfort.<br><br><strong>Details:</strong> The dress can feature a plunging neckline or a delicate lace trim for a touch of<br><br>sexiness while keeping it elegant.<br><br><strong>Fit-and-Flare Dress:</strong><br><br><strong>Dress Color:</strong> Ruby Red or Champagne for a standout look that exudes confidence.<br><br><strong>Style:</strong> A fit-and-flare dress that gives a feminine shape, perfect for dancing and moving freely.<br><br><strong>Fabric:</strong> Jersey, stretch satin, or a soft polyester blend.<br><br><strong>Details:</strong> Sleeveless with a V-neckline or a backless design to add an elegant, daring touch.<br><br><strong>Sequined Top with High-Waisted Skirt:</strong><br><br><strong>Top Color:</strong> Silver or Champagne for a chic, party-ready appearance.<br><br><strong>Skirt Color:</strong> Midnight Black or Deep Purple for contrast and sophistication.<br><br><strong>Style:</strong> A sequined or metallic top paired with a high-waisted pencil skirt for a trendy, fashionable<br><br>look.<br><br><strong>Fabric:</strong> The top should be made of sequins, satin, or mesh, while the skirt can be of satin or<br><br>crepe for structure.<br><br><strong>Details:</strong> The top can have a halter neck or open back, while the skirt provides a sleek and<br><br>confident vibe.<br><br><strong>Jumpsuit:</strong><br><br><strong>Jumpsuit Color:</strong> Midnight Black or Ruby Red for a bold, stylish statement.<br><br><strong>Style:</strong> A fitted jumpsuit with wide legs or a tapered finish, perfect for an elegant yet comfortable<br><br>look.<br><br><strong>Fabric:</strong> Silk blend, satin, or stretch fabric for comfort and style.<br><br><strong>Details:</strong> A deep V-neck or off-the-shoulder style adds sensuality, while the wide-leg silhouette<br><br>gives the jumpsuit a contemporary edge.<br><br><strong>Peplum Dress:</strong><br><br><strong>Dress Color:</strong> Deep Purple or Midnight Black for a classy, party-ready look.<br><br><strong>Style:</strong> A peplum dress that accentuates the waist and provides a feminine silhouette.<br><br><strong>Fabric:</strong> Stretch satin or crepe for a polished and comfortable fit.<br><br><strong>Details:</strong> The dress can have a subtle sweetheart neckline or a one-shoulder design, adding<br><br>elegance to the party look.</p><br>
        `;
    }
    
    else if (gender === 'Female' && age === 'Mature(50+)' && skinColor === 'Deep' && hairColor === 'Dark' && occasion === 'Party/Date Night') {
        output = `
            <h2><strong>Hey Unique One!</strong></h2><br>
            
            <p><strong>Description:</strong></p><br>
            <p>Heyy fashionista! We thank you for choosing StyleNarrative💚✨. Try out the suggested colors<br>and clothings to create your own style!</p><br>
            
            <p><strong>Color Palette:</strong></p><br><p><strong>Primary Colors:</strong> Emerald Green, Charcoal Black, Ruby Red, Deep Burgundy.<br><br><strong>Accent Colors:</strong> Gold, Champagne, Off-white.<br><br><strong>Avoid:</strong> Bright neon hues or overly flashy colors.</p><br>
            
            <p><strong>Outfit Suggestions:</strong></p><br><p><strong>Elegant Maxi Dress:</strong><br><br><strong>Dress Color:</strong> Deep Burgundy or Ruby Red for a rich and sophisticated appearance.<br><br><strong>Style:</strong> A floor-length, fitted maxi dress with a slightly flared skirt for movement.<br><br><strong>Fabric:</strong> Satin, silk, or a velvet blend for a luxurious, soft feel.<br><br><strong>Details:</strong> A plunging neckline or halter neck with delicate beadwork or embroidery for an added<br><br>touch of glamour.<br><br><strong>V-neck A-line Dress:</strong><br><br><strong>Dress Color:</strong> Charcoal Black or Emerald Green for a classic, elegant look.<br><br><strong>Style:</strong> A V-neck A-line dress that skims the body for a flattering silhouette.<br><br><strong>Fabric:</strong> Stretch fabric, satin, or chiffon for a graceful, flowing effect.<br><br><strong>Details:</strong> The dress can feature a waist cinching belt or a flattering gathered waist for definition.<br><br><strong>Off-shoulder Dress:</strong><br><br><strong>Dress Color:</strong> Ruby Red or Deep Burgundy to make a bold statement.<br><br><strong>Style:</strong> A fitted off-shoulder dress with a straight-cut or pencil design for a flattering fit.<br><br><strong>Fabric:</strong> Silk or stretch satin for a figure-hugging, elegant look.<br><br><strong>Details:</strong> The dress can feature subtle detailing such as ruching or a side slit for added allure.<br><br><strong>Sequin Cocktail Dress:</strong><br><br><strong>Dress Color:</strong> Emerald Green or Charcoal Black for a sleek, party-ready vibe.<br><br><strong>Style:</strong> A short cocktail dress covered in sequins to sparkle under the lights.<br><br><strong>Fabric:</strong> Sequins over satin or a satin-blend fabric for added shine.<br><br><strong>Details:</strong> A scoop neckline or a square neck design to balance the dazzling sequins.<br><br><strong>Satin Jumpsuit:</strong><br><br><strong>Jumpsuit Color:</strong> Deep Burgundy or Charcoal Black for a chic, modern style.<br><br><strong>Style:</strong> A satin jumpsuit with a cinched waist and wide-leg pants, perfect for a stylish, yet<br><br>comfortable option.<br><br><strong>Fabric:</strong> Satin or silk blend for a smooth, polished finish.<br><br><strong>Details:</strong> A deep V-neck or off-the-shoulder style, paired with gold or champagne-colored<br><br>accessories for added glamour.<br><br><strong>Peplum Dress:</strong><br><br><strong>Dress Color:</strong> Emerald Green or Ruby Red for a vibrant, elegant look.<br><br><strong>Style:</strong> A peplum dress that creates a balanced silhouette with its fitted bodice and flared hem.<br><br><strong>Fabric:</strong> Stretch satin, crepe, or a silky polyester blend.<br><br><strong>Details:</strong> A scoop neckline or delicate cap sleeves, perfect for a flattering yet sophisticated look.</p><br>
        `;
    }
    




         // Insert the output HTML content into an element (e.g., a div with ID 'output')
         document.getElementById('output').innerHTML = output;

         document.getElementById('output').scrollIntoView({ behavior: 'smooth' });
     });
 });
 