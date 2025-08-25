let a = [5, 2, 8, 4, 6, 22, 8, 9];

let m = 15;
let t = '';
let max = 0;

let n = a.length;

for(let i=0; i<n; i++){
    if(a[i]>max){max=a[i];}
}

for(let i=0; i<n; i++){
    
    f = Math.floor((m/max) * a[i]);
    
    for(let k=0; k<m; k++){
        
        if(k<f){
            t += '▮';
        } else {
            t += '▯';
        }
    }

    t += '\n';
}

print(t);

// Ex. (85) - Horizontal chart with UTF characters proportional with max array.