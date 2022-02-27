const CONSTANTS = {
  BREADCRUMB_TITLE: 'BREADCRUMB_TITLE',
  DESCRIPTION: 'DESCRIPTION',
  GET_HELP_BUTTON: 'GET_HELP_BUTTON',
  TEST_CASES: 'TEST_CASES',
  TEST_OUTPUT: 'TEST_OUTPUT',
  ALL_HELPERS: 'ALL_HELPERS',
};

const responsiveWebDesignChallenges = [
  {
    section: 'Basic Html And Html5',
    name: 'Say Hello To Html Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>To pass the test on this challenge, change your <code>h1</code> element's text to say <code>Hello World</code>.</p>\n",
  },
  {
    section: 'Basic Html And Html5',
    name: 'Headline With The H2 Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/headline-with-the-h2-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Add an <code>h2</code> tag that says "CatPhotoApp" to create a second HTML element below your "Hello World" <code>h1</code> element.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Inform With The Paragraph Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Create a <code>p</code> element below your <code>h2</code> element, and give it the text <code>Hello Paragraph</code>.</p>',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Fill In The Blank With Placeholder Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/fill-in-the-blank-with-placeholder-text',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Replace the text inside your <code>p</code> element with the first few words of this kitty ipsum text: <code>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</code></p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Uncomment Html',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/uncomment-html',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Uncomment your <code>h1</code>, <code>h2</code> and <code>p</code> elements.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Comment Out Html',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/comment-out-html',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Comment out your <code>h1</code> element and your <code>p</code> element, but not your <code>h2</code> element.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Delete Html Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/delete-html-elements',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Delete your <code>h1</code> element so we can simplify our view.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Introduction To Html5 Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/introduction-to-html5-elements',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Create a second <code>p</code> element with the following kitty ipsum text: <code>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</code></p>\n<p>Then, create a <code>main</code> element and nest only the two <code>p</code> elements inside the <code>main</code> element.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Add Images To Your Website',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-images-to-your-website',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Let's try to add an image to our website:</p>\n<p>Within the existing <code>main</code> element, insert an <code>img</code> element before the existing <code>p</code> elements.</p>\n<p>Now set the <code>src</code> attribute so that it points to the url <code>https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg</code></p>\n<p>Finally, don't forget to give your <code>img</code> element an <code>alt</code> attribute with applicable text.</p>\n",
  },
  {
    section: 'Basic Html And Html5',
    name: 'Link To External Pages With Anchor Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-external-pages-with-anchor-elements',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Create an <code>a</code> element that links to <code>https://www.freecatphotoapp.com</code> and has "cat photos" as its anchor text.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Link To Internal Sections Of A Page With Anchor Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-internal-sections-of-a-page-with-anchor-elements',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Change your external link to an internal link by changing the <code>href</code> attribute to <code>#footer</code> and the text from <code>cat photos</code> to <code>Jump to Bottom</code>.</p>\n<p>Remove the <code>target="_blank"</code> attribute from the anchor tag since this causes the linked document to open in a new window tab.</p>\n<p>Then add an <code>id</code> attribute with a value of <code>footer</code> to the <code>&lt;footer&gt;</code> element at the bottom of the page.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Nest An Anchor Element Within A Paragraph',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/nest-an-anchor-element-within-a-paragraph',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Nest the existing <code>a</code> element within a new <code>p</code> element. Do not create a new anchor tag. The new paragraph should have text that says <code>View more cat photos</code>, where <code>cat photos</code> is a link, and the rest is plain text.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Make Dead Links Using The Hash Symbol',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/make-dead-links-using-the-hash-symbol',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>The current value of the <code>href</code> attribute is a link that points to "<code>https://www.freecatphotoapp.com</code>". Create a dead link.</p>',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Turn An Image Into A Link',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Place the existing image element within an <code>a</code> (<em>anchor</em>) element.</p>\n<p>Once you've done this, hover over your image with your cursor. Your cursor's normal pointer should become the link clicking pointer. The photo is now a link.</p>\n",
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create A Bulleted Unordered List',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Remove the last two <code>p</code> elements and create an unordered list of three things that cats love at the bottom of the page.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create An Ordered List',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-an-ordered-list',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Create an ordered list of the top 3 things cats hate the most.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create A Text Field',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-text-field',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Create an <code>input</code> element of type <code>text</code> below your lists.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Add Placeholder Text To A Text Field',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-placeholder-text-to-a-text-field',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Set the <code>placeholder</code> value of your text <code>input</code> to "cat photo URL".</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create A Form Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-form-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Nest the existing <code>input</code> element inside a <code>form</code> element and assign <code>"https://www.freecatphotoapp.com/submit-cat-photo"</code> to the <code>action</code> attribute of the <code>form</code> element.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Add A Submit Button To A Form',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-a-submit-button-to-a-form',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Add a button as the last element of your <code>form</code> element with a type of <code>submit</code>, and <code>Submit</code> as its text.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Use Html5 To Require A Field',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/use-html5-to-require-a-field',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Make your text <code>input</code> a <code>required</code> field, so that your user can't submit the form without completing this field.</p>\n<p>Then try to submit the form without inputting any text. See how your HTML5 form notifies you that the field is required?</p>\n",
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create A Set Of Radio Buttons',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-radio-buttons',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Add a pair of radio buttons to your form, each nested in its own <code>label</code> element. One should have the option of <code>indoor</code> and the other should have the option of <code>outdoor</code>. Both should share the <code>name</code> attribute of <code>indoor-outdoor</code> to create a radio group.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Create A Set Of Checkboxes',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-checkboxes',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Add to your form a set of three checkboxes. Each checkbox should be nested within its own <code>label</code> element. All three should share the <code>name</code> attribute of <code>personality</code>.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Use The Value Attribute With Radio Buttons And Checkboxes',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/use-the-value-attribute-with-radio-buttons-and-checkboxes',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Give each of the existing <code>radio</code> and <code>checkbox</code> inputs the <code>value</code> attribute. Do not create any new radio or checkbox elements. Use the input label text, in lowercase, as the value for the attribute.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Check Radio Buttons And Checkboxes By Default',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/check-radio-buttons-and-checkboxes-by-default',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Set the first of your radio buttons and the first of your checkboxes to both be checked by default.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Nest Many Elements Within A Single Div Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/nest-many-elements-within-a-single-div-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Nest your "Things cats love" and "Top 3 things cats hate" lists all within a single <code>div</code> element.</p>',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Declare The Doctype Of An Html Document',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/declare-the-doctype-of-an-html-document',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Add a <code>DOCTYPE</code> tag for HTML5 to the top of the blank HTML document in the code editor. Under it, add opening and closing <code>html</code> tags, which wrap around an <code>h1</code> element. The heading can include any text.</p>\n',
  },
  {
    section: 'Basic Html And Html5',
    name: 'Define The Head And Body Of An Html Document',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/define-the-head-and-body-of-an-html-document',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Edit the markup so there's a <code>head</code> and a <code>body</code>. The <code>head</code> element should only include the <code>title</code>, and the <code>body</code> element should only include the <code>h1</code> and <code>p</code>.</p>\n",
  },
  {
    section: 'Basic Css',
    name: 'Change The Color Of Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-the-color-of-text',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Change your <code>h2</code> element's style so that its text color is red.</p>\n",
  },
  {
    section: 'Basic Css',
    name: 'Use Css Selectors To Style Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-css-selectors-to-style-elements',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Delete your <code>h2</code> element's style attribute, and instead create a CSS <code>style</code> block. Add the necessary CSS to turn all <code>h2</code> elements blue.</p>\n",
  },
  {
    section: 'Basic Css',
    name: 'Use A Css Class To Style An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-css-class-to-style-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Inside your <code>style</code> element, change the <code>h2</code> selector to <code>.red-text</code> and update the color's value from <code>blue</code> to <code>red</code>.</p>\n<p>Give your <code>h2</code> element the <code>class</code> attribute with a value of <code>red-text</code>.</p>\n",
  },
  {
    section: 'Basic Css',
    name: 'Style Multiple Elements With A Css Class',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/style-multiple-elements-with-a-css-class',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Classes allow you to use the same CSS styles on multiple HTML elements. You can see this by applying your <code>red-text</code> class to the first <code>p</code> element.</p>\n',
    instructions: '',
  },
  {
    section: 'Basic Css',
    name: 'Change The Font Size Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-the-font-size-of-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Inside the same <code>&lt;style&gt;</code> tag that contains your <code>red-text</code> class, create an entry for <code>p</code> elements and set the <code>font-size</code> to 16 pixels (<code>16px</code>).</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Set The Font Family Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/set-the-font-family-of-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Make all of your <code>p</code> elements use the <code>monospace</code> font.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Import A Google Font',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/import-a-google-font',
    remove: ['ALL_HELPERS'],
    description:
      '</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/css?family=Lobster<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre>',
    instructions:
      '\n<p>Import the <code>Lobster</code> font to your web page. Then, use an element selector to set <code>Lobster</code> as the <code>font-family</code> for your <code>h2</code> element.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Specify How Fonts Should Degrade',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/specify-how-fonts-should-degrade',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>To begin, apply the <code>monospace</code> font to the <code>h2</code> element, so that it now has two fonts - <code>Lobster</code> and <code>monospace</code>.</p>\n<p>In the last challenge, you imported the <code>Lobster</code> font using the <code>link</code> tag. Now comment out that import of the <code>Lobster</code> font (using the HTML comments you learned before) from Google Fonts so that it isn't available anymore. Notice how your <code>h2</code> element degrades to the <code>monospace</code> font.</p>\n<p><strong>Note:</strong> If you have the <code>Lobster</code> font installed on your computer, you won't see the degradation because your browser is able to find the font.</p>\n",
  },
  {
    section: 'Basic Css',
    name: 'Size Your Images',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/size-your-images',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Create a class called <code>smaller-image</code> and use it to resize the image so that it's only 100 pixels wide.</p>\n",
  },
  {
    section: 'Basic Css',
    name: 'Add Borders Around Your Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-borders-around-your-elements',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Create a class called <code>thick-green-border</code>. This class should add a 10px, solid, green border around an HTML element. Apply the class to your cat photo.</p>',
  },
  {
    section: 'Basic Css',
    name: 'Add Rounded Corners With Border Radius',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-rounded-corners-with-border-radius',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>You can specify a <code>border-radius</code> with pixels. Give your cat photo a <code>border-radius</code> of <code>10px</code>.</p>',
  },
  {
    section: 'Basic Css',
    name: 'Make Circular Images With A Border Radius',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/make-circular-images-with-a-border-radius',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Give your cat photo a <code>border-radius</code> of <code>50%</code>.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Give A Background Color To A Div Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/give-a-background-color-to-a-div-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Create a class called <code>silver-background</code> with the <code>background-color</code> of <code>silver</code>. Assign this class to your <code>div</code> element.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Set The Id Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/set-the-id-of-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Give your <code>form</code> element the id <code>cat-photo-form</code>.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Use An Id Attribute To Style An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-an-id-attribute-to-style-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Try giving your form, which now has the <code>id</code> attribute of <code>cat-photo-form</code>, a green background.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Adjust The Padding Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/adjust-the-padding-of-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Change the <code>padding</code> of your blue box to match that of your red box.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Adjust The Margin Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/adjust-the-margin-of-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Change the <code>margin</code> of the blue box to match that of the red box.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Add A Negative Margin To An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-a-negative-margin-to-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Try to set the <code>margin</code> to a negative value like the one for the red box.</p>\n<p>Change the <code>margin</code> of the blue box to <code>-15px</code>, so it fills the entire horizontal width of the yellow box around it.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Add Different Padding To Each Side Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-different-padding-to-each-side-of-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Give the blue box a <code>padding</code> of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Add Different Margins To Each Side Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-different-margins-to-each-side-of-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Give the blue box a <code>margin</code> of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Use Clockwise Notation To Specify The Padding Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-padding-of-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Use Clockwise Notation to give the <code>.blue-box</code> class a <code>padding</code> of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Use Clockwise Notation To Specify The Margin Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-margin-of-an-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Use Clockwise Notation to give the element with the <code>blue-box</code> class a margin of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Use Attribute Selectors To Style Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-attribute-selectors-to-style-elements',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Using the <code>type</code> attribute selector, try to give the checkboxes in CatPhotoApp a top margin of 10px and a bottom margin of 15px.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Understand Absolute Versus Relative Units',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/understand-absolute-versus-relative-units',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Add a <code>padding</code> property to the element with class <code>red-box</code> and set it to <code>1.5em</code>.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Style The Html Body Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/style-the-html-body-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>We can prove that the <code>body</code> element exists here by giving it a <code>background-color</code> of black.</p>',
  },
  {
    section: 'Basic Css',
    name: 'Inherit Styles From The Body Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/inherit-styles-from-the-body-element',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>First, create a <code>h1</code> element with the text <code>Hello World</code></p>\n<p>Then, let's give all elements on your page the color of <code>green</code> by adding <code>color: green;</code> to your <code>body</code> element's style declaration.</p>\n<p>Finally, give your <code>body</code> element the font-family of <code>monospace</code> by adding <code>font-family: monospace;</code> to your <code>body</code> element's style declaration.</p>\n",
  },
  {
    section: 'Basic Css',
    name: 'Prioritize One Style Over Another',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/prioritize-one-style-over-another',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Create a CSS class called <code>pink-text</code> that gives an element the color pink.</p>\n<p>Give your <code>h1</code> element the class of <code>pink-text</code>.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Override Styles In Subsequent Css',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-styles-in-subsequent-css',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Create an additional CSS class called <code>blue-text</code> that gives an element the color blue. Make sure it's below your <code>pink-text</code> class declaration.</p>\n<p>Apply the <code>blue-text</code> class to your <code>h1</code> element in addition to your <code>pink-text</code> class, and let's see which one wins.</p>",
  },
  {
    section: 'Basic Css',
    name: 'Override Class Declarations By Styling Id Attributes',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-class-declarations-by-styling-id-attributes',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Give your <code>h1</code> element the <code>id</code> attribute of <code>orange-text</code>.\n<p>Leave the <code>blue-text</code> and <code>pink-text</code> classes on your <code>h1</code> element.</p>\n<p>Create a CSS declaration for your <code>orange-text</code> id in your <code>style</code> element.</p>',
  },
  {
    section: 'Basic Css',
    name: 'Override Class Declarations With Inline Styles',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-class-declarations-with-inline-styles',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Use an inline style to try to make our <code>h1</code> element white.</p>\n<p>Leave the <code>blue-text</code> and <code>pink-text</code> classes on your <code>h1</code> element.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Override All Other Styles By Using Important',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-all-other-styles-by-using-important',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Let's add the keyword <code>!important</code> to your pink-text element's color declaration to make 100% sure that your <code>h1</code> element will be pink.</p>",
  },
  {
    section: 'Basic Css',
    name: 'Use Hex Code For Specific Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-hex-code-for-specific-colors',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Replace the word <code>black</code> in our <code>body</code> element's background-color with its hex code representation, <code>#000000</code>.</p>\n",
  },
  {
    section: 'Basic Css',
    name: 'Use Hex Code To Mix Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-hex-code-to-mix-colors',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Replace the color words in our <code>style</code> element with their correct hex codes.</p>\n<table class="table table-striped"><tbody><tr><th>Color</th><th>Hex Code</th></tr><tr><td>Dodger Blue</td><td><code>#1E90FF</code></td></tr><tr><td>Green</td><td><code>#00FF00</code></td></tr><tr><td>Orange</td><td><code>#FFA500</code></td></tr><tr><td>Red</td><td><code>#FF0000</code></td></tr></tbody></table>\n',
  },
  {
    section: 'Basic Css',
    name: 'Use Abbreviated Hex Code',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-abbreviated-hex-code',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Go ahead, try using the abbreviated hex codes to color the correct elements.</p>\n<table class="table table-striped"><tbody><tr><th>Color</th><th>Short Hex Code</th></tr><tr><td>Cyan</td><td><code>#0FF</code></td></tr><tr><td>Green</td><td><code>#0F0</code></td></tr><tr><td>Red</td><td><code>#F00</code></td></tr><tr><td>Fuchsia</td><td><code>#F0F</code></td></tr></tbody></table>\n',
  },
  {
    section: 'Basic Css',
    name: 'Use Rgb Values To Color Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-rgb-values-to-color-elements',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>Let's replace the hex code in our <code>body</code> element's background color with the RGB value for black: <code>rgb(0, 0, 0)</code></p>\n",
  },
  {
    section: 'Basic Css',
    name: 'Use Rgb To Mix Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-rgb-to-mix-colors',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Replace the hex codes in our <code>style</code> element with their correct RGB values.</p>\n<table class="table table-striped"><tbody><tr><th>Color</th><th>RGB</th></tr><tr><td>Blue</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Red</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Orchid</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Sienna</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>\n',
  },
  {
    section: 'Basic Css',
    name: 'Use Css Variables To Change Several Elements At Once',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-css-variables-to-change-several-elements-at-once',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>In the <code>penguin</code> class, change the <code>black</code> value to <code>gray</code>, the <code>gray</code> value to <code>white</code>, and the <code>yellow</code> value to <code>orange</code>.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Create A Custom Css Variable',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/create-a-custom-css-variable',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>In the <code>penguin</code> class, create a variable name <code>--penguin-skin</code> and give it a value of <code>gray</code>.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Use A Custom Css Variable',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-custom-css-variable',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Apply the <code>--penguin-skin</code> variable to the <code>background</code> property of the <code>penguin-top</code>, <code>penguin-bottom</code>, <code>right-hand</code> and <code>left-hand</code> classes.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Attach A Fallback Value To A Css Variable',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/attach-a-fallback-value-to-a-css-variable',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>It looks like there is a problem with the variables supplied to the <code>.penguin-top</code> and <code>.penguin-bottom</code> classes. Rather than fix the typo, add a fallback value of <code>black</code> to the <code>background</code> property of the <code>.penguin-top</code> and <code>.penguin-bottom</code> classes.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Improve Compatibility With Browser Fallbacks',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/improve-compatibility-with-browser-fallbacks',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      "\n<p>It looks like a variable is being used to set the background color of the <code>.red-box</code> class. Let's improve our browser compatibility by adding another <code>background</code> declaration right before the existing declaration and set its value to <code>red</code>.</p>\n",
  },
  {
    section: 'Basic Css',
    name: 'Inherit Css Variables',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/inherit-css-variables',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Define a variable named <code>--penguin-belly</code> in the <code>:root</code> selector and give it the value of <code>pink</code>. You can then see that the variable is inherited and that all the child elements which use it get pink backgrounds.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Change A Variable For A Specific Area',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-a-variable-for-a-specific-area',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>Change the value of <code>--penguin-belly</code> to <code>white</code> in the <code>penguin</code> class.</p>\n',
  },
  {
    section: 'Basic Css',
    name: 'Use A Media Query To Change A Variable',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-media-query-to-change-a-variable',
    remove: ['ALL_HELPERS'],
    description: '',
    instructions:
      '\n<p>In the <code>:root</code> selector of the <code>media query</code>, change it so <code>--penguin-size</code> is redefined and given a value of <code>200px</code>. Also, redefine <code>--penguin-skin</code> and give it a value of <code>black</code>. Then resize the preview to see this change in action.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Create Visual Balance Using The Text Align Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-visual-balance-using-the-text-align-property',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>This section of the curriculum focuses on Applied Visual Design. The first group of challenges build on the given card layout to show a number of core principles.</p>\n<p>Text is often a large part of web content. CSS has several options for how to align it with the <code>text-align</code> property.</p>\n<p><code>text-align: justify;</code> spaces the text so that each line has equal width.</p>\n<p><code>text-align: center;</code> centers the text</p>\n<p><code>text-align: right;</code> right-aligns the text</p>\n<p>And <code>text-align: left;</code> (the default) left-aligns the text.</p>\n',
    instructions:
      '\n<p>Align the <code>h4</code> tag\'s text, which says "Google", to the center. Then justify the paragraph tag which contains information about how Google was founded.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Width Of An Element Using The Width Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-width-of-an-element-using-the-width-property',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>You can specify the width of an element using the <code>width</code> property in CSS. Values can be given in relative length units (such as <code>em</code>), absolute length units (such as <code>px</code>), or as a percentage of its containing parent element. Here\'s an example that changes the width of an image to 220px:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">img</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n',
    instructions:
      '\n<p>Add a <code>width</code> property to the entire card and set it to an absolute value of 245px. Use the <code>fullCard</code> class to select the element.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Height Of An Element Using The Height Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-height-of-an-element-using-the-height-property',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>You can specify the height of an element using the <code>height</code> property in CSS, similar to the <code>width</code> property. Here\'s an example that changes the height of an image to 20px:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">img</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n',
    instructions:
      '\n<p>Add a <code>height</code> property to the <code>h4</code> tag and set it to 25px.</p>\n<p><strong>Note:</strong> You may need to be at 100% zoom to pass the test on this challenge.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Strong Tag To Make Text Bold',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-strong-tag-to-make-text-bold',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>To make text bold, you can use the <code>strong</code> tag. This is often used to draw attention to text and symbolize that it is important. With the <code>strong</code> tag, the browser applies the CSS of <code>font-weight: bold;</code> to the element.</p>\n',
    instructions:
      '\n<p>Wrap a <code>strong</code> tag around the text <code>Stanford University</code> inside the <code>p</code> tag (do not include the period).</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The U Tag To Underline Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-u-tag-to-underline-text',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>To underline text, you can use the <code>u</code> tag. This is often used to signify that a section of text is important, or something to remember. With the <code>u</code> tag, the browser applies the CSS of <code>text-decoration: underline;</code> to the element.</p>\n',
    instructions:
      '\n<p>Wrap the <code>u</code> tag only around the text <code>Ph.D. students</code>.</p>\n<p><strong>Note:</strong> Try to avoid using the <code>u</code> tag when it could be confused for a link. Anchor tags also have a default underlined formatting.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Em Tag To Italicize Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-em-tag-to-italicize-text',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>To emphasize text, you can use the <code>em</code> tag. This displays text as italicized, as the browser applies the CSS of <code>font-style: italic;</code> to the element.</p>\n',
    instructions:
      '\n<p>Wrap an <code>em</code> tag around the contents of the paragraph tag to give it emphasis.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The S Tag To Strikethrough Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-s-tag-to-strikethrough-text',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>To strikethrough text, which is when a horizontal line cuts across the characters, you can use the <code>s</code> tag. It shows that a section of text is no longer valid. With the <code>s</code> tag, the browser applies the CSS of <code>text-decoration: line-through;</code> to the element.</p>\n',
    instructions:
      '\n<p>Wrap the <code>s</code> tag around <code>Google</code> inside the <code>h4</code> tag and then add the word <code>Alphabet</code> beside it without the strikethrough formatting.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Create A Horizontal Line Using The Hr Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-horizontal-line-using-the-hr-element',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>You can use the <code>hr</code> tag to add a horizontal line across the width of its containing element. This can be used to define a change in topic or to visually separate groups of content.</p>\n',
    instructions:
      "\n<p>Add an <code>hr</code> tag underneath the <code>h4</code> which contains the card title.</p>\n<p><strong>Note:</strong> In HTML, <code>hr</code> is a self-closing tag, and therefore doesn't need a separate closing tag.</p>\n",
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Background Color Property Of Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-background-color-property-of-text',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>Instead of adjusting your overall background or the color of the text to make the foreground easily readable, you can add a <code>background-color</code> to the element holding the text you want to emphasize. This challenge uses <code>rgba()</code> instead of <code>hex</code> codes or normal <code>rgb()</code>.</p>\n<blockquote>rgba stands for:<br>&nbsp;&nbsp;r = red<br>&nbsp;&nbsp;g = green<br>&nbsp;&nbsp;b = blue<br>&nbsp;&nbsp;a = alpha/level of opacity</blockquote>\n<p>The RGB values can range from 0 to 255. The alpha value can range from 1, which is fully opaque or a solid color, to 0, which is fully transparent or clear. <code>rgba()</code> is great to use in this case, as it allows you to adjust the opacity. This means you don't have to completely block out the background.</p>\n<p>You'll use <code>background-color: rgba(45, 45, 45, 0.1)</code> for this challenge. It produces a dark gray color that is nearly transparent given the low opacity value of 0.1.</p>\n",
    instructions:
      '\n<p>To make the text stand out more, adjust the <code>background-color</code> of the <code>h4</code> element to the given <code>rgba()</code> value.</p>\n<p>Also for the <code>h4</code>, remove the <code>height</code> property and add <code>padding</code> of 10px.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Size Of A Heading Element Versus A Paragraph Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-size-of-a-heading-element-versus-a-paragraph-element',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The font size of heading elements (<code>h1</code> through <code>h6</code>) should generally be larger than the font size of paragraph tags. This makes it easier for the user to visually understand the layout and level of importance of everything on the page. You use the <code>font-size</code> property to adjust the size of the text in an element.</p>\n',
    instructions:
      '\n<p>To make the heading significantly larger than the paragraph, change the <code>font-size</code> of the <code>h4</code> element to 27 pixels.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Add A Box Shadow To A Card Like Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/add-a-box-shadow-to-a-card-like-element',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The <code>box-shadow</code> property applies one or more shadows to an element.</p>\n<p>The <code>box-shadow</code> property takes values for</p>\n<ul>\n  <li><code>offset-x</code> (how far to push the shadow horizontally from the element),</li>\n  <li><code>offset-y</code> (how far to push the shadow vertically from the element),</li>\n  <li><code>blur-radius</code>,</li>\n  <li><code>spread-radius</code> and</li>\n  <li><code>color</code>, in that order.</li>\n</ul>\n<p>The <code>blur-radius</code> and <code>spread-radius</code> values are optional.</p>\n<p>Multiple box-shadows can be created by using commas to separate properties of each <code>box-shadow</code> element.</p>\n<p>Here\'s an example of the CSS to create multiple shadows with some blur, at mostly-transparent black colors:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 10px 20px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.19<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 6px 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.23<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n',
    instructions:
      '\n<p>The element now has an id of <code>thumbnail</code>. With this selector, use the example CSS values above to place a <code>box-shadow</code> on the card.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Decrease The Opacity Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/decrease-the-opacity-of-an-element',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>The <code>opacity</code> property in CSS is used to adjust the opacity, or conversely, the transparency for an item.</p>\n<blockquote>A value of 1 is opaque, which isn't transparent at all.<br>A value of 0.5 is half see-through.<br>A value of 0 is completely transparent.</blockquote>\n<p>The value given will apply to the entire element, whether that's an image with some transparency, or the foreground and background colors for a block of text.</p>\n",
    instructions:
      '\n<p>Set the <code>opacity</code> of the anchor tags to 0.7 using <code>links</code> class to select them.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Text Transform Property To Make Text Uppercase',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-text-transform-property-to-make-text-uppercase',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The <code>text-transform</code> property in CSS is used to change the appearance of text. It\'s a convenient way to make sure text on a webpage appears consistently, without having to change the text content of the actual HTML elements.</p>\n<p>The following table shows how the different <code>text-transform</code>values change the example text "Transform me".</p>\n<table class="table table-striped"><thead><tr><th>Value</th><th>Result</th></tr></thead><tbody><tr><td><code>lowercase</code></td><td>"transform me"</td></tr><tr><td><code>uppercase</code></td><td>"TRANSFORM ME"</td></tr><tr><td><code>capitalize</code></td><td>"Transform Me"</td></tr><tr><td><code>initial</code></td><td>Use the default value</td></tr><tr><td><code>inherit</code></td><td>Use the <code>text-transform</code> value from the parent element</td></tr><tr><td><code>none</code></td><td><strong>Default:</strong> Use the original text</td></tr></tbody></table>\n',
    instructions:
      '\n<p>Transform the text of the <code>h4</code> to be uppercase using the <code>text-transform</code> property.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Set The Font Size For Multiple Heading Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-font-size-for-multiple-heading-elements',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>The <code>font-size</code> property is used to specify how large the text is in a given element. This rule can be used for multiple elements to create visual consistency of text on a page. In this challenge, you'll set the values for all <code>h1</code> through <code>h6</code> tags to balance the heading sizes.</p>\n",
    instructions:
      '\n  <p>In the <code>style</code> tags, set the <code>font-size</code> of the:</p>\n  <ul>\n    <li><code>h1</code> tag to 68px.</li>\n    <li><code>h2</code> tag to 52px.</li>\n    <li><code>h3</code> tag to 40px.</li>\n    <li><code>h4</code> tag to 32px.</li>\n    <li><code>h5</code> tag to 21px.</li>\n    <li><code>h6</code> tag to 14px.</li>\n  </ul>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Set The Font Weight For Multiple Heading Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-font-weight-for-multiple-heading-elements',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>You set the <code>font-size</code> of each heading tag in the last challenge, here you'll adjust the <code>font-weight</code>.</p>\n<p>The <code>font-weight</code> property sets how thick or thin characters are in a section of text.</p>\n",
    instructions:
      '\n<ul><li>Set the <code>font-weight</code> of the <code>h1</code> tag to 800.</li><li>Set the <code>font-weight</code> of the <code>h2</code> tag to 600.</li><li>Set the <code>font-weight</code> of the <code>h3</code> tag to 500.</li><li>Set the <code>font-weight</code> of the <code>h4</code> tag to 400.</li><li>Set the <code>font-weight</code> of the <code>h5</code> tag to 300.</li><li>Set the <code>font-weight</code> of the <code>h6</code> tag to 200.</li></ul>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Set The Font Size Of Paragraph Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-font-size-of-paragraph-text',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The <code>font-size</code> property in CSS is not limited to headings, it can be applied to any element containing text.</p>\n',
    instructions:
      '\n<p>Change the value of the <code>font-size</code> property for the paragraph to 16px to make it more visible.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Set The Line Height Of Paragraphs',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-line-height-of-paragraphs',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>CSS offers the <code>line-height</code> property to change the height of each line in a block of text. As the name suggests, it changes the amount of vertical space that each line of text gets.</p>\n',
    instructions:
      '\n<p>Add a <code>line-height</code> property to the <code>p</code> tag and set it to 25px.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Hover State Of An Anchor Tag',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-hover-state-of-an-anchor-tag',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>This challenge will touch on the usage of pseudo-classes. A pseudo-class is a keyword that can be added to selectors, in order to select a specific state of the element.</p>\n<p>For example, the styling of an anchor tag can be changed for its hover state using the <code>:hover</code> pseudo-class selector. Here\'s the CSS to change the <code>color</code> of the anchor tag to red during its hover state:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">a:hover</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n',
    instructions:
      '\n<p>The code editor has a CSS rule to style all <code>a</code> tags black. Add a rule so that when the user hovers over the <code>a</code> tag, the <code>color</code> is blue.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Change An Elements Relative Position',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/change-an-elements-relative-position',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>CSS treats each HTML element as its own box, which is usually referred to as the <dfn>CSS Box Model</dfn>. Block-level items automatically start on a new line (think headings, paragraphs, and divs) while inline items sit within surrounding content (like images or spans). The default layout of elements in this way is called the <dfn>normal flow</dfn> of a document, but CSS offers the position property to override it.</p>\n<p>When the position of an element is set to <code>relative</code>, it allows you to specify how CSS should move it <em>relative</em> to its current position in the normal flow of the page. It pairs with the CSS offset properties of <code>left</code> or <code>right</code>, and <code>top</code> or <code>bottom</code>. These say how many pixels, percentages, or ems to move the item <em>away</em> from where it is normally positioned. The following example moves the paragraph 10 pixels away from the bottom:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">p</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>Changing an element\'s position to relative does not remove it from the normal flow - other elements around it still behave as if that item were in its default position.</p>\n<p><strong>Note:</strong> Positioning gives you a lot of flexibility and power over the visual layout of a page. It\'s good to remember that no matter the position of elements, the underlying HTML markup should be organized and make sense when read from top to bottom. This is how users with visual impairments (who rely on assistive devices like screen readers) access your content.</p>\n',
    instructions:
      '\n<p>Change the <code>position</code> of the <code>h2</code> to <code>relative</code>, and use a CSS offset to move it 15 pixels away from the <code>top</code> of where it sits in the normal flow. Notice there is no impact on the positions of the surrounding h1 and p elements.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Move A Relatively Positioned Element With Css Offsets',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/move-a-relatively-positioned-element-with-css-offsets',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>The CSS offsets of <code>top</code> or <code>bottom</code>, and <code>left</code> or <code>right</code> tell the browser how far to offset an item relative to where it would sit in the normal flow of the document. You're offsetting an element away from a given spot, which moves the element away from the referenced side (effectively, the opposite direction). As you saw in the last challenge, using the <code>top</code> offset moved the <code>h2</code> downwards. Likewise, using a <code>left</code> offset moves an item to the right.</p>\n",
    instructions:
      '\n<p>Use CSS offsets to move the <code>h2</code> 15 pixels to the right and 10 pixels up.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Lock An Element To Its Parent With Absolute Positioning',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/lock-an-element-to-its-parent-with-absolute-positioning',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The next option for the CSS <code>position</code> property is <code>absolute</code>, which locks the element in place relative to its parent container. Unlike the <code>relative</code> position, this removes the element from the normal flow of the document, so surrounding items ignore it. The CSS offset properties (top or bottom and left or right) are used to adjust the position.</p>\n<p>One nuance with absolute positioning is that it will be locked relative to its closest <em>positioned</em> ancestor. If you forget to add a position rule to the parent item, (this is typically done using <code>position: relative;</code>), the browser will keep looking up the chain and ultimately default to the <code>body</code> tag.</p>\n',
    instructions:
      '\n<p>Lock the <code>#searchbar</code> element to the top-right of its <code>section</code> parent by declaring its <code>position</code> as <code>absolute</code>. Give it <code>top</code> and <code>right</code> offsets of 50 pixels each.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Lock An Element To The Browser Window With Fixed Positioning',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/lock-an-element-to-the-browser-window-with-fixed-positioning',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The next layout scheme that CSS offers is the <code>fixed</code> position, which is a type of absolute positioning that locks an element relative to the browser window. Similar to absolute positioning, it\'s used with the CSS offset properties and also removes the element from the normal flow of the document. Other items no longer "realize" where it is positioned, which may require some layout adjustments elsewhere.</p>\n<p>One key difference between the <code>fixed</code> and <code>absolute</code> positions is that an element with a fixed position won\'t move when the user scrolls.</p>\n',
    instructions:
      '\n<p>The navigation bar in the code is labeled with an id of <code>navbar</code>. Change its <code>position</code> to <code>fixed</code>, and offset it 0 pixels from the <code>top</code> and 0 pixels from the <code>left</code>. After you have added the code, scroll the preview window to see how the navigation stays in place.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Push Elements Left Or Right With The Float Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/push-elements-left-or-right-with-the-float-property',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>The next positioning tool does not actually use <code>position</code>, but sets the <code>float</code> property of an element. Floating elements are removed from the normal flow of a document and pushed to either the <code>left</code> or <code>right</code> of their containing parent element. It's commonly used with the <code>width</code> property to specify how much horizontal space the floated element requires.</p>\n",
    instructions:
      '\n<p>The given markup would work well as a two-column layout, with the <code>section</code> and <code>aside</code> elements next to each other. Give the <code>#left</code> item a <code>float</code> of <code>left</code> and the <code>#right</code> item a <code>float</code> of <code>right</code>.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Change The Position Of Overlapping Elements With The Z Index Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/change-the-position-of-overlapping-elements-with-the-z-index-property',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>When elements are positioned to overlap (i.e. using <code>position: absolute | relative | fixed | sticky</code>), the element coming later in the HTML markup will, by default, appear on the top of the other elements. However, the <code>z-index</code> property can specify the order of how elements are stacked on top of one another. It must be an integer (i.e. a whole number and not a decimal), and higher values for the <code>z-index</code> property of an element move it higher in the stack than those with lower values.</p>\n',
    instructions:
      '\n<p>Add a <code>z-index</code> property to the element with the class name of <code>first</code> (the red rectangle) and set it to a value of 2 so it covers the other element (blue rectangle).</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Center An Element Horizontally Using The Margin Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/center-an-element-horizontally-using-the-margin-property',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Another positioning technique is to center a block element horizontally. One way to do this is to set its <code>margin</code> to a value of auto.</p>\n<p>This method works for images, too. Images are inline elements by default, but can be changed to block elements when you set the <code>display</code> property to <code>block</code>.</p>\n',
    instructions:
      '\n<p>Center the <code>div</code> on the page by adding a <code>margin</code> property with a value of <code>auto</code>.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Learn About Complementary Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-about-complementary-colors',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Color theory and its impact on design is a deep topic and only the basics are covered in the following challenges. On a website, color can draw attention to content, evoke emotions, or create visual harmony. Using different combinations of colors can really change the look of a website, and a lot of thought can go into picking a color palette that works with your content.</p>\n<p>The color wheel is a useful tool to visualize how colors relate to each other - it\'s a circle where similar hues are neighbors and different hues are farther apart. When two colors are opposite each other on the wheel, they are called complementary colors. They have the characteristic that if they are combined, they "cancel" each other out and create a gray color. However, when placed side-by-side, these colors appear more vibrant and produce a strong visual contrast.</p>\n<p>Some examples of complementary colors with their hex codes are:</p>\n<blockquote>red (#FF0000) and cyan (#00FFFF)<br>green (#00FF00) and magenta (#FF00FF)<br>blue (#0000FF) and yellow (#FFFF00)</blockquote>\n<p>This is different than the outdated RYB color model that many of us were taught in school, which has different primary and complementary colors. Modern color theory uses the additive RGB model (like on a computer screen) and the subtractive CMY(K) model (like in printing). Read <a href="https://en.wikipedia.org/wiki/Color_model">here</a> for more information on this complex subject.</p>\n<p>There are many color picking tools available online that have an option to find the complement of a color.</p>\n<p><strong>Note:</strong> Using color can be a powerful way to add visual interest to a page. However, color alone should not be used as the only way to convey important information because users with visual impairments may not understand that content. This issue will be covered in more detail in the Applied Accessibility challenges.</p>\n',
    instructions:
      '\n<p>Change the <code>background-color</code> property of the <code>blue</code> and <code>yellow</code> classes to their respective colors. Notice how the colors look different next to each other than they do compared against the white background.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Learn About Tertiary Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-about-tertiary-colors',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Computer monitors and device screens create different colors by combining amounts of red, green, and blue light. This is known as the RGB additive color model in modern color theory. Red (R), green (G), and blue (B) are called primary colors. Mixing two primary colors creates the secondary colors cyan (G + B), magenta (R + B) and yellow (R + G). You saw these colors in the Complementary Colors challenge. These secondary colors happen to be the complement to the primary color not used in their creation, and are opposite to that primary color on the color wheel. For example, magenta is made with red and blue, and is the complement to green.</p>\n<p>Tertiary colors are the result of combining a primary color with one of its secondary color neighbors. For example, within the RGB color model, red (primary) and yellow (secondary) make orange (tertiary). This adds six more colors to a simple color wheel for a total of twelve.</p>\n<p>There are various methods of selecting different colors that result in a harmonious combination in design. One example that can use tertiary colors is called the split-complementary color scheme. This scheme starts with a base color, then pairs it with the two colors that are adjacent to its complement. The three colors provide strong visual contrast in a design, but are more subtle than using two complementary colors.</p>\n<p>Here are three colors created using the split-complement scheme:</p>\n<table class="table table-striped"><thead><tr><th>Color</th><th>Hex Code</th></tr></thead><thead></thead><tbody><tr><td>orange</td><td>#FF7F00</td></tr><tr><td>cyan</td><td>#00FFFF</td></tr><tr><td>raspberry</td><td>#FF007F</td></tr></tbody></table>\n',
    instructions:
      '\n<p>Change the <code>background-color</code> property of the <code>orange</code>, <code>cyan</code>, and <code>raspberry</code> classes to their respective colors. Make sure to use the hex codes and not the color names.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Color Of Various Elements To Complementary Colors',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-color-of-various-elements-to-complementary-colors',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>The Complementary Colors challenge showed that opposite colors on the color wheel can make each other appear more vibrant when placed side-by-side. However, the strong visual contrast can be jarring if it's overused on a website, and can sometimes make text harder to read if it's placed on a complementary-colored background. In practice, one of the colors is usually dominant and the complement is used to bring visual attention to certain content on the page.</p>\n",
    instructions:
      '\n<p>This page will use a shade of teal (<code>#09A7A1</code>) as the dominant color, and its orange (<code>#FF790E</code>) complement to visually highlight the sign-up buttons. Change the <code>background-color</code> of both the <code>header</code> and <code>footer</code> from black to the teal color. Then change the <code>h2</code> text <code>color</code> to teal as well. Finally, change the <code>background-color</code> of the <code>button</code> to the orange color.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Hue Of A Color',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-hue-of-a-color',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Colors have several characteristics including hue, saturation, and lightness. CSS3 introduced the <code>hsl()</code> property as an alternative way to pick a color by directly stating these characteristics.</p>\n<p><strong>Hue</strong> is what people generally think of as \'color\'. If you picture a spectrum of colors starting with red on the left, moving through green in the middle, and blue on right, the hue is where a color fits along this line. In <code>hsl()</code>, hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between 0 and 360.</p>\n<p><strong>Saturation</strong> is the amount of gray in a color. A fully saturated color has no gray in it, and a minimally saturated color is almost completely gray. This is given as a percentage with 100% being fully saturated.</p>\n<p><strong>Lightness</strong> is the amount of white or black in a color. A percentage is given ranging from 0% (black) to 100% (white), where 50% is the normal color.</p>\n<p>Here are a few examples of using <code>hsl()</code> with fully-saturated, normal lightness colors:</p>\n<table class="table table-striped"><thead><tr><th>Color</th><th>HSL</th></tr></thead><tbody><tr><td>red</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>yellow</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>green</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>cyan</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>blue</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>magenta</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>\n',
    instructions:
      '\n<p>Change the <code>background-color</code> of each <code>div</code> element based on the class names (<code>green</code>, <code>cyan</code>, or <code>blue</code>) using <code>hsl()</code>. All three should have full saturation and normal lightness.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Adjust The Tone Of A Color',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-tone-of-a-color',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>The <code>hsl()</code> option in CSS also makes it easy to adjust the tone of a color. Mixing white with a pure hue creates a tint of that color, and adding black will make a shade. Alternatively, a tone is produced by adding gray or by both tinting and shading. Recall that the 's' and 'l' of <code>hsl()</code> stand for saturation and lightness, respectively. The saturation percent changes the amount of gray and the lightness percent determines how much white or black is in the color. This is useful when you have a base hue you like, but need different variations of it.</p>\n",
    instructions:
      '\n<p>All elements have a default <code>background-color</code> of <code>transparent</code>. Our <code>nav</code> element currently appears to have a <code>cyan</code> background, because the element behind it has a <code>background-color</code> set to <code>cyan</code>. Add a <code>background-color</code> to the <code>nav</code> element so it uses the same <code>cyan</code> hue, but has <code>80%</code> saturation and <code>25%</code> lightness values to change its tone and shade.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Create A Gradual Css Linear Gradient',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-gradual-css-linear-gradient',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Applying a color on HTML elements is not limited to one flat hue. CSS provides the ability to use color transitions, otherwise known as gradients, on elements. This is accessed through the <code>background</code> property\'s <code>linear-gradient()</code> function. Here is the general syntax:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>gradient_direction<span class="token punctuation">,</span> color 1<span class="token punctuation">,</span> color 2<span class="token punctuation">,</span> color 3<span class="token punctuation">,</span> ...<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>The first argument specifies the direction from which color transition starts - it can be stated as a degree, where <code>90deg</code> makes a horizontal gradient (from left to right) and <code>45deg</code> makes a diagonal gradient (from bottom left to top right). The following arguments specify the order of colors used in the gradient.</p>\n<p>Example:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span> red<span class="token punctuation">,</span> yellow<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>204<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n',
    instructions:
      "\n<p>Use a <code>linear-gradient()</code> for the <code>div</code> element's <code>background</code>, and set it from a direction of 35 degrees to change the color from <code>#CCFFFF</code> to <code>#FFCCCC</code>.</p>\n",
  },
  {
    section: 'Applied Visual Design',
    name: 'Use A Css Linear Gradient To Create A Striped Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-a-css-linear-gradient-to-create-a-striped-element',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The <code>repeating-linear-gradient()</code> function is very similar to <code>linear-gradient()</code> with the major difference that it repeats the specified gradient pattern. <code>repeating-linear-gradient()</code> accepts a variety of values, but for simplicity, you\'ll work with an angle value and color stop values in this challenge.</p>\n<p>The angle value is the direction of the gradient. Color stops are like width values that mark where a transition takes place, and are given with a percentage or a number of pixels.</p>\n<p>In the example demonstrated in the code editor, the gradient starts with the color <code>yellow</code> at 0 pixels which blends into the second color <code>blue</code> at 40 pixels away from the start. Since the next color stop is also at 40 pixels, the gradient immediately changes to the third color <code>green</code>, which itself blends into the fourth color value <code>red</code> as that is 80 pixels away from the beginning of the gradient.</p>\n<p>For this example, it helps to think about the color stops as pairs where every two colors blend together.</p>\n<pre class="language-css" tabindex="0"><code class="language-css">0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px\n</code></pre>\n<p>If every two color stop values are the same color, the blending isn\'t noticeable because it\'s between the same color, followed by a hard transition to the next color, so you end up with stripes.</p>\n',
    instructions:
      '\n<p>Make stripes by changing the <code>repeating-linear-gradient()</code> to use a gradient angle of <code>45deg</code>, then set the first two color stops to <code>yellow</code>, and finally the second two color stops to <code>black</code>.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Create Texture By Adding A Subtle Pattern As A Background Image',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-texture-by-adding-a-subtle-pattern-as-a-background-image',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>One way to add texture and interest to a background and have it stand out more is to add a subtle pattern. The key is balance, as you don't want the background to stand out too much, and take away from the foreground. The <code>background</code> property supports the <code>url()</code> function in order to link to an image of the chosen texture or pattern. The link address is wrapped in quotes inside the parentheses.</p>\n",
    instructions:
      '\n<p>Using the url of <code>https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png</code>, set the <code>background</code> of the whole page with the <code>body</code> selector.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Css Transform Scale Property To Change The Size Of An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-scale-property-to-change-the-size-of-an-element',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>To change the scale of an element, CSS has the <code>transform</code> property, along with its <code>scale()</code> function. The following code example doubles the size of all the paragraph elements on the page:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">p</span> <span class="token punctuation">{</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n',
    instructions:
      '\n<p>Increase the size of the element with the id of <code>ball2</code> to 1.5 times its original size.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Css Transform Scale Property To Scale An Element On Hover',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-scale-property-to-scale-an-element-on-hover',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The <code>transform</code> property has a variety of functions that let you scale, move, rotate, skew, etc., your elements. When used with pseudo-classes such as <code>:hover</code> that specify a certain state of an element, the <code>transform</code> property can easily add interactivity to your elements.</p>\n<p>Here\'s an example to scale the paragraph elements to 2.1 times their original size when a user hovers over them:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">p:hover</span> <span class="token punctuation">{</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2.1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><strong>Note:</strong> Applying a transform to a <code>div</code> element will also affect any child elements contained in the div.</p>\n',
    instructions:
      '\n<p>Add a CSS rule for the <code>hover</code> state of the <code>div</code> and use the <code>transform</code> property to scale the <code>div</code> element to 1.1 times its original size when a user hovers over it.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Css Transform Property Skewx To Skew An Element Along The X Axis',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The next function of the <code>transform</code> property is <code>skewX()</code>, which skews the selected element along its X (horizontal) axis by a given degree.</p>\n<p>The following code skews the paragraph element by -32 degrees along the X-axis.</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">p</span> <span class="token punctuation">{</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewX</span><span class="token punctuation">(</span>-32deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n',
    instructions:
      '\n<p>Skew the element with the id of <code>bottom</code> by 24 degrees along the X-axis by using the <code>transform</code> property.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Use The Css Transform Property Skewy To Skew An Element Along The Y Axis',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Given that the <code>skewX()</code> function skews the selected element along the X-axis by a given degree, it is no surprise that the <code>skewY()</code> property skews an element along the Y (vertical) axis.</p>\n',
    instructions:
      '\n<p>Skew the element with the id of <code>top</code> -10 degrees along the Y-axis by using the <code>transform</code> property.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Create A Graphic Using Css',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-graphic-using-css',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>By manipulating different selectors and properties, you can make interesting shapes. One of the easier ones to try is a crescent moon shape. For this challenge you need to work with the <code>box-shadow</code> property that sets the shadow of an element, along with the <code>border-radius</code> property that controls the roundness of the element's corners.</p>\n<p>You will create a round, transparent object with a crisp shadow that is slightly offset to the side - the shadow is actually going to be the moon shape you see.</p>\n<p>In order to create a round object, the <code>border-radius</code> property should be set to a value of 50%.</p>\n<p>You may recall from an earlier challenge that the <code>box-shadow</code> property takes values for <code>offset-x</code>, <code>offset-y</code>, <code>blur-radius</code>, <code>spread-radius</code> and a color value in that order. The <code>blur-radius</code> and <code>spread-radius</code> values are optional.</p>\n",
    instructions:
      '\n<p>Manipulate the square element in the editor to create the moon shape. First, change the <code>background-color</code> to <code>transparent</code>, then set the <code>border-radius</code> property to 50% to make the circular shape. Finally, change the <code>box-shadow</code> property to set the <code>offset-x</code> to 25px, the <code>offset-y</code> to 10px, <code>blur-radius</code> to 0, <code>spread-radius</code> to 0, and color to <code>blue</code>.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Create A More Complex Shape Using Css And Html',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-more-complex-shape-using-css-and-html',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>One of the most popular shapes in the world is the heart shape, and in this challenge you\'ll create one using pure CSS. But first, you need to understand the <code>::before</code> and <code>::after</code> pseudo-elements. <code>::before</code> creates a pseudo-element that is the first child of the selected element; <code>::after</code> creates a pseudo-element that is the last child of the selected element. In the following example, a <code>::before</code> pseudo-element is used to add a rectangle to an element with the class <code>heart</code>:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.heart::before</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>For the <code>::before</code> and <code>::after</code> pseudo-elements to function properly, they must have a defined <code>content</code> property. This property is usually used to add things like a photo or text to the selected element. When the <code>::before</code> and <code>::after</code> pseudo-elements are used to make shapes, the <code>content</code> property is still required, but it\'s set to an empty string. In the above example, the element with the class of <code>heart</code> has a <code>::before</code> pseudo-element that produces a yellow rectangle with height and width of <code>50px</code> and <code>70px</code>, respectively. This rectangle has round corners due to its 25% <code>border-radius</code> and is positioned absolutely at <code>5px</code> from the left and <code>50px</code> above the top of the element.</p>\n',
    instructions:
      '\n<p>Transform the element on the screen to a heart. In the <code>heart::after</code> selector, change the <code>background-color</code> to <code>pink</code> and the <code>border-radius</code> to 50%.</p>\n<p>Next, target the element with the class <code>heart</code> (just <code>heart</code>) and fill in the <code>transform</code> property. Use the <code>rotate()</code> function with -45 degrees.</p>\n<p>Finally, in the <code>heart::before</code> selector, set its <code>content</code> property to an empty string.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Learn How The Css Keyframes And Animation Properties Work',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-how-the-css-keyframes-and-animation-properties-work',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>To animate an element, you need to know about the animation properties and the <code>@keyframes</code> rule. The animation properties control how the animation should behave and the <code>@keyframes</code> rule controls what happens during that animation. There are eight animation properties in total. This challenge will keep it simple and cover the two most important ones first:</p>\n<p><code>animation-name</code> sets the name of the animation, which is later used by <code>@keyframes</code> to tell CSS which rules go with which animations.</p>\n<p><code>animation-duration</code> sets the length of time for the animation.</p>\n<p><code>@keyframes</code> is how to specify exactly what happens within the animation over the duration. This is done by giving CSS properties for specific "frames" during the animation, with percentages ranging from 0% to 100%. If you compare this to a movie, the CSS properties for 0% is how the element displays in the opening scene. The CSS properties for 100% is how the element appears at the end, right before the credits roll. Then CSS applies the magic to transition the element over the given duration to act out the scene. Here\'s an example to illustrate the usage of <code>@keyframes</code> and the animation properties:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">#anim</span> <span class="token punctuation">{</span>\n  <span class="token property">animation-name</span><span class="token punctuation">:</span> colorful<span class="token punctuation">;</span>\n  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@keyframes</span> colorful</span> <span class="token punctuation">{</span>\n  <span class="token selector">0%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">100%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>For the element with the <code>anim</code> id, the code snippet above sets the <code>animation-name</code> to <code>colorful</code> and sets the <code>animation-duration</code> to 3 seconds. Then the <code>@keyframes</code> rule links to the animation properties with the name <code>colorful</code>. It sets the color to blue at the beginning of the animation (0%) which will transition to yellow by the end of the animation (100%). You aren\'t limited to only beginning-end transitions, you can set properties for the element for any percentage between 0% and 100%.</p>\n',
    instructions:
      '\n<p>Create an animation for the element with the id <code>rect</code>, by setting the <code>animation-name</code> to <code>rainbow</code> and the <code>animation-duration</code> to 4 seconds. Next, declare a <code>@keyframes</code> rule, and set the <code>background-color</code> at the beginning of the animation (<code>0%</code>) to blue, the middle of the animation (<code>50%</code>) to green, and the end of the animation (<code>100%</code>) to yellow.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Use Css Animation To Change The Hover State Of A Button',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-css-animation-to-change-the-hover-state-of-a-button',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>You can use CSS <code>@keyframes</code> to change the color of a button in its hover state.</p>\n<p>Here\'s an example of changing the width of an image on hover:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">img</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">img:hover</span> <span class="token punctuation">{</span>\n    <span class="token property">animation-name</span><span class="token punctuation">:</span> width<span class="token punctuation">;</span>\n    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 500ms<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token atrule"><span class="token rule">@keyframes</span> width</span> <span class="token punctuation">{</span>\n    <span class="token selector">100%</span> <span class="token punctuation">{</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.freecodecamp.org/curriculum/applied-visual-design/google-logo.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Google<span class="token punctuation">\'</span>s Logo<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre>\n',
    instructions:
      '\n<p>Note that <code>ms</code> stands for milliseconds, where 1000ms is equal to 1s.</p>\n<p>Use CSS <code>@keyframes</code> to change the <code>background-color</code> of the <code>button</code> element so it becomes <code>#4791d0</code> when a user hovers over it. The <code>@keyframes</code> rule should only have an entry for <code>100%</code>.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Modify Fill Mode Of An Animation',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/modify-fill-mode-of-an-animation',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>That\'s great, but it doesn\'t work right yet. Notice how the animation resets after <code>500ms</code> has passed, causing the button to revert back to the original color. You want the button to stay highlighted.</p>\n<p>This can be done by setting the <code>animation-fill-mode</code> property to <code>forwards</code>. The <code>animation-fill-mode</code> specifies the style applied to an element when the animation has finished. You can set it like so:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>\n</code></pre>\n',
    instructions:
      '\n<p>Set the <code>animation-fill-mode</code> property of <code>button:hover</code> to <code>forwards</code> so the button stays highlighted when a user hovers over it.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Create Movement Using Css Animation',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-movement-using-css-animation',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>When elements have a specified <code>position</code>, such as <code>fixed</code> or <code>relative</code>, the CSS offset properties <code>right</code>, <code>left</code>, <code>top</code>, and <code>bottom</code> can be used in animation rules to create movement.</p>\n<p>As shown in the example below, you can push the item downwards then upwards by setting the <code>top</code> property of the <code>50%</code> keyframe to 50px, but having it set to 0px for the first (<code>0%</code>) and the last (<code>100%</code>) keyframe.</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token atrule"><span class="token rule">@keyframes</span> rainbow</span> <span class="token punctuation">{</span>\n  <span class="token selector">0%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">50%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">100%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n',
    instructions:
      "\n<p>Add a horizontal motion to the <code>div</code> animation. Using the <code>left</code> offset property, add to the <code>@keyframes</code> rule so rainbow starts at 0 pixels at <code>0%</code>, moves to 25 pixels at <code>50%</code>, and ends at -25 pixels at <code>100%</code>. Don't replace the <code>top</code> property in the editor - the animation should have both vertical and horizontal motion.</p>\n",
  },
  {
    section: 'Applied Visual Design',
    name: 'Create Visual Direction By Fading An Element From Left To Right',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-visual-direction-by-fading-an-element-from-left-to-right',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>For this challenge, you'll change the <code>opacity</code> of an animated element so it gradually fades as it reaches the right side of the screen.</p>\n<p>In the displayed animation, the round element with the gradient background moves to the right by the 50% mark of the animation per the <code>@keyframes</code> rule.</p>\n",
    instructions:
      '\n<p>Target the element with the id of <code>ball</code> and add the <code>opacity</code> property set to 0.1 at <code>50%</code>, so the element fades as it moves to the right.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Animate Elements Continually Using An Infinite Animation Count',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/animate-elements-continually-using-an-infinite-animation-count',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The previous challenges covered how to use some of the animation properties and the <code>@keyframes</code> rule. Another animation property is the <code>animation-iteration-count</code>, which allows you to control how many times you would like to loop through the animation. Here\'s an example:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>\n</code></pre>\n<p>In this case the animation will stop after running 3 times, but it\'s possible to make the animation run continuously by setting that value to <code>infinite</code>.</p>\n',
    instructions:
      '\n<p>To keep the ball bouncing on the right on a continuous loop, change the <code>animation-iteration-count</code> property to <code>infinite</code>.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Make A Css Heartbeat Using An Infinite Animation Count',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/make-a-css-heartbeat-using-an-infinite-animation-count',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>Here's one more continuous animation example with the <code>animation-iteration-count</code> property that uses the heart you designed in a previous challenge.</p>\n<p>The one-second long heartbeat animation consists of two animated pieces. The <code>heart</code> elements (including the <code>:before</code> and <code>:after</code> pieces) are animated to change size using the <code>transform</code> property, and the background <code>div</code> is animated to change its color using the <code>background</code> property.</p>\n",
    instructions:
      '\n<p>Keep the heart beating by adding the <code>animation-iteration-count</code> property for both the <code>back</code> class and the <code>heart</code> class and setting the value to <code>infinite</code>. The <code>heart:before</code> and <code>heart:after</code> selectors do not need any animation properties.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Animate Elements At Variable Rates',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/animate-elements-at-variable-rates',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>There are a variety of ways to alter the animation rates of similarly animated elements. So far, this has been achieved by applying an <code>animation-iteration-count</code> property and setting <code>@keyframes</code> rules.</p>\n<p>To illustrate, the animation on the right consists of two stars that each decrease in size and opacity at the 20% mark in the <code>@keyframes</code> rule, which creates the twinkle animation. You can change the <code>@keyframes</code> rule for one of the elements so the stars twinkle at different rates.</p>\n',
    instructions:
      '\n<p>Alter the animation rate for the element with the class name of <code>star-1</code> by changing its <code>@keyframes</code> rule to 50%.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Animate Multiple Elements At Variable Rates',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/animate-multiple-elements-at-variable-rates',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>In the previous challenge, you changed the animation rates for two similarly animated elements by altering their <code>@keyframes</code> rules. You can achieve the same goal by manipulating the <code>animation-duration</code> of multiple elements.</p>\n<p>In the animation running in the code editor, there are three stars in the sky that twinkle at the same rate on a continuous loop. To make them twinkle at different rates, you can set the <code>animation-duration</code> property to different values for each element.</p>\n',
    instructions:
      '\n<p>Set the <code>animation-duration</code> of the elements with the classes <code>star-1</code>, <code>star-2</code>, and <code>star-3</code> to 1s, 0.9s, and 1.1s, respectively.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Change Animation Timing With Keywords',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/change-animation-timing-with-keywords',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>In CSS animations, the <code>animation-timing-function</code> property controls how quickly an animated element changes over the duration of the animation. If the animation is a car moving from point A to point B in a given time (your <code>animation-duration</code>), the <code>animation-timing-function</code> says how the car accelerates and decelerates over the course of the drive.</p>\n<p>There are a number of predefined keywords available for popular options. For example, the default value is <code>ease</code>, which starts slow, speeds up in the middle, and then slows down again in the end. Other options include <code>ease-out</code>, which is quick in the beginning then slows down, <code>ease-in</code>, which is slow in the beginning, then speeds up at the end, or <code>linear</code>, which applies a constant animation speed throughout.</p>\n',
    instructions:
      '\n<p>For the elements with id of <code>ball1</code> and <code>ball2</code>, add an <code>animation-timing-function</code> property to each, and set <code>#ball1</code> to <code>linear</code>, and <code>#ball2</code> to <code>ease-out</code>. Notice the difference between how the elements move during the animation but end together, since they share the same <code>animation-duration</code> of 2 seconds.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Learn How Bezier Curves Work',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-how-bezier-curves-work',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The last challenge introduced the <code>animation-timing-function</code> property and a few keywords that change the speed of an animation over its duration. CSS offers an option other than keywords that provides even finer control over how the animation plays out, through the use of Bezier curves.</p>\n<p>In CSS animations, Bezier curves are used with the <code>cubic-bezier</code> function. The shape of the curve represents how the animation plays out. The curve lives on a 1 by 1 coordinate system. The X-axis of this coordinate system is the duration of the animation (think of it as a time scale), and the Y-axis is the change in the animation.</p>\n<p>The <code>cubic-bezier</code> function consists of four main points that sit on this 1 by 1 grid: <code>p0</code>, <code>p1</code>, <code>p2</code>, and <code>p3</code>. <code>p0</code> and <code>p3</code> are set for you - they are the beginning and end points which are always located respectively at the origin (0, 0) and (1, 1). You set the x and y values for the other two points, and where you place them in the grid dictates the shape of the curve for the animation to follow. This is done in CSS by declaring the x and y values of the <code>p1</code> and <code>p2</code> "anchor" points in the form: <code>(x1, y1, x2, y2)</code>. Pulling it all together, here\'s an example of a Bezier curve in CSS code:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.25<span class="token punctuation">,</span> 0.25<span class="token punctuation">,</span> 0.75<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>In the example above, the x and y values are equivalent for each point (x1 = 0.25 = y1 and x2 = 0.75 = y2), which if you remember from geometry class, results in a line that extends from the origin to point (1, 1). This animation is a linear change of an element during the length of an animation, and is the same as using the <code>linear</code> keyword. In other words, it changes at a constant speed.</p>\n',
    instructions:
      '\n<p>For the element with the id of <code>ball1</code>, change the value of the <code>animation-timing-function</code> property from <code>linear</code> to its equivalent <code>cubic-bezier</code> function value. Use the point values given in the example above.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Use A Bezier Curve To Move A Graphic',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-a-bezier-curve-to-move-a-graphic',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>A previous challenge discussed the <code>ease-out</code> keyword that describes an animation change that speeds up first and then slows down at the end of the animation. On the right, the difference between the <code>ease-out</code> keyword (for the blue element) and <code>linear</code> keyword (for the red element) is demonstrated. Similar animation progressions to the <code>ease-out</code> keyword can be achieved by using a custom cubic Bezier curve function.</p>\n<p>In general, changing the <code>p1</code> and <code>p2</code> anchor points drives the creation of different Bezier curves, which controls how the animation progresses through time. Here\'s an example of a Bezier curve using values to mimic the ease-out style:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.58<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>Remember that all <code>cubic-bezier</code> functions start with <code>p0</code> at (0, 0) and end with <code>p3</code> at (1, 1). In this example, the curve moves faster through the Y-axis (starts at 0, goes to <code>p1</code> y value of 0, then goes to <code>p2</code> y value of 1) than it moves through the X-axis (0 to start, then 0 for <code>p1</code>, up to 0.58 for <code>p2</code>). As a result, the change in the animated element progresses faster than the time of the animation for that segment. Towards the end of the curve, the relationship between the change in x and y values reverses - the y value moves from 1 to 1 (no change), and the x values move from 0.58 to 1, making the animation changes progress slower compared to the animation duration.</p>\n',
    instructions:
      '\n<p>To see the effect of this Bezier curve in action, change the <code>animation-timing-function</code> of the element with id of <code>red</code> to a <code>cubic-bezier</code> function with x1, y1, x2, y2 values set respectively to 0, 0, 0.58, 1. This will make both elements progress through the animation similarly.</p>\n',
  },
  {
    section: 'Applied Visual Design',
    name: 'Make Motion More Natural Using A Bezier Curve',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/make-motion-more-natural-using-a-bezier-curve',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>This challenge animates an element to replicate the movement of a ball being juggled. Prior challenges covered the <code>linear</code> and <code>ease-out</code> cubic Bezier curves, however neither depicts the juggling movement accurately. You need to customize a Bezier curve for this.</p>\n<p>The <code>animation-timing-function</code> automatically loops at every keyframe when the <code>animation-iteration-count</code> is set to infinite. Since there is a keyframe rule set in the middle of the animation duration (at <code>50%</code>), it results in two identical animation progressions at the upward and downward movement of the ball.</p>\n<p>The following cubic Bezier curve simulates a juggling movement:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.3<span class="token punctuation">,</span> 0.4<span class="token punctuation">,</span> 0.5<span class="token punctuation">,</span> 1.6<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>Notice that the value of y2 is larger than 1. Although the cubic Bezier curve is mapped on a 1 by 1 coordinate system, and it can only accept x values from 0 to 1, the y value can be set to numbers larger than one. This results in a bouncing movement that is ideal for simulating the juggling ball.</p>\n',
    instructions:
      '\n<p>Change value of the <code>animation-timing-function</code> of the element with the id of <code>green</code> to a <code>cubic-bezier</code> function with x1, y1, x2, y2 values set respectively to 0.311, 0.441, 0.444, 1.649.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Add A Text Alternative To Images For Visually Impaired Accessibility',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired-accessibility',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>You\'ve likely seen an <code>alt</code> attribute on an <code>img</code> tag in other challenges. <code>alt</code> text describes the image\'s content and provides a text-alternative for it. An <code>alt</code> attribute helps in cases where the image fails to load or can\'t be seen by a user. Search engines also use it to understand what an image contains to include it in search results. Here\'s an example:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>importantLogo.jpeg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Company logo<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n<p>People with visual impairments rely on screen readers to convert web content to an audio interface. They won\'t get information if it\'s only presented visually. For images, screen readers can access the <code>alt</code> attribute and read its contents to deliver key information.</p>\n<p>Good <code>alt</code> text provides the reader a brief description of the image. You should always include an <code>alt</code> attribute on your image. Per HTML5 specification, this is now considered mandatory.</p>\n',
    instructions:
      "\n<p>Camper Cat happens to be both a coding ninja and an actual ninja, who is building a website to share his knowledge. The profile picture he wants to use shows his skills and should be appreciated by all site visitors. Add an <code>alt</code> attribute in the <code>img</code> tag, that explains Camper Cat is doing karate. (The image <code>src</code> doesn't link to an actual file, so you should see the <code>alt</code> text in the display.)</p>\n",
  },
  {
    section: 'Applied Accessibility',
    name: 'Know When Alt Text Should Be Left Blank',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/know-when-alt-text-should-be-left-blank',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>In the last challenge, you learned that including an <code>alt</code> attribute when using <code>img</code> tags is mandatory. However, sometimes images are grouped with a caption already describing them, or are used for decoration only. In these cases, <code>alt</code> text may seem redundant or unnecessary.</p>\n<p>When an image is already explained with text content or does not add meaning to a page, the <code>img</code> still needs an <code>alt</code> attribute, but it can be set to an empty string. Here\'s an example:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visualDecoration.jpeg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n<p>Background images usually fall under the \'decorative\' label as well. However, they are typically applied with CSS rules, and therefore not part of the markup screen readers process.</p>\n<p><strong>Note:</strong> For images with a caption, you may still want to include <code>alt</code> text since it helps search engines catalog the image\'s content.</p>\n',
    instructions:
      "\n<p>Camper Cat has coded a skeleton page for the blog part of his website. He's planning to add a visual break between his two articles with a decorative image of a samurai sword. Add an <code>alt</code> attribute to the <code>img</code> tag and set it to an empty string. (Note that the image <code>src</code> doesn't link to an actual file - don't worry that there are no swords showing in the display.)</p>\n",
  },
  {
    section: 'Applied Accessibility',
    name: 'Use Headings To Show Hierarchical Relationships Of Content',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-headings-to-show-hierarchical-relationships-of-content',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>Headings (<code>h1</code> through <code>h6</code> elements) are workhorse tags that help provide structure and labeling to your content. Screen readers can be set to read only the headings on a page so the user gets a summary. This means it is important for the heading tags in your markup to have semantic meaning and relate to each other, not be picked merely for their size values.</p>\n<p><em>Semantic meaning</em> means that the tag you use around content indicates the type of information it contains.</p>\n<p>If you were writing a paper with an introduction, a body, and a conclusion, it wouldn't make much sense to put the conclusion as a subsection of the body in your outline. It should be its own section. Similarly, the heading tags in a webpage need to go in order and indicate the hierarchical relationships of your content.</p>\n<p>Headings with equal (or higher) rank start new implied sections, headings with lower rank start subsections of the previous one.</p>\n<p>As an example, a page with an <code>h2</code> element followed by several subsections labeled with <code>h4</code> elements would confuse a screen reader user. With six choices, it's tempting to use a tag because it looks better in a browser, but you can use CSS to edit the relative sizing.</p>\n<p>One final point, each page should always have one (and only one) <code>h1</code> element, which is the main subject of your content. This and the other headings are used in part by search engines to understand the topic of the page.</p>\n",
    instructions:
      '\n<p>Camper Cat wants a page on his site dedicated to becoming a ninja. Help him fix the headings so his markup gives semantic meaning to the content, and shows the proper parent-child relationships of his sections. Change all the <code>h5</code> tags to the proper heading level to indicate they are subsections of the <code>h2</code> ones. Use <code>h3</code> tags for the purpose.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Jump Straight To The Content Using The Main Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/jump-straight-to-the-content-using-the-main-element',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>HTML5 introduced several new elements that give developers more options while also incorporating accessibility features. These tags include <code>main</code>, <code>header</code>, <code>footer</code>, <code>nav</code>, <code>article</code>, and <code>section</code>, among others.</p>\n<p>By default, a browser renders these elements similar to the humble <code>div</code>. However, using them where appropriate gives additional meaning to your markup. The tag name alone can indicate the type of information it contains, which adds semantic meaning to that content. Assistive technologies can access this information to provide better page summary or navigation options to their users.</p>\n<p>The <code>main</code> element is used to wrap (you guessed it) the main content, and there should be only one per page. It's meant to surround the information related to your page's central topic. It's not meant to include items that repeat across pages, like navigation links or banners.</p>\n<p>The <code>main</code> tag also has an embedded landmark feature that assistive technology can use to navigate to the main content quickly. If you've ever seen a \"Jump to Main Content\" link at the top of a page, using the <code>main</code> tag automatically gives assistive devices that functionality.</p>\n",
    instructions:
      '\n<p>Camper Cat has some big ideas for his ninja weapons page. Help him set up his markup by adding opening and closing <code>main</code> tags between the <code>header</code> and <code>footer</code> (covered in other challenges). Keep the <code>main</code> tags empty for now.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Wrap Content In The Article Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/wrap-content-in-the-article-element',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p><code>article</code> is another one of the new HTML5 elements that add semantic meaning to your markup. <code>article</code> is a sectioning element and is used to wrap independent, self-contained content. The tag works well with blog entries, forum posts, or news articles.</p>\n<p>Determining whether content can stand alone is usually a judgment call, but you can use a couple of simple tests. Ask yourself if you removed all surrounding context, would that content still make sense? Similarly, for text, would the content hold up if it were in an RSS feed?</p>\n<p>Remember that folks using assistive technologies rely on organized, semantically meaningful markup to better understand your work.</p>\n<p><strong>Note:</strong> The <code>section</code> element is also new with HTML5, and has a slightly different semantic meaning than <code>article</code>. An <code>article</code> is for standalone content, and a <code>section</code> is for grouping thematically related content. They can be used within each other, as needed. For example, if a book is the <code>article</code>, then each chapter is a <code>section</code>. When there's no relationship between groups of content, then use a <code>div</code>.</p>\n<p><code>&lt;div&gt;</code> - groups content\n<code>&lt;section&gt;</code> - groups related content\n<code>&lt;article&gt;</code> - groups independent, self-contained content</p>\n",
    instructions:
      '\n<p>Camper Cat used <code>article</code> tags to wrap the posts on his blog page, but he forgot to use them around the top one. Change the <code>div</code> tag to use an <code>article</code> tag instead.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Make Screen Reader Navigation Easier With The Header Landmark',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-header-landmark',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>The next HTML5 element that adds semantic meaning and improves accessibility is the <code>header</code> tag. It's used to wrap introductory information or navigation links for its parent tag and works well around content that's repeated at the top on multiple pages.</p>\n<p><code>header</code> shares the embedded landmark feature you saw with <code>main</code>, allowing assistive technologies to quickly navigate to that content.</p>\n<p><strong>Note:</strong> The <code>header</code> is meant for use in the <code>body</code> tag of your HTML document. It is different than the <code>head</code> element, which contains the page's title, meta information, etc.</p>\n",
    instructions:
      '\n<p>Camper Cat is writing some great articles about ninja training, and wants to add a page for them to his site. Change the top <code>div</code> that currently contains the <code>h1</code> to a <code>header</code> tag instead.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Make Screen Reader Navigation Easier With The Nav Landmark',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-nav-landmark',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>The <code>nav</code> element is another HTML5 item with the embedded landmark feature for easy screen reader navigation. This tag is meant to wrap around the main navigation links in your page.</p>\n<p>If there are repeated site links at the bottom of the page, it isn't necessary to markup those with a <code>nav</code> tag as well. Using a <code>footer</code> (covered in the next challenge) is sufficient.</p>\n",
    instructions:
      '\n<p>Camper Cat included navigation links at the top of his training page, but wrapped them in a <code>div</code>. Change the <code>div</code> to a <code>nav</code> tag to improve the accessibility on his page.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Make Screen Reader Navigation Easier With The Footer Landmark',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-footer-landmark',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>Similar to <code>header</code> and <code>nav</code>, the <code>footer</code> element has a built-in landmark feature that allows assistive devices to quickly navigate to it. It's primarily used to contain copyright information or links to related documents that usually sit at the bottom of a page.</p>\n",
    instructions:
      "\n<p>Camper Cat's training page is making good progress. Change the <code>div</code> he used to wrap his copyright information at the bottom of the page to a <code>footer</code> element.</p>\n",
  },
  {
    section: 'Applied Accessibility',
    name: 'Improve Accessibility Of Audio Content With The Audio Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-accessibility-of-audio-content-with-the-audio-element',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>HTML5\'s <code>audio</code> element gives semantic meaning when it wraps sound or audio stream content in your markup. Audio content also needs a text alternative to be accessible to people who are deaf or hard of hearing. This can be done with nearby text on the page or a link to a transcript.</p>\n<p>The <code>audio</code> tag supports the <code>controls</code> attribute. This shows the browser default play, pause, and other controls, and supports keyboard functionality. This is a boolean attribute, meaning it doesn\'t need a value, its presence on the tag turns the setting on.</p>\n<p>Here\'s an example:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>meowClip<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/meow.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/mpeg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/meow.ogg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/ogg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n<p><strong>Note:</strong> Multimedia content usually has both visual and auditory components. It needs synchronized captions and a transcript so users with visual and/or auditory impairments can access it. Generally, a web developer is not responsible for creating the captions or transcript, but needs to know to include them.</p>\n',
    instructions:
      '\n<p>Time to take a break from Camper Cat and meet fellow camper Zersiax (@zersiax), a champion of accessibility and a screen reader user. To hear a clip of his screen reader in action, add an <code>audio</code> element after the <code>p</code>. Include the <code>controls</code> attribute. Then place a <code>source</code> tag inside the <code>audio</code> tags with the <code>src</code> attribute set to <code>https://s3.amazonaws.com/freecodecamp/screen-reader.mp3</code> and <code>type</code> attribute set to <code>"audio/mpeg"</code>.</p>\n<p><strong>Note:</strong> The audio clip may sound fast and be difficult to understand, but that is a normal speed for screen reader users.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Improve Chart Accessibility With The Figure Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-chart-accessibility-with-the-figure-element',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>HTML5 introduced the <code>figure</code> element and the related <code>figcaption</code>. Used together, these items wrap a visual representation (like an image, diagram, or chart) along with its caption. Wrapping these elements together gives a two-fold accessibility boost by semantically grouping related content and providing a text alternative explaining the <code>figure</code>.</p>\n<p>For data visualizations like charts, the caption can be used to briefly note the trends or conclusions for users with visual impairments. Another challenge covers how to move a table version of the chart\'s data off-screen (using CSS) for screen reader users.</p>\n<p>Here\'s an example - note that the <code>figcaption</code> goes inside the <code>figure</code> tags and can be combined with other elements:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>roundhouseDestruction.jpeg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Photo of Camper Cat executing a roundhouse kick<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">&gt;</span></span>\n    Master Camper Cat demonstrates proper form of a roundhouse kick.\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n',
    instructions:
      '\n<p>Camper Cat is hard at work creating a stacked bar chart showing the amount of time per week to spend training in stealth, combat, and weapons. Help him structure his page better by changing the <code>div</code> tag he used to a <code>figure</code> tag, and the <code>p</code> tag that surrounds the caption to a <code>figcaption</code> tag.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Improve Form Field Accessibility With The Label Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-form-field-accessibility-with-the-label-element',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Improving accessibility with semantic HTML markup applies to using both appropriate tag names and attributes. The next several challenges cover some important scenarios using attributes in forms.</p>\n<p>The <code>label</code> tag wraps the text for a specific form control item, usually the name or label for a choice. This ties meaning to the item and makes the form more readable. The <code>for</code> attribute on a <code>label</code> tag explicitly associates that <code>label</code> with the form control and is used by screen readers.</p>\n<p>You learned about radio buttons and their labels in a lesson in the Basic HTML section. In that lesson, we wrapped the radio button input element inside a <code>label</code> element along with the label text in order to make the text clickable. Another way to achieve this is by using the <code>for</code> attribute, as explained in this lesson.</p>\n<p>The value of the <code>for</code> attribute must be the same as the value of the <code>id</code> attribute of the form control. Here\'s an example:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Name:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n',
    instructions:
      '\n<p>Camper Cat expects a lot of interest in his thoughtful blog posts and wants to include an email sign up form. Add a <code>for</code> attribute on the email <code>label</code> that matches the <code>id</code> on its <code>input</code> field.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Wrap Radio Buttons In A Fieldset Element For Better Accessibility',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The next form topic covers the accessibility of radio buttons. Each choice is given a <code>label</code> with a <code>for</code> attribute tying to the <code>id</code> of the corresponding item as covered in the last challenge. Since radio buttons often come in a group where the user must choose one, there\'s a way to semantically show the choices are part of a set.</p>\n<p>The <code>fieldset</code> tag surrounds the entire grouping of radio buttons to achieve this. It often uses a <code>legend</code> tag to provide a description for the grouping, which screen readers read for each choice in the <code>fieldset</code> element.</p>\n<p>The <code>fieldset</code> wrapper and <code>legend</code> tag are not necessary when the choices are self-explanatory, like a gender selection. Using a <code>label</code> with the <code>for</code> attribute for each radio button is sufficient.</p>\n<p>Here\'s an example:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span>Choose one of these three items:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>items<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Choice One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>two<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>items<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>two<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>two<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Choice Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>three<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>items<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>three<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>three<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Choice Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n',
    instructions:
      "\n<p>Camper Cat wants information about the ninja level of his users when they sign up for his email list. He's added a set of radio buttons and learned from our last lesson to use <code>label</code> tags with <code>for</code> attributes for each choice. Go Camper Cat! However, his code still needs some help. Change the <code>div</code> tag surrounding the radio buttons to a <code>fieldset</code> tag, and change the <code>p</code> tag inside it to a <code>legend</code>.</p>\n",
  },
  {
    section: 'Applied Accessibility',
    name: 'Add An Accessible Date Picker',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/add-an-accessible-date-picker',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Forms often include the <code>input</code> field, which can be used to create several different form controls. The <code>type</code> attribute on this element indicates what kind of <code>input</code> element will be created.</p>\n<p>You may have noticed the <code>text</code> and <code>submit</code> input types in prior challenges, and HTML5 introduced an option to specify a <code>date</code> field. Depending on browser support, a date picker shows up in the <code>input</code> field when it\'s in focus, which makes filling in a form easier for all users.</p>\n<p>For older browsers, the type will default to <code>text</code>, so it helps to show users the expected date format in the <code>label</code> or <code>placeholder</code> text just in case.</p>\n<p>Here\'s an example:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Enter a date:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n',
    instructions:
      '\n<p>Camper Cat is setting up a Mortal Kombat tournament and wants to ask his competitors to see what date works best. Add an <code>input</code> tag with a <code>type</code> attribute of <code>date</code>, an <code>id</code> attribute of <code>pickdate</code>, and a <code>name</code> attribute of <code>date</code>.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Standardize Times With The Html5 Datetime Attribute',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/standardize-times-with-the-html5-datetime-attribute',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Continuing with the date theme, HTML5 also introduced the <code>time</code> element along with a <code>datetime</code> attribute to standardize times. The <code>time</code> element is an inline element that can wrap a date or time on a page. A <code>datetime</code> attribute holds a valid format of that date. This is the value accessed by assistive devices. It helps avoid confusion by stating a standardized version of a time, even if it\'s informally or colloquially written in the text.</p>\n<p>Here\'s an example:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Master Camper Cat officiated the cage match between Goro and Scorpion <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2013-02-13<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>last Wednesday<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span>, which ended in a draw.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n',
    instructions:
      "\n<p>Camper Cat's Mortal Kombat survey results are in! Wrap a <code>time</code> tag around the text <code>Thursday, September 15&lt;sup&gt;th&lt;/sup&gt;</code> and add a <code>datetime</code> attribute to it set to <code>2016-09-15</code>.</p>\n",
  },
  {
    section: 'Applied Accessibility',
    name: 'Make Elements Only Visible To A Screen Reader By Using Custom Css',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-elements-only-visible-to-a-screen-reader-by-using-custom-css',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Have you noticed that all of the applied accessibility challenges so far haven\'t used any CSS? This shows the importance of using a logical document outline and semantically meaningful tags around your content before introducing the visual design aspect.</p>\n<p>However, CSS\'s magic can also improve accessibility on your page when you want to visually hide content meant only for screen readers. This happens when information is in a visual format (like a chart), but screen reader users need an alternative presentation (like a table) to access the data. CSS is used to position the screen reader-only elements off the visual area of the browser window.</p>\n<p>Here\'s an example of the CSS rules that accomplish this:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.sr-only</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> -10000px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p><strong>Note:</strong> The following CSS approaches will NOT do the same thing:</p>\n<ul>\n<li><code>display: none;</code> or <code>visibility: hidden;</code> hides content for everyone, including screen reader users</li>\n<li>Zero values for pixel sizes, such as <code>width: 0px; height: 0px;</code> removes that element from the flow of your document, meaning screen readers will ignore it</li>\n</ul>\n',
    instructions:
      "\n<p>Camper Cat created a really cool stacked bar chart for his training page, and put the data into a table for his visually impaired users. The table already has an <code>sr-only</code> class, but the CSS rules aren't filled in yet. Give the <code>position</code> an <code>absolute</code> value, the <code>left</code> a <code>-10000px</code> value, and the <code>width</code> and <code>height</code> both <code>1px</code> values.</p>\n",
  },
  {
    section: 'Applied Accessibility',
    name: 'Improve Readability With High Contrast Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-readability-with-high-contrast-text',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Low contrast between the foreground and background colors can make text difficult to read. Sufficient contrast improves your content\'s readability, but what exactly does "sufficient" mean?</p>\n<p>The Web Content Accessibility Guidelines (WCAG) recommend at least a 4.5 to 1 contrast ratio for normal text. The ratio is calculated by comparing the relative luminance values of two colors. This ranges from 1:1 for the same color, or no contrast, to 21:1 for white against black, the most substantial contrast. There are many contrast checking tools available online that calculate this ratio for you.</p>\n',
    instructions:
      "\n<p>Camper Cat's choice of light gray text on a white background for his recent blog post has a 1.5:1 contrast ratio, making it hard to read. Change the <code>color</code> of the text from the current gray (<code>#D3D3D3</code>) to a darker gray (<code>#636363</code>) to improve the contrast ratio to 6:1.</p>\n",
  },
  {
    section: 'Applied Accessibility',
    name: 'Avoid Colorblindness Issues By Using Sufficient Contrast',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/avoid-colorblindness-issues-by-using-sufficient-contrast',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>Color is a large part of visual design, but its use introduces two accessibility issues. First, color alone should not be used as the only way to convey important information because screen reader users won't see it. Second, foreground and background colors need sufficient contrast so colorblind users can distinguish them.</p>\n<p>Previous challenges covered having text alternatives to address the first issue. The last challenge introduced contrast checking tools to help with the second. The WCAG-recommended contrast ratio of 4.5:1 applies for color use as well as gray-scale combinations.</p>\n<p>Colorblind users have trouble distinguishing some colors from others - usually in hue but sometimes lightness as well. You may recall the contrast ratio is calculated using the relative luminance (or lightness) values of the foreground and background colors.</p>\n<p>In practice, the 4.5:1 contrast ratio can be reached by shading (adding black to) the darker color and tinting (adding white to) the lighter color. Darker shades on the color wheel are considered to be shades of blues, violets, magentas, and reds, whereas lighter tinted colors are oranges, yellows, greens, and blue-greens.</p>\n",
    instructions:
      '\n<p>Camper Cat is experimenting with using color for his blog text and background, but his current combination of a greenish <code>background-color</code> with maroon text <code>color</code> has a 2.5:1 contrast ratio. You can easily adjust the lightness of the colors since he declared them using the CSS <code>hsl()</code> property (which stands for hue, saturation, lightness) by changing the third argument. Increase the <code>background-color</code> lightness value from 35% to 55%, and decrease the <code>color</code> lightness value from 20% to 15%. This improves the contrast to 5.9:1.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Avoid Colorblindness Issues By Carefully Choosing Colors That Convey Information',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>There are various forms of colorblindness. These can range from a reduced sensitivity to a certain wavelength of light to the inability to see color at all. The most common form is a reduced sensitivity to detect greens.</p>\n<p>For example, if two similar green colors are the foreground and background color of your content, a colorblind user may not be able to distinguish them. Close colors can be thought of as neighbors on the color wheel, and those combinations should be avoided when conveying important information.</p>\n<p><strong>Note:</strong> Some online color picking tools include visual simulations of how colors appear for different types of colorblindness. These are great resources in addition to online contrast checking calculators.</p>\n',
    instructions:
      '\n<p>Camper Cat is testing different styles for an important button, but the yellow (<code>#FFFF33</code>) <code>background-color</code> and the green (<code>#33FF33</code>) text <code>color</code> are neighboring hues on the color wheel and virtually indistinguishable for some colorblind users. (Their similar lightness also fails the contrast ratio check). Change the text <code>color</code> to a dark blue (<code>#003366</code>) to solve both problems.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Give Links Meaning By Using Descriptive Link Text',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/give-links-meaning-by-using-descriptive-link-text',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Screen reader users have various options for what type of content their device reads. These options include skipping to (or over) landmark elements, jumping to the main content, or getting a page summary from the headings. Another option is to only hear the links available on a page.</p>\n<p>Screen readers do this by reading the link text, or what\'s between the anchor (<code>a</code>) tags. Having a list of "click here" or "read more" links isn\'t helpful. Instead, use brief but descriptive text within the <code>a</code> tags to provide more meaning for these users.</p>\n',
    instructions:
      '\n<p>The link text that Camper Cat is using is not very descriptive without the surrounding context. Move the anchor (<code>a</code>) tags so they wrap around the text <code>information about batteries</code> instead of <code>Click here</code>.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Make Links Navigable With Html Access Keys',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-links-navigable-with-html-access-keys',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>HTML offers the <code>accesskey</code> attribute to specify a shortcut key to activate or bring focus to an element. Adding an <code>accesskey</code> attribute can make navigation more efficient for keyboard-only users.</p>\n<p>HTML5 allows this attribute to be used on any element, but it\'s particularly useful when it\'s used with interactive ones. This includes links, buttons, and form controls.</p>\n<p>Here\'s an example:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">accesskey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Important Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n',
    instructions:
      "\n<p>Camper Cat wants the links around the two blog article titles to have keyboard shortcuts so his site's users can quickly navigate to the full story. Add an <code>accesskey</code> attribute to both links and set the first one to <code>g</code> (for Garfield) and the second one to <code>c</code> (for Chuck Norris).</p>\n",
  },
  {
    section: 'Applied Accessibility',
    name: 'Use Tabindex To Add Keyboard Focus To An Element',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-tabindex-to-add-keyboard-focus-to-an-element',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The HTML <code>tabindex</code> attribute has three distinct functions relating to an element\'s keyboard focus. When it\'s on a tag, it indicates that the element can be focused on. The value (an integer that\'s positive, negative, or zero) determines the behavior.</p>\n<p>Certain elements, such as links and form controls, automatically receive keyboard focus when a user tabs through a page. It\'s in the same order as the elements come in the HTML source markup. This same functionality can be given to other elements, such as <code>div</code>, <code>span</code>, and <code>p</code>, by placing a <code>tabindex="0"</code> attribute on them. Here\'s an example:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>I need keyboard focus!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n<p><strong>Note:</strong> A negative <code>tabindex</code> value (typically -1) indicates that an element is focusable, but is not reachable by the keyboard. This method is generally used to bring focus to content programmatically (like when a <code>div</code> used for a pop-up window is activated), and is beyond the scope of these challenges.</p>\n',
    instructions:
      '\n<p>Camper Cat created a new survey to collect information about his users. He knows input fields automatically get keyboard focus, but he wants to make sure his keyboard users pause at the instructions while tabbing through the items. Add a <code>tabindex</code> attribute to the <code>p</code> tag and set its value to <code>0</code>. Bonus - using <code>tabindex</code> also enables the CSS pseudo-class <code>:focus</code> to work on the <code>p</code> tag.</p>\n',
  },
  {
    section: 'Applied Accessibility',
    name: 'Use Tabindex To Specify The Order Of Keyboard Focus For Several Elements',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The <code>tabindex</code> attribute also specifies the exact tab order of elements. This is achieved when the attribute\'s value is set to a positive number of 1 or higher.</p>\n<p>Setting a <code>tabindex="1"</code> will bring keyboard focus to that element first. Then it cycles through the sequence of specified <code>tabindex</code> values (2, 3, etc.), before moving to default and <code>tabindex="0"</code> items.</p>\n<p>It\'s important to note that when the tab order is set this way, it overrides the default order (which uses the HTML source). This may confuse users who are expecting to start navigation from the top of the page. This technique may be necessary in some circumstances, but in terms of accessibility, take care before applying it.</p>\n<p>Here\'s an example:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>I get keyboard focus, and I get it first!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>I get keyboard focus, and I get it second!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n',
    instructions:
      '\n<p>Camper Cat has a search field on his Inspirational Quotes page that he plans to position in the upper right corner with CSS. He wants the search <code>input</code> and submit <code>input</code> form controls to be the first two items in the tab order. Add a <code>tabindex</code> attribute set to <code>1</code> to the <code>search</code> <code>input</code>, and a <code>tabindex</code> attribute set to <code>2</code> to the <code>submit</code> <code>input</code>.</p>\n<p>Another thing to note is that some browsers may place you in the middle of your tab order when an element is clicked. An element has been added to the page that ensures you will always start at the beginning of your tab order.</p>\n',
  },
  {
    section: 'Responsive Web Design Principles',
    name: 'Create A Media Query',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/create-a-media-query',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Media Queries are a new technique introduced in CSS3 that change the presentation of content based on different viewport sizes. The viewport is a user\'s visible area of a web page, and is different depending on the device used to access the site.</p>\n<p>Media Queries consist of a media type, and if that media type matches the type of device the document is displayed on, the styles are applied. You can have as many selectors and styles inside your media query as you want.</p>\n<p>Here\'s an example of a media query that returns the content when the device\'s width is less than or equal to <code>100px</code>:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> <span class="token comment">/* CSS Rules */</span> <span class="token punctuation">}</span>\n</code></pre>\n<p>and the following media query returns the content when the device\'s height is more than or equal to <code>350px</code>:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-height</span><span class="token punctuation">:</span> 350px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> <span class="token comment">/* CSS Rules */</span> <span class="token punctuation">}</span>\n</code></pre>\n<p>Remember, the CSS inside the media query is applied only if the media type matches that of the device being used.</p>\n',
    instructions:
      "\n<p>Add a media query, so that the <code>p</code> tag has a <code>font-size</code> of <code>10px</code> when the device's height is less than or equal to <code>800px</code>.</p>\n",
  },
  {
    section: 'Responsive Web Design Principles',
    name: 'Make An Image Responsive',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/make-an-image-responsive',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Making images responsive with CSS is actually very simple. You just need to add these properties to an image:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">img</span> <span class="token punctuation">{</span>\n  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>The <code>max-width</code> of <code>100%</code> will make sure the image is never wider than the container it is in, and the <code>height</code> of <code>auto</code> will make the image keep its original aspect ratio.</p>\n',
    instructions:
      "\n<p>Add the style rules to the <code>responsive-img</code> class to make it responsive. It should never be wider than its container (in this case, it's the preview window) and it should keep its original aspect ratio. After you have added your code, resize the preview to see how your images behave.</p>\n",
  },
  {
    section: 'Responsive Web Design Principles',
    name: 'Use A Retina Image For Higher Resolution Displays',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/use-a-retina-image-for-higher-resolution-displays',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>With the increase of internet connected devices, their sizes and specifications vary, and the displays they use could be different externally and internally. Pixel density is an aspect that could be different on one device from others and this density is known as Pixel Per Inch(PPI) or Dots Per Inch(DPI). The most famous such display is the one known as a "Retina Display" on the latest Apple MacBook Pro notebooks, and recently iMac computers. Due to the difference in pixel density between a "Retina" and "Non-Retina" displays, some images that have not been made with a High-Resolution Display in mind could look "pixelated" when rendered on a High-Resolution display.</p>\n<p>The simplest way to make your images properly appear on High-Resolution Displays, such as the MacBook Pros "retina display" is to define their <code>width</code> and <code>height</code> values as only half of what the original file is. Here is an example of an image that is only using half of the original height and width:</p>\n<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">img</span> <span class="token punctuation">{</span> <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>coolPic500x500<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A most excellent picture<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n',
    instructions:
      '\n<p>Set the <code>width</code> and <code>height</code> of the <code>img</code> tag to half of their original values. In this case, both the original <code>height</code> and the original <code>width</code> are <code>200px</code>.</p>\n',
  },
  {
    section: 'Responsive Web Design Principles',
    name: 'Make Typography Responsive',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/make-typography-responsive',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Instead of using <code>em</code> or <code>px</code> to size text, you can use viewport units for responsive typography. Viewport units, like percentages, are relative units, but they are based off different items. Viewport units are relative to the viewport dimensions (width or height) of a device, and percentages are relative to the size of the parent container element.</p>\n<p>The four different viewport units are:</p>\n<ul><li><code>vw</code> (viewport width): <code>10vw</code> would be 10% of the viewport\'s width.</li><li><code>vh</code> (viewport height): <code>3vh</code> would be 3% of the viewport\'s height.</li><li><code>vmin</code> (viewport minimum): <code>70vmin</code> would be 70% of the viewport\'s smaller dimension (height or width).</li><li><code>vmax</code> (viewport maximum): <code>100vmax</code> would be 100% of the viewport\'s bigger dimension (height or width).</li></ul>\n<p>Here is an example that sets a <code>body</code> tag to 30% of the viewport\'s width.</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">body</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 30vw<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre>\n',
    instructions:
      "\n<p>Set the <code>width</code> of the <code>h2</code> tag to 80% of the viewport's width and the <code>width</code> of the paragraph as 75% of the viewport's smaller dimension.</p>\n",
  },
  {
    section: 'Css Flexbox',
    name: 'Use Display Flex To Position Two Boxes',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-display-flex-to-position-two-boxes',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>This section uses alternating challenge styles to show how to use CSS to position elements in a flexible way. First, a challenge will explain theory, then a practical challenge using a simple tweet component will apply the flexbox concept.</p>\n<p>Placing the CSS property <code>display: flex;</code> on an element allows you to use other flex properties to build a responsive page.</p>\n',
    instructions:
      '\n<p>Add the CSS property <code>display</code> to <code>#box-container</code> and set its value to <code>flex</code>.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Add Flex Superpowers To The Tweet Embed',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>To the right is the tweet embed that will be used as a practical example. Some of the elements would look better with a different layout. The last challenge demonstrated <code>display: flex</code>. Here you'll add it to several components in the tweet embed to start adjusting their positioning.</p>\n",
    instructions:
      "\n<p>Add the CSS property <code>display: flex</code> to all of the following items - note that the selectors are already set up in the CSS:</p>\n<p><code>header</code>, the header's <code>.profile-name</code>, the header's <code>.follow-btn</code>, the header's <code>h3</code> and <code>h4</code>, the <code>footer</code>, and the footer's <code>.stats</code>.</p>\n",
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Direction Property To Make A Row',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-direction-property-to-make-a-row',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Adding <code>display: flex</code> to an element turns it into a flex container. This makes it possible to align any children of that element into rows or columns. You do this by adding the <code>flex-direction</code> property to the parent item and setting it to row or column. Creating a row will align the children horizontally, and creating a column will align the children vertically.</p>\n<p>Other options for <code>flex-direction</code> are <code>row-reverse</code> and <code>column-reverse</code>.</p>\n<p><strong>Note:</strong> The default value for the <code>flex-direction</code> property is <code>row</code>.</p>\n',
    instructions:
      '\n<p>Add the CSS property <code>flex-direction</code> to the <code>#box-container</code> element, and give it a value of <code>row-reverse</code>.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Apply The Flex Direction Property To Create Rows In The Tweet Embed',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/apply-the-flex-direction-property-to-create-rows-in-the-tweet-embed',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The <code>header</code> and <code>footer</code> in the tweet embed example have child items that could be arranged as rows using the <code>flex-direction</code> property. This tells CSS to align the children horizontally.</p>\n',
    instructions:
      '\n<p>Add the CSS property <code>flex-direction</code> to both the <code>header</code> and <code>footer</code> and set the value to <code>row</code>.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Direction Property To Make A Column',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-direction-property-to-make-a-column',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The last two challenges used the <code>flex-direction</code> property set to <code>row</code>. This property can also create a column by vertically stacking the children of a flex container.</p>\n',
    instructions:
      '\n<p>Add the CSS property <code>flex-direction</code> to the <code>#box-container</code> element, and give it a value of <code>column</code>.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Apply The Flex Direction Property To Create A Column In The Tweet Embed',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/apply-the-flex-direction-property-to-create-a-column-in-the-tweet-embed',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The tweet embed <code>header</code> and <code>footer</code> used the <code>flex-direction</code> property earlier with a row value. Similarly, the items inside the <code>.profile-name</code> element would work well stacked as a column.</p>\n',
    instructions:
      "\n<p>Add the CSS property <code>flex-direction</code> to the header's <code>.profile-name</code> element and set the value to <code>column</code>.</p>\n",
  },
  {
    section: 'Css Flexbox',
    name: 'Align Elements Using The Justify Content Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/align-elements-using-the-justify-content-property',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Sometimes the flex items within a flex container do not fill all the space in the container. It is common to want to tell CSS how to align and space out the flex items a certain way. Fortunately, the <code>justify-content</code> property has several options to do this. But first, there is some important terminology to understand before reviewing those options.</p>\n<p><a href="https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg">Here is a useful image showing a row to illustrate the concepts below.</a></p>\n<p>Recall that setting a flex container as a row places the flex items side-by-side from left-to-right. A flex container set as a column places the flex items in a vertical stack from top-to-bottom. For each, the direction the flex items are arranged is called the <strong>main axis</strong>. For a row, this is a horizontal line that cuts through each item. And for a column, the main axis is a vertical line through the items.</p>\n<p>There are several options for how to space the flex items along the line that is the main axis. One of the most commonly used is <code>justify-content: center;</code>, which aligns all the flex items to the center inside the flex container. Other options include:</p>\n<ul><li><code>flex-start</code>: aligns items to the start of the flex container. For a row, this pushes the items to the left of the container. For a column, this pushes the items to the top of the container. This is the default alignment if no <code>justify-content</code> is specified.</li><li><code>flex-end</code>: aligns items to the end of the flex container. For a row, this pushes the items to the right of the container. For a column, this pushes the items to the bottom of the container.</li><li><code>space-between</code>: aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container. For example, in a row the first item is against the left side of the container, the last item is against the right side of the container, then the remaining space is distributed evenly among the other items.</li><li><code>space-around</code>: similar to <code>space-between</code> but the first and last items are not locked to the edges of the container, the space is distributed around all the items with a half space on either end of the flex container.</li><li><code>space-evenly</code>: Distributes space evenly between the flex items with a full space at either end of the flex container</li></ul>\n',
    instructions:
      '\n<p>An example helps show this property in action. Add the CSS property <code>justify-content</code> to the <code>#box-container</code> element, and give it a value of <code>center</code>.</p>\n<p><strong>Bonus</strong><br>\nTry the other options for the <code>justify-content</code> property in the code editor to see their differences. But note that a value of <code>center</code> is the only one that will pass this challenge.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Justify Content Property In The Tweet Embed',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-justify-content-property-in-the-tweet-embed',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The last challenge showed an example of the <code>justify-content</code> property. For the tweet embed, this property can be applied to align the items in the <code>.profile-name</code> element.</p>\n',
    instructions:
      "\n<p>Add the CSS property <code>justify-content</code> to the header's <code>.profile-name</code> element and set the value to any of the options from the last challenge.</p>\n",
  },
  {
    section: 'Css Flexbox',
    name: 'Align Elements Using The Align Items Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/align-elements-using-the-align-items-property',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The <code>align-items</code> property is similar to <code>justify-content</code>. Recall that the <code>justify-content</code> property aligned flex items along the main axis. For rows, the main axis is a horizontal line and for columns it is a vertical line.</p>\n<p>Flex containers also have a <strong>cross axis</strong> which is the opposite of the main axis. For rows, the cross axis is vertical and for columns, the cross axis is horizontal.</p>\n<p>CSS offers the <code>align-items</code> property to align flex items along the cross axis. For a row, it tells CSS how to push the items in the entire row up or down within the container. And for a column, how to push all the items left or right within the container.</p>\n<p>The different values available for <code>align-items</code> include:</p>\n<ul><li><code>flex-start</code>: aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.</li><li><code>flex-end</code>: aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.</li><li><code>center</code>: align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).</li><li><code>stretch</code>: stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom. This is the default value if no <code>align-items</code> value is specified.</li><li><code>baseline</code>: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.</li></ul>\n',
    instructions:
      '\n<p>An example helps show this property in action. Add the CSS property <code>align-items</code> to the <code>#box-container</code> element, and give it a value of <code>center</code>.</p>\n<p><strong>Bonus</strong><br>\nTry the other options for the <code>align-items</code> property in the code editor to see their differences. But note that a value of <code>center</code> is the only one that will pass this challenge.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Align Items Property In The Tweet Embed',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-align-items-property-in-the-tweet-embed',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The last challenge introduced the <code>align-items</code> property and gave an example. This property can be applied to a few tweet embed elements to align the flex items inside them.</p>\n',
    instructions:
      "\n<p>Add the CSS property <code>align-items</code> to the header's <code>.follow-btn</code> element. Set the value to <code>center</code>.</p>\n",
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Wrap Property To Wrap A Row Or Column',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-wrap-property-to-wrap-a-row-or-column',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>CSS flexbox has a feature to split a flex item into multiple rows (or columns). By default, a flex container will fit all flex items together. For example, a row will all be on one line.</p>\n<p>However, using the <code>flex-wrap</code> property tells CSS to wrap items. This means extra items move into a new row or column. The break point of where the wrapping happens depends on the size of the items and the size of the container.</p>\n<p>CSS also has options for the direction of the wrap:</p>\n<ul><li><code>nowrap</code>: this is the default setting, and does not wrap items.</li><li><code>wrap</code>: wraps items onto multiple lines from top-to-bottom if they are in rows and left-to-right if they are in columns.</li><li><code>wrap-reverse</code>: wraps items onto multiple lines from bottom-to-top if they are in rows and right-to-left if they are in columns.</li></ul>\n',
    instructions:
      '\n<p>The current layout has too many boxes for one row. Add the CSS property <code>flex-wrap</code> to the <code>#box-container</code> element, and give it a value of <code>wrap</code>.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Shrink Property To Shrink Items',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-shrink-property-to-shrink-items',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>So far, all the properties in the challenges apply to the flex container (the parent of the flex items). However, there are several useful properties for the flex items.</p>\n<p>The first is the <code>flex-shrink</code> property. When it's used, it allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.</p>\n<p>The <code>flex-shrink</code> property takes numbers as values. The higher the number, the more it will shrink compared to the other items in the container. For example, if one item has a <code>flex-shrink</code> value of <code>1</code> and the other has a <code>flex-shrink</code> value of <code>3</code>, the one with the value of <code>3</code> will shrink three times as much as the other.</p>\n",
    instructions:
      '\n<p>Add the CSS property <code>flex-shrink</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>1</code> and <code>#box-2</code> a value of <code>2</code>.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Grow Property To Expand Items',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-grow-property-to-expand-items',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The opposite of <code>flex-shrink</code> is the <code>flex-grow</code> property. Recall that <code>flex-shrink</code> controls the size of the items when the container shrinks. The <code>flex-grow</code> property controls the size of items when the parent container expands.</p>\n<p>Using a similar example from the last challenge, if one item has a <code>flex-grow</code> value of <code>1</code> and the other has a <code>flex-grow</code> value of <code>3</code>, the one with the value of <code>3</code> will grow three times as much as the other.</p>\n',
    instructions:
      '\n<p>Add the CSS property <code>flex-grow</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>1</code> and <code>#box-2</code> a value of <code>2</code>.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Basis Property To Set The Initial Size Of An Item',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-basis-property-to-set-the-initial-size-of-an-item',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The <code>flex-basis</code> property specifies the initial size of the item before CSS makes adjustments with <code>flex-shrink</code> or <code>flex-grow</code>.</p>\n<p>The units used by the <code>flex-basis</code> property are the same as other size properties (<code>px</code>, <code>em</code>, <code>%</code>, etc.). The value <code>auto</code> sizes items based on the content.</p>\n',
    instructions:
      '\n<p>Set the initial size of the boxes using <code>flex-basis</code>. Add the CSS property <code>flex-basis</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>10em</code> and <code>#box-2</code> a value of <code>20em</code>.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Flex Shorthand Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-shorthand-property',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>There is a shortcut available to set several flex properties at once. The <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code> properties can all be set together by using the <code>flex</code> property.</p>\n<p>For example, <code>flex: 1 0 10px;</code> will set the item to <code>flex-grow: 1;</code>, <code>flex-shrink: 0;</code>, and <code>flex-basis: 10px;</code>.</p>\n<p>The default property settings are <code>flex: 0 1 auto;</code>.</p>\n',
    instructions:
      '\n<p>Add the CSS property <code>flex</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> the values so its <code>flex-grow</code> is <code>2</code>, its <code>flex-shrink</code> is <code>2</code>, and its <code>flex-basis</code> is <code>150px</code>. Give <code>#box-2</code> the values so its <code>flex-grow</code> is <code>1</code>, its <code>flex-shrink</code> is <code>1</code>, and its <code>flex-basis</code> is <code>150px</code>.</p>\n<p>These values will cause <code>#box-1</code> to grow to fill the extra space at twice the rate of <code>#box-2</code> when the container is greater than 300px and shrink at twice the rate of <code>#box-2</code> when the container is less than 300px. 300px is the combined size of the <code>flex-basis</code> values of the two boxes.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Order Property To Rearrange Items',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-order-property-to-rearrange-items',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The <code>order</code> property is used to tell CSS the order of how flex items appear in the flex container. By default, items will appear in the same order they come in the source HTML. The property takes numbers as values, and negative numbers can be used.</p>\n',
    instructions:
      '\n<p>Add the CSS property <code>order</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>2</code> and give <code>#box-2</code> a value of <code>1</code>.</p>\n',
  },
  {
    section: 'Css Flexbox',
    name: 'Use The Align Self Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-align-self-property',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>The final property for flex items is <code>align-self</code>. This property allows you to adjust each item's alignment individually, instead of setting them all at once. This is useful since other common adjustment techniques using the CSS properties <code>float</code>, <code>clear</code>, and <code>vertical-align</code> do not work on flex items.</p>\n<p><code>align-self</code> accepts the same values as <code>align-items</code> and will override any value set by the <code>align-items</code> property.</p>\n",
    instructions:
      '\n<p>Add the CSS property <code>align-self</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>center</code> and give <code>#box-2</code> a value of <code>flex-end</code>.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Create Your First Css Grid',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-your-first-css-grid',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Turn any HTML element into a grid container by setting its <code>display</code> property to <code>grid</code>. This gives you the ability to use all the other properties associated with CSS Grid.</p>\n<p><strong>Note:</strong> In CSS Grid, the parent element is referred to as the <dfn>container</dfn> and its children are called <dfn>items</dfn>.</p>\n',
    instructions:
      '\n<p>Change the display of the div with the <code>container</code> class to <code>grid</code>.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Add Columns With Grid Template Columns',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/add-columns-with-grid-template-columns',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Simply creating a grid element doesn\'t get you very far. You need to define the structure of the grid as well. To add some columns to the grid, use the <code>grid-template-columns</code> property on a grid container as demonstrated below:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.container</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>\n  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 50px 50px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>This will give your grid two columns that are each 50px wide. The number of parameters given to the <code>grid-template-columns</code> property indicates the number of columns in the grid, and the value of each parameter indicates the width of each column.</p>\n',
    instructions:
      '\n<p>Give the grid container three columns that are each <code>100px</code> wide.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Add Rows With Grid Template Rows',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/add-rows-with-grid-template-rows',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The grid you created in the last challenge will set the number of rows automatically. To adjust the rows manually, use the <code>grid-template-rows</code> property in the same way you used <code>grid-template-columns</code> in the previous challenge.</p>\n',
    instructions:
      '\n<p>Add two rows to the grid that are <code>50px</code> tall each.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Use Css Grid Units To Change The Size Of Columns And Rows',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-css-grid-units-to-change-the-size-of-columns-and-rows',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>You can use absolute and relative units like <code>px</code> and <code>em</code> in CSS Grid to define the size of rows and columns. You can use these as well:</p>\n<p><code>fr</code>: sets the column or row to a fraction of the available space,</p>\n<p><code>auto</code>: sets the column or row to the width or height of its content automatically,</p>\n<p><code>%</code>: adjusts the column or row to the percent width of its container.</p>\n<p>Here\'s the code that generates the output in the preview:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> auto 50px 10% 2fr 1fr<span class="token punctuation">;</span>\n</code></pre>\n<p>This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.</p>\n',
    instructions:
      '\n<p>Make a grid with three columns whose widths are as follows: 1fr, 100px, and 2fr.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Create A Column Gap Using Grid Column Gap',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-a-column-gap-using-grid-column-gap',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>So far in the grids you have created, the columns have all been tight up against each other. Sometimes you want a gap in between the columns. To add a gap between the columns, use the <code>grid-column-gap</code> property like this:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">grid-column-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n</code></pre>\n<p>This creates 10px of empty space between all of our columns.</p>\n',
    instructions:
      '\n<p>Give the columns in the grid a <code>20px</code> gap.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Create A Row Gap Using Grid Row Gap',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-a-row-gap-using-grid-row-gap',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>You can add a gap in between the rows of a grid using <code>grid-row-gap</code> in the same way that you added a gap in between columns in the previous challenge.</p>\n',
    instructions:
      '\n<p>Create a gap for the rows that is <code>5px</code> tall.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Add Gaps Faster With Grid Gap',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/add-gaps-faster-with-grid-gap',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p><code>grid-gap</code> is a shorthand property for <code>grid-row-gap</code> and <code>grid-column-gap</code> from the previous two challenges that's more convenient to use. If <code>grid-gap</code> has one value, it will create a gap between all rows and columns. However, if there are two values, it will use the first one to set the gap between the rows and the second value for the columns.</p>\n",
    instructions:
      '\n<p>Use <code>grid-gap</code> to introduce a <code>10px</code> gap between the rows and <code>20px</code> gap between the columns.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Use Grid Column To Control Spacing',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-grid-column-to-control-spacing',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Up to this point, all the properties that have been discussed are for grid containers. The <code>grid-column</code> property is the first one for use on the grid items themselves.</p>\n<p>The hypothetical horizontal and vertical lines that create the grid are referred to as <dfn>lines</dfn>. These lines are numbered starting with 1 at the top left corner of the grid and move right for columns and down for rows, counting upward.</p>\n<p>This is what the lines look like for a 3x3 grid:</p>\n<div style="position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;"><p style="left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;">column lines</p><p style="left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">1</p><p style="left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">2</p><p style="left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">3</p><p style="left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;">4</p><p style="left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;">row lines</p><p style="left:-10%;top:-10%;font-size:130%;position:absolute;">1</p><p style="left:-10%;top:21%;font-size:130%;position:absolute;">2</p><p style="left:-10%;top:53%;font-size:130%;position:absolute;">3</p><p style="left:-10%;top:85%;font-size:130%;position:absolute;">4</p><div style="left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;"></div></div>\n<p>To control the number of columns an item will consume, you can use the <code>grid-column</code> property in conjunction with the line numbers you want the item to start and stop at.</p>\n<p>Here\'s an example:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span>\n</code></pre>\n<p>This will make the item start at the first vertical line of the grid on the left and span to the 3rd line of the grid, consuming two columns.</p>\n',
    instructions:
      '\n<p>Make the item with the class <code>item5</code> consume the last two columns of the grid.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Use Grid Row To Control Spacing',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-grid-row-to-control-spacing',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Of course, you can make items consume multiple rows just like you can with columns. You define the horizontal lines you want an item to start and stop at using the <code>grid-row</code> property on a grid item.</p>\n',
    instructions:
      '\n<p>Make the element with the <code>item5</code> class consume the last two rows.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Align An Item Horizontally Using Justify Self',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-an-item-horizontally-using-justify-self',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>In CSS Grid, the content of each item is located in a box which is referred to as a <dfn>cell</dfn>. You can align the content's position within its cell horizontally using the <code>justify-self</code> property on a grid item. By default, this property has a value of <code>stretch</code>, which will make the content fill the whole width of the cell. This CSS Grid property accepts other values as well:</p>\n<p><code>start</code>: aligns the content at the left of the cell,</p>\n<p><code>center</code>: aligns the content in the center of the cell,</p>\n<p><code>end</code>: aligns the content at the right of the cell.</p>\n",
    instructions:
      '\n<p>Use the <code>justify-self</code> property to center the item with the class <code>item2</code>.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Align An Item Vertically Using Align Self',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-an-item-vertically-using-align-self',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p>Just as you can align an item horizontally, there's a way to align an item vertically as well. To do this, you use the <code>align-self</code> property on an item. This property accepts all of the same values as <code>justify-self</code> from the last challenge.</p>\n",
    instructions:
      '\n<p>Align the item with the class <code>item3</code> vertically at the <code>end</code>.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Align All Items Horizontally Using Justify Items',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-all-items-horizontally-using-justify-items',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Sometimes you want all the items in your CSS Grid to share the same alignment. You can use the previously learned properties and align them individually, or you can align them all at once horizontally by using <code>justify-items</code> on your grid container. This property can accept all the same values you learned about in the previous two challenges, the difference being that it will move <strong>all</strong> the items in our grid to the desired alignment.</p>\n',
    instructions:
      '\n<p>Use this property to center all our items horizontally.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Align All Items Vertically Using Align Items',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-all-items-vertically-using-align-items',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Using the <code>align-items</code> property on a grid container will set the vertical alignment for all the items in our grid.</p>\n',
    instructions:
      '\n<p>Use it now to move all the items to the end of each cell.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Divide The Grid Into An Area Template',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/divide-the-grid-into-an-area-template',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>You can group cells of your grid together into an <dfn>area</dfn> and give the area a custom name. Do this by using <code>grid-template-areas</code> on the container like this:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">grid-template-areas</span><span class="token punctuation">:</span>\n  <span class="token string">"header header header"</span>\n  <span class="token string">"advert content content"</span>\n  <span class="token string">"advert footer footer"</span><span class="token punctuation">;</span>\n</code></pre>\n<p>The code above groups the cells of the grid into four areas; <code>header</code>, <code>advert</code>, <code>content</code>, and <code>footer</code>. Every word represents a cell and every pair of quotation marks represent a row.</p>\n',
    instructions:
      "\n<p>Change the template so the <code>footer</code> area spans the entire bottom row. Defining the areas won't have any visual effect right now. Later, you will make an item use an area to see how it works.</p>\n",
  },
  {
    section: 'Css Grid',
    name: 'Place Items In Grid Areas Using The Grid Area Property',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/place-items-in-grid-areas-using-the-grid-area-property',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>After creating an area template for your grid container, as shown in the previous challenge, you can place an item in your custom area by referencing the name you gave it. To do this, you use the <code>grid-area</code> property on an item like this:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.item1</span> <span class="token punctuation">{</span>\n  <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>This lets the grid know that you want the <code>item1</code> class to go in the area named <code>header</code>. In this case, the item will use the entire top row because that whole row is named as the header area.</p>\n',
    instructions:
      '\n<p>Place an element with the <code>item5</code> class in the <code>footer</code> area using the <code>grid-area</code> property.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Use Grid Area Without Creating An Areas Template',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-grid-area-without-creating-an-areas-template',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The <code>grid-area</code> property you learned in the last challenge can be used in another way. If your grid doesn\'t have an areas template to reference, you can create an area on the fly for an item to be placed like this:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">item1</span> <span class="token punctuation">{</span> <span class="token property">grid-area</span><span class="token punctuation">:</span> 1/1/2/4<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre>\n<p>This is using the line numbers you learned about earlier to define where the area for this item will be. The numbers in the example above represent these values:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">grid-area</span><span class="token punctuation">:</span> horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at<span class="token punctuation">;</span>\n</code></pre>\n<p>So the item in the example will consume the rows between lines 1 and 2, and the columns between lines 1 and 4.</p>\n',
    instructions:
      '\n<p>Using the <code>grid-area</code> property, place the element with <code>item5</code> class between the third and fourth horizontal lines and between the first and fourth vertical lines.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Reduce Repetition Using The Repeat Function',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/reduce-repetition-using-the-repeat-function',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>When you used <code>grid-template-columns</code> and <code>grid-template-rows</code> to define the structure of a grid, you entered a value for each row or column you created.</p>\n<p>Let\'s say you want a grid with 100 rows of the same height. It isn\'t very practical to insert 100 values individually. Fortunately, there\'s a better way - by using the <code>repeat</code> function to specify the number of times you want your column or row to be repeated, followed by a comma and the value you want to repeat.</p>\n<p>Here\'s an example that would create the 100 row grid, each row at 50px tall.</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>100<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>You can also repeat multiple values with the repeat function and insert the function amongst other values when defining a grid structure. Here\'s what that looks like:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr 50px<span class="token punctuation">)</span> 20px<span class="token punctuation">;</span>\n</code></pre>\n<p>This translates to:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 50px 1fr 50px 20px<span class="token punctuation">;</span>\n</code></pre>\n<p><strong>Note:</strong> The <code>1fr 50px</code> is repeated twice followed by 20px.</p>\n',
    instructions:
      '\n<p>Use <code>repeat</code> to remove repetition from the <code>grid-template-columns</code> property.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Limit Item Size Using The Minmax Function',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/limit-item-size-using-the-minmax-function',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>There\'s another built-in function to use with <code>grid-template-columns</code> and <code>grid-template-rows</code> called <code>minmax</code>. It\'s used to limit the size of items when the grid container changes size. To do this you need to specify the acceptable size range for your item. Here is an example:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px <span class="token function">minmax</span><span class="token punctuation">(</span>50px<span class="token punctuation">,</span> 200px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>In the code above, <code>grid-template-columns</code> is set to create two columns; the first is 100px wide, and the second has the minimum width of 50px and the maximum width of 200px.</p>\n',
    instructions:
      '\n<p>Using the <code>minmax</code> function, replace the <code>1fr</code> in the <code>repeat</code> function with a column size that has the minimum width of <code>90px</code> and the maximum width of <code>1fr</code>, and resize the preview panel to see the effect.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Create Flexible Layouts Using Auto Fill',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-flexible-layouts-using-auto-fill',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>The repeat function comes with an option called <dfn>auto-fill</dfn>. This allows you to automatically insert as many rows or columns of your desired size as possible depending on the size of the container. You can create flexible layouts when combining <code>auto-fill</code> with <code>minmax</code>, like this:</p>\n<pre class="language-css" tabindex="0"><code class="language-css"><span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>60px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>When the container changes size, this setup keeps inserting 60px columns and stretching them until it can insert another one. <strong>Note:</strong> If your container can\'t fit all your items on one row, it will move them down to a new one.</p>\n',
    instructions:
      '\n<p>In the first grid, use <code>auto-fill</code> with <code>repeat</code> to fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>. Then resize the preview to see auto-fill in action.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Create Flexible Layouts Using Auto Fit',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-flexible-layouts-using-auto-fit',
    remove: ['ALL_HELPERS'],
    description:
      "\n<p><code>auto-fit</code> works almost identically to <code>auto-fill</code>. The only difference is that when the container's size exceeds the size of all the items combined, <code>auto-fill</code> keeps inserting empty rows or columns and pushes your items to the side, while <code>auto-fit</code> collapses those empty rows or columns and stretches your items to fit the size of the container.</p>\n<p><strong>Note:</strong> If your container can't fit all your items on one row, it will move them down to a new one.</p>\n",
    instructions:
      '\n<p>In the second grid, use <code>auto-fit</code> with <code>repeat</code> to fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>. Then resize the preview to see the difference.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Use Media Queries To Create Responsive Layouts',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-media-queries-to-create-responsive-layouts',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>CSS Grid can be an easy way to make your site more responsive by using media queries to rearrange grid areas, change dimensions of a grid, and rearrange the placement of items.</p>\n<p>In the preview, when the viewport width is 300px or more, the number of columns changes from 1 to 2. The advertisement area then occupies the left column completely.</p>\n',
    instructions:
      '\n<p>When the viewport width is <code>400px</code> or more, make the header area occupy the top row completely and the footer area occupy the bottom row completely.</p>\n',
  },
  {
    section: 'Css Grid',
    name: 'Create Grids Within Grids',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-grids-within-grids',
    remove: ['ALL_HELPERS'],
    description:
      '\n<p>Turning an element into a grid only affects the behavior of its direct descendants. So by turning a direct descendant into a grid, you have a grid within a grid.</p>\n<p>For example, by setting the <code>display</code> and <code>grid-template-columns</code> properties of the element with the <code>item3</code> class, you create a grid within your grid.</p>\n',
    instructions:
      '\n<p>Turn the element with the <code>item3</code> class into a grid with two columns with a width of <code>auto</code> and <code>1fr</code> using <code>display</code> and <code>grid-template-columns</code>.</p>\n',
  },
];

