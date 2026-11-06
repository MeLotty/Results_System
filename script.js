'use strict';
// Original lessons for the Office 2021 desktop applications on Windows.
const courses = {
 word: {name:'Word',letter:'W',color:'#2c62a5',description:'Create documents that communicate clearly.',lessons:[
 ['getting-started','Getting started with Word','Meet your new writing workspace. Learn the essentials of Word 2021 and create a document you can confidently save and share.',['Understand the Word workspace','Create your first document','Find everyday editing tools','Save your work safely'],'What is Microsoft Word?','Microsoft Word is a word processing application for creating and editing documents. Use it for letters, reports, résumés, meeting notes, and more. Word 2021 brings writing, formatting, and page layout tools together in one workspace.','Create your first document',['Open Word 2021 from the Windows Start menu.','Choose <strong>Blank document</strong> on the start screen. A new, empty page opens.','Click the page and type a heading, then press <strong>Enter</strong> to begin a new paragraph.','Select <strong>File → Save As → Browse</strong>. Choose a folder, enter a file name, and keep the <strong>Word Document (*.docx)</strong> format. Select <strong>Save</strong>.'],'Your first page','<h3>My first Word document</h3><p>Today I’m learning to create, edit, and save a document in Word 2021.</p><p>A small beginning. A useful new skill.</p>','Use <strong>Ctrl + S</strong> regularly to save changes. AutoSave generally requires a supported cloud storage location and a Microsoft 365 subscription; do not rely on it in Office 2021.','Create a document called “My learning plan”. Add a heading and three things you want to learn. Save it, close Word, and reopen the file from your chosen folder.'],
 ['workspace','Explore the workspace','Get comfortable with the ribbon, document area, and tools you will use every day.',['Find ribbon tabs','Use the Quick Access Toolbar','Change your view','Check the status bar'],'Your tools at a glance','The ribbon groups commands into tabs. Home contains common text tools; Insert adds content; Layout controls page setup. The title bar shows the document name, and the status bar displays information such as page count.','Find your way around',['Open a document and select <strong>Home</strong>. Locate the Font and Paragraph groups.','Select <strong>Insert</strong> to find Tables, Pictures, and page elements.','Select <strong>View → Print Layout</strong> to see pages as they will print.','Use the zoom slider at the bottom right to make the document comfortable to read.'],'Useful places','<table><tr><th>Tab</th><th>Use it for</th></tr><tr><td>Home</td><td>Fonts, paragraphs, and styles</td></tr><tr><td>Insert</td><td>Tables, pictures, headers</td></tr><tr><td>Layout</td><td>Margins, orientation, spacing</td></tr><tr><td>Review</td><td>Spelling and comments</td></tr></table>','Press <strong>Ctrl + F</strong> to open the Navigation pane and find text in a long document.','Open your learning plan. Find the word “learn” with Ctrl + F, change the zoom to 120%, and return to Print Layout.'],
 ['formatting-text','Format text and paragraphs','Make a readable document with consistent fonts, clear headings, and well-spaced paragraphs.',['Select and format text','Apply heading styles','Create a list','Adjust paragraph spacing'],'Give your writing structure','Formatting changes the appearance of text. Styles apply a consistent combination of settings and give headings a useful structure. Using Heading styles is more reliable than manually enlarging every heading.','Format a short report',['Select a title and choose <strong>Home → Styles → Title</strong>.','Select a section heading and choose <strong>Heading 1</strong>. Use Normal for body text.','Select a few short paragraphs and choose <strong>Home → Bullets</strong> to create a list.','For paragraph spacing, use <strong>Layout → Spacing → After</strong>. Set 6 pt for a little breathing room.'],'A clear document structure','<h3>Weekly learning plan</h3><p><strong>Goals for this week</strong></p><p>• Learn heading styles<br>• Build a useful list<br>• Save a polished document</p>','Use <strong>Ctrl + B</strong> for bold and <strong>Ctrl + Z</strong> to undo. Avoid using repeated spaces or empty lines to arrange a page.','Format your learning plan with a Title, two Heading 1 sections, and a bulleted list. Check that your body text uses one consistent font.'],
 ['tables-pictures','Insert tables and pictures','Organize information in rows and columns, and add pictures that support your message.',['Insert a table','Edit rows and columns','Add a local picture','Set text wrapping'],'Add useful visual content','A table keeps related details aligned. Pictures add context to instructions and reports. Select an inserted object to reveal its contextual tools on the ribbon.','Build a simple schedule',['Choose <strong>Insert → Table</strong> and select three columns and four rows.','Enter Day, Topic, and Minutes in the first row. Fill the remaining rows with a learning schedule.','Click a table cell to open <strong>Table Design</strong> and <strong>Layout</strong>. Choose a readable table style.','Choose <strong>Insert → Pictures → This Device</strong> and select a picture you have permission to use. Select <strong>Layout Options → In Line with Text</strong> for predictable positioning.'],'Practice schedule','<table><tr><th>Day</th><th>Topic</th><th>Minutes</th></tr><tr><td>Monday</td><td>Word styles</td><td>20</td></tr><tr><td>Tuesday</td><td>Tables</td><td>15</td></tr><tr><td>Wednesday</td><td>Pictures</td><td>20</td></tr></table>','Resize a picture with a corner handle to preserve its proportions. Right-click the picture and use <strong>Edit Alt Text</strong> to describe important visual information.','Recreate the schedule above. Add a picture below the table and supply helpful alternative text.'],
 ['page-layout','Set up your pages','Control margins, page orientation, headers, and page numbers before you print.',['Set page margins','Choose orientation','Insert page numbers','Use page breaks'],'Layout sets the boundaries','Page layout determines how content sits on paper. Most reports use portrait orientation; wide tables may fit better in landscape. Page breaks start content on a new page without adding many empty paragraphs.','Prepare a two-page document',['Choose <strong>Layout → Margins → Normal</strong> for one-inch margins.','Choose <strong>Layout → Orientation → Portrait</strong> or Landscape for wide content.','Place the cursor before a new section and press <strong>Ctrl + Enter</strong> to insert a page break.','Choose <strong>Insert → Page Number</strong> and select a position. Use <strong>Close Header and Footer</strong> when finished.'],'Before printing','<h3>A quick page check</h3><p>Margins leave enough white space. Headings stay with their content. Page numbers appear consistently.</p>','Use <strong>File → Print</strong> to preview every page before sending a document to the printer.','Add a second page to your learning plan using a page break. Insert page numbers and inspect both pages in Print Preview.'],
 ['review-export','Review, save, and export','Check your writing and share a copy that keeps its layout.',['Run a spelling check','Add a comment','Save an editable copy','Export a PDF'],'Finish with a careful review','Reviewing catches mistakes before you share. A DOCX file stays editable in Word. A PDF is useful when readers need a stable page layout rather than a document to edit.','Prepare a document for sharing',['Choose <strong>Review → Spelling & Grammar</strong>, or press <strong>F7</strong>. Consider each suggestion rather than accepting all automatically.','Select text and choose <strong>Review → New Comment</strong> to leave a note.','Press <strong>Ctrl + S</strong> to save your editable DOCX file.','Choose <strong>File → Export → Create PDF/XPS</strong>. Select a location, choose <strong>Publish</strong>, and open the resulting PDF to inspect it.'],'Two useful formats','<table><tr><th>Format</th><th>Best for</th></tr><tr><td>.docx</td><td>Editing your original document</td></tr><tr><td>.pdf</td><td>Sharing a stable reading copy</td></tr></table>','A PDF is not a guarantee against copying or editing. Check that sensitive information and unresolved comments are removed before sharing.','Review your learning plan, correct any spelling errors, and export it as a PDF. Compare the PDF with the original document.']
 ]},
 excel:{name:'Excel',letter:'X',color:'#267653',description:'Turn everyday data into useful insights.',lessons:[
 ['getting-started','Getting started with Excel','Build confidence with workbooks, worksheets, and the cells that bring your data together.',['Create a workbook','Understand cell addresses','Enter simple data','Save as XLSX'],'What is Microsoft Excel?','Excel is a spreadsheet application for organizing data, performing calculations, and creating charts. A workbook contains worksheets; each worksheet is a grid of rows and columns. A cell address combines a column letter with a row number, such as B3.','Create your first workbook',['Open <strong>Excel 2021 → Blank workbook</strong>.','Select <strong>A1</strong> and type Item. In B1 type Cost. Press Tab to move right and Enter to move down.','Enter Notebook in A2 and 25 in B2. Enter Pen in A3 and 10 in B3.','Choose <strong>File → Save As → Browse</strong> and save as <strong>Excel Workbook (*.xlsx)</strong>.'],'Your first worksheet','<table><tr><th></th><th>A</th><th>B</th></tr><tr><th>1</th><td>Item</td><td>Cost</td></tr><tr><th>2</th><td>Notebook</td><td>25</td></tr><tr><th>3</th><td>Pen</td><td>10</td></tr></table>','Double-click a worksheet tab to rename it. Use a descriptive name such as “Study budget”.','Create the worksheet above, rename the sheet “Study budget”, and save the workbook.'],
 ['formatting-cells','Format cells and numbers','Keep your worksheet clear with headings, number formats, and sensible column widths.',['Format headings','Adjust column widths','Apply number formats','Wrap long text'],'Values and display formats','A number format changes how a value appears without changing the value used in calculations. For example, a cell can display 0.25 as 25%. Keep numbers in numeric cells instead of typing currency symbols into text strings.','Make your sheet readable',['Select your heading row and choose <strong>Home → Bold</strong>. Add a light fill color.','Double-click the boundary between column letters to AutoFit a column to its contents.','Select cost cells and choose <strong>Home → Number → Currency</strong>. Pick a currency symbol using the Format Cells dialog if needed.','Select long headings and choose <strong>Home → Wrap Text</strong>.'],'Number formats','<table><tr><th>Stored value</th><th>Format</th><th>Display example</th></tr><tr><td>0.25</td><td>Percentage</td><td>25%</td></tr><tr><td>1200</td><td>Number, 2 decimals</td><td>1,200.00</td></tr></table>','If a numeric cell displays <strong>#####</strong>, the column may be too narrow. Widen it before changing the value.','Format your budget headings, AutoFit both columns, and show costs with two decimal places.'],
 ['formulas-functions','Use formulas and functions','Let Excel calculate totals and averages, and understand how cell references work.',['Write a formula','Use SUM and AVERAGE','Copy relative references','Recognize common errors'],'Calculations begin with =','A formula starts with an equals sign. You can combine cell references with operators or use functions such as SUM. Excel recalculates formulas when referenced values change.','Calculate your budget',['In B4 enter <strong>=SUM(B2:B3)</strong> and press Enter. The result is 35 for the sample budget.','In B5 enter <strong>=AVERAGE(B2:B3)</strong>. The result is 17.5.','In C2 enter <strong>=B2*2</strong>. Copy it to C3 using the fill handle; its reference becomes B3.','Use dollar signs to lock a reference when copying: <strong>$B$2</strong> keeps both the row and column fixed.'],'Try these formulas','<table><tr><th>Formula</th><th>Result with sample data</th></tr><tr><td><code>=SUM(B2:B3)</code></td><td>35</td></tr><tr><td><code>=AVERAGE(B2:B3)</code></td><td>17.5</td></tr><tr><td><code>=B2*2</code></td><td>50</td></tr></table>','<strong>#DIV/0!</strong> means a formula divides by zero or an empty cell. Check the source data instead of simply hiding the error. Function names and separators may vary by language settings.','Add a total below your budget, then change the Notebook cost from 25 to 30. Confirm that the total updates to 40.'],
 ['sort-filter','Sort and filter data','Find the records you need while keeping each row together.',['Create an Excel table','Sort a column','Apply a filter','Clear filters'],'Keep related data together','Sorting changes row order. Filtering temporarily hides rows that do not match your criteria. An Excel table makes these operations safer and adds filter controls to your headers.','Organize a small list',['Select a cell in your data and press <strong>Ctrl + T</strong>. Confirm the range and select <strong>My table has headers</strong>.','Open the Cost header dropdown and choose <strong>Sort Smallest to Largest</strong>. The complete rows move together.','Open the Item dropdown, clear Select All, select Notebook, and choose <strong>OK</strong>.','Choose <strong>Data → Clear</strong> to remove filters and show all rows again.'],'Sort without losing meaning','<p>Before: Notebook — 25; Pen — 10.</p><p>After sorting Cost ascending: Pen — 10; Notebook — 25.</p><p>Each item must stay paired with its original cost.</p>','Sorting only one column in an ordinary range can separate related data. Use a table or expand the selection to include the whole dataset.','Convert your budget data (without the total row) to a table, sort costs, filter for one item, and clear the filter.'],
 ['charts','Create your first chart','Choose a clear chart to explain your data at a glance.',['Select chart data','Insert a column chart','Edit the title','Check labels'],'Choose a chart with a purpose','Column charts compare categories. Line charts show changes over time. A useful chart has a clear title, readable labels, and the right source data. Exclude totals when they would duplicate the categories being compared.','Chart your budget',['Select the Item and Cost headings and their data rows. Do not include the total.','Choose <strong>Insert → Insert Column or Bar Chart → Clustered Column</strong>.','Click the chart title and enter <strong>Study supplies cost</strong>.','Use <strong>Chart Design → Add Chart Element</strong> to add axis titles or data labels when they improve clarity.'],'What the chart should show','<h3>Study supplies cost</h3><p>Two columns compare Notebook (25) and Pen (10). The horizontal axis shows items and the vertical axis shows cost.</p>','Avoid 3D effects that make values harder to compare. Update a source value and confirm the chart changes with it.','Create a column chart from your budget. Change one cost and verify that the corresponding column updates.'],
 ['print-share','Print and share a workbook','Prepare a readable worksheet for printing or PDF export without losing your editable original.',['Set a print area','Choose orientation','Check scaling','Export a PDF'],'Check the printed result','A worksheet can extend far beyond one page. Print Preview reveals clipped columns, extra blank pages, and tiny text. Scaling helps, but squeezing too much onto one page can make the sheet unreadable.','Prepare your sheet',['Select the cells you want to print and choose <strong>Page Layout → Print Area → Set Print Area</strong>.','Choose <strong>Page Layout → Orientation → Landscape</strong> if your table is wide.','In <strong>Scale to Fit</strong>, try Width: 1 page and Height: Automatic.','Open <strong>File → Print</strong> and inspect every preview page. Save the XLSX, then use <strong>File → Export → Create PDF/XPS</strong> to publish a PDF.'],'A sharing checklist','<p>✓ All headings are visible.<br>✓ No cost columns are cut off.<br>✓ Text is large enough to read.<br>✓ The PDF includes only the intended worksheet content.</p>','For long tables, use <strong>Page Layout → Print Titles</strong> to repeat the heading row at the top of each printed page.','Export your budget and chart as a PDF. Open it and check page breaks, labels, and number formatting.']
 ]},
 powerpoint:{name:'PowerPoint',letter:'P',color:'#bd6444',description:'Make your ideas clear, memorable, and visual.',lessons:[
 ['getting-started','Getting started with PowerPoint','Create a presentation that gives your ideas a clear place to begin.',['Create a presentation','Choose slide layouts','Add a new slide','Save as PPTX'],'What is Microsoft PowerPoint?','PowerPoint helps you create slide-based presentations. Use it for lessons, project updates, pitches, and talks. A presentation works best when each slide supports one clear idea rather than reproducing a whole document.','Build your first presentation',['Open <strong>PowerPoint 2021 → Blank Presentation</strong>.','Click the title placeholder and enter My learning journey. Add your name in the subtitle.','Choose <strong>Home → New Slide → Title and Content</strong>. Add a heading and three short points.','Choose <strong>File → Save As → Browse</strong> and save as <strong>PowerPoint Presentation (*.pptx)</strong>.'],'A simple opening','<h3>My learning journey</h3><p>Practical Office skills, one step at a time.</p><p>Next slide: My goals • My plan • My next step</p>','Use <strong>Ctrl + M</strong> to insert a new slide. Use layouts to keep text and objects aligned consistently.','Create and save a three-slide presentation: a title, your learning goals, and a closing slide.'],
 ['themes-layouts','Choose themes and layouts','Give your presentation a consistent appearance without formatting every object by hand.',['Apply a theme','Choose a layout','Reset placeholders','Keep text readable'],'Consistency helps your audience','A theme coordinates colors, fonts, and effects. A layout positions placeholders on a slide. Using the built-in placeholders produces more consistent slides than drawing a new text box for every piece of content.','Set the visual foundation',['Choose <strong>Design</strong> and select a theme with good text contrast.','Select a slide, then choose <strong>Home → Layout</strong> to pick a suitable structure.','If placeholders have moved, choose <strong>Home → Reset</strong> to restore the layout positioning.','Review font sizes in Slide Show view. Keep body text large enough to read from a distance.'],'A useful slide pattern','<h3>One idea per slide</h3><p>A short heading names the idea. A simple visual or a few concise points explain it. Space around the content helps the audience focus.</p>','Theme changes can affect many slides. Review the entire deck after choosing a new theme.','Apply one theme to your presentation and use at least two layouts. Check that all slide headings are easy to read.'],
 ['pictures-shapes','Add pictures and shapes','Support your message with well-chosen visuals and clean alignment.',['Insert a picture','Crop an image','Add a shape','Align objects'],'Use visuals with a purpose','Pictures illustrate ideas while shapes can show steps, groups, and relationships. Choose images you have permission to use, and avoid decorative elements that compete with the message.','Build a visual slide',['Choose <strong>Insert → Pictures → This Device</strong> and select an image.','Select the image, then choose <strong>Picture Format → Crop</strong> to frame the important area.','Choose <strong>Insert → Shapes</strong> and add a rounded rectangle for a short label.','Select multiple objects with Shift, then use the contextual <strong>Format → Align</strong> menu to line them up.'],'A simple process','<h3>Learn → Practice → Review</h3><p>Use three aligned shapes connected by arrows to explain your learning process.</p>','Add alternative text to meaningful images using <strong>Edit Alt Text</strong>. Use more than color alone to distinguish steps or categories.','Create a slide with one picture and three aligned process shapes. Add descriptive alternative text to the picture.'],
 ['transitions-animations','Use transitions and animations','Add movement that helps your audience follow the story.',['Distinguish effects','Apply a transition','Animate a list','Control playback order'],'Two kinds of movement','Transitions occur between slides. Animations affect objects within a slide. Subtle effects can guide attention; too many effects distract from the content and slow a presentation down.','Add a little movement',['Select a slide and choose <strong>Transitions → Fade</strong>. Use Preview to inspect it.','Keep <strong>On Mouse Click</strong> enabled in the Timing group for manual slide advances.','Select a bulleted placeholder and choose <strong>Animations → Appear</strong>. In Effect Options, choose By Paragraph when available.','Open <strong>Animation Pane</strong> to inspect the order and set Start to On Click for each intended step.'],'A measured sequence','<p>First click: reveal the first goal.<br>Second click: reveal the second goal.<br>Third click: reveal the third goal.</p><p>The audience sees only the point you are discussing.</p>','Test effects in Slide Show view. Avoid automatic timing unless you have rehearsed it and know the presentation should advance unattended.','Add a Fade transition and reveal one list by paragraph. Rehearse the slide to check the click sequence.'],
 ['presenter-notes','Present with notes','Prepare useful speaker notes and rehearse before your audience arrives.',['Write speaker notes','Start a slide show','Use Presenter View','Rehearse your delivery'],'Slides support the speaker','Speaker notes hold reminders that do not belong on the audience’s slides. Presenter View can show your notes and upcoming slide on your display while the audience sees only the presentation.','Rehearse your talk',['In Normal view, choose <strong>Notes</strong> on the status bar and type short reminders below a slide.','Choose <strong>Slide Show → From Beginning</strong> or press F5. Press Esc to finish.','For a second display, enable <strong>Slide Show → Use Presenter View</strong> and select the correct monitor. Verify what the audience display shows.','Use <strong>Slide Show → Rehearse Timings</strong> to practice. Keep recorded timings only if you want them used later.'],'Good notes are prompts','<h3>Slide: My learning goals</h3><p>Speaker notes: Explain why these three skills matter. Give one real example. Invite a question before moving on.</p>','Use <strong>Shift + F5</strong> to present from the current slide. Test the actual display arrangement before presenting to keep notes off the audience screen.','Add notes to each slide and rehearse a two-minute presentation. Practice starting, advancing, and ending the slide show.'],
 ['export-handouts','Export and create handouts','Share slides in the right format and check what your audience will receive.',['Save the original','Export slides as PDF','Print handouts','Check the output'],'Choose the right sharing format','PPTX preserves editable slides and effects. PDF keeps static slide content in a widely readable format. Handouts place several slides on a printed page, which can help an audience follow along and make notes.','Prepare a sharing copy',['Save your editable file with <strong>Ctrl + S</strong>.','Choose <strong>File → Export → Create PDF/XPS</strong>. Open Options to confirm the slide range and output type, then Publish.','For handouts, choose <strong>File → Print</strong>. Open the Full Page Slides dropdown and choose a handout layout such as 3 Slides.','Inspect the preview and exported PDF to confirm that all slides are present and legible.'],'Match the format to the purpose','<table><tr><th>Need</th><th>Use</th></tr><tr><td>Edit or present effects</td><td>PPTX</td></tr><tr><td>Read static slides</td><td>PDF</td></tr><tr><td>Take notes on paper</td><td>3-slide handouts</td></tr></table>','PDFs do not preserve slide transitions and object animations as live presentation effects. Check that your message still makes sense without them.','Export your slides to PDF and preview a three-slide handout layout. Check that no private notes are included in the shared output.']
 ]},
 publisher: {
 "name": "Publisher",
 "letter": "P",
 "color": "#217e80",
 "description": "Design clear publications for print and sharing.",
 "lessons": [
  [
   "getting-started",
   "Getting started with Publisher",
   "Create a publication with precisely positioned text and pictures.",
   [
    "Create a publication",
    "Choose a template",
    "Understand page objects",
    "Save a PUB file"
   ],
   "What is Microsoft Publisher?",
   "Publisher 2021 is a Windows desktop publishing application for flyers, newsletters, brochures, and other page-based publications. Unlike a flowing Word document, a publication places text and pictures in independent objects. Publisher is not included in every Office 2021 edition.",
   "Create your first publication",
   [
    "Open <strong>Publisher 2021 → File → New</strong>.",
    "Choose a blank page size or a suitable template. Template downloads may need an internet connection.",
    "Replace sample text with your own heading and details. Select an object to move or resize it.",
    "Choose <strong>File → Save As → Browse</strong> and save your editable publication as <strong>Publisher Files (*.pub)</strong>."
   ],
   "A first flyer",
   "<h3>Community learning day</h3><p>Saturday · 10:00–12:00<br>Library meeting room<br>Bring your curiosity.</p>",
   "Keep the original PUB file when you export a PDF. The PDF is a sharing copy, not your editable source.",
   "Create a one-page event flyer with a title, date, location, and short invitation. Save it as Learning day.pub."
  ],
  [
   "text-boxes",
   "Work with text boxes",
   "Place your writing where the design needs it, and connect longer stories.",
   [
    "Draw a text box",
    "Format text",
    "Spot overflowing text",
    "Link text boxes"
   ],
   "Text lives in containers",
   "Publisher text boxes can be moved and sized independently. When a story is too long for a box, text can overflow. Linking text boxes lets a story continue into another box without copying and pasting parts of it.",
   "Add and connect text",
   [
    "Choose <strong>Insert → Draw Text Box</strong> and drag on the page. Type a short story.",
    "Select the text and use <strong>Home</strong> to set a readable font and size.",
    "Draw a second, empty text box for the continuation. Select the first box.",
    "Choose <strong>Text Box Tools Format → Create Link</strong> and click the empty box. Resize the first box to see text flow into the second."
   ],
   "One story, two columns",
   "<h3>Learning together</h3><p>A long newsletter story begins in the left text box and continues in the linked right text box.</p>",
   "Check for overflow before exporting. Increasing the box size or linking another box is often better than making the text very small.",
   "Write a short newsletter story and make it flow through two linked text boxes."
  ],
  [
   "pictures-alignment",
   "Add pictures and align objects",
   "Create a balanced layout with pictures, guides, and consistent spacing.",
   [
    "Insert a picture",
    "Crop rather than stretch",
    "Align objects",
    "Use layout guides"
   ],
   "Every object needs a place",
   "Aligning edges and leaving consistent spacing makes a publication easier to scan. Layout guides help position objects without becoming printed elements. Pictures should support the message and have sufficient quality for the intended print size.",
   "Build a balanced layout",
   [
    "Choose <strong>Insert → Pictures</strong> and select a local image you have permission to use.",
    "Use <strong>Picture Tools Format → Crop</strong> to remove unwanted edges without stretching the image.",
    "Select multiple objects using Shift, then use <strong>Home → Arrange → Align</strong> to line up their edges.",
    "Use <strong>Page Design → Guides</strong> to set up useful layout guides and position your objects consistently."
   ],
   "A balanced flyer",
   "<p>Place a short heading at the top, one clear picture below it, and the event details aligned to a shared left edge.</p>",
   "Resize pictures with a corner handle. Avoid enlarging small images until they look blurred or pixelated.",
   "Add a picture to your flyer and align it with the heading and event details."
  ],
  [
   "page-design",
   "Set page size and design",
   "Choose your page dimensions and color scheme before refining the layout.",
   [
    "Choose page size",
    "Set orientation",
    "Apply a color scheme",
    "Keep safe margins"
   ],
   "Page size and paper size differ",
   "Page size describes the finished publication. Paper size describes the sheet used by the printer. A small card may be printed several times on a larger sheet. Check both settings rather than assuming they match.",
   "Prepare the page",
   [
    "Choose <strong>Page Design → Size</strong> and select the intended finished size.",
    "Choose <strong>Page Design → Orientation</strong> for portrait or landscape.",
    "Choose a suitable scheme in <strong>Page Design → Schemes</strong> and check text contrast.",
    "Keep important text away from page edges. Confirm your printer’s printable area in Print Preview."
   ],
   "A practical choice",
   "<h3>A4 event flyer</h3><p>Finished page: A4 portrait.<br>Printed sheet: A4.<br>Design: readable dark text on a light background.</p>",
   "Home printers often cannot print to the edge of the paper. Borderless printing and commercial bleed requirements depend on the printer.",
   "Set your flyer to A4 portrait and confirm that all important content fits inside a safe margin."
  ],
  [
   "brochures",
   "Build a simple brochure",
   "Plan a folded publication with a clear reading order.",
   [
    "Choose a brochure template",
    "Understand panels",
    "Replace sample content",
    "Check the fold"
   ],
   "Design around the fold",
   "A brochure’s panels form a reading order once the sheet is folded. A template can help with panel placement, but you still need to check where the cover, inside pages, and contact details appear after folding.",
   "Plan your brochure",
   [
    "Choose <strong>File → New</strong> and select a brochure template suitable for your paper and fold.",
    "Identify the outside and inside pages using the page navigation pane.",
    "Replace sample text and images, keeping content away from fold lines and checking for text overflow.",
    "Print a draft, fold it, and verify the order and orientation before making final copies."
   ],
   "A useful content plan",
   "<table><tr><th>Panel role</th><th>Content</th></tr><tr><td>Cover</td><td>Title and key message</td></tr><tr><td>Inside</td><td>Details and benefits</td></tr><tr><td>Back</td><td>Contact and next step</td></tr></table>",
   "Printer duplex settings affect how the back side is oriented. Test one copy rather than printing a full batch immediately.",
   "Create a brochure for a learning club. Use a folded draft to verify its cover, inside content, and contact panel."
  ],
  [
   "print-export",
   "Check, print, and export",
   "Inspect your publication and create a dependable sharing copy.",
   [
    "Run Design Checker",
    "Inspect print settings",
    "Export a PDF",
    "Verify the result"
   ],
   "Review the finished publication",
   "Design Checker can flag layout issues such as text overflow and objects outside the page. It does not replace proofreading or checking a printed sample. Inspect both the editable publication and the exported result.",
   "Prepare a sharing copy",
   [
    "Choose <strong>File → Info → Run Design Checker</strong> and investigate the issues relevant to your output.",
    "Save the PUB file, then choose <strong>File → Print</strong> and check paper size, orientation, and preview.",
    "Choose <strong>File → Export → Create PDF/XPS</strong>. Select suitable output options and publish the file.",
    "Open the PDF and inspect every page for missing text, image quality, and unexpected page breaks."
   ],
   "Final checks",
   "<p>✓ Text fits its boxes.<br>✓ Pictures are clear.<br>✓ Page size is correct.<br>✓ Contact details have been proofread.</p>",
   "For a commercial printer, ask for its required PDF, bleed, and color settings before producing the final file.",
   "Export your flyer as a PDF. Open it and compare it with the PUB original, then inspect a print preview."
  ]
 ]
},
 access: {
 "name": "Access",
 "letter": "A",
 "color": "#a74350",
 "description": "Organize related information with a desktop database.",
 "lessons": [
  [
   "getting-started",
   "Getting started with Access",
   "Create a desktop database and understand its main building blocks.",
   [
    "Create an ACCDB file",
    "Identify database objects",
    "Understand records and fields",
    "Locate the Navigation Pane"
   ],
   "What is Microsoft Access?",
   "Access 2021 is a Windows desktop database application. Tables store data; queries retrieve and transform it; forms support data entry; reports present formatted output. Access is not included in every Office 2021 edition.",
   "Create a practice database",
   [
    "Open <strong>Access 2021 → Blank database</strong>.",
    "Enter Learning club.accdb, choose a local folder, and select <strong>Create</strong>.",
    "Locate the <strong>Navigation Pane</strong> on the left. It lists saved tables and other database objects.",
    "Use practice data throughout these lessons. Save table design changes and close the database normally when finished."
   ],
   "Database building blocks",
   "<table><tr><th>Object</th><th>Purpose</th></tr><tr><td>Table</td><td>Store records</td></tr><tr><td>Query</td><td>Select and calculate data</td></tr><tr><td>Form</td><td>Enter and view data</td></tr><tr><td>Report</td><td>Present printable output</td></tr></table>",
   "Access saves record changes as you move between records. Ctrl + S saves object design changes; it is not an undo button for data edits.",
   "Create Learning club.accdb and locate its Navigation Pane. Keep this practice database separate from real personal records."
  ],
  [
   "tables-fields",
   "Create tables and fields",
   "Choose suitable data types and give every record a stable identity.",
   [
    "Use Design View",
    "Choose field types",
    "Set a primary key",
    "Enter sample records"
   ],
   "Records, fields, and keys",
   "A record is one row of related information. A field is one attribute, such as a member’s name. A primary key uniquely identifies each record. AutoNumber is a convenient generated key for a small practice database.",
   "Create a Members table",
   [
    "Choose <strong>Create → Table Design</strong>. Add MemberID with data type AutoNumber.",
    "Select the MemberID row and choose <strong>Table Design → Primary Key</strong> if it is not already the key.",
    "Add MemberName as Short Text and JoinDate as Date/Time. Save the table as Members.",
    "Switch to <strong>Datasheet View</strong> and add two fictional members. Access supplies their MemberID values."
   ],
   "Sample Members table",
   "<table><tr><th>MemberID</th><th>MemberName</th><th>JoinDate</th></tr><tr><td>1</td><td>Alex</td><td>6 November 2026</td></tr><tr><td>2</td><td>Sam</td><td>7 November 2026</td></tr></table>",
   "Store phone numbers and postal codes as Short Text when they are identifiers rather than quantities. Numeric types can remove leading zeroes.",
   "Create the Members table and add two fictional records. Confirm that each has a different MemberID."
  ],
  [
   "relationships",
   "Connect related tables",
   "Link records through keys instead of repeating the same details in many places.",
   [
    "Understand foreign keys",
    "Choose compatible types",
    "Create a relationship",
    "Use referential integrity"
   ],
   "One member, many bookings",
   "A one-to-many relationship lets one member have several bookings. Members.MemberID is the primary key. Bookings.MemberID stores the matching value as a foreign key. It should use Number with Field Size Long Integer to match an AutoNumber key.",
   "Create the relationship",
   [
    "Create a Bookings table with BookingID (AutoNumber primary key), MemberID (Number, Long Integer), and SessionName (Short Text). Save and close both table tabs.",
    "Choose <strong>Database Tools → Relationships</strong> and add Members and Bookings.",
    "Drag <strong>Members.MemberID</strong> onto <strong>Bookings.MemberID</strong>.",
    "Select <strong>Enforce Referential Integrity</strong> and choose Create. Save the relationship layout. Existing data must already satisfy the relationship."
   ],
   "A connected record",
   "<p>Members: MemberID 1 → Alex</p><p>Bookings: BookingID 1, MemberID 1, SessionName “Excel basics”</p><p>The booking refers to Alex through the key, without repeating the member’s name.</p>",
   "Do not enable cascade deletion casually: deleting a parent record can also delete related records. Referential integrity helps prevent orphan records.",
   "Add a booking for an existing MemberID. Try a nonexistent MemberID and confirm that referential integrity rejects it."
  ],
  [
   "queries",
   "Find data with queries",
   "Select the fields and records you need without duplicating your tables.",
   [
    "Open Query Design",
    "Choose fields",
    "Add criteria",
    "Run a select query"
   ],
   "Queries ask questions of data",
   "A select query returns matching records from tables. Criteria restrict the results; sorting determines the order. Saving a select query saves its definition rather than a separate copy of its result records.",
   "Create a member search",
   [
    "Choose <strong>Create → Query Design</strong> and add Members.",
    "Double-click MemberID, MemberName, and JoinDate to add them to the grid.",
    "In the MemberName Criteria row enter <strong>\"Alex\"</strong>. Set its Sort row to Ascending if desired.",
    "Choose <strong>Query Design → Run</strong> to view the results. Save as FindAlex."
   ],
   "A simple criterion",
   "<table><tr><th>Field</th><th>Criteria</th><th>Meaning</th></tr><tr><td>MemberName</td><td><code>\"Alex\"</code></td><td>Matches this name</td></tr><tr><td>MemberID</td><td><code>&gt;1</code></td><td>IDs greater than one</td></tr></table>",
   "Select queries are different from action queries such as Delete and Update. Use select queries for these exercises and back up before running action queries.",
   "Create and run FindAlex. Change the name criterion to Sam, run it again, and inspect the difference."
  ],
  [
   "forms",
   "Make a data-entry form",
   "Create a friendlier view for entering and checking table records.",
   [
    "Create a form",
    "Navigate records",
    "Add a record",
    "Understand validation"
   ],
   "Forms work with underlying data",
   "A bound form displays and edits data from its record source, usually a table or query. It is an interface to the data, not a separate backup copy. Table rules still apply when data is entered through a form.",
   "Build a Members form",
   [
    "Select Members in the Navigation Pane.",
    "Choose <strong>Create → Form</strong>. Access generates a form for that table.",
    "Save it as MemberEntry, then switch to <strong>Form View</strong>.",
    "Use the record navigation controls to inspect existing members and the new-record control to add a fictional member."
   ],
   "A focused entry screen",
   "<h3>Member entry</h3><p>MemberID: generated automatically<br>MemberName: Taylor<br>JoinDate: choose a valid date</p>",
   "A record can save when you move away from it. Check your entries before navigating, and use Esc to cancel an in-progress edit when appropriate.",
   "Create MemberEntry, add a fictional member, and confirm the new record appears in the Members table."
  ],
  [
   "reports-backups",
   "Create reports and backups",
   "Present your data clearly and keep a recoverable copy of the database.",
   [
    "Create a report",
    "Preview pages",
    "Export to PDF",
    "Back up the database"
   ],
   "Reports present; backups protect",
   "Reports format data for reading and printing. A PDF of a report shares its output but cannot restore your tables, relationships, and forms. A database backup preserves the database file for recovery.",
   "Prepare output and a backup",
   [
    "Select Members and choose <strong>Create → Report Wizard</strong>. Choose the fields and follow the wizard to save MemberList.",
    "Open the report in <strong>Print Preview</strong> and inspect widths, page count, and headings.",
    "With the report selected, choose <strong>External Data → PDF or XPS</strong> and export a reading copy.",
    "For a backup, ensure other users have closed the database, then choose <strong>File → Save As → Save Database As → Back Up Database</strong> and save a dated copy."
   ],
   "Two different outputs",
   "<table><tr><th>File</th><th>Purpose</th></tr><tr><td>MemberList.pdf</td><td>Read a formatted member list</td></tr><tr><td>Dated .accdb backup</td><td>Recover database objects and data</td></tr></table>",
   "Keep backups in a separate safe location and verify you can open a copy. A report export is not a database backup.",
   "Export MemberList as a PDF, make a database backup, and verify both files open correctly."
  ]
 ]
}
};
const $ = id => document.getElementById(id);
let activeApp='word';
let activeLesson=0;
let isQuiz=false;
const quizAttempts = {};

