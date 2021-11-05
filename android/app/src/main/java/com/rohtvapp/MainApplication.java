package com.rohtvapp;

import android.app.Application;
import android.content.Context;
import android.net.Uri;
import android.view.ViewManager;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.rohtvapp.ROHBitMovinPlayerPackage.ROHBitMovinPlayerPackage;

// import org.unimodules.adapters.react.ReactAdapterPackage;
// import org.unimodules.adapters.react.ModuleRegistryAdapter;
// import org.unimodules.adapters.react.ReactModuleRegistryProvider;
// import org.unimodules.core.interfaces.Package;
// import org.unimodules.core.interfaces.SingletonModule;

import com.facebook.react.bridge.JSIModulePackage;
// import com.swmansion.reanimated.ReanimatedJSIModulePackage;

import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;
import javax.annotation.Nullable;

public class MainApplication extends Application implements ReactApplication {
  // private final ReactModuleRegistryProvider mModuleRegistryProvider = new ReactModuleRegistryProvider(
  //   new BasePackageList().getPackageList()
  // );

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // packages.add(new ModuleRegistryAdapter(mModuleRegistryProvider));
      packages.add(new ROHBitMovinPlayerPackage());
      return packages;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }

    // @Override
    // protected JSIModulePackage getJSIModulePackage() {
    //   return new ReanimatedJSIModulePackage();
    // }

    @Override
    protected @Nullable String getJSBundleFile() {
      return super.getJSBundleFile();
      // if (BuildConfig.DEBUG) {
      // } else {
      //   // return UpdatesController.getInstance().getLaunchAssetFile();
      // }
    }

    @Override
    protected @Nullable String getBundleAssetName() {
      return super.getBundleAssetName();
      // if (BuildConfig.DEBUG) {
      // } else {
      //   // return UpdatesController.getInstance().getBundleAssetName();
      // }
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

}
