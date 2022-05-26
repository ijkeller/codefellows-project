## Codefellows project

#### **Typing Tutor Keyboard** 

Isaiah Keller

Thank you for your interest in this project.  I decided to work on another feature to a previous product at MVP.  The overall project is a coding based typing tutor.  This app feature is a keyboard that shows keys pressed on screen.


***

### Versions

- v1 - Keyboard displayed properly on screen
- v2 - creating button pushdown effect on hover in css
- v3 - adding in js to log keydown and keyup events, adding id's to all keys in html to match the js key id's.
- v4, MVP - adding textarea to page to show text entered.
- V5, Post-MVP - further css to make the keyboard effects pop more.

***

### Libraries, Frameworks, and Packages

*No libraries, frameworks, or packages were used in this project.*

***
### Code

All code is original except for a bug fix found on [Stack Overflow](https://stackoverflow.com/questions/6140632/how-to-handle-tab-in-textarea)
```js
document.querySelector("textarea").addEventListener('keydown', function (e) {
    if (e.keyCode === 9) { // tab was pressed
        // get caret position/selection
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var target = e.target;
        var value = target.value;

        // set textarea value to: text before caret + tab + text after caret
        target.value = value.substring(0, start)
            + "\t"
            + value.substring(end);

        // put caret at right position again (add one for the tab)
        this.selectionStart = this.selectionEnd = start + 1;

        // prevent the focus lose
        e.preventDefault();
    }
}, false);
```

***