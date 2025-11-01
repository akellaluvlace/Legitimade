// src/types/navigation.ts
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Landing: undefined;
  Scanner: undefined;
  Result: { qrData: string };
};

export type LandingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Landing'>;
export type ScannerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Scanner'>;
export type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Result'>;
export type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;
