import { DataTypes, Sequelize } from "sequelize";
import { Dbconfig } from "../config/Dbconfig";
import { timeStamp } from "console";
import sequelize from "sequelize";


export const Casemodel = () => {
    const casetbl = Dbconfig().define(
        'caselist',
        {
            'law_case_id_pk': {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            'law_case_no': {
                type: DataTypes.TEXT,

            },
            'law_case_party_name': {
                type: DataTypes.TEXT,

            },
            'law_case_file_date': {
                type: DataTypes.DATE,

            },
            'law_case_opposition_party': {
                type: DataTypes.TEXT,

            },
            'law_court_desc': {
                type: DataTypes.TEXT,

            },
            'entry_time': {
                type: DataTypes.DATE,

            },
            'entry_ip': {
                type: DataTypes.TEXT,

            },
            'update_time': {
                type: DataTypes.DATE,

            },
            'update_ip': {
                type: DataTypes.TEXT,

            },
            'law_role_id_fk': {
                type: DataTypes.TEXT,

            },
            'active_status': {
                type: DataTypes.SMALLINT,

            },
            'case_open_close_status': {
                type: DataTypes.SMALLINT,

            },

        },
        {
            timestamps: false,
            tableName: 'law_case'

        }
    );

    
    (async()=> {
       let dt = await Dbconfig().sync();
    //    console.log(dt);
    })();
    return casetbl;
}
