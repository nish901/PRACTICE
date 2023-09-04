const darthVader = {
    allegiance: "empire",
    weapon : "lightsaber",
    sith : "true"
}

darthVader['children'] = 2;
darthVader['childNames'] = ['luke','leila'];


console.log(darthVader['childNames']);

darthVader.allegiance = 'The light side';
delete darthVader.children;
console.log(darthVader)