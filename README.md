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


### Props

- name(string | Required): name or unique identifier of the input.
- value(string | isRequired) : the value of the input.
- onChange(Function | Required) : triggred when the value is changed.
- placeholder(string) : input Place Holder.
- className(string) : Custom Classes to be added to the input when it is displayed.
- validate(Function): a validation function that get passed the value before triggering the onChange Event, it returns true or false as of valid data of invalid data.
- style(object): Style Object to be added to the input when it is displayed.
- extraParams(object): any extra data you need to be passed on calling the onChange Function.
- errorStyle(object) : the style of the input when the validation function returnes false which is invalid data.
- isDisabled(bool) : disable the edit.
- type(string) : the type of the edit input , which covers only the following (color,date,datetime-local,email,month,number,range,search,tel,time,url,week,text,select,textarea).
- dropDownOptions(array) : DropDown input options list

            
            

