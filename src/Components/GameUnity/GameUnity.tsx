import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./gameunity.module.scss";
import classnames from "classnames";

function GameUnity() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/assets/jogo/Build/gameTic.loader.js",
    dataUrl: "/assets/jogo/Build/gameTic.data",
    frameworkUrl: "/assets/jogo/Build/gameTic.framework.js",
    codeUrl: "/assets/jogo/Build/gameTic.wasm",
  });

  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className={classnames(styles["container"])}>
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity
        className={classnames(styles["unity"])}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export { GameUnity };