let completed=[];
try { const saved=JSON.parse(localStorage.getItem('office2021-completed') || '[]'); if(Array.isArray(saved)) completed=saved.filter(x=>typeof x==='string'); } catch {}
const key=(app,lesson)=>`${app}/${lesson[0]}`;
function renderNavigation(){
 $('app-nav').innerHTML=Object.entries(courses).map(([id,c])=>`<a class="app-tab ${id===activeApp?'active':''}" style="--app:${c.color}" href="#${id}/${c.lessons[0][0]}" ${id===activeApp?'aria-current="page"':''}><span class="app-icon" aria-hidden="true">${c.letter}</span>${c.name}<small>2021</small></a>`).join('');
 $('course-label').textContent=`${courses[activeApp].name} Tutorial`;
 const practiceLink=document.querySelector('.practice-card a');
 practiceLink.setAttribute('href',isQuiz?`#${activeApp}/getting-started`:'#practice');
 practiceLink.textContent=isQuiz?'Back to tutorials →':'View exercise →';
 document.querySelector('.practice-card p').textContent=isQuiz?'Review the lessons before your next attempt.':'Follow the exercise in your desktop application.';
 renderLessonLinks();
}
function renderLessonLinks(){
 const term=$('search').value.trim().toLowerCase();
 const apps=term?Object.entries(courses):[[activeApp,courses[activeApp]]];
 const matches=apps.flatMap(([id,c])=>[...c.lessons.map((l,i)=>({id,c,l,i})), {id,c,l:['quiz',`${c.name} practice quiz`,'Multiple-choice questions and answers',['Quiz','Questions','Answers','Explanations'],'','','',[], '', '', '', ''],i:-1}]).filter(({c,l})=>!term||term.split(/\s+/).every(word=>`${c.name} ${l[1]} ${l[2]} ${l[3].join(' ')} ${l[5]} ${l[7].join(' ')} ${l[11]}`.toLowerCase().includes(word)));
 $('chapter-label').textContent=term?`${matches.length} SEARCH RESULTS`:'COURSE CONTENTS';
 $('empty-search').hidden=matches.length!==0;
 $('lesson-nav').innerHTML=matches.map(({id,c,l,i})=>`<a class="lesson-link ${id===activeApp&&i===(isQuiz?-1:activeLesson)?'active':''}" href="#${key(id,l)}" ${id===activeApp&&i===(isQuiz?-1:activeLesson)?'aria-current="page"':''}><span class="number">${i===-1?'?':completed.includes(key(id,l))?'✓':String(i+1).padStart(2,'0')}</span><span>${term?`${c.name} · `:''}${l[1]}</span>${id===activeApp&&i===(isQuiz?-1:activeLesson)?'<span class="arrow">›</span>':''}</a>`).join('');
}
function render(){
 const parts=location.hash.slice(1).split('/');
 // Section anchors are handled by the browser without replacing the current lesson.
 if(parts.length===1&&['overview','steps','example','practice'].includes(parts[0]))return;
 activeApp=Object.hasOwn(courses,parts[0])?parts[0]:'word';
 const c=courses[activeApp];
 isQuiz=parts[1]==='quiz';
 if(isQuiz){renderQuiz();renderNavigation();closeLessonMenu();return;}
 const found=c.lessons.findIndex(l=>l[0]===parts[1]);
 activeLesson=found>=0?found:0;
 const l=c.lessons[activeLesson];
 document.title=`${c.name} 2021: ${l[1]} | Results System`;
 document.documentElement.style.setProperty('--app',c.color);
 const isDone=completed.includes(key(activeApp,l));
 $('lesson').innerHTML=`<div class="breadcrumb"><a href="#word/getting-started">Learning library</a><span>›</span><a href="#${activeApp}/getting-started">${c.name} 2021</a><span>›</span><span>${l[1]}</span></div><div class="lesson-kicker">${c.name.toUpperCase()} 2021 <span class="dot"></span> LESSON ${String(activeLesson+1).padStart(2,'0')} OF ${String(c.lessons.length).padStart(2,'0')}</div><h1 class="lesson-title">${l[1]}</h1><p class="lesson-intro">${l[2]}</p><div class="lesson-meta"><span>${activeLesson===0?'5':'7'} min read & practice</span><span>Beginner level</span><span>Windows desktop</span></div><section class="learning-box"><h2>What you’ll learn</h2><ul>${l[3].map(t=>`<li>${t}</li>`).join('')}</ul></section><section id="overview"><h2>${l[4]}</h2><p>${l[5]}</p></section><section id="steps"><h2>${l[6]}</h2><ol class="steps">${l[7].map(t=>`<li>${t}</li>`).join('')}</ol></section><section class="example" id="example"><div class="example-title"><span>${l[8]}</span><span>EXAMPLE</span></div><div class="example-body">${l[9]}</div></section><div class="tip"><p><strong>Note</strong><br>${l[10]}</p></div><section class="practice" id="practice"><h2>Practice exercise</h2><p>${l[11]}</p><button class="complete-button" id="complete" aria-pressed="${isDone}">${isDone?'✓ Lesson completed':'Mark lesson complete'}</button><p id="completion-status" role="status"></p></section><a class="quiz-callout" href="#${activeApp}/quiz"><span><strong>Practice quiz</strong><small>Try the ${c.name} 2021 multiple-choice quiz.</small></span><span aria-hidden="true">→</span></a>`;
 $('complete').addEventListener('click',()=>{
  const k=key(activeApp,l);const done=!completed.includes(k);
  completed=done?[...completed,k]:completed.filter(x=>x!==k);
  let persisted=true; try {localStorage.setItem('office2021-completed',JSON.stringify(completed));}catch {persisted=false;}
  $('complete').setAttribute('aria-pressed',String(done));
  $('complete').textContent=done?'✓ Lesson completed':'Mark lesson complete';
  $('completion-status').textContent=persisted?(done?'Progress saved in this browser.':'Lesson marked incomplete.'):'Progress updated for this visit. Browser storage is unavailable.';
  renderLessonLinks();
 });
 $('on-page').innerHTML=[['overview',l[4]],['steps',l[6]],['example',l[8]],['practice','Your turn to try']].map(([id,title])=>`<a href="#${id}">${title}</a>`).join('');
 $('pagination').innerHTML=(activeLesson>0?`<a class="page-link" href="#${key(activeApp,c.lessons[activeLesson-1])}"><span>←</span><span><small>PREVIOUS LESSON</small>${c.lessons[activeLesson-1][1]}</span></a>`:'')+(activeLesson<c.lessons.length-1?`<a class="page-link next" href="#${key(activeApp,c.lessons[activeLesson+1])}"><span><small>NEXT LESSON</small>${c.lessons[activeLesson+1][1]}</span><span>→</span></a>`:`<a class="page-link next" href="#${activeApp}/quiz"><span><small>CHECK YOUR KNOWLEDGE</small>${c.name} practice quiz</span><span>→</span></a>`);
 renderNavigation();
 closeLessonMenu();
}
$('search').addEventListener('input',renderLessonLinks);
$('lesson-nav').addEventListener('click',e=>{if(e.target.closest('a')){$('search').value='';$('sidebar').classList.remove('open');$('mobile-menu').setAttribute('aria-expanded','false');renderLessonLinks();}});
$('mobile-menu').addEventListener('click',()=>{const open=$('sidebar').classList.toggle('open');$('mobile-menu').setAttribute('aria-expanded',String(open));if(open)$('sidebar').scrollIntoView({block:'start',behavior:'smooth'});});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();if(innerWidth<=760){$('sidebar').classList.add('open');$('mobile-menu').setAttribute('aria-expanded','true');}$('search').focus();}if(e.key==='Escape'&&document.activeElement===$('search')){$('search').value='';renderLessonLinks();$('search').blur();}});
window.addEventListener('hashchange',()=>{const isLesson=location.hash.includes('/');render();if(isLesson){$('lesson').focus({preventScroll:true});$('main').scrollIntoView({block:'start'});}});
render();