function executeScript(script, params) {
  chrome.tabs.executeScript({
    code: '(' + script + ')(' + params + ');', //argument here is a string but function.toString() returns function's code
  });
}

function clearBreadcrumbTitle() {
  const breadcrumbTitle = document.querySelector(
    '.challenge-title-breadcrumbs'
  );

  breadcrumbTitle?.remove();
}

function clearDescription() {
  const description = document.querySelector('#description');

  if (description) description.innerHTML = '';
}

function clearInstructions() {
  const instructions = document.querySelector('#instructions');

  if (instructions) instructions.innerHTML = '';
}

function clearHelpButton() {
  const getHelpButton = document.querySelector('#get-help-dropdown');

  getHelpButton?.remove();
}

function clearTestCases() {
  const testCases = document.querySelector('.challenge-test-suite');

  testCases?.remove();
}

function clearTestOutput() {
  const output = document.querySelectorAll('.horizontal.reflex-element');

  output[2]?.remove();
}

function clearAllHelpers() {
  const breadcrumbTitle = document.querySelector(
    '.challenge-title-breadcrumbs'
  );
  const description = document.querySelector('#description');
  const getHelpButton = document.querySelector('#get-help-dropdown');
  const testCases = document.querySelector('.challenge-test-suite');
  const output = document.querySelectorAll('.horizontal.reflex-element');
  const instructions = document.querySelector('#instructions');

  breadcrumbTitle?.remove();
  if (description) description.innerHTML = '';
  if (instructions) instructions.innerHTML = '';
  getHelpButton?.remove();
  testCases?.remove();
  output[2]?.remove();
}

