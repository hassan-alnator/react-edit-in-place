# Edit In Place React
All in one edit in place component for react covers most of the input types as the following : 

- text
- number
- select
- textarea
- date
- datetime-local
- color
- email
- month
- number
- range
- search
- tel
- time
- url
- week

# Usege
 
 1 - install the module :
 
 ```
 npm i react-edit-in-place
 ```

2 - import the EditInPlace Module:

```
import EditInPlace from "react-edit-in-place"
```

3 - add JSX :

### text | number | date | time | datetime-local | color | email | month | range | search | tel | url | week inputs

```
<EditInPlace 
    value="my text" 
    name="text1" 
    type="text" 
    placeholder="text1"
    className="test"
    style={{color:"red"}}
    errorStyle={{color:"red"}}
    isDisabled={false}
    validate={(value) => true}
    extraParams={{id:"1"}}
    onChange={(value, name, extraParams) => console.log(value, name, extraParams)} 
/>
```

### textarea 

```
<EditInPlace 
    value="text" 
    name="textarea1" 
    type="textarea" 
    onChange={(value, name) => console.log(value, name)} 
/>
```

### select 

```
<EditInPlace 
    value="option1" 
    name="select1" 
    type="select" 
    dropDownOptions={['option1','option2']}  
    onChange={(value, name) => console.log(value, name)} 
/>
```

            
            

