# My Travel Journal

A small learning project built as an introduction to data-driven React components and props. The travel journal brings a collection of destinations together in one place, with each entry pairing a location with a photo, travel dates, a short description, and a link to view the place on Google Maps.

## What it demonstrates

This project explores a core React idea: **rendering reusable components from data**.

Instead of writing a separate block of markup for every destination, the journal keeps the trip details in a data array and maps over that list to create an `Entry` component for each item. The entry receives its content through props, so the same component can present different destinations without duplicating its layout.

This separation makes the page easier to understand and extend: the data describes *what* to show, while the components describe *how* to show it.

## A travel entry includes

- A destination image and descriptive alternative text
- The country and location name
- Travel dates
- A short description of the place
- A Google Maps link for exploring the location

## Project structure

- **`src/data/data.js`** — the collection of destination details displayed in the journal
- **`src/components/Entry.jsx`** — the reusable layout for an individual destination
- **`src/components/Header.jsx`** — the journal title and globe icon
- **`src/App.jsx`** — combines the header with entries created from the destination data

## Built with

React, JSX, and CSS.
