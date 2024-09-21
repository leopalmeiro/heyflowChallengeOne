# Hey Flow Challenge One
## Technical Considerations

I structured the project with separate folders for scripts and styles to enhance its readiness for production.

### JavaScript

I aimed for simplicity but added the line ```checkbox2Label.classList.add('no-checkbox1');``` to trigger an outline when checkbox1 is absent.

### HTML

I opted for inline SVG to simplify the use of `currentColor` from CSS. For instance, by setting the color in the following way:

```css
.custom-checkbox .checkbox-icon {
  width: 60px;
  height: 60px;
  display: inline-block;
  border: 1px solid var(--primary-color);
  border-radius: 3px;
  position: relative;
  color: var(--primary-color);
  margin: 3px;
}
```

### CSS

Here are a few key points to highlight:

* **Global Variables**
```css
:root {
  --checkbox-focus-color: blue;
  --primary-color: black;
  --secondary-color: white;
}
```

* **Flexbox Layout**: I used Flexbox to arrange elements with a gap, making it easier to add more components in the future.

* **Steps for Creating a Custom Checkbox**:
  1. **Hide the checkbox input visually but keep it focusable**:
  ```css
  .custom-checkbox input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  ```
  2. **Hide the checkmark by default**:
  ```css
  .custom-checkbox .checkmark {
    display: none;
  }
  ```
  3. **Add default styles**:
  ```css
  .custom-checkbox .checkbox-icon {
    width: 60px;
    height: 60px;
    display: inline-block;
    border: 1px solid var(--primary-color);
    border-radius: 3px;
    position: relative;
    color: var(--primary-color);
    margin: 3px;
  }
  ```
  4. **Show the checkmark when the checkbox is checked**:
  ```css
  .custom-checkbox input:checked + .checkbox-icon .checkmark {
    display: inline-block;
  }
  ```
  5. **Add focus style to custom checkbox2 if checkbox1 is checked**:
  ```css
  #checkbox1:focus-visible + .custom-checkbox .checkbox-icon {
    outline: 2px solid var(--checkbox-focus-color);
    outline-offset: 2px;
  }
  ```
  6. **Style when checkbox1 is absent**:
  ```css
  .custom-checkbox.no-checkbox1 input[type="checkbox"]:focus-visible + .checkbox-icon {
    outline: 2px solid var(--checkbox-focus-color);
    outline-offset: 2px;
  }
  ```