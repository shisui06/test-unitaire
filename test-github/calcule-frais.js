export function calculerFrais(distance, montantCommande, isPremium) {
 let frais = 0;

 
 if (isPremium && montantCommande > 150) {
   return 0;
 }
 if (distance < 10) {
   frais += 10;
 }
 if (!isPremium) {
   frais += 2;
 }

 return montantCommande + frais;
}
