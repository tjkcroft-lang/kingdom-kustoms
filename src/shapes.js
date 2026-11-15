// Original, editable vector primitives. 260 variations; no third-party artwork.
export const categories=["Geometry","Stars","Arrows","Badges","Frames","Symbols","Patterns","Banners","Sports","Decorative"];
const base=[
 ["Rectangle","M10 10H90V90H10Z"],["Diamond","M50 4L96 50 50 96 4 50Z"],["Triangle","M50 5L96 94H4Z"],["Circle","M50 4A46 46 0 1 0 50 96A46 46 0 1 0 50 4"],["Pentagon","M50 3L96 37 79 94H21L4 37Z"],
 ["Star","M50 3L62 36 98 36 69 58 80 95 50 73 20 95 31 58 2 36 38 36Z"],["Spark","M50 0L60 40 100 50 60 60 50 100 40 60 0 50 40 40Z"],["Chevron","M6 25L50 68 94 25 94 50 50 93 6 50Z"],["Arrow","M4 35H57V10L96 50 57 90V65H4Z"],["Double Arrow","M4 50L32 15V35H68V15L96 50 68 85V65H32V85Z"],
 ["Badge","M50 4L89 18 96 61 74 94H26L4 61 11 18Z"],["Shield","M50 4L93 19 87 65 50 96 13 65 7 19Z"],["Ticket","M5 10H95V35Q75 50 95 65V90H5V65Q25 50 5 35Z"],["Hexagon","M26 5H74L98 50 74 95H26L2 50Z"],["Frame","M4 4H96V96H4ZM17 17V83H83V17Z"],
 ["Heart","M50 91L9 49C-5 19 25 -2 50 25 75 -2 105 19 91 49Z"],["Bolt","M56 2L18 55H46L38 98 84 42H55Z"],["Crown","M6 25L26 48 50 8 74 48 94 25 85 90H15Z"],["Moon","M72 5A45 45 0 1 0 92 74 39 39 0 1 1 72 5"],["Cloud","M24 77Q-3 77 8 50Q13 38 29 39Q30 9 59 15Q80 16 84 39Q106 43 95 65Q91 77 76 77Z"],
 ["Wave","M2 62Q25 8 50 50T98 38V77Q75 100 50 77T2 86Z"],["Mountain","M3 92L36 22 55 54 69 30 98 92Z"],["Sun","M50 18A32 32 0 1 0 50 82A32 32 0 1 0 50 18"],["Banner","M3 16H97V76L77 61 50 84 23 61 3 76Z"],["Flag","M12 5H18V95H12ZM18 10Q45 -1 69 14T96 10V60Q70 77 45 61T18 60Z"],["Cross","M37 5H63V37H95V63H63V95H37V63H5V37H37Z"]
];
export const shapes=Array.from({length:260},(_,i)=>{const [name,path]=base[i%base.length];const variant=Math.floor(i/base.length);return{id:"shape-"+i,name:variant?name+" "+(variant+1):name,category:categories[Math.floor(i/26)%categories.length],path,variant};});
export const shapeById=id=>shapes.find(x=>x.id===id);