function addDescription(element) {
  console.log(element);
  const description = document.querySelector('#description');
  if (description) description.innerHTML = element;
}

function addInstructions(element) {
  console.log(element);
  const instructions = document.querySelector('#instructions');
  if (instructions) instructions.innerHTML = element;
}

function removeElements(challenge) {
  if (challenge.remove)
    challenge.remove.forEach((element) => {
      switch (element) {
        case CONSTANTS.ALL_HELPERS:
          executeScript(clearAllHelpers);
          break;
        case CONSTANTS.BREADCRUMB_TITLE:
          executeScript(clearBreadcrumbTitle);
          break;
        case CONSTANTS.DESCRIPTION:
          executeScript(clearDescription);
          break;
        case CONSTANTS.GET_HELP_BUTTON:
          executeScript(clearHelpButton);
          break;
        case CONSTANTS.TEST_CASES:
          executeScript(clearTestCases);
          break;
        case CONSTANTS.TEST_OUTPUT:
          executeScript(clearTestOutput);
          break;
        default:
          executeScript(clearAllHelpers);
          break;
      }
    });
}

function addElements(challenge) {
  executeScript(addDescription, '`' + challenge.description + '`');
  executeScript(addInstructions, '`' + challenge.instructions + '`');
}

function clearHelpers(challenge) {
  removeElements(challenge);
  addElements(challenge);
}

