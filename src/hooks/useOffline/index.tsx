import React, { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import OfflineView from './OfflineView';

const withOffline = (WrappComponent : React.FC) => (props : any) => {
    const [connected, setConnected] = useState<boolean | null>(true);
    useEffect(() => {
        const NetInfoSubcribtion = NetInfo.addEventListener(state => {
            setConnected(state.isConnected);
        })
        return () => {
            NetInfoSubcribtion();
        }
    }, [])
    const Component = WrappComponent;
    
    if (connected) {
        return <Component {...props}/>
    } else {
        return <OfflineView />
    }
}

export default withOffline;