// import { observer } from "mobx-react";
// import React from "react";
// import { useLocation } from "react-router-dom";
// import { IHeaderStore } from "store/header";
// import { UIStore } from 'store/ui/uiStore';
// import { IMapDependencyToProps, Inject } from "../provider";
// import * as styles from "./styles.module.scss";

// export interface HeaderProps {
//   headerStore: IHeaderStore;
//   uiStore: UIStore;
// }

// const mapDependencyToProps: IMapDependencyToProps<HeaderProps> = (
//   container,
//   names
// ) => {
//   return {
//     headerStore: container.get<IHeaderStore>(names.HEADER_STORE),
//     uiStore: container.get<UIStore>(names.UI_STORE),
//   };
// };

// export const Header = Inject(mapDependencyToProps)(
//   observer(({ headerStore, uiStore }) => {
//     const { pathname } = useLocation()

//     React.useEffect(() => {
//       headerStore.fetch();
//     }, []);

//     return (
//       <div className={styles.wrapper}>
//         {pathname.includes('risk-settings') && <img
//           src={require(`./images/${uiStore.burgerMenuExtended ? 'close.svg' : 'bars.svg'}`)}
//           onClick={uiStore.burgerMenuExtended ? uiStore.collapseMenu : uiStore.extendMenu}
//           className={styles.toggleMenuIcon}
//         />}

//         <div className={styles.logo} />
//         <span className={styles.title}>{'Информационно-аналитическая система контрольного блока (ИАС КБ ФНС)'}</span>
//         <div className={styles.userCard}>
//           <span className={styles.username}>{headerStore.fullName}</span>
//           <img src={require(`./images/user.svg`)} className={styles.avatar} />
//         </div>
//       </div>
//     );
//   })
// );
