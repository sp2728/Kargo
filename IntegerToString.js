
    var arr = [1, 12,34,56,200]

    let obj = [{ num: '0', str: 'Zero' }, { num: '1', str: 'One' }, { num: '2', str: 'Two' }, { num: '3', str: 'Three' }, { num: '4', str: 'Four' }, { num: '5', str: 'Five' }, { num: '6', str: 'Six' }, { num: '7', str: 'Seven' }, { num: '8', str: 'Eight' }, { num: '9', str: 'Nine' }]
    
    
    
    var strArr = arr.map((res) => {

        let newArr = res.toString().split('');
        console.log(newArr)
        finalArr = newArr.map(data=>{
            let findStr = obj.find((val) => val.num == data);
            console.log(findStr)
            return findStr.str;
        })

        return finalArr.join('');

    });

    console.log(strArr)

