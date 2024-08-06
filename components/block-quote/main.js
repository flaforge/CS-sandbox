// This module takes an object with "quote" and "author" properties as input.
module.exports = async ({ quote, author }) => {
  return `
    <blockquote class="blockquote">
      ${quote}

      <!-- The "author" property is optional, so use conditional rendering to avoid displaying "undefined" when the author is not provided. -->
      
      ${author ? `<cite class="blockquote__author">${author}</cite>` : ''}
    </blockquote>
  `;
};
