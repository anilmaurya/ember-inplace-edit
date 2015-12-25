# Ember-inplace-edit

This is Ember cli addon for inplace editing

[Demo](http://anilmaurya.github.io/ember-inplace-edit)

## Installation

* `npm install --save-dev ember-inplace-edit`

## Usage
 This addon provides an `ember-inplace-edit` component.

```handlebars
{{ember-inplace-edit
  text=text
  value=value
  placeholder="Add Placeholder content"
  placeholderClass="placeholder div class"
  editIcon="Edit icon class, ex: fa fa-edit"
  action="saveUser"
}}
```

### Properties

<table width="100%">
  <tr>
  	<th valign="top" width="165px" align="left">Property</th>
  	<th valign="top" align="left">Description</th>
  </tr>
  <tr>
    <td valign="top"><code>text</code></td>
    <td valign="top">text to be displayed before/after editing, it can be controller property wrapping value</td>
  </tr>
  <tr>
    <td valign="top"><code>value</code></td>
    <td valign="top">value to be edited</td>
  </tr>
  <tr>
    <td valign="top"><code>type</code></td>
    <td valign="top">input/textarea (default: 'input', optional)</td>
  </tr>
  <tr>
    <td valign="top"><code>disabled</code></td>
    <td valign="top">disable editing (default: false, optional)</td>
  </tr>
  <tr>
    <td valign="top"><code>model</code></td>
    <td valign="top">this will be sent automatically in the action hook (optional)</td>
  </tr>
  <tr>
    <td valign="top"><code>placeholder</code></td>
    <td valign="top">placeholder content</td>
  </tr>
  <tr>
    <td valign="top"><code>placeholderClass</code></td>
    <td valign="top">placeholder class (optional)</td>
  </tr>
  <tr>
    <td valign="top"><code>editIcon</code></td>
    <td valign="top">Edit icon class, ex: fa fa-edit (optional)</td>
  </tr>
</table>

### Actions

<table width="100%">
  <tr>
  	<th valign="top" width="165px" align="left">Action</th>
  	<th valign="top" align="left">Description</th>
  </tr>
  <tr>
    <td valign="top"><code>action</code></td>
    <td valign="top">action to be called after editing is done (optionally attached model and the new value will be sent as a parameter)</tr>
  </tr>
</table>

### Events

<table width="100%">
  <tr>
  	<th valign="top" width="165px" align="left">Event</th>
  	<th valign="top" align="left">Description</th>
  </tr>
  <tr>
    <td valign="top"><code>on-activated</code></td>
    <td valign="top">it fires when the input/textarea has been inserted into the DOM (params: component container, optionally attached model)</tr>
  </tr>
</table>
