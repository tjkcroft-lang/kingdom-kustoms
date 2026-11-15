// Provisional print limits from a third-party Australian decorator; NOT AS Colour manufacturer limits.
// Final dimensions, safe margins, garment scaling and print methods require fulfilment-partner sign-off.
export const printProfiles={
 "Staple Tee":{sku:"AS Colour 5001",verifiedGarment:true,areas:{"Front":[360,460],"Back":[360,460],"Left Sleeve":[100,100],"Right Sleeve":[100,100]}},
 "Heavy Tee":{sku:"Unconfirmed",verifiedGarment:false,areas:{"Front":[300,400],"Back":[300,400],"Left Sleeve":[90,90],"Right Sleeve":[90,90]}},
 "Relaxed Hoodie":{sku:"Unconfirmed",verifiedGarment:false,areas:{"Front":[280,300],"Back":[300,350],"Left Sleeve":[80,80],"Right Sleeve":[80,80]}},
 "Crew Sweat":{sku:"Unconfirmed",verifiedGarment:false,areas:{"Front":[280,350],"Back":[300,350],"Left Sleeve":[80,80],"Right Sleeve":[80,80]}}
};
export const SIDES=["Front","Back","Left Sleeve","Right Sleeve"];
export const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
export function getPrintArea(style,side){return printProfiles[style]?.areas[side]||null}
export function outputPixels(mm,dpi=300){return Math.ceil(mm/25.4*dpi)}
export function effectiveDpi(sourcePixels,printWidthMm){return printWidthMm>0?Math.round(sourcePixels/(printWidthMm/25.4)):0}
export function validateArt({width,height,printWidthMm,printHeightMm}){if(!width||!height)return {status:"missing",message:"Upload artwork to check print resolution."};const dpi=Math.min(effectiveDpi(width,printWidthMm),effectiveDpi(height,printHeightMm));return {dpi,status:dpi>=300?"good":dpi>=150?"review":"low",message:dpi>=300?"Resolution meets the 300 DPI target.":dpi>=150?"Resolution below preferred 300 DPI; partner review required.":"Low-resolution artwork; use a higher-quality file."}}
export function validateMethod(method,quantity){if(method==="Screen Printing"&&quantity<25)return "Screen printing may require a larger minimum order; partner approval required.";if(method==="Combination")return "Combination printing requires a manual production and pricing review.";return "Printing method subject to partner artwork and material approval."}
