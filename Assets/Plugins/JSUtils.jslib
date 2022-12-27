
mergeInto(LibraryManager.library, {
    OpenURL: function (url) {
      window.open(Pointer_stringify(url), '_self');
    }
});
