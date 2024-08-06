NOTE: The folder related to themes is still a work in progress. Many changes and improvements will be made there. I suggest using it very cautiously.

# DXP Component Library

This project provides a library of simple components based on the Component Service technology. The library aims to demonstrate how straightforward it is to build components using basic technologies such as vanilla JS, along with the essential files needed for component creation: `manifest.json`, `preview.html`, and `example.data.json`.

The library serves an educational purpose, with code comments explaining certain behaviors and functionalities of the components. In the `components/` directory, you will find ready-to-use and customizable components, ranging from the simplest "Hello World" text field to more complex ones, incorporating various data types supported by Component Service.

## Getting Started

### Installing Dependencies

Install all necessary dependencies:

```
npm install
```

### Viewing Components

To preview the components, run:

```
npm run dev
```

#### Deploying a Component

After creating or editing a component and incrementing its version (following SemVer), you can deploy the component:

```
npm run deploy --name=component_name
```

## Styling Components

This project supports styling components with Sass to enhance the development process and utilize Sass features such as functions and mixins. When using Sass, it's essential to compile the files to CSS so they can be interpreted by the browser. You can do this by running:

```
npm run build
```

This command will also build the styles, ensuring that any Sass files are compiled to CSS. The built CSS file will be served statically using `npm serve` npm package, and the `preview.html` file should include links to these static files:

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <link rel="stylesheet" href="http://localhost:5000/styles/styles.css">
    </head>
    <body>
        [component://output]
        <script src="http://localhost:5000/scripts/scripts.js" async></script>
    </body>
</html>
```

> TIP: If you don't see your style changes, try a hard refresh: ⌘Cmd + Shift + R (Mac) or Ctrl + Shift + R (Windows).

### Adding Component-specific Styles

To add styles specific to your component, create a `name-of-your-component.scss` file in `src/styles/components`. These styles will be automatically imported into `main.scss` and included in the final build output.

Example structure:

```
src/
├── styles/
│   ├── components/
│   │   ├── _name-of-your-component.scss
│   ├── main.scss
```

## Building Styles and Scripts

The build process will create a single CSS file and a single JS file in the `dist/` directory:

- `CSS: dist/styles/styles.css`
- `JS: dist/scripts/scripts.js`

Ensure you have `npm serve` running to serve these static files.

```
npm install -g serve
serve dist -l 5000
```

## Version Management

This project includes the `vermgmt` library, which helps in versioning and deploying multiple components simultaneously. Although optional, it can significantly streamline your workflow. To check its available options, run:

`npm run vermgmt`

## Project Structure

The project's structure is simple, centered around the `components/` directory. The `src/` directory contains files that facilitate development, such as shared scripts, Sass styles, mixins, variables, and fonts.

Each component in the `components/` directory has the following structure:

- `example.data.json` - Contains example data passed to the component, displayed in the preview and DXP.
- `main.js` - Stores the component's structure, including classes and functions responsible for state and appearance changes.
- `manifest.json` - The crucial file linking all files together, specifying dependencies, indicating where to fetch preview data from, and defining input configurations in the CMS.
- `preview.html` - A wrapper where the appropriate files defined in the manifest are injected. It is usually identical for each component and can be copied or organized into common parts.
- `README.md` - Description of the component with tips how to edit component, also with used properties example.

## Adding a New Component

To add a new component, create a new folder with an appropriate name in the `components/` directory or copy the default structure from any existing component, adjusting the file names as needed. Add your structure and your component is ready to be published in DXP!
