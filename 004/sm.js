console.log("Set and Maps");

const map = new Map();

map.set("Petras", 40);
map.set("Jonas", 39);
map.set("Antanas", 60);
map.set("Petras", 42); // overwrites the previous value
map.set("Petras", 50);
map.set({a:1}, 42);
map.set([1,6,7], 42);



//iterate over a map
for(const item of map){
    console.log(item)
}
console.log(map);

map.forEach((value, key)=> console.log(key, value));

console.log(map);