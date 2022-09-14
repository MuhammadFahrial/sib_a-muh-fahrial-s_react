import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // componentDidCatch ()
    // Mulai React 16, kita bisa menggunakan class method ini. Ketika terjadi kesalahan, jenis kesalahan apapun, kita sekarang bisa menampilkan pesan error yang lebih baik

    // Example "componentStack"
    // in ComponentThatThrows (created by App)
    // in div (created by App)
    // in App

    logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // you can render any custom fallback UI
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}
