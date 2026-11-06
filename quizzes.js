'use strict';
// Original practice questions. Each item contains a question, four choices,
// the zero-based correct choice, and a short explanation.
const quizzes = {
 word: [
  ['Which format preserves a document as an editable Word 2021 file?', ['.pdf', '.docx', '.xlsx', '.pptx'], 1, 'DOCX is the standard editable Word document format. PDF is useful for sharing a stable reading copy.'],
  ['Which feature applies consistent formatting and gives document headings structure?', ['Repeated spaces', 'Page zoom', 'Heading styles', 'Print Preview'], 2, 'Heading styles combine consistent formatting with a document hierarchy that can support navigation and a table of contents.'],
  ['Which shortcut inserts a page break in Word?', ['Ctrl + Enter', 'Ctrl + S', 'Ctrl + F', 'Ctrl + B'], 0, 'Ctrl + Enter starts a new page with a page break. Repeated empty paragraphs are an unreliable way to position content.'],
  ['Where would you insert a table into a document?', ['Review → New Comment', 'View → Zoom', 'File → Print', 'Insert → Table'], 3, 'The Insert tab contains the Table command for adding rows and columns to a document.'],
  ['What does Ctrl + S do?', ['Starts a spelling check', 'Saves the document', 'Creates a comment', 'Changes page orientation'], 1, 'Ctrl + S saves your changes. Save regularly rather than assuming AutoSave is available in Office 2021.'],
  ['Which action checks page layout before printing?', ['Use File → Print to inspect the preview', 'Make all text bold', 'Insert an extra blank page', 'Rename the file extension'], 0, 'Print Preview shows how content fits on pages so you can check margins, page breaks, and page numbers.']
 ],
 excel: [
  ['What is the address of the cell in column B, row 3?', ['3B', 'B:3', 'B3', 'BB3'], 2, 'Excel cell addresses use the column letter followed by the row number: B3.'],
  ['B2 contains 25 and B3 contains 10. What does =SUM(B2:B3) return?', ['35', '15', '250', '17.5'], 0, 'SUM adds the values in the range. 25 + 10 = 35. AVERAGE of these values would return 17.5.'],
  ['Which reference keeps both its column and row fixed when copied?', ['B2', '$B2', 'B$2', '$B$2'], 3, 'The dollar sign before B locks the column; the dollar sign before 2 locks the row. $B$2 is an absolute reference.'],
  ['What does filtering a table do?', ['Permanently deletes nonmatching records', 'Temporarily hides rows that do not match criteria', 'Converts numbers to pictures', 'Renames every worksheet'], 1, 'A filter shows matching rows and temporarily hides other rows. Clearing the filter restores the full view.'],
  ['Which chart is a useful choice for comparing the costs of several items?', ['A column chart', 'A slide transition', 'A page header', 'A text box link'], 0, 'Column charts compare values across categories, such as the costs of different items.'],
  ['What does the Percentage format display for the stored value 0.25?', ['0.25%', '250%', '25%', '2.5%'], 2, 'Percentage formatting displays 0.25 as 25%. The underlying value stays 0.25 for calculations.']
 ],
 powerpoint: [
  ['Which format is the standard editable PowerPoint 2021 presentation?', ['.pub', '.accdb', '.docx', '.pptx'], 3, 'PPTX preserves editable slides. A PDF is a static sharing copy and does not retain live slide animations.'],
  ['What does a slide layout control?', ['The mailbox password', 'The placement of placeholders on a slide', 'The database primary key', 'The printer ink level'], 1, 'A layout defines the positions and types of placeholders, such as title and content areas.'],
  ['What is a transition?', ['An effect between slides', 'A spelling suggestion', 'A spreadsheet formula', 'An email attachment'], 0, 'Transitions occur when moving between slides. Animations affect objects within a slide.'],
  ['Where should you put reminders intended for the speaker rather than the audience?', ['In every slide title', 'In a giant text box over the slide', 'In speaker notes', 'In the file extension'], 2, 'Speaker notes hold prompts for your delivery. Presenter View can show them on your screen when the display arrangement is configured correctly.'],
  ['Which key starts a slide show from the beginning in PowerPoint for Windows?', ['Esc', 'Ctrl + M', 'Ctrl + S', 'F5'], 3, 'F5 starts from the beginning. Shift + F5 starts from the current slide, and Esc ends the show.'],
  ['What happens to live slide transitions when slides are exported as a PDF?', ['They play automatically', 'They are not preserved as live effects', 'They become spreadsheet formulas', 'They make the PDF editable as PPTX'], 1, 'A PDF shares static slide content. Review it to ensure the message is understandable without motion.']
 ],
 publisher: [
  ['What is Publisher 2021 mainly used for?', ['Managing relational database records', 'Sending email', 'Designing page-based publications', 'Calculating spreadsheet formulas'], 2, 'Publisher is a desktop publishing application for items such as flyers, brochures, and newsletters.'],
  ['Which format keeps a Publisher publication editable?', ['.pub', '.pdf', '.xlsx', '.accdb'], 0, 'PUB is the editable Publisher file format. Keep it alongside a PDF export if you need to revise the design later.'],
  ['Why link two text boxes?', ['To turn the page into a spreadsheet', 'To delete all text', 'To change the printer', 'To let a story flow from one box to another'], 3, 'Linked text boxes allow a longer story to continue into another box without manually splitting the text.'],
  ['What is the difference between page size and paper size?', ['There is never a difference', 'Page size is the finished publication; paper size is the printed sheet', 'Paper size changes only the font', 'Page size is the file size in bytes'], 1, 'The finished page may be smaller than the sheet used by the printer, for example when several cards are printed on one sheet.'],
  ['Which tool can help find overflowing text before export?', ['Animation Pane', 'Scheduling Assistant', 'Design Checker', 'Query Design'], 2, 'Publisher’s Design Checker can flag layout issues such as text overflow. You still need to proofread and inspect the output.'],
  ['What is a sensible final check for a folded brochure?', ['Print a draft and fold it to verify panel order', 'Only inspect the file name', 'Delete the editable original', 'Assume duplex settings are always correct'], 0, 'A folded draft exposes panel-order and orientation problems that can be easy to miss on screen.']
 ],
 access: [
  ['Which Access object stores records?', ['Report', 'Table', 'Form theme', 'Slide'], 1, 'Tables store records in rows and attributes in fields. Forms, queries, and reports work with that underlying data.'],
  ['What is the purpose of a primary key?', ['To set the page color', 'To sort every name alphabetically', 'To export a PDF', 'To uniquely identify each record'], 3, 'A primary key supplies a unique identity for each record and can be referenced from related tables.'],
  ['Which foreign-key type commonly matches an AutoNumber primary key?', ['Number with Field Size Long Integer', 'Attachment', 'Long Text', 'Yes/No'], 0, 'A standard AutoNumber key is compatible with a Number foreign key whose Field Size is Long Integer.'],
  ['What does referential integrity help prevent?', ['Readable reports', 'Saving a query', 'Orphan records with no matching parent', 'Creating any table'], 2, 'Referential integrity prevents a foreign-key value from referring to a nonexistent parent record, subject to the relationship rules.'],
  ['What does saving a select query normally save?', ['Only a screenshot', 'The query definition', 'A separate backup of the whole database', 'A PowerPoint slide'], 1, 'A saved select query stores the fields, criteria, and other instructions used to retrieve results from the current data.'],
  ['Which file can preserve database tables, forms, and relationships for recovery?', ['A PDF report', 'A printed member list', 'A slide handout', 'A backup of the ACCDB database'], 3, 'An ACCDB backup preserves database objects and data. A report PDF is only formatted output and cannot restore the database.']
 ]
};
