### Step-by-Step: Create a Basic Form Control in Angular with Reactive Forms

---

### 1️⃣ Create a New Component

First, generate a new component using Angular CLI:

```bash
ng generate component name-editor
```

This command will create `name-editor.component.ts`, `name-editor.component.html`, and other necessary files.

---

### 2️⃣ Import `ReactiveFormsModule` in Your Component

Since you're using **Reactive Forms**, we need to import `ReactiveFormsModule` in your component.

Edit the component to include `ReactiveFormsModule`:

#### **`name-editor.component.ts`**

```ts
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css'],
  standalone: true,  // Since you are not using modules, add 'standalone' for the component to work independently
  imports: [ReactiveFormsModule]  // Import ReactiveFormsModule
})
export class NameEditorComponent {
  // Declare a FormControl instance
  name = new FormControl('');

  // Method to update the name programmatically
  updateName() {
    this.name.setValue('Nancy');
  }
}
```

---

### 3️⃣ Set Up the Template to Bind the Form Control

Now, we'll bind the form control to an input field in the template and display the current value.

#### **`name-editor.component.html`**

```html
<div>
  <label for="name">Name: </label>
  <input id="name" type="text" [formControl]="name">
</div>

<p>Value: {{ name.value }}</p> <!-- Display the current value of the form control -->

<!-- Button to update the value programmatically -->
<button type="button" (click)="updateName()">Update Name</button>
```

- `[formControl]="name"` binds the `name` FormControl instance to the input field.
- `{{ name.value }}` displays the current value of the `name` FormControl.
- The button triggers the `updateName()` method, which sets the value of `name` to `"Nancy"` using the `setValue()` method.

---

### 4️⃣ Add the Component to the Main Template

Finally, include the component you created in the main template (`app.component.html` or whichever file you want to display it in):

#### **`app.component.html`**

```html
<app-name-editor></app-name-editor>
```

This will render your name input field and allow you to interact with the form control.

---