document.addEventListener('click', e => {
 const link=e.target.closest('a[href]');
 if(!link || !['#overview','#steps','#example','#practice'].includes(link.getAttribute('href'))) return;
 const target=document.getElementById(link.getAttribute('href').slice(1));
 if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); target.setAttribute('tabindex','-1'); target.focus({preventScroll:true}); }
});

function closeLessonMenu(){
 $('sidebar').classList.remove('open');
 $('mobile-menu').setAttribute('aria-expanded','false');
}
function quizAttempt(){
 if(!quizAttempts[activeApp])quizAttempts[activeApp]={answers:[],revealed:[],submitted:false};
 return quizAttempts[activeApp];
}
function renderQuiz(){
 const c=courses[activeApp], questions=quizzes[activeApp], attempt=quizAttempt();
 document.title=`${c.name} 2021 Practice Quiz | Results System`;
 document.documentElement.style.setProperty('--app',c.color);
 $('lesson').innerHTML=`<div class="breadcrumb"><a href="#${activeApp}/getting-started">${c.name} 2021</a><span>›</span><span>Practice quiz</span></div><div class="lesson-kicker">${c.name.toUpperCase()} 2021 · KNOWLEDGE CHECK</div><h1 class="lesson-title">${c.name} practice quiz</h1><p class="lesson-intro">Choose one answer for each question. Use “Show Answer” to check your choice and read the explanation, or submit all your answers together.</p><div class="quiz-rules"><span>${questions.length} questions</span><span>1 point per correct answer</span><span>No time limit</span></div><p class="quiz-note">Showing an answer locks that question. You can retry the quiz at any time. Answers stay here while you browse; refreshing starts a new attempt.</p><form id="quiz-form">${questions.map((q,i)=>`<section class="question-card" id="question-${i}"><fieldset><legend><span class="question-number">QUESTION ${i+1} OF ${questions.length}</span>${q[0]}</legend><div class="quiz-options">${q[1].map((choice,j)=>`<label class="quiz-option"><input type="radio" name="question-${i}" value="${j}" ${attempt.answers[i]===j?'checked':''} ${attempt.revealed[i]?'disabled':''}><span class="option-letter" aria-hidden="true">${String.fromCharCode(65+j)}</span><span>${choice}</span></label>`).join('')}</div></fieldset><button class="show-answer" type="button" data-question="${i}" ${attempt.answers[i]===undefined||attempt.revealed[i]?'disabled':''} aria-expanded="${Boolean(attempt.revealed[i])}" aria-controls="answer-${i}">${attempt.revealed[i]?'Answer shown':'Show Answer'}</button><div class="answer-explanation" id="answer-${i}" ${attempt.revealed[i]?'':'hidden'}>${answerExplanation(q,i,attempt)}</div></section>`).join('')}<div class="quiz-actions"><button class="submit-quiz" type="submit" ${attempt.submitted?'disabled':''}>Submit answers</button><button class="retry-quiz" type="button" id="retry-quiz">Retry quiz</button><span id="quiz-status" role="status"></span></div></form><section id="quiz-result" class="quiz-result" tabindex="-1" ${attempt.submitted?'':'hidden'}></section>`;
 $('on-page').innerHTML=questions.map((q,i)=>`<a href="#question-${i}" data-quiz-anchor="${i}">Question ${i+1}</a>`).join('');
 $('pagination').innerHTML=`<a class="page-link" href="#${activeApp}/getting-started"><span>←</span><span><small>BACK TO LEARNING</small>${c.name} tutorials</span></a>`;
 $('quiz-form').addEventListener('change',e=>{
  if(!e.target.matches('input[type=radio]'))return;
  const i=Number(e.target.name.split('-')[1]);
  if(attempt.revealed[i])return;
  attempt.answers[i]=Number(e.target.value);
  $(`question-${i}`).querySelector('.show-answer').disabled=false;
  $('quiz-status').textContent='';
 });
 $('quiz-form').addEventListener('click',e=>{
  const button=e.target.closest('.show-answer');
  if(!button||button.disabled)return;
  revealQuizAnswer(Number(button.dataset.question));
 });
 $('quiz-form').addEventListener('submit',e=>{
  e.preventDefault();
  if(attempt.submitted)return;
  const missing=questions.findIndex((q,i)=>attempt.answers[i]===undefined);
  if(missing>=0){$('quiz-status').textContent=`Please answer question ${missing+1} before submitting.`;$(`question-${missing}`).querySelector('input').focus();return;}
  questions.forEach((q,i)=>revealQuizAnswer(i));
  attempt.submitted=true;
  $('quiz-form').querySelector('.submit-quiz').disabled=true;
  updateQuizResult();
  $('quiz-result').focus();
 });
 $('retry-quiz').addEventListener('click',()=>{
  quizAttempts[activeApp]={answers:[],revealed:[],submitted:false};
  renderQuiz();$('lesson').focus({preventScroll:true});$('main').scrollIntoView({block:'start'});
 });
 if(attempt.submitted)updateQuizResult();
}
function answerExplanation(q,i,attempt){
 if(!attempt.revealed[i])return '';
 const correct=attempt.answers[i]===q[2];
 return `<p class="answer-verdict ${correct?'answer-correct':'answer-incorrect'}">${correct?'Correct!':'Incorrect.'} Your answer: ${String.fromCharCode(65+attempt.answers[i])}.</p><p><strong>Correct answer: ${String.fromCharCode(65+q[2])}. ${q[1][q[2]]}</strong></p><p>${q[3]}</p>`;
}
function revealQuizAnswer(i){
 const attempt=quizAttempt();
 if(attempt.answers[i]===undefined)return;
 attempt.revealed[i]=true;
 const card=$(`question-${i}`), explanation=$(`answer-${i}`), button=card.querySelector('.show-answer');
 card.querySelectorAll('input').forEach(input=>{input.disabled=true;});
 explanation.innerHTML=answerExplanation(quizzes[activeApp][i],i,attempt);
 explanation.hidden=false;
 button.setAttribute('aria-expanded','true');button.textContent='Answer shown';button.disabled=true;
 explanation.setAttribute('tabindex','-1');
 // Keep feedback reachable when the activated button becomes disabled.
 if(document.activeElement===button)explanation.focus({preventScroll:true});
}
function updateQuizResult(){
 const questions=quizzes[activeApp],attempt=quizAttempt();
 const score=questions.filter((q,i)=>attempt.answers[i]===q[2]).length;
 $('quiz-result').hidden=false;
 $('quiz-result').innerHTML=`<div class="lesson-kicker">QUIZ COMPLETE</div><h2>Your score: ${score} / ${questions.length}</h2><p>${Math.round(score/questions.length*100)}% correct. ${score===questions.length?'Excellent work! You answered every question correctly.':'Review the explanations above, revisit the lessons, and try again when you are ready.'}</p>`;
}
document.addEventListener('click',e=>{
 const link=e.target.closest('[data-quiz-anchor]');
 if(!link)return;
 const target=$(`question-${link.dataset.quizAnchor}`);
 if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});target.querySelector('legend').setAttribute('tabindex','-1');target.querySelector('legend').focus({preventScroll:true});}
});