function isURLWhitelisted(url) {
  if (!url) return false;

  for (let i = 0; i < responsiveWebDesignChallenges.length; i++) {
    if (url.startsWith(responsiveWebDesignChallenges[i].url)) return true;
  }

  return false;
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.storage.local.get('challengeIndex', function (items) {
    chrome.storage.local.get('fccUtilityOn', function (_items) {
      const switchOn = _items.fccUtilityOn;
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        if (!switchOn) return;
        if (isURLWhitelisted(tabs[0]?.url)) {
          if (
            tabs[0]?.url.startsWith(
              responsiveWebDesignChallenges[items.challengeIndex].url
            )
          )
            clearHelpers(responsiveWebDesignChallenges[items.challengeIndex]);
          else if (
            tabs[0]?.url.startsWith(
              responsiveWebDesignChallenges[items.challengeIndex + 1].url
            )
          ) {
            clearHelpers(
              responsiveWebDesignChallenges[items.challengeIndex + 1]
            );
            chrome.storage.local.set({
              challengeIndex: items.challengeIndex + 1,
            });
          } else {
            chrome.tabs.update({
              url: responsiveWebDesignChallenges[items.challengeIndex].url,
            });
            clearHelpers(responsiveWebDesignChallenges[items.challengeIndex]);
          }
        } else {
          chrome.tabs.update({
            url: responsiveWebDesignChallenges[items.challengeIndex].url,
          });
          clearHelpers(responsiveWebDesignChallenges[items.challengeIndex]);
        }
      });
    });
  });
});

(function () {
  chrome.storage.local.set({ challengeIndex: 0 });
  chrome.storage.local.set({ fccUtilityOn: false });
})();
