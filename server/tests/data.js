module.exports = {
  unfilteredRisksWithrejectedRisks: {
    'AUTO': {
      'POWERSOFT': {
        'value': { 'unmappedRiskData': 'data' },
        'status': 'fulfilled'
      },
      'AVIVA': {
        'error': { 'unmappedRiskData': 'data' },
        'status': 'rejected'
      }
    },
    'HAB': {
      'POWERSOFT': {
        'value': { 'unmappedRiskData': 'data' },
        'status': 'fulfilled'
      },
      'AVIVA': {
        'error': { 'unmappedRiskData': 'data' },
        'status': 'rejected'
      }
    }
  },
  unfilteredRisksWithoutrejectedRisks: {
    'AUTO': {
      'POWERSOFT': {
        'value': { 'unmappedRiskData': 'data' },
        'status': 'fulfilled'
      },
      'AVIVA': {
        'value': { 'unmappedRiskData': 'data' },
        'status': 'fulfilled'
      }
    },
    'HAB': {
      'POWERSOFT': {
        'value': { 'unmappedRiskData': 'data' },
        'status': 'fulfilled'
      },
      'AVIVA': {
        'value': { 'unmappedRiskData': 'data' },
        'status': 'fulfilled'
      }
    }
  },
  unfilteredRisksWithoutResolvedRisks: {
    'AUTO': {
      'POWERSOFT': {
        'value': { 'unmappedRiskData': 'data' },
        'status': 'rejected'
      },
      'AVIVA': {
        'value': { 'unmappedRiskData': 'data' },
        'status': 'rejected'
      }
    },
    'HAB': {
      'POWERSOFT': {
        'value': { 'unmappedRiskData': 'data' },
        'status': 'rejected'
      },
      'AVIVA': {
        'value': { 'unmappedRiskData': 'data' },
        'status': 'rejected'
      }
    }
  },
  AutoMappedResponse: {
    'vehicles': {
      '1': {
        'info': 'DODGE/RAM TRUCK/VAN DAKOTA SLT V8 CLUB C 2007',
        'endorsements': {
          '20': {
            'description': 'SEF20 - Loss of Use',
            'CGU': { 'premium': 65 }
          },
          '27': {
            'description': 'SEF27 - Legal Liability for Damage to Non-Owned Automobiles',
            'CGU': { 'premium': 15 }
          },
          '35': {
            'description': 'SEF35 - Road Assist Program',
            'CGU': { 'premium': 70 }
          },
          '44': {
            'description': 'Family Protection Endorsement',
            'CGU': { 'premium': 25 },
            'PEMB': { 'premium': 32 },
            'ROY': { 'premium': 71 },
            'WU': { 'premium': 25 }
          },
          'PAK06': {
            'description': 'PAK06 - Physical Damage Extension (OPCF20, OPCF27)',
            'PEMB': { 'premium': 65 }
          },
          '13D': {
            'description': 'SEF13D - Limited Glass Endorsement',
            'PEMB': { 'premium': -72 },
            'ROY': { 'premium': -48 },
            'WU': { 'premium': -94 }
          },
          'PAK09': {
            'description': 'PAK09 - Endorsement Package (OPCF20, OPCF27, OPCF35)',
            'ROY': { 'premium': 45 },
            'WU': { 'premium': 55 }
          }
        },
        'discounts': {
          'DISCO': {
            'description': 'Conviction free discount (CVPD)',
            'CGU': { 'percenrage': '10' }
          },
          'DISMI': {
            'description': 'Age Discount',
            'PEMB': { 'percenrage': 'Multi' }
          },
          'DISNC': {
            'description': 'Violation Free Discount',
            'PEMB': { 'percenrage': '5' }
          },
          'DISDR': {
            'description': 'Experience Discount',
            'ROY': { 'percenrage': '5' }
          },
          'DISCF': {
            'description': 'Convictions Free Discount',
            'ROY': { 'percenrage': '15' }
          },
          'DISNP': {
            'description': 'New Business Discount',
            'WU': { 'percenrage': '5' }
          }
        },
        'surcharges': {},
        'occDrivers': {},
        'CGU': {
          'QTNumber': '_59D09XGWJ',
          'IDControl': '_59D09XGWK',
          'InsurerCode': 'CGU',
          'InsurerName': 'Aviva Insurance Commpany of Canada',
          'AutomobileID': 1,
          'VehStatus': 'OK',
          'Vehcode': '275502',
          'Year': 2007,
          'Make': 'DODGE/RAM TRUCK/VAN',
          'Model': 'DAKOTA SLT V8 CLUB C',
          'RateVRG1': 8,
          'RateVRG2': 26,
          'RateVRG3': 26,
          'RateVRG4': null,
          'TerritoryCode': '01B',
          'TerritoryStat': '114',
          'TerritoryDescription': 'CALGARY',
          'PODrno': 1,
          'POName': 'Ahment Kamal',
          'RateDR1': '04',
          'RateDR2': '04',
          'RateDR3': 'O',
          'RateClass': '07',
          'RatePremium': 2483,
          '_id': '5b5ef89878faee000e04d5b1',
          'SurchargeSet': { 'SurchargeItem': [] },
          'DiscountSet': {
            'DiscountItem': [
              {
                'ItemCode': 'DISCO',
                'ItemVNO': 1,
                'ItemDRNO': 1,
                'ItemDescript': 'Conviction free discount (CVPD)',
                'ItemPercentage': '10',
                '_id': '5b5ef89878faee000e04d5b2'
              }
            ]
          },
          'EndorsementSet': {
            'EndorsementItem': [
              {
                'EndCode': '44',
                'EndDescript': 'Family Protection Endorsement',
                'EndLimit': 1000000,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': 25,
                '_id': '5b5ef89878faee000e04d5b6'
              },
              {
                'EndCode': '20',
                'EndDescript': 'SEF20 - Loss of Use',
                'EndLimit': 2000,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': 65,
                '_id': '5b5ef89878faee000e04d5b5'
              },
              {
                'EndCode': '27',
                'EndDescript': 'SEF27 - Legal Liability for Damage to Non-Owned Automobiles',
                'EndLimit': 50000,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': 15,
                '_id': '5b5ef89878faee000e04d5b4'
              },
              {
                'EndCode': '35',
                'EndDescript': 'SEF35 - Road Assist Program',
                'EndLimit': null,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': 70,
                '_id': '5b5ef89878faee000e04d5b3'
              }
            ]
          },
          'OtherPremiumEstimate': {
            'TPL200K': 0,
            'TPL300K': 0,
            'TPL500K': 0,
            'TPL1M': 0,
            'TPL2M': 0,
            'TPL3M': 0,
            'TPL4M': 0,
            'TPL5M': 0,
            'DC0': 0,
            'DC300': 0,
            'AP100': 0,
            'AP250': 0,
            'AP500': 0,
            'AP1000': 0,
            'AP1500': 0,
            'AP2000': 0,
            'AP2500': 0,
            'Coll100': 0,
            'Coll250': 0,
            'Coll500': 0,
            'Coll1000': 0,
            'Coll1500': 0,
            'Coll2000': 0,
            'Coll2500': 0,
            'Comp100': 0,
            'Comp250': 0,
            'Comp500': 0,
            'Comp1000': 0,
            'Comp1500': 0,
            'SP100': 0,
            'SP250': 0,
            'SP500': 0,
            'SP1000': 0,
            'SP1500': 0,
            'BI200K': 0,
            'BI300K': 0,
            'BI500K': 0,
            'BI1M': 0,
            'BI2M': 0,
            'BI3M': 0,
            'BI4M': 0,
            'BI5M': 0,
            'PD200K': 0,
            'PD300K': 0,
            'PD500K': 0,
            'PD1M': 0,
            'PD2M': 0,
            'PD3M': 0,
            'PD4M': 0,
            'PD5M': 0
          },
          'CoverageRate': {
            'BILimit': 1000000,
            'BIPremium': 1515,
            'PDLimit': 1000000,
            'PDPremium': 0,
            'ABLimit': 0,
            'ABPremium': 77,
            'UIMPremium': 0,
            'APDeductible': 0,
            'APPremium': 0,
            'CollDeductible': 1000,
            'CollPremium': 614,
            'CompDeductible': 1000,
            'CompPremium': 384,
            'SPDeductible': 0,
            'SPPremium': 0
          },
          'OccDrivers': [],
          '$$hashKey': 'object:11956'
        },
        'PEMB': {
          'QTNumber': '_59D09XGWJ',
          'IDControl': '_59D09XGWK',
          'InsurerCode': 'PEMB',
          'InsurerName': 'Pembridge Insurance',
          'AutomobileID': 1,
          'VehStatus': 'OK',
          'Vehcode': '275502',
          'Year': 2007,
          'Make': 'DODGE/RAM TRUCK/VAN',
          'Model': 'DAKOTA SLT V8 CLUB C',
          'RateVRG1': 8,
          'RateVRG2': 26,
          'RateVRG3': 26,
          'RateVRG4': null,
          'TerritoryCode': '05',
          'TerritoryStat': '103',
          'TerritoryDescription': 'Calgary / Grand Prairie',
          'PODrno': 1,
          'POName': 'Ahment Kamal',
          'RateDR1': '06',
          'RateDR2': '',
          'RateDR3': 'O',
          'RateClass': '07',
          'RatePremium': 1936,
          '_id': '5b5ef89878faee000e04d591',
          'SurchargeSet': { 'SurchargeItem': [] },
          'DiscountSet': {
            'DiscountItem': [
              {
                'ItemCode': 'DISMI',
                'ItemVNO': 1,
                'ItemDRNO': 1,
                'ItemDescript': 'Age Discount',
                'ItemPercentage': 'Multi',
                '_id': '5b5ef89878faee000e04d593'
              },
              {
                'ItemCode': 'DISNC',
                'ItemVNO': 1,
                'ItemDRNO': 1,
                'ItemDescript': 'Violation Free Discount',
                'ItemPercentage': '5',
                '_id': '5b5ef89878faee000e04d592'
              }
            ]
          },
          'EndorsementSet': {
            'EndorsementItem': [
              {
                'EndCode': '44',
                'EndDescript': 'Family Protection Endorsement',
                'EndLimit': 1000000,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': 32,
                '_id': '5b5ef89878faee000e04d596'
              },
              {
                'EndCode': 'PAK06',
                'EndDescript': 'PAK06 - Physical Damage Extension (OPCF20, OPCF27)',
                'EndLimit': null,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': 65,
                '_id': '5b5ef89878faee000e04d595'
              },
              {
                'EndCode': '13D',
                'EndDescript': 'SEF13D - Limited Glass Endorsement',
                'EndLimit': null,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': -72,
                '_id': '5b5ef89878faee000e04d594'
              }
            ]
          },
          'OtherPremiumEstimate': {
            'TPL200K': 0,
            'TPL300K': 0,
            'TPL500K': 0,
            'TPL1M': 0,
            'TPL2M': 0,
            'TPL3M': 0,
            'TPL4M': 0,
            'TPL5M': 0,
            'DC0': 0,
            'DC300': 0,
            'AP100': 0,
            'AP250': 0,
            'AP500': 0,
            'AP1000': 0,
            'AP1500': 0,
            'AP2000': 0,
            'AP2500': 0,
            'Coll100': 0,
            'Coll250': 0,
            'Coll500': 0,
            'Coll1000': 0,
            'Coll1500': 0,
            'Coll2000': 0,
            'Coll2500': 0,
            'Comp100': 0,
            'Comp250': 0,
            'Comp500': 0,
            'Comp1000': 0,
            'Comp1500': 0,
            'SP100': 0,
            'SP250': 0,
            'SP500': 0,
            'SP1000': 0,
            'SP1500': 0,
            'BI200K': 0,
            'BI300K': 0,
            'BI500K': 0,
            'BI1M': 0,
            'BI2M': 0,
            'BI3M': 0,
            'BI4M': 0,
            'BI5M': 0,
            'PD200K': 0,
            'PD300K': 0,
            'PD500K': 0,
            'PD1M': 0,
            'PD2M': 0,
            'PD3M': 0,
            'PD4M': 0,
            'PD5M': 0
          },
          'CoverageRate': {
            'BILimit': 1000000,
            'BIPremium': 1412,
            'PDLimit': 1000000,
            'PDPremium': 0,
            'ABLimit': 0,
            'ABPremium': 89,
            'UIMPremium': 0,
            'APDeductible': 0,
            'APPremium': 0,
            'CollDeductible': 1000,
            'CollPremium': 338,
            'CompDeductible': 1000,
            'CompPremium': 263,
            'SPDeductible': 0,
            'SPPremium': 0
          },
          'OccDrivers': [],
          '$$hashKey': 'object:11948'
        },
        'ROY': {
          'QTNumber': '_59D09XGWJ',
          'IDControl': '_59D09XGWK',
          'InsurerCode': 'ROY',
          'InsurerName': 'Royal and Sun Alliance Canada',
          'AutomobileID': 1,
          'VehStatus': 'OK',
          'Vehcode': '275502',
          'Year': 2007,
          'Make': 'DODGE/RAM TRUCK/VAN',
          'Model': 'DAKOTA SLT V8 CLUB C',
          'RateVRG1': 7,
          'RateVRG2': 27,
          'RateVRG3': 22,
          'RateVRG4': null,
          'TerritoryCode': '27',
          'TerritoryStat': '112',
          'TerritoryDescription': 'Calgary',
          'PODrno': 1,
          'POName': 'Ahment Kamal',
          'RateDR1': '04',
          'RateDR2': '',
          'RateDR3': 'O',
          'RateClass': '07',
          'RatePremium': 2428,
          '_id': '5b5ef89878faee000e04d57b',
          'SurchargeSet': { 'SurchargeItem': [] },
          'DiscountSet': {
            'DiscountItem': [
              {
                'ItemCode': 'DISDR',
                'ItemVNO': 1,
                'ItemDRNO': 1,
                'ItemDescript': 'Experience Discount',
                'ItemPercentage': '5',
                '_id': '5b5ef89878faee000e04d57d'
              },
              {
                'ItemCode': 'DISCF',
                'ItemVNO': 1,
                'ItemDRNO': 1,
                'ItemDescript': 'Convictions Free Discount',
                'ItemPercentage': '15',
                '_id': '5b5ef89878faee000e04d57c'
              }
            ]
          },
          'EndorsementSet': {
            'EndorsementItem': [
              {
                'EndCode': '44',
                'EndDescript': 'Family Protection Endorsement',
                'EndLimit': 1000000,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': 71,
                '_id': '5b5ef89878faee000e04d580'
              },
              {
                'EndCode': 'PAK09',
                'EndDescript': 'PAK09 - Endorsement Package (OPCF20, OPCF27, OPCF35)',
                'EndLimit': null,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': 45,
                '_id': '5b5ef89878faee000e04d57f'
              },
              {
                'EndCode': '13D',
                'EndDescript': 'SEF13D - Limited Glass Endorsement',
                'EndLimit': null,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': -48,
                '_id': '5b5ef89878faee000e04d57e'
              }
            ]
          },
          'OtherPremiumEstimate': {
            'TPL200K': 0,
            'TPL300K': 0,
            'TPL500K': 0,
            'TPL1M': 0,
            'TPL2M': 0,
            'TPL3M': 0,
            'TPL4M': 0,
            'TPL5M': 0,
            'DC0': 0,
            'DC300': 0,
            'AP100': 0,
            'AP250': 0,
            'AP500': 0,
            'AP1000': 0,
            'AP1500': 0,
            'AP2000': 0,
            'AP2500': 0,
            'Coll100': 0,
            'Coll250': 0,
            'Coll500': 0,
            'Coll1000': 0,
            'Coll1500': 0,
            'Coll2000': 0,
            'Coll2500': 0,
            'Comp100': 0,
            'Comp250': 0,
            'Comp500': 0,
            'Comp1000': 0,
            'Comp1500': 0,
            'SP100': 0,
            'SP250': 0,
            'SP500': 0,
            'SP1000': 0,
            'SP1500': 0,
            'BI200K': 0,
            'BI300K': 0,
            'BI500K': 0,
            'BI1M': 0,
            'BI2M': 0,
            'BI3M': 0,
            'BI4M': 0,
            'BI5M': 0,
            'PD200K': 0,
            'PD300K': 0,
            'PD500K': 0,
            'PD1M': 0,
            'PD2M': 0,
            'PD3M': 0,
            'PD4M': 0,
            'PD5M': 0
          },
          'CoverageRate': {
            'BILimit': 1000000,
            'BIPremium': 1654,
            'PDLimit': 1000000,
            'PDPremium': 0,
            'ABLimit': 0,
            'ABPremium': 82,
            'UIMPremium': 0,
            'APDeductible': 0,
            'APPremium': 0,
            'CollDeductible': 1000,
            'CollPremium': 730,
            'CompDeductible': 1000,
            'CompPremium': 320,
            'SPDeductible': 0,
            'SPPremium': 0
          },
          'OccDrivers': [],
          '$$hashKey': 'object:11952'
        },
        'WU': {
          'QTNumber': '_59D09XGWJ',
          'IDControl': '_59D09XGWK',
          'InsurerCode': 'WU',
          'InsurerName': 'INTACT Insurance',
          'AutomobileID': 1,
          'VehStatus': 'OK',
          'Vehcode': '275502',
          'Year': 2007,
          'Make': 'DODGE/RAM TRUCK/VAN',
          'Model': 'DAKOTA SLT V8 CLUB C',
          'RateVRG1': 6,
          'RateVRG2': 24,
          'RateVRG3': 20,
          'RateVRG4': null,
          'TerritoryCode': '01',
          'TerritoryStat': '101',
          'TerritoryDescription': 'Calgary',
          'PODrno': 1,
          'POName': 'Ahment Kamal',
          'RateDR1': '00',
          'RateDR2': '',
          'RateDR3': 'O',
          'RateClass': '07',
          'RatePremium': 2513,
          '_id': '5b5ef89878faee000e04d565',
          'SurchargeSet': { 'SurchargeItem': [] },
          'DiscountSet': {
            'DiscountItem': [
              {
                'ItemCode': 'DISNP',
                'ItemVNO': 1,
                'ItemDRNO': 1,
                'ItemDescript': 'New Business Discount',
                'ItemPercentage': '5',
                '_id': '5b5ef89878faee000e04d566'
              }
            ]
          },
          'EndorsementSet': {
            'EndorsementItem': [
              {
                'EndCode': '44',
                'EndDescript': 'Family Protection Endorsement',
                'EndLimit': 1000000,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': 25,
                '_id': '5b5ef89878faee000e04d569'
              },
              {
                'EndCode': 'PAK09',
                'EndDescript': 'Plus Pac - Option B',
                'EndLimit': 2500,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': 55,
                '_id': '5b5ef89878faee000e04d568'
              },
              {
                'EndCode': '13D',
                'EndDescript': 'SEF13D - Limited Glass Endorsement',
                'EndLimit': null,
                'EndIncluded': 'F',
                'EndNoCharge': 'F',
                'EndPremium': -94,
                '_id': '5b5ef89878faee000e04d567'
              }
            ]
          },
          'OtherPremiumEstimate': {
            'TPL200K': 0,
            'TPL300K': 0,
            'TPL500K': 0,
            'TPL1M': 0,
            'TPL2M': 0,
            'TPL3M': 0,
            'TPL4M': 0,
            'TPL5M': 0,
            'DC0': 0,
            'DC300': 0,
            'AP100': 0,
            'AP250': 0,
            'AP500': 0,
            'AP1000': 0,
            'AP1500': 0,
            'AP2000': 0,
            'AP2500': 0,
            'Coll100': 0,
            'Coll250': 0,
            'Coll500': 0,
            'Coll1000': 0,
            'Coll1500': 0,
            'Coll2000': 0,
            'Coll2500': 0,
            'Comp100': 0,
            'Comp250': 0,
            'Comp500': 0,
            'Comp1000': 0,
            'Comp1500': 0,
            'SP100': 0,
            'SP250': 0,
            'SP500': 0,
            'SP1000': 0,
            'SP1500': 0,
            'BI200K': 0,
            'BI300K': 0,
            'BI500K': 0,
            'BI1M': 0,
            'BI2M': 0,
            'BI3M': 0,
            'BI4M': 0,
            'BI5M': 0,
            'PD200K': 0,
            'PD300K': 0,
            'PD500K': 0,
            'PD1M': 0,
            'PD2M': 0,
            'PD3M': 0,
            'PD4M': 0,
            'PD5M': 0
          },
          'CoverageRate': {
            'BILimit': 1000000,
            'BIPremium': 3089,
            'PDLimit': 1000000,
            'PDPremium': 0,
            'ABLimit': 0,
            'ABPremium': 41,
            'UIMPremium': 0,
            'APDeductible': 0,
            'APPremium': 0,
            'CollDeductible': 1000,
            'CollPremium': 842,
            'CompDeductible': 1000,
            'CompPremium': 375,
            'SPDeductible': 0,
            'SPPremium': 0
          },
          'OccDrivers': [],
          '$$hashKey': 'object:11960'
        }
      }
    },
    'billingPlans': {
      'CGU': {
        'PlanType': 'PAC - Monthly',
        'PlanTerm': '12 Months',
        'PlanPremium': 2483,
        'PlanTax': 0,
        'PlanServiceChargeAmount': 74.49,
        'PlanServiceChargePercentage': 3,
        'PlanTotal': 2557.49,
        'PlanDownPayment': 0,
        'PlanInstallment': 213.12,
        'Installments': 12,
        '_id': '5b5ef89878faee000e04d59f',
        'PlanSchedule': {
          'InstallmentAmount': [
            213.12,
            213.12,
            213.12,
            213.12,
            213.12,
            213.12,
            213.12,
            213.12,
            213.12,
            213.12,
            213.12,
            213.17
          ],
          'InstallmentDate': [
            '2018-05-14T00:00:00.000Z',
            '2018-06-14T00:00:00.000Z',
            '2018-07-14T00:00:00.000Z',
            '2018-08-14T00:00:00.000Z',
            '2018-09-14T00:00:00.000Z',
            '2018-10-14T00:00:00.000Z',
            '2018-11-14T00:00:00.000Z',
            '2018-12-14T00:00:00.000Z',
            '2019-01-14T00:00:00.000Z',
            '2019-02-14T00:00:00.000Z',
            '2019-03-14T00:00:00.000Z',
            '2019-04-14T00:00:00.000Z'
          ]
        }
      },
      'PEMB': {
        'PlanType': 'PAC - Monthly',
        'PlanTerm': '12 Months',
        'PlanPremium': 1936,
        'PlanTax': 0,
        'PlanServiceChargeAmount': 58.08,
        'PlanServiceChargePercentage': 3,
        'PlanTotal': 1994.08,
        'PlanDownPayment': 332.35,
        'PlanInstallment': 166.17,
        'Installments': 11,
        '_id': '5b5ef89878faee000e04d582',
        'PlanSchedule': {
          'InstallmentAmount': [
            332.35,
            166.17,
            166.17,
            166.17,
            166.17,
            166.17,
            166.17,
            166.17,
            166.17,
            166.17,
            166.2
          ],
          'InstallmentDate': [
            '2018-05-14T00:00:00.000Z',
            '2018-06-14T00:00:00.000Z',
            '2018-07-14T00:00:00.000Z',
            '2018-08-14T00:00:00.000Z',
            '2018-09-14T00:00:00.000Z',
            '2018-10-14T00:00:00.000Z',
            '2018-11-14T00:00:00.000Z',
            '2018-12-14T00:00:00.000Z',
            '2019-01-14T00:00:00.000Z',
            '2019-02-14T00:00:00.000Z',
            '2019-03-14T00:00:00.000Z'
          ]
        }
      },
      'ROY': {
        'PlanType': 'Econopay - Monthly',
        'PlanTerm': '12 Months',
        'PlanPremium': 2428,
        'PlanTax': 0,
        'PlanServiceChargeAmount': 60.7,
        'PlanServiceChargePercentage': 2.5,
        'PlanTotal': 2488.7,
        'PlanDownPayment': 404.67,
        'PlanInstallment': 208.4,
        'Installments': 11,
        '_id': '5b5ef89878faee000e04d56b',
        'PlanSchedule': {
          'InstallmentAmount': [
            404.67,
            208.4,
            208.4,
            208.4,
            208.4,
            208.4,
            208.4,
            208.4,
            208.4,
            208.4,
            208.43
          ],
          'InstallmentDate': [
            '2018-05-14T00:00:00.000Z',
            '2018-06-14T00:00:00.000Z',
            '2018-07-14T00:00:00.000Z',
            '2018-08-14T00:00:00.000Z',
            '2018-09-14T00:00:00.000Z',
            '2018-10-14T00:00:00.000Z',
            '2018-11-14T00:00:00.000Z',
            '2018-12-14T00:00:00.000Z',
            '2019-01-14T00:00:00.000Z',
            '2019-02-14T00:00:00.000Z',
            '2019-03-14T00:00:00.000Z'
          ]
        }
      },
      'WU': {
        'PlanType': 'Monthly Pay Option',
        'PlanTerm': '12 Months',
        'PlanPremium': 2513,
        'PlanTax': 0,
        'PlanServiceChargeAmount': 100.52,
        'PlanServiceChargePercentage': 4,
        'PlanTotal': 2613.52,
        'PlanDownPayment': 0,
        'PlanInstallment': 217.79,
        'Installments': 12,
        '_id': '5b5ef89878faee000e04d554',
        'PlanSchedule': {
          'InstallmentAmount': [
            217.79,
            217.79,
            217.79,
            217.79,
            217.79,
            217.79,
            217.79,
            217.79,
            217.79,
            217.79,
            217.79,
            217.83
          ],
          'InstallmentDate': [
            '2018-05-14T00:00:00.000Z',
            '2018-06-14T00:00:00.000Z',
            '2018-07-14T00:00:00.000Z',
            '2018-08-14T00:00:00.000Z',
            '2018-09-14T00:00:00.000Z',
            '2018-10-14T00:00:00.000Z',
            '2018-11-14T00:00:00.000Z',
            '2018-12-14T00:00:00.000Z',
            '2019-01-14T00:00:00.000Z',
            '2019-02-14T00:00:00.000Z',
            '2019-03-14T00:00:00.000Z',
            '2019-04-14T00:00:00.000Z'
          ]
        }
      }
    }
  },
  RateObject: {
    provider: [
      {
        'name': 'POWERSOFT',
        'risk': [
          {
            'type': 'AUTO',
            'ref': '123456789963'
          }, {
            'type': 'HAB',
            'ref': '963987654321'
          }
        ],
        'selected': ['INT', 'WAN']
      }, {
        'name': 'AVIVA',
        'risk': [
          {
            'type': 'AUTO',
            'ref': '188856789963'
          }
        ],
        'selected': ['AV']
      }
    ]
  },
  ProviderControllers: {
    'AUTO': {
      'POWERSOFT': {
        'getAutoById': 'Function Reference',
        'getHabById': 'Function Reference',
        'OtherControl': 'Function Reference'
      },
      'AVIVA': {
        'getAutoById': 'Function Reference',
        'getHabById': 'Function Reference',
        'OtherControl': 'Function Reference'
      }
    },
    'HAB': {
      'POWERSOFT': {
        'getAutoById': 'Function Reference',
        'getHabById': 'Function Reference',
        'OtherControl': 'Function Reference'
      },
      'AVIVA': {
        'getAutoById': 'Function Reference',
        'getHabById': 'Function Reference',
        'OtherControl': 'Function Reference'
      }
    }

  },
  resolvedRisks: { 'HAB': { 'POWERSOFT': { 'key1': 'value1' } } }
};

