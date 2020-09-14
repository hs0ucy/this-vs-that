import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
The \`stopImmediatePropagation()\` method prevents the event from bubbling up to the parent elements like the \`stopPropagation()\` method does. 
However, it prevents other listeners of the same event from being called.

Let's say that we attach different listeners that handle the same event to the same element. When the event occurs, 
the listeners are executed in the same order as they were added.

If we call the \`stopImmediatePropagation()\` method in a given listener, then the remaining listeners will not be called.

In the following sample code, there are 3 listeners that handle the click event of a button represented by \`button\`.

~~~ javascript
button.addEventListner('click', function() {
    console.log('foo');
});

button.addEventListner('click', function(e) {
    console.log('bar');
    e.stopImmediatePropagation();
});

button.addEventListner('click', function() {
    console.log('baz');
});
~~~

Clicking the button will print \`foo\` and \`bar\` in the _Console_. We won't see \`baz\` because the last listener isn't called.

## More

* [event bubbling vs capturing](/event-bubbling-vs-capturing)
* [event.preventDefault vs return false](/event-prevent-default-vs-return-false)
`}
/>
    );
};
