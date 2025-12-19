import { useState } from 'react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Chart, registerables } from 'chart.js'
import { FullscreenShell } from '../utils/modalHelpers'
Chart.register(...registerables)
import SiteIIncidents from './site-details/SiteIIncidents'
import SiteICorrectiveActions from './site-details/SiteICorrectiveActions'
import SiteIPreventiveActions from './site-details/SiteIPreventiveActions'
import SiteIOutOfSpecifications from './site-details/SiteIOutOfSpecifications'
import SiteIChangeControls from './site-details/SiteIChangeControls'
import SiteIDeviations from './site-details/SiteIDeviations'
import SiteIIIIncidents from './site-details/SiteIIIIncidents'
import SiteIIICorrectiveActions from './site-details/SiteIIICorrectiveActions'
import SiteIIIPreventiveActions from './site-details/SiteIIIPreventiveActions'
import SiteIIIOutOfSpecifications from './site-details/SiteIIIOutOfSpecifications'
import SiteIIIChangeControls from './site-details/SiteIIIChangeControls'
import SiteIIIDeviations from './site-details/SiteIIIDeviations'
import SiteVIncidents from './site-details/SiteVIncidents'
import SiteVCorrectiveActions from './site-details/SiteVCorrectiveActions'
import SiteVPreventiveActions from './site-details/SiteVPreventiveActions'
import SiteVOutOfSpecifications from './site-details/SiteVOutOfSpecifications'
import SiteVChangeControls from './site-details/SiteVChangeControls'
import SiteVDeviations from './site-details/SiteVDeviations'
import SiteIVIncidents from './site-details/SiteIVIncidents'
import SiteIVCorrectiveActions from './site-details/SiteIVCorrectiveActions'
import SiteIVPreventiveActions from './site-details/SiteIVPreventiveActions'
import SiteIVOutOfSpecifications from './site-details/SiteIVOutOfSpecifications'
import SiteIVChangeControls from './site-details/SiteIVChangeControls'
import SiteIVDeviations from './site-details/SiteIVDeviations'
import SiteIIIPQAMilestones from './site-details/SiteIIIPQAMilestones'
import QMSOverview from './QMSOverview'
const masterDataOverview = {
  categories: ['Incidents', 'CA', 'PA', 'Out of Specifications', 'Change Controls', 'Deviations'],
  sites: {
    'Site I': [
      { month: 'Jan', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Feb', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Mar', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Apr', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'May', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Jun', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Jul', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Aug', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Sep', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Oct', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Nov', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 }
    ],
    'Site III': [
      { month: 'Jan', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Feb', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Mar', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Apr', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'May', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Jun', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Jul', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Aug', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Sep', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Oct', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Nov', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 }
    ],
    'Site V': [
      { month: 'Jan', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Feb', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Mar', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Apr', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'May', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Jun', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Jul', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Aug', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Sep', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Oct', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 },
      { month: 'Nov', Incidents: 0, CA: 0, PA: 0, 'Out of Specifications': 0, 'Change Controls': 0, Deviations: 0 }
    ]
  }
};
const metricsData = {
  'SITE-I': {
    'Incidents': { total: 262, period: 'Jan-Nov 2025', improvement: '10%', from: 20, to: 18, label: 'Closure Days Reduced' },
    'CA': { total: 89, period: 'Jan-Nov 2025', improvement: '54%', from: 91, to: 42, label: 'Avg Days to Close Reduced' },
    'PA': { total: 29, period: 'Jan-Nov 2025', improvement: '60%', from: 135, to: 54, label: 'Processing Time Reduced' },
    'Out of Specifications': { total: 259, period: 'Apr-Nov 2025', improvement: '49%', from: 21, to: 17, avg: 21, latest: 17, label: 'Improvement' },
    'Change Controls': { total: 492, period: 'Jan-Nov 2025', improvement: '13%', from: 46, to: 40, label: 'Closure Days Reduced' },
    'Deviations': { 
      total: 30, 
      period: 'Jan-Nov 2025', 
      improvement: '31%', 
      from: 87, 
      to: 60, 
      label: 'Avg Closure Days Reduced', 
      janJune: { count: 12, avgClosure: 87, open: 3 }, 
      julyNov: { count: 18, avgClosure: 60, open: 6 } 
    },
    'Mastering': { 
      total: 893, 
      period: 'Jan-Nov 2025', 
      improvement: '-15.1%', 
      from: 483, 
      to: 410, 
      label: 'Change',
      isSpecial: true,
      janJune: { total: 483, label: '6 months total' },
      julyNov: { total: 410, label: '5 months total' }
    }
  },
  'SITE-III': {
    'Incidents': { total: 82, period: 'Jan-Nov 2025', improvement: '36%', from: 25, to: 16, label: 'Closure Days Reduced' },
    'CA': { total: 52, period: 'Jan-Nov 2025', improvement: '16%', from: 56, to: 47, label: 'Avg Days to Close Reduced' },
    'PA': { total: 66, period: 'Jan-Nov 2025', improvement: '6%', from: 36, to: 34, label: 'Processing Time Reduced' },
    'Out of Specifications': { total: 159, period: 'Apr-Nov 2025', improvement: '49%', from: 14, to: 9, avg: 14, latest: 9, label: 'Improvement' },
    'Change Controls': { total: 261, period: 'Jan-Nov 2025', improvement: '61%', from: 41, to: 16, label: 'Closure Days Reduced' },
    'Deviations': { total: 17, period: 'Jan-Nov 2025', improvement: '12%', from: 73, to: 64, label: 'Avg Closure Days Reduced', janJune: { count: 12, avgClosure: 73, open: 1 }, julyNov: { count: 5, avgClosure: 64, open: 4 } },
    'Mastering': { 
      total: 491, 
      period: 'Jan-Nov 2025', 
      improvement: '+272.1%', 
      from: 104, 
      to: 387, 
      label: 'Change',
      isSpecial: true,
      janJune: { total: 104, label: '6 months total' },
      julyNov: { total: 387, label: '5 months total' }
    }
  },
  'SITE-V': {
    'Incidents': { total: 196, period: 'Jan-Nov 2025', improvement: '28%', from: 18, to: 13, label: 'Closure Days Reduced' },
    'CA': { total: 70, period: 'Jan-Nov 2025', improvement: '52%', from: 56, to: 27, label: 'NC Closure Days Reduced' },
    'PA': { total: 37, period: 'Jan-Nov 2025', improvement: '54%', from: 63, to: 29, label: 'Processing Time Reduced' },
    'Out of Specifications': { total: 89, period: 'Apr-Aug 2025', improvement: '59%', from: 12, to: 7, avg: 12, latest: 7, label: 'Improvement' },
    'Change Controls': { total: 178, period: 'Jan-Nov 2025', improvement: '23%', from: 50, to: 39, label: 'Closure Days Reduced' },
    'Deviations': {
      total: 12,
      period: 'Jan-Nov 2025',
      improvement: '42%',
      from: 74,
      to: 43,
      label: 'Avg Closure Days Reduced',
      janJune: { count: 7, avgClosure: 74, open: 0 },
      julyNov: { count: 5, avgClosure: 43, open: 0 }
    },
    'Mastering': { 
      total: 1066, 
      period: 'Jan-Nov 2025', 
      improvement: '-40.7%', 
      from: 669, 
      to: 397, 
      label: 'Change',
      isSpecial: true,
      janJune: { total: 669, label: '6 months total' },
      julyNov: { total: 397, label: '5 months total' }
    }
  },
  'SITE-IV': {
    'Incidents': { total: 10, period: 'Jan-Nov 2025', improvement: '26%', from: 27, to: 20, label: 'Closure Days Reduced' },
    'CA': { total: 10, period: 'Jan-Nov 2025', improvement: '20%', from: 95, to: 76, label: 'Avg Days to Close Reduced' },
    'PA': { total: 1, period: 'Jan-June 2025', improvement: '0%', from: 0, to: 0, label: 'Processing Time' },
    'Out of Specifications': { total: 1, period: 'Apr-June 2025', improvement: '0%', from: 28, to: 0, avg: 28, latest: 0, label: 'Avg Closure Days' },
    'Change Controls': { total: 30, period: 'Jan-Nov 2025', improvement: '17%', from: 23, to: 19, label: 'Avg Closure Days Reduced' },
    'Deviations': { 
      total: 3, 
      period: 'Jan-Nov 2025', 
      improvement: '67%', 
      from: 180, 
      to: 60, 
      label: 'Avg Closure Days Reduced', 
      janJune: { count: 1, avgClosure: 180, open: 0 }, 
      julyNov: { count: 2, avgClosure: 60, open: 0 } 
    }
  }
};

// Executive Summary Data - 3 Sites Data
const sitesData = {
  'SITE-I': {
    Incidents: { total: 262, improvement: 10, from: 20, to: 18 },
    CA: { total: 89, improvement: 54, from: 91, to: 42 },
    PA: { total: 29, improvement: 60, from: 135, to: 54 },
    OOS: { total: 259, improvement: 49, avg: 21, latest: 17 },
    CC: { total: 492, improvement: 13, from: 46, to: 40 },
    Investigation: { total: 262, improvement: -8, from: 5.65, to: 6.1 },
    Deviation: { total: 30, improvement: 31, from: 87, to: 60 }
  },
  'SITE-III': {
    Incidents: { total: 82, improvement: 36, from: 25, to: 16 },
    CA: { total: 52, improvement: 16, from: 56, to: 47 },
    PA: { total: 66, improvement: 6, from: 36, to: 34 },
    OOS: { total: 159, improvement: 49, avg: 14, latest: 9 },
    CC: { total: 261, improvement: 61, from: 41, to: 16 },
    Investigation: { total: 82, improvement: 72, from: 14.3, to: 4.0 },
    Deviation: { total: 17, improvement: 12, from: 73, to: 64 }
  },
  'SITE-V': {
    Incidents: { total: 196, improvement: 28, from: 18, to: 13 },
    CA: { total: 70, improvement: 52, from: 56, to: 27 },
    PA: { total: 37, improvement: 54, from: 63, to: 29 },
    OOS: { total: 89, improvement: 59, avg: 12, latest: 7 },
    CC: { total: 178, improvement: 23, from: 50, to: 39 },
    Investigation: { total: 196, improvement: -6, from: 3.5, to: 3.7 },
    Deviation: { total: 12, improvement: 42, from: 74, to: 43 }
  },
  'SITE-IV': {
    Incidents: { total: 10, improvement: 26, from: 27, to: 20 },
    CA: { total: 10, improvement: 20, from: 95, to: 76 },
    PA: { total: 1, improvement: 0, from: 0, to: 0 },
    OOS: { total: 1, improvement: 0, avg: 28, latest: 0 },
    CC: { total: 30, improvement: 17, from: 23, to: 19 },
    Investigation: { total: 10, improvement: 0, from: 7, to: 7 },
    Deviation: { total: 3, improvement: 67, from: 180, to: 60 }
  }
}

const categoryColors = {
  Incidents: '#ef4444',
  CA: '#8b5cf6',
  PA: '#f59e0b',
  OOS: '#f97316',
  CC: '#3b82f6',
  Investigation: '#10b981',
  Deviation: '#ec4899'
}

const siteColors = {
  'SITE-I': '#dc2626',
  'SITE-III': '#8b5cf6',
  'SITE-V': '#0ea5e9',
  'SITE-IV': '#f97316'
}

// Overall Performance Component
function OverallPerformance({ onCompleteOverviewClick }) {
  const [selectedCategoryInfo, setSelectedCategoryInfo] = useState(null);
  
  const categories = ['Incidents', 'CA', 'PA', 'OOS', 'CC', 'Investigation', 'Deviation']
  const improvements = categories.map(cat => {
    let sum = 0, count = 0
    Object.values(sitesData).forEach(site => {
      if (site[cat]) {
        sum += site[cat].improvement
        count++
      }
    })
    return Math.round(sum / count)
  })

  const categoryDetails = {
    'Incidents': {
            title: 'Incidents - Average Improvement Calculation',
            avgImprovement: improvements[0],
              calculation: `(SITE-I: 10% + SITE-III: 36% + SITE-V: 28%) ÷ 3 = ${improvements[0]}%`,
            sites: [
                { name: 'SITE-I', improvement: 10, from: '20 days', to: '18 days', total: 262 },
                { name: 'SITE-III', improvement: 36, from: '25 days', to: '16 days', total: 82 },
                { name: 'SITE-V', improvement: 28, from: '18 days', to: '13 days', total: 196 }
            ],
            description: 'Incident closure time reduction across all manufacturing sites'
    },
    'CA': {
      title: 'Corrective Actions (CA) - Average Improvement Calculation',
      avgImprovement: improvements[1],
      calculation: `(SITE-I: 54% + SITE-III: 16% + SITE-V: 52%) ÷ 3 = ${improvements[1]}%`,
      sites: [
        { name: 'SITE-I', improvement: 54, from: '91 days', to: '42 days', total: 89 },
        { name: 'SITE-III', improvement: 16, from: '56 days', to: '47 days', total: 52 },
        { name: 'SITE-V', improvement: 52, from: '56 days', to: '27 days', total: 70 }
      ],
      description: 'Corrective action closure time improvement across sites'
    },
    'PA': {
      title: 'Preventive Actions (PA) - Average Improvement Calculation',
      avgImprovement: improvements[2],
      calculation: `(SITE-I: 60% + SITE-III: 6% + SITE-V: 54%) ÷ 3 = ${improvements[2]}%`,
      sites: [
        { name: 'SITE-I', improvement: 60, from: '135 days', to: '54 days', total: 29 },
        { name: 'SITE-III', improvement: 6, from: '36 days', to: '34 days', total: 66 },
        { name: 'SITE-V', improvement: 54, from: '63 days', to: '29 days', total: 37 }
      ],
      description: 'Preventive action processing time reduction across sites'
    },
    'OOS': {
      title: 'Out of Specifications (OOS) - Average Improvement Calculation',
      avgImprovement: improvements[3],
      calculation: `(SITE-I: 49% + SITE-III: 49% + SITE-V: 59%) ÷ 3 = ${improvements[3]}%`,
      sites: [
        { name: 'SITE-I', improvement: 49, from: '21 days avg', to: '17 days', total: 259 },
        { name: 'SITE-III', improvement: 49, from: '14 days avg', to: '9 days', total: 159 },
        { name: 'SITE-V', improvement: 59, from: '12 days avg', to: '7 days', total: 89 }
      ],
      description: 'Out of specification resolution time improvement'
    },
    'CC': {
      title: 'Change Controls (CC) - Average Improvement Calculation',
      avgImprovement: improvements[4],
      calculation: `(SITE-I: 13% + SITE-III: 61% + SITE-V: 23%) ÷ 3 = ${improvements[4]}%`,
      sites: [
        { name: 'SITE-I', improvement: 13, from: '46 days', to: '40 days', total: 492 },
        { name: 'SITE-III', improvement: 61, from: '41 days', to: '16 days', total: 261 },
        { name: 'SITE-V', improvement: 23, from: '50 days', to: '39 days', total: 178 }
      ],
      description: 'Change control closure time reduction across all sites'
    },
    'Investigation': {
      title: 'Investigation Time - Average Improvement Calculation',
      avgImprovement: improvements[5],
      calculation: `(SITE-I: -8% + SITE-III: 72% + SITE-V: -6%) ÷ 3 = ${improvements[5]}%`,
      sites: [
        { name: 'SITE-I', improvement: -8, from: '5.65 days', to: '6.1 days', total: 262 },
        { name: 'SITE-III', improvement: 72, from: '14.3 days', to: '4.0 days', total: 82 },
        { name: 'SITE-V', improvement: -6, from: '3.5 days', to: '3.7 days', total: 196 }
      ],
      description: 'Investigation time reduction (Jan-Aug avg vs Sep-Nov avg) across sites'
    },
    'Deviation': {
      title: 'Deviation - Average Improvement Calculation',
      avgImprovement: improvements[6],
      calculation: `(${Object.entries(sitesData).map(([name, data]) => `${name}: ${data.Deviation.improvement}%`).join(' + ')}) ÷ ${Object.keys(sitesData).length} = ${improvements[6]}%`,
      sites: [
        { name: 'SITE-I', improvement: sitesData['SITE-I'].Deviation.improvement, from: `${sitesData['SITE-I'].Deviation.from} days`, to: `${sitesData['SITE-I'].Deviation.to} days`, total: sitesData['SITE-I'].Deviation.total },
        { name: 'SITE-III', improvement: sitesData['SITE-III'].Deviation.improvement, from: `${sitesData['SITE-III'].Deviation.from} days`, to: `${sitesData['SITE-III'].Deviation.to} days`, total: sitesData['SITE-III'].Deviation.total },
        { name: 'SITE-V', improvement: sitesData['SITE-V'].Deviation.improvement, from: `${sitesData['SITE-V'].Deviation.from} days`, to: `${sitesData['SITE-V'].Deviation.to} days`, total: sitesData['SITE-V'].Deviation.total }
      ],
      description: 'Deviation metrics and improvements (Avg closure days reduced, counts)'
    }
  };

  const CategoryInfoModal = ({ category, onClose }) => {
    const details = categoryDetails[category];
    return createPortal(
      <FullscreenShell onClose={onClose} title={details.title} subtitle={details.description} accentColor={categoryColors[category]}>
        <div style={{padding: '28px', background: '#f8fafc'}}>
          <div style={{textAlign: 'center', padding: '24px', background: `${categoryColors[category]}10`, borderRadius: '12px', border: `2px solid ${categoryColors[category]}`, marginBottom: '24px', boxShadow: '0 10px 30px rgba(15,23,42,0.08)'}}>
            <div style={{fontSize: '0.8em', fontWeight: '700', color: '#334155', textTransform: 'uppercase', marginBottom: '8px'}}>Average Improvement Across All Sites</div>
            <div style={{fontSize: '3em', fontWeight: '900', color: categoryColors[category]}}>{details.avgImprovement}%</div>
          </div>

          <div style={{background: '#f0f9ff', borderLeft: `4px solid ${categoryColors[category]}`, padding: '16px', borderRadius: '12px', marginBottom: '20px'}}>
            <div style={{fontSize: '0.75em', fontWeight: '700', color: '#334155', textTransform: 'uppercase', marginBottom: '8px'}}>Calculation Formula</div>
            <div style={{fontSize: '1em', fontFamily: 'monospace', color: '#0f172a', background: '#fff', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontWeight: '600'}}>{details.calculation}</div>
          </div>

          <div>
            <div style={{fontSize: '1em', fontWeight: '700', color: '#0f172a', marginBottom: '12px'}}>📊 Site-wise Breakdown:</div>
            {details.sites.map((site, idx) => (
              <div key={idx} style={{marginBottom: '12px', padding: '16px', background: '#ffffff', borderLeft: `4px solid ${siteColors[site.name]}`, borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.04)'}}>
                <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px'}}>
                  <div style={{fontSize: '1.1em', fontWeight: '800', color: siteColors[site.name]}}>{site.name}</div>
                  <div style={{fontSize: '1.6em', fontWeight: '900', color: siteColors[site.name]}}>{site.improvement}%</div>
                </div>
                <div style={{fontSize: '0.9em', color: '#475569', lineHeight: '1.5'}}>
                  <div>Before: {site.from} → After: {site.to}</div>
                  <div>Total Items: {site.total}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FullscreenShell>,
      document.body
    );
  };

  return (
    <>
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f9ff',
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      marginBottom: '14px'
    }}>
      <div style={{ marginBottom: '14px' }}>
        <h3 style={{ fontSize: '1.05em', fontWeight: '700', color: '#0ea5e9', margin: '0' }}>
          📊 Overall Performance (Average Improvement Across All Sites)
        </h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px' }}>
        {categories
          .map((cat, idx) => ({ cat, idx, improvement: improvements[idx] }))
          .sort((a, b) => b.improvement - a.improvement)
          .map(({ cat, idx, improvement }) => (
          <div key={cat} style={{ textAlign: 'center', position: 'relative' }}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedCategoryInfo(cat);
              }}
              style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                background: improvement < 0 ? '#ef4444' : 
                  improvement > 50 ? '#10b981' : 
                  improvement >= 26 ? '#3b82f6' : 
                  improvement >= 11 ? '#f97316' : '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                fontSize: '0.9em',
                cursor: 'pointer',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                zIndex: 10,
                boxShadow: `0 2px 8px ${improvement < 0 ? '#ef4444' : 
                  improvement > 50 ? '#10b981' : 
                  improvement >= 26 ? '#3b82f6' : 
                  improvement >= 11 ? '#f97316' : '#ef4444'}60`
              }}
              onMouseEnter={(e) => {
                const bgColor = improvement < 0 ? '#ef4444' : 
                  improvement > 50 ? '#10b981' : 
                  improvement >= 26 ? '#3b82f6' : 
                  improvement >= 11 ? '#f97316' : '#ef4444';
                e.currentTarget.style.transform = 'scale(1.15)';
                e.currentTarget.style.boxShadow = `0 4px 12px ${bgColor}80`;
              }}
              onMouseLeave={(e) => {
                const bgColor = improvement < 0 ? '#ef4444' : 
                  improvement > 50 ? '#10b981' : 
                  improvement >= 26 ? '#3b82f6' : 
                  improvement >= 11 ? '#f97316' : '#ef4444';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = `0 2px 8px ${bgColor}60`;
              }}
            >
              ⓘ
            </button>
            {/* Title at top */}
            <div style={{ fontSize: '0.8em', fontWeight: '700', color: '#111827', marginBottom: '6px' }}>{cat}</div>
            {/* Compact bar with percent inside */}
            <div style={{
              width: '100%',
              height: '75px',
              backgroundColor: improvement < 0 ? '#fee2e2' : 
                improvement > 50 ? '#dcfce7' : 
                improvement >= 26 ? '#dbeafe' : 
                improvement >= 11 ? '#ffedd5' : '#fee2e2',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '50%',
                height: `${Math.min(Math.abs(improvement), 100)}px`,
                backgroundColor: improvement < 0 ? '#ef4444' : 
                  improvement > 50 ? '#10b981' : 
                  improvement >= 26 ? '#3b82f6' : 
                  improvement >= 11 ? '#f97316' : '#ef4444',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '1.1em',
                fontWeight: '800'
              }}>
                {Math.abs(improvement)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend Note - Performance Bands */}
      <div style={{ marginTop: '14px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '10px'
        }}>
          {[{
            label: 'Outstanding',
            range: '100 - 76%',
            bg: '#065f46'
          }, {
            label: 'Excellent',
            range: '75 - 51%',
            bg: '#10b981'
          }, {
            label: 'Very Good',
            range: '50 - 26%',
            bg: '#3b82f6'
          }, {
            label: 'Good',
            range: '25 - 11%',
            bg: '#f97316'
          }, {
            label: 'Need Improvements',
            range: '10 - 0%',
            bg: '#ef4444'
          }].map((band) => (
            <div key={band.label} style={{
              background: band.bg,
              color: '#ffffff',
              borderRadius: '8px',
              padding: '6px 8px',
              height: '65px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.12)'
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.6em', letterSpacing: '0.01em', lineHeight: '1.3' }}>{band.label}</div>
              <div style={{ fontWeight: 800, fontSize: '0.7em', letterSpacing: '0.01em' }}>{band.range}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Category Info Modal */}
    {selectedCategoryInfo && (
      <CategoryInfoModal 
        category={selectedCategoryInfo}
        onClose={() => setSelectedCategoryInfo(null)}
      />
    )}
    </>
  )
}

// Site Comparison Grid Component
function SiteComparisonGrid({ onSiteClick }) {
  const [selectedSiteInfo, setSelectedSiteInfo] = useState(null);
  const [selectedSiteKeyImprovements, setSelectedSiteKeyImprovements] = useState(null);
  const [showIPQAMilestones, setShowIPQAMilestones] = useState(false);

  const SiteInfoModal = ({ site, onClose }) => {
    const data = sitesData[site];
    // Exclude Investigation (same incidents counted) but INCLUDE Deviations in total
    const totalItems = data.Incidents.total + data.CA.total + data.PA.total + data.OOS.total + data.CC.total + (data.Deviation?.total || 0);
    const avgImprovement = Math.round(
      Object.values(data).reduce((sum, m) => sum + m.improvement, 0) / Object.values(data).length
    );

    const colorFromImprovement = (value) => {
      if (value > 50) return '#10b981'
      if (value >= 26) return '#3b82f6'
      if (value >= 11) return '#f59e0b'
      return '#dc2626'
    }

    const metricsBreakdown = [
      { name: 'Incidents', ...data.Incidents },
      { name: 'Corrective Actions (CA)', ...data.CA },
      { name: 'Preventive Actions (PA)', ...data.PA },
      { name: 'Out of Specifications (OOS)', ...data.OOS },
      { name: 'Change Controls (CC)', ...data.CC },
      { name: 'Deviations', ...data.Deviation },
      { name: 'Investigation Time', ...data.Investigation }
    ]
      .map(metric => ({ ...metric, displayColor: colorFromImprovement(metric.improvement) }))
      .sort((a, b) => b.improvement - a.improvement)

    return createPortal(
      <FullscreenShell onClose={onClose} title={`${site} - Performance Breakdown`} accentColor={siteColors[site]}>
        <div style={{padding: '28px', background: '#f8fafc'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px'}}>
            <div style={{textAlign: 'center', padding: '24px', background: `${siteColors[site]}10`, borderRadius: '12px', border: `2px solid ${siteColors[site]}`, boxShadow: '0 10px 30px rgba(15,23,42,0.08)'}}>
              <div style={{fontSize: '0.8em', fontWeight: '700', color: '#334155', textTransform: 'uppercase', marginBottom: '8px'}}>Average Improvement</div>
              <div style={{fontSize: '3em', fontWeight: '900', color: siteColors[site]}}>{avgImprovement}%</div>
            </div>
            <div style={{textAlign: 'center', padding: '24px', background: '#ffffff', borderRadius: '12px', border: '2px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15,23,42,0.08)'}}>
              <div style={{fontSize: '0.8em', fontWeight: '700', color: '#334155', textTransform: 'uppercase', marginBottom: '8px'}}>Total Items</div>
              <div style={{fontSize: '3em', fontWeight: '900', color: '#0f172a'}}>{totalItems.toLocaleString()}</div>
            </div>
          </div>

          <div style={{background: '#f0f9ff', borderLeft: `4px solid ${siteColors[site]}`, padding: '16px', borderRadius: '12px', marginBottom: '20px'}}>
            <div style={{fontSize: '0.75em', fontWeight: '700', color: '#334155', textTransform: 'uppercase', marginBottom: '8px'}}>Average Improvement Calculation</div>
            <div style={{fontSize: '1em', fontFamily: 'monospace', color: '#0f172a', background: '#fff', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '8px', fontWeight: '600'}}>
              ({metricsBreakdown.map(m => `${m.improvement}%`).join(' + ')}) ÷ {metricsBreakdown.length} = {avgImprovement}%
            </div>
            <div style={{fontSize: '0.75em', color: '#0f172a', fontStyle: 'italic'}}>Average of all {metricsBreakdown.length} metrics (Incidents, CA, PA, OOS, CC, Deviations, Investigation)</div>
          </div>

          <div style={{background: '#fefce8', borderLeft: '4px solid #f59e0b', padding: '16px', borderRadius: '12px', marginBottom: '20px'}}>
            <div style={{fontSize: '0.75em', fontWeight: '700', color: '#334155', textTransform: 'uppercase', marginBottom: '8px'}}>Total Items Calculation</div>
            <div style={{fontSize: '1em', fontFamily: 'monospace', color: '#0f172a', background: '#fff', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '8px', fontWeight: '600'}}>
              {data.Incidents.total} + {data.CA.total} + {data.PA.total} + {data.OOS.total} + {data.CC.total} + {data.Deviation?.total || 0} = {totalItems.toLocaleString()}
            </div>
            <div style={{fontSize: '0.75em', color: '#92400e', fontStyle: 'italic'}}>Note: Investigation Time is NOT included in total count (same incidents), but Deviations are included.</div>
          </div>

          <div>
            <div style={{fontSize: '1em', fontWeight: '700', color: '#0f172a', marginBottom: '12px'}}>📊 Metrics Breakdown:</div>
            {metricsBreakdown.map((metric, idx) => (
                <div key={idx} style={{marginBottom: '12px', padding: '16px', background: '#ffffff', borderLeft: `4px solid ${metric.displayColor}`, borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.04)'}}>
                <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px'}}>
                    <div style={{fontSize: '1.05em', fontWeight: '800', color: metric.displayColor}}>{metric.name}</div>
                    <div style={{fontSize: '1.6em', fontWeight: '900', color: metric.displayColor}}>{metric.improvement}%</div>
                </div>
                <div style={{fontSize: '0.9em', color: '#475569', lineHeight: '1.5'}}>
                  {metric.from !== undefined ? (
                    <div>Before: {metric.from} days → After: {metric.to} days | Total: {metric.total}</div>
                  ) : (
                    <div>Before: {metric.avg} days → After: {metric.latest} days | Total: {metric.total}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FullscreenShell>,
      document.body
    );
  };

  const KeyImprovementsModal = ({ site, onClose }) => {
    // Check if data is available for this site
    if (site !== 'SITE-III' && site !== 'SITE-I') {
      return createPortal(
        <FullscreenShell onClose={onClose} title={`${site} - Key Improvements`} accentColor={siteColors[site]}>
          <div style={{padding: '48px 28px', textAlign: 'center', background: '#f8fafc'}}>
            <div style={{fontSize: '5em', marginBottom: '24px'}}>📊</div>
            <div style={{fontSize: '1.2em', color: '#0f172a', padding: '32px', background: '#ffffff', borderRadius: '16px', border: '2px solid #e5e7eb', boxShadow: '0 10px 30px rgba(15,23,42,0.08)', maxWidth: '600px', margin: '0 auto'}}>
              <div style={{fontSize: '2.5em', marginBottom: '16px'}}>⚠️</div>
              <div style={{fontSize: '1.3em', fontWeight: '800', color: '#0f172a', marginBottom: '12px'}}>Data Not Available</div>
              <div style={{fontSize: '1em', color: '#475569', lineHeight: '1.6'}}>Detailed improvement data will be added once available.</div>
            </div>
          </div>
        </FullscreenShell>,
        document.body
      );
    }

    const data = sitesData[site];
    const metrics = [
      { name: 'Incidents', ...data.Incidents },
      { name: 'Corrective Actions (CA)', ...data.CA },
      { name: 'Preventive Actions (PA)', ...data.PA },
      { name: 'Out of Specifications (OOS)', ...data.OOS },
      { name: 'Change Controls (CC)', ...data.CC },
      { name: 'Deviations', ...data.Deviation },
      { name: 'Investigation Time', ...data.Investigation }
    ];

    const collaborationMeetings = site === 'SITE-I' ? [
      { month: 'January', meetings: 1, departments: ['MG'] },
      { month: 'June', meetings: 1, departments: ['MG', 'DI'] },
      { month: 'July', meetings: 1, departments: ['MG', 'QC', 'PU'] },
      { month: 'August', meetings: 2, departments: ['MG', 'PK', 'QC', 'PU'] },
      { month: 'October', meetings: 2, departments: ['MG', 'DI', 'BD', 'PU', 'QC', 'PK', 'QA'] },
      { month: 'Other', meetings: 1, departments: ['DP', 'IN', 'QA'] }
    ] : [
      { month: 'July', meetings: 7, departments: ['QC', 'CA', 'MD', 'PU', 'HR', 'ST', 'DP', 'IT', 'MN', 'DI'] },
      { month: 'August', meetings: 7, departments: ['QC', 'CA', 'MD', 'PU', 'HR', 'ST', 'IT', 'MN', 'DI'] },
      { month: 'September', meetings: 7, departments: ['QC', 'CA', 'MD', 'PU', 'HR', 'ST', 'IT', 'MN', 'DI'] },
      { month: 'October', meetings: 40, departments: ['QC', 'CA', 'MD', 'PU', 'HR', 'ST', 'DP', 'IT', 'MN', 'DI'] },
      { month: 'November', meetings: 25, departments: ['QC', 'CA', 'MD', 'PU', 'HR', 'ST', 'DP', 'IT', 'MN', 'DI'] }
    ];

    const collaborationAgenda = site === 'SITE-I' ? [
      {
        month: 'January',
        items: [
          { title: 'Machine ID label error incident', count: 1 }
        ]
      },
      {
        month: 'June',
        items: [
          { title: 'Hold time study discrepancy incident (Truenat LTS)', count: 1 }
        ]
      },
      {
        month: 'July',
        items: [
          { title: 'MAL144 leakage discussion', count: 1 }
        ]
      },
      {
        month: 'August',
        items: [
          { title: 'Production review: CCs, Incidents, OOS, CAPA, Deviation', count: 1 },
          { title: 'OOS discussion - primers and probes rejection', count: 1 }
        ]
      },
      {
        month: 'October',
        items: [
          { title: 'Quality objective timeline discussion', count: 1 },
          { title: 'Artwork process meeting', count: 1 }
        ]
      },
      {
        month: 'Other',
        items: [
          { title: 'Device powered ON during custom screening incident', count: 1 }
        ]
      }
    ] : [
      {
        month: 'July',
        items: [
          { title: 'Pending Entry Log Meeting', count: 3 },
          { title: 'Discussion of Observations in Shop Floor', count: 2 },
          { title: 'Monthly meeting with MG (Device and Cartridge)', count: 2 }
        ]
      },
      {
        month: 'August',
        items: [
          { title: 'Pending Entry Log Meeting', count: 2 },
          { title: 'Discussion of Observations in Shop Floor', count: 2 },
          { title: 'Discussion on Minor Rejection Materials', count: 1 },
          { title: 'Monthly meeting with MG (Device and Cartridge)', count: 2 }
        ]
      },
      {
        month: 'September',
        items: [
          { title: 'Pending Entry Log Meeting', count: 2 },
          { title: 'Discussion of Observations in Shop Floor', count: 2 },
          { title: 'Discussion on Device Rejection and its Root Causes', count: 1 },
          { title: 'Monthly meeting with MG (Device and Cartridge)', count: 2 }
        ]
      },
      {
        month: 'October',
        items: [
          { title: 'Pending Entry Log Meeting', count: 2 },
          { title: 'Discussion on Rejection with Visual Inspection Operators', count: 1 },
          { title: 'Monthly Rejections Meeting', count: 1 },
          { title: 'Operator-wise rejections, traceability, yield', count: 1 },
          { title: 'Stage wise rejections meeting', count: 31 },
          { title: 'Discussion of Observations in Shop Floor', count: 2 },
          { title: 'Monthly meeting with MG (Device and Cartridge)', count: 2 }
        ]
      },
      {
        month: 'November',
        items: [
          { title: 'Pending Entry Log Meeting', count: 2 },
          { title: 'Stage wise rejections meeting', count: 15 },
          { title: 'Discussion of Observations in Shop Floor', count: 2 },
          { title: 'Operator-wise rejections, traceability, yield', count: 1 },
          { title: 'Discussion on Rejection with Visual Inspection Operators', count: 3 },
          { title: 'Monthly meeting with MG (Device and Cartridge)', count: 2 }
        ]
      }
    ];

    const departmentsList = site === 'SITE-I' ? ['MG', 'PK', 'QC', 'PU', 'DI', 'DP', 'IN', 'QA', 'BD'] : ['CA', 'MD', 'QC', 'PU', 'HR', 'DI', 'MN', 'IT', 'ST', 'DP'];

    const departmentParticipation = site === 'SITE-I' ? [
      {
        month: 'January',
        agendas: [
          { title: 'Machine ID label error incident', count: 1, attendees: ['MG'] }
        ]
      },
      {
        month: 'June',
        agendas: [
          { title: 'Hold time study discrepancy incident (Truenat LTS)', count: 1, attendees: ['MG', 'DI'] }
        ]
      },
      {
        month: 'July',
        agendas: [
          { title: 'MAL144 leakage discussion', count: 1, attendees: ['MG', 'QC', 'PU'] }
        ]
      },
      {
        month: 'August',
        agendas: [
          { title: 'Production review: CCs, Incidents, OOS, CAPA, Deviation', count: 1, attendees: ['MG', 'PK'] },
          { title: 'OOS discussion - primers and probes rejection', count: 1, attendees: ['QC', 'MG', 'PU'] }
        ]
      },
      {
        month: 'October',
        agendas: [
          { title: 'Quality objective timeline discussion', count: 1, attendees: ['MG', 'DI'] },
          { title: 'Artwork process meeting', count: 1, attendees: ['BD', 'PU', 'QC', 'PK', 'QA'] }
        ]
      },
      {
        month: 'Other',
        agendas: [
          { title: 'Device powered ON during custom screening incident', count: 1, attendees: ['DP', 'IN', 'QA'] }
        ]
      }
    ] : [
      {
        month: 'July',
        agendas: [
          { title: 'Pending Entry Log Meeting', count: 3, attendees: ['CA', 'MD', 'QC', 'PU', 'HR', 'DI', 'MN', 'IT', 'ST', 'DP'] },
          { title: 'Discussion of Observations in Shop Floor', count: 2, attendees: ['CA', 'MD', 'QC'] },
          { title: 'Monthly meeting with MG (Device and Cartridge)', count: 2, attendees: ['CA', 'MD', 'QC', 'MN'] }
        ]
      },
      {
        month: 'August',
        agendas: [
          { title: 'Pending Entry Log Meeting', count: 2, attendees: ['CA', 'MD', 'QC', 'PU', 'HR', 'DI', 'MN', 'IT', 'ST'] },
          { title: 'Discussion of Observations in Shop Floor', count: 2, attendees: ['CA', 'MD', 'QC'] },
          { title: 'Discussion on Minor Rejection Materials', count: 1, attendees: ['CA'] },
          { title: 'Monthly meeting with MG (Device and Cartridge)', count: 2, attendees: ['CA', 'MD', 'QC', 'DI', 'MN'] }
        ]
      },
      {
        month: 'September',
        agendas: [
          { title: 'Pending Entry Log Meeting', count: 2, attendees: ['CA', 'MD', 'QC', 'PU', 'HR', 'DI', 'MN', 'IT', 'ST'] },
          { title: 'Discussion of Observations in Shop Floor', count: 2, attendees: ['CA', 'MD', 'QC'] },
          { title: 'Discussion on Device Rejection and its Root Causes', count: 1, attendees: ['MD', 'QC'] },
          { title: 'Monthly meeting with MG (Device and Cartridge)', count: 2, attendees: ['CA', 'MD', 'QC', 'DI', 'MN'] }
        ]
      },
      {
        month: 'October',
        agendas: [
          { title: 'Pending Entry Log Meeting', count: 2, attendees: ['CA', 'MD', 'QC', 'PU', 'HR', 'DI', 'MN', 'IT', 'ST', 'DP'] },
          { title: 'Discussion on Rejection with Visual Inspection Operators', count: 1, attendees: ['CA'] },
          { title: 'Monthly Rejections Meeting', count: 1, attendees: ['CA', 'QC', 'MN'] },
          { title: 'Operator-wise rejections, traceability, yield', count: 1, attendees: ['CA'] },
          { title: 'Stage wise rejections meeting', count: 31, attendees: ['CA'] },
          { title: 'Discussion of Observations in Shop Floor', count: 2, attendees: ['CA', 'MD'] },
          { title: 'Monthly meeting with MG (Device and Cartridge)', count: 2, attendees: ['CA', 'MD', 'QC'] }
        ]
      },
      {
        month: 'November',
        agendas: [
          { title: 'Pending Entry Log Meeting', count: 2, attendees: ['CA', 'MD', 'QC', 'PU', 'HR', 'DI', 'MN', 'IT', 'ST', 'DP'] },
          { title: 'Stage wise rejections meeting', count: 15, attendees: ['CA'] },
          { title: 'Discussion of Observations in Shop Floor', count: 2, attendees: ['CA', 'MD'] },
          { title: 'Operator-wise rejections, traceability, yield', count: 1, attendees: ['CA'] },
          { title: 'Discussion on Rejection with Visual Inspection Operators', count: 3, attendees: ['CA'] },
          { title: 'Monthly meeting with MG (Device and Cartridge)', count: 2, attendees: ['CA', 'MD', 'QC'] }
        ]
      }
    ];

    const positiveGains = metrics
      .filter((m) => m.improvement > 0)
      .sort((a, b) => b.improvement - a.improvement);

    // Calculate composite improvement score
    const compositeImprovement = site === 'SITE-I' ? 30 : Math.round(positiveGains.reduce((sum, m) => sum + m.improvement, 0) / positiveGains.length);
    const totalMeetings = collaborationMeetings.reduce((sum, m) => sum + m.meetings, 0);
    const totalAgendaItems = collaborationAgenda.reduce((sum, m) => sum + m.items.length, 0);
    const totalDepartmentsInvolved = new Set(departmentParticipation.flatMap((m) => m.agendas.flatMap((a) => a.attendees))).size;

    const agendaTotals = departmentParticipation.reduce((acc, month) => {
      month.agendas.forEach((a) => {
        acc[a.title] = (acc[a.title] || 0) + a.count;
      });
      return acc;
    }, {});

    const topAgendaItems = Object.entries(agendaTotals)
      .map(([title, count]) => ({ title, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 4);

    const agendaParticipationDetails = Object.values(
      departmentParticipation.reduce((acc, month) => {
        month.agendas.forEach((a) => {
          if (!acc[a.title]) {
            acc[a.title] = {
              title: a.title,
              totalSessions: 0,
              departments: new Set(),
              months: new Set()
            };
          }
          acc[a.title].totalSessions += a.count;
          a.attendees.forEach((d) => acc[a.title].departments.add(d));
          acc[a.title].months.add(month.month);
        });
        return acc;
      }, {})
    )
      .map((item) => ({
        title: item.title,
        totalSessions: item.totalSessions,
        departments: Array.from(item.departments),
        months: Array.from(item.months)
      }))
      .sort((a, b) => b.totalSessions - a.totalSessions);

    const maxMeetings = Math.max(...collaborationMeetings.map((m) => m.meetings));
    const avgMeetings = Math.round(totalMeetings / collaborationMeetings.length);

    // Key achievements - Site-specific data
    const achievements = site === 'SITE-I' ? [
      { 
        icon: '🤝', 
        title: 'Collaboration Meetings', 
        metric: '8',
        unit: 'sessions',
        desc: 'QA-led discussions',
        color: '#0ea5e9',
        bgColor: '#e0f2fe'
      },
      { 
        icon: '📊', 
        title: 'Taking OOS SOP under ', 
        metric: 'QA Control',
        unit: 'implemented',
        desc: 'OOS SOP is taken under QA control',
        color: '#8b5cf6',
        bgColor: '#faf5ff'
      },
      { 
        icon: '📋', 
        title: 'Daily Meetings with',
        metric: 'StakeHolders',
        unit: 'agenda:',
        desc: 'Discussion on Regular Issues',
        color: '#f59e0b',
        bgColor: '#fffbeb'
      },
      { 
        icon: '⏱️', 
        title: 'Investigation Time Line', 
        metric: 'Defined',
        unit: '',
        desc: '',
        color: '#10b981',
        bgColor: '#ecfdf5',
        secondIcon: '📋',
        secondTitle: 'Change Control Tracking',
        secondMetric: 'system',
        secondDesc: 'Implemented tracking sheet',
        isDual: true
      }
    ] : [
      { 
        icon: '🤝', 
        title: 'Collaboration Meetings', 
        metric: `${totalMeetings}`,
        unit: 'sessions',
        desc: 'QA-led discussions',
        color: '#0ea5e9',
        bgColor: '#e0f2fe'
      },
     
      { 
        icon: '📊', 
        title: 'Training on Decision making & RCA tools', 
        metric: '100%',
        unit: 'implemented',
        desc: '5x Why Analysis, Fishbone Diagram, 80/20 Rule',
        color: '#8b5cf6',
        bgColor: '#faf5ff'
      },
      { 
        icon: '📋', 
        title: 'Change Control Tracking', 
        metric: 'Complete',
        unit: 'system',
        desc: 'Implemented tracking sheet',
        color: '#f59e0b',
        bgColor: '#fffbeb'
      },
      { 
        icon: '⏱️', 
        title: 'Investigation Time Line', 
        metric: '72%',
        unit: 'reduction',
        desc: 'Faster incident resolution',
        color: '#10b981',
        bgColor: '#ecfdf5'
      }
    ];

    return createPortal(
      <div style={{position: 'fixed', inset: 0, zIndex: 99999, background: '#f8fafc', overflowY: 'auto'}}>
        <div style={{position: 'sticky', top: 0, zIndex: 100000, background: '#0f172a', color: '#ffffff', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <div style={{fontSize: '1.2em'}}>✨</div>
            <div>
              <div style={{fontSize: '0.8em', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', opacity: 0.85}}>Key Improvements – Full View</div>
              <div style={{fontSize: '1em', fontWeight: '800'}}>{site}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#ef4444',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 14px',
              fontWeight: '800',
              cursor: 'pointer',
              boxShadow: '0 6px 16px rgba(239,68,68,0.35)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(239,68,68,0.45)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(239,68,68,0.35)'; }}
          >
            Close
          </button>
        </div>

        <div style={{minHeight: '100%', padding: '24px 20px 48px 20px'}}>
          <div style={{maxWidth: '1240px', margin: '0 auto', background: '#ffffff', borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 18px 48px rgba(15,23,42,0.12)'}}>
            {/* HERO SECTION - Main Message */}
            <div style={{background: `linear-gradient(135deg, ${siteColors[site]}dd, ${siteColors[site]})`, padding: '28px 32px', textAlign: 'center', color: '#fff', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: '-40px', right: '-40px', fontSize: '180px', opacity: 0.12}}>🎯</div>
              <div style={{position: 'relative', zIndex: 1}}>
                <div style={{fontSize: '0.8em', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', opacity: 0.95, marginBottom: '8px'}}>How {site} Achieved</div>
                <div style={{fontSize: '2.8em', fontWeight: '900'}}>{compositeImprovement}%</div>
              </div>
            </div>

            {/* CONTENT SECTION */}
            <div style={{padding: '36px 32px 40px 32px'}}>
              {/* Key Achievements Grid */}
              <div style={{marginBottom: '32px'}}>
                <div style={{fontSize: '0.9em', fontWeight: '700', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px'}}>🏆 Key Accomplishments</div>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px'}}>
                  {achievements.map((ach, idx) => (
                    <div key={idx} style={{padding: '18px', borderRadius: '14px', background: ach.bgColor, border: `2px solid ${ach.color}40`, textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 24px rgba(15,23,42,0.08)'}}>
                      {ach.isDual ? (
                        <>
                          {/* Top section */}
                          <div style={{marginBottom: '16px', paddingBottom: '16px', borderBottom: '2px dashed #cbd5e1'}}>
                            <div style={{fontSize: '0.9em', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px'}}>
                              {ach.title}
                            </div>
                            <div style={{fontSize: '2.1em', fontWeight: '900', color: ach.color, marginBottom: '4px'}}>
                              {ach.metric}
                            </div>
                          </div>
                          {/* Bottom section */}
                          <div>
                            <div style={{fontSize: '0.9em', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px'}}>
                              {ach.secondTitle}
                            </div>
                            <div style={{fontSize: '2.1em', fontWeight: '900', color: '#f59e0b', marginBottom: '4px'}}>
                              {ach.secondMetric}
                            </div>
                            <div style={{fontSize: '0.9em', color: '#0f172a', lineHeight: '1.35'}}>
                              {ach.secondDesc}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div style={{position: 'absolute', top: '-10px', right: '-10px', fontSize: '90px', opacity: 0.05}}>{ach.icon}</div>
                          <div style={{fontSize: '2.6em', marginBottom: '8px', position: 'relative', zIndex: 1}}>{ach.icon}</div>
                          <div style={{fontSize: '0.9em', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px'}}>
                            {ach.title}
                          </div>
                          <div style={{fontSize: '2.1em', fontWeight: '900', color: ach.color, marginBottom: '4px'}}>
                            {ach.metric}
                          </div>
                          <div style={{fontSize: '0.9em', color: '#0f172a', fontWeight: '700', marginBottom: '8px'}}>
                            {ach.unit}
                          </div>
                          <div style={{fontSize: '0.9em', color: '#0f172a', lineHeight: '1.35'}}>
                            {ach.desc}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaboration Meetings Deep Dive - THE STAR SECTION */}
              <div style={{marginBottom: '28px', padding: '24px', borderRadius: '14px', background: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0', boxShadow: '0 14px 32px rgba(15, 23, 42, 0.08)'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', marginBottom: '16px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <div style={{fontSize: '1.8em'}}>🤝</div>
                    <div>
                      <div style={{fontSize: '1.05em', fontWeight: '800', letterSpacing: '-0.2px', color: '#0f172a'}}>Collaboration Meetings – The Driver</div>
                      <div style={{fontSize: '0.85em', color: '#0f172a'}}>Foundation of all improvements across SITE-III</div>
                    </div>
                  </div>
                  <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                    <div style={{display: 'flex', gap: '8px'}}>
                      <div style={{fontSize: '0.75em', fontWeight: '800', color: '#0ea5e9', background: '#e0f2fe', border: '1px solid #bae6fd', padding: '6px 10px', borderRadius: '10px'}}>Jul–Nov</div>
                      <div style={{fontSize: '0.75em', fontWeight: '800', color: '#15803d', background: '#dcfce7', border: '1px solid #bbf7d0', padding: '6px 10px', borderRadius: '10px'}}>Peak: Oct</div>
                    </div>
                  </div>
                </div>

                {/* Top strip */}
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '16px'}}>
                  {[ 
                    { label: 'Total Sessions', value: totalMeetings, color: '#0284c7', bg: '#e0f2fe' },
                    { label: 'Avg / Month', value: Math.round(totalMeetings / collaborationMeetings.length), color: '#7c3aed', bg: '#f3e8ff' },
                    { label: 'Departments', value: totalDepartmentsInvolved, color: '#059669', bg: '#dcfce7' },
                    { label: 'Topics', value: totalAgendaItems, color: '#d97706', bg: '#fef3c7' }
                  ].map((stat, idx) => (
                    <div key={idx} style={{padding: '12px', borderRadius: '12px', background: stat.bg, border: `1px solid ${stat.color}30`, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                      <div style={{fontSize: '0.75em', fontWeight: '800', color: '#0f172a', letterSpacing: '0.3px'}}>{stat.label}</div>
                      <div style={{fontSize: '1.8em', fontWeight: '900', color: stat.color}}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Mid row: growth + agenda mix */}
                <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '16px'}}>
                  <div style={{background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px'}}>
                      <div style={{fontSize: '0.8em', fontWeight: '800', color: '#0f172a'}}>📈 Growth Trend</div>
                      <div style={{display: 'flex', gap: '6px'}}>
                        <div style={{fontSize: '0.7em', fontWeight: '800', color: '#0ea5e9', background: '#e0f2fe', borderRadius: '8px', padding: '4px 8px'}}>Total {totalMeetings}</div>
                        <div style={{fontSize: '0.7em', fontWeight: '800', color: '#15803d', background: '#dcfce7', borderRadius: '8px', padding: '4px 8px'}}>Peak {maxMeetings}</div>
                      </div>
                    </div>
                    <div style={{position: 'relative', height: '190px', padding: '12px 12px 18px 12px', background: '#f8fafc', borderRadius: '10px', border: '1px dashed #cbd5e1', overflow: 'hidden'}}>
                      <div style={{position: 'absolute', inset: '10px 12px 14px 12px', display: 'grid', gridTemplateColumns: `repeat(${collaborationMeetings.length}, 1fr)`, gap: '10px', alignItems: 'end'}}>
                        {collaborationMeetings.map((m, idx) => {
                          const heightPct = Math.round((m.meetings / maxMeetings) * 100);
                          const delta = idx === 0 ? 0 : m.meetings - collaborationMeetings[idx - 1].meetings;
                          const badgeColor = delta > 0 ? '#15803d' : delta < 0 ? '#dc2626' : '#475569';
                          const badgeText = idx === 0 ? 'start' : delta > 0 ? `+${delta}` : delta < 0 ? `${delta}` : 'flat';
                          return (
                            <div key={m.month} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%'}}>
                              <div style={{fontSize: '0.62em', fontWeight: '800', color: badgeColor, background: '#ffffff', border: `1px solid ${badgeColor}33`, borderRadius: '8px', padding: '3px 8px', textTransform: 'uppercase'}}>
                                {badgeText}
                              </div>
                              <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end'}}>
                                <div style={{width: '100%', height: `${heightPct}%`, background: 'linear-gradient(180deg, #0ea5e9 0%, #0369a1 100%)', borderRadius: '10px', border: '1px solid #bae6fd', boxShadow: '0 10px 20px rgba(14, 165, 233, 0.2)', position: 'relative', overflow: 'hidden'}}>
                                  <div style={{position: 'absolute', inset: '6px', borderRadius: '8px', background: 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0))', opacity: 0.8}}></div>
                                  <div style={{position: 'absolute', bottom: '6px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8em', fontWeight: '900', color: '#ffffff'}}>{m.meetings}</div>
                                </div>
                              </div>
                              <div style={{fontSize: '0.72em', fontWeight: '800', color: '#0f172a'}}>{m.month.slice(0, 3)}</div>
                            </div>
                          );
                        })}
                      </div>
                      <div style={{position: 'absolute', left: '12px', right: '12px', bottom: `${Math.round((avgMeetings / maxMeetings) * 100)}%`, borderTop: '1px dashed #94a3b8', pointerEvents: 'none'}}>
                        <div style={{position: 'absolute', right: '0', transform: 'translateY(-8px)', background: '#0f172a', color: '#fff', fontSize: '0.65em', fontWeight: '800', borderRadius: '6px', padding: '3px 8px', boxShadow: '0 4px 10px rgba(15, 23, 42, 0.2)'}}>Avg {avgMeetings}/mo</div>
                      </div>
                    </div>
                  </div>

                  <div style={{background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <div style={{fontSize: '0.8em', fontWeight: '800', color: '#0f172a'}}>📋 Top Agendas</div>
                    {topAgendaItems.map((item, idx) => (
                      <div key={idx} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', padding: '8px 10px', borderRadius: '10px', border: '1px solid #e2e8f0'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                          <div style={{width: '8px', height: '8px', borderRadius: '50%', background: ['#0ea5e9','#7c3aed','#15803d','#d97706'][idx % 4]}}></div>
                          <div style={{fontSize: '0.8em', fontWeight: '800', color: '#0f172a'}}>{item.title.length > 36 ? item.title.slice(0, 36) + '…' : item.title}</div>
                        </div>
                        <div style={{fontSize: '0.9em', fontWeight: '900', color: '#0f172a'}}>{item.count}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agenda participation detail (topic x departments) */}
                <div style={{background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div>
                      <div style={{fontSize: '0.9em', fontWeight: '800', color: '#0f172a'}}>Agenda Participation Details</div>
                      <div style={{fontSize: '0.8em', color: '#475569', fontWeight: '600'}}>Which departments joined each topic</div>
                    </div>
                    <div style={{fontSize: '0.75em', fontWeight: '800', color: '#0ea5e9', background: '#e0f2fe', border: '1px solid #bae6fd', padding: '6px 10px', borderRadius: '10px'}}>
                      Topics: {agendaParticipationDetails.length}
                    </div>
                  </div>

                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px'}}>
                    {agendaParticipationDetails.map((agenda, idx) => (
                      <div key={idx} style={{background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px'}}>
                          <div style={{fontSize: '0.85em', fontWeight: '800', color: '#0f172a', lineHeight: '1.3'}}>
                            {agenda.title.length > 44 ? agenda.title.slice(0, 44) + '…' : agenda.title}
                          </div>
                          <div style={{fontSize: '0.75em', fontWeight: '900', color: '#0ea5e9', background: '#e0f2fe', padding: '3px 8px', borderRadius: '8px'}}>{agenda.totalSessions}</div>
                        </div>
                        <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                          {agenda.months.map((m) => (
                            <div key={m} style={{fontSize: '0.65em', fontWeight: '800', color: '#0f172a', background: '#fff', border: '1px solid #e2e8f0', padding: '3px 6px', borderRadius: '6px'}}>{m.slice(0,3)}</div>
                          ))}
                        </div>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '4px'}}>
                          {departmentsList.map((dept) => {
                            const active = agenda.departments.includes(dept);
                            return (
                              <div key={dept} style={{
                                fontSize: '0.65em',
                                fontWeight: '800',
                                padding: '3px 6px',
                                borderRadius: '6px',
                                border: active ? '1px solid #0ea5e9' : '1px solid #e2e8f0',
                                background: active ? '#e0f2fe' : '#ffffff',
                                color: active ? '#075985' : '#94a3b8'
                              }}>
                                {dept}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Supporting Metrics */}
              <div>
                <div style={{fontSize: '0.9em', fontWeight: '700', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px'}}>📊 Key Performance Improvements</div>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px'}}>
                  {positiveGains.slice(0, 6).map((metric, idx) => (
                    <div key={idx} style={{padding: '16px', borderRadius: '10px', background: `${siteColors[site]}08`, border: `1.5px solid ${siteColors[site]}40`, textAlign: 'center', boxShadow: '0 8px 20px rgba(15,23,42,0.06)'}}>
                      <div style={{fontSize: '2.2em', fontWeight: '900', color: siteColors[site], marginBottom: '4px'}}>{metric.improvement}%</div>
                      <div style={{fontSize: '0.78em', color: '#0f172a', fontWeight: '700', lineHeight: '1.3'}}>{metric.name}</div>
                    </div>
                  ))}
                </div>

                {/* Deviation Explanation */}
                <div style={{marginTop: '18px', padding: '14px', borderRadius: '12px', background: '#fff', border: '1px solid #e2e8f0'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{fontSize: '0.9em', fontWeight: '800', color: '#0f172a'}}>Deviation Details</div>
                    <div style={{fontSize: '0.8em', fontWeight: '800', color: '#0ea5e9', background: '#e0f2fe', border: '1px solid #bae6fd', padding: '4px 8px', borderRadius: '8px'}}>{site}</div>
                  </div>
                  {site === 'SITE-I' ? (
                    <>
                      <div style={{marginTop: '10px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px'}}>
                        <div style={{background: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: '10px', padding: '12px'}}>
                          <div style={{fontSize: '0.75em', fontWeight: '800', color: '#6b21a8', textTransform: 'uppercase'}}>Improvement</div>
                          <div style={{fontSize: '1.8em', fontWeight: '900', color: '#8b5cf6'}}>31%</div>
                          <div style={{fontSize: '0.85em', color: '#374151'}}>Avg closure days reduced</div>
                        </div>
                        <div style={{background: '#ecfeff', border: '1px solid #cffafe', borderRadius: '10px', padding: '12px'}}>
                          <div style={{fontSize: '0.75em', fontWeight: '800', color: '#0369a1', textTransform: 'uppercase'}}>Before → After</div>
                          <div style={{fontSize: '1em', fontWeight: '800', color: '#0f172a'}}>87 days → 60 days</div>
                          <div style={{fontSize: '0.85em', color: '#374151'}}>Average closure</div>
                        </div>
                        <div style={{background: '#fff7ed', border: '1px solid #fde68a', borderRadius: '10px', padding: '12px'}}>
                          <div style={{fontSize: '0.75em', fontWeight: '800', color: '#9a3412', textTransform: 'uppercase'}}>Total</div>
                          <div style={{fontSize: '1.8em', fontWeight: '900', color: '#f59e0b'}}>30</div>
                          <div style={{fontSize: '0.85em', color: '#374151'}}>Deviations (Jan–Nov)</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{marginTop: '10px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px'}}>
                        <div style={{background: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: '10px', padding: '12px'}}>
                          <div style={{fontSize: '0.75em', fontWeight: '800', color: '#6b21a8', textTransform: 'uppercase'}}>Improvement</div>
                          <div style={{fontSize: '1.8em', fontWeight: '900', color: '#8b5cf6'}}>12%</div>
                          <div style={{fontSize: '0.85em', color: '#374151'}}>Avg closure days reduced</div>
                        </div>
                        <div style={{background: '#ecfeff', border: '1px solid #cffafe', borderRadius: '10px', padding: '12px'}}>
                          <div style={{fontSize: '0.75em', fontWeight: '800', color: '#0369a1', textTransform: 'uppercase'}}>Before → After</div>
                          <div style={{fontSize: '1em', fontWeight: '800', color: '#0f172a'}}>73 days → 64 days</div>
                          <div style={{fontSize: '0.85em', color: '#374151'}}>Average closure</div>
                        </div>
                        <div style={{background: '#fff7ed', border: '1px solid #fde68a', borderRadius: '10px', padding: '12px'}}>
                          <div style={{fontSize: '0.75em', fontWeight: '800', color: '#9a3412', textTransform: 'uppercase'}}>Total</div>
                          <div style={{fontSize: '1.8em', fontWeight: '900', color: '#f59e0b'}}>17</div>
                          <div style={{fontSize: '0.85em', color: '#374151'}}>Deviations (Jan–Nov)</div>
                        </div>
                      </div>
                      <div style={{marginTop: '10px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px'}}>
                        <div style={{background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px'}}>
                          <div style={{fontSize: '0.75em', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase'}}>Jan–Jun</div>
                          <div style={{fontSize: '0.9em', color: '#0f172a'}}>Count: 12</div>
                          <div style={{fontSize: '0.9em', color: '#0f172a'}}>Avg closure: 73 days</div>
                          <div style={{fontSize: '0.9em', color: '#0f172a'}}>Open: 1</div>
                        </div>
                        <div style={{background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px'}}>
                          <div style={{fontSize: '0.75em', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase'}}>Jul–Nov</div>
                          <div style={{fontSize: '0.9em', color: '#0f172a'}}>Count: 5</div>
                          <div style={{fontSize: '0.9em', color: '#0f172a'}}>Avg closure: 64 days</div>
                          <div style={{fontSize: '0.9em', color: '#0f172a'}}>Open: 4</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '12px',
      marginBottom: '14px'
    }}>
      {Object.entries(sitesData)
        .map(([site, data]) => {
          const avgImprovement = Math.round(
            Object.values(data).reduce((sum, m) => sum + m.improvement, 0) / Object.values(data).length
          );
          return { site, data, avgImprovement };
        })
        .sort((a, b) => b.avgImprovement - a.avgImprovement)
        .map(({ site, data, avgImprovement }) => {
        // Exclude Investigation (same incidents counted) but INCLUDE Deviations in total
        const totalItems = data.Incidents.total + data.CA.total + data.PA.total + data.OOS.total + data.CC.total + (data.Deviation?.total || 0);

        return (
          <div key={site} onClick={() => onSiteClick(site)} style={{
            padding: '14px',
            backgroundColor: siteColors[site] + '10',
            border: `3px solid ${siteColors[site]}`,
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: 'scale(1)',
            position: 'relative',
            minHeight: '210px',
            display: 'flex',
            flexDirection: 'column'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow = `0 8px 20px ${siteColors[site]}30`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          >
            <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '8px', zIndex: 10 }}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedSiteInfo(site);
                }}
                style={{
                  background: siteColors[site],
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  fontSize: '0.85em',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  boxShadow: `0 2px 8px ${siteColors[site]}60`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15)';
                  e.currentTarget.style.boxShadow = `0 4px 12px ${siteColors[site]}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = `0 2px 8px ${siteColors[site]}60`;
                }}
              >
                ⓘ
              </button>
            </div>
            <div style={{
              fontSize: '1em',
              fontWeight: '800',
              color: siteColors[site],
              marginBottom: '10px'
            }}>
              {site}
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginBottom: '10px',
              gap: '8px'
            }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{
                  fontSize: '1.8em',
                  fontWeight: '800',
                  color: siteColors[site]
                }}>
                  {avgImprovement}%
                </div>
                <div style={{ fontSize: '0.7em', color: '#6b7280', marginTop: '2px' }}>
                  Avg Improvement
                </div>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{
                  fontSize: '1.8em',
                  fontWeight: '800',
                  color: '#111827'
                }}>
                  {totalItems}
                </div>
                <div style={{ fontSize: '0.7em', color: '#6b7280', marginTop: '2px' }}>
                  Total Items
                </div>
              </div>
            </div>
            <div style={{
              fontSize: '0.75em',
              color: '#6b7280',
              lineHeight: '1.6',
              paddingTop: '8px',
              borderTop: `1px solid ${siteColors[site]}30`,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px 12px'
            }}>
              <div>
                ✓ IR:{' '}
                <span style={{ color: data.Incidents.improvement < 0 ? '#ef4444' : '#6b7280', fontWeight: '600' }}>
                  {data.Incidents.improvement}%
                </span>
              </div>
              <div>
                ✓ OOS:{' '}
                <span style={{ color: data.OOS.improvement < 0 ? '#ef4444' : '#6b7280', fontWeight: '600' }}>
                  {data.OOS.improvement}%
                </span>
              </div>
              <div>
                ✓ CA:{' '}
                <span style={{ color: data.CA.improvement < 0 ? '#ef4444' : '#6b7280', fontWeight: '600' }}>
                  {data.CA.improvement}%
                </span>
              </div>
              <div>
                ✓ CC:{' '}
                <span style={{ color: data.CC.improvement < 0 ? '#ef4444' : '#6b7280', fontWeight: '600' }}>
                  {data.CC.improvement}%
                </span>
              </div>
              <div>
                ✓ PA:{' '}
                <span style={{ color: data.PA.improvement < 0 ? '#ef4444' : '#6b7280', fontWeight: '600' }}>
                  {data.PA.improvement}%
                </span>
              </div>
              <div>
                ✓ Inv:{' '}
                <span style={{ color: data.Investigation.improvement < 0 ? '#ef4444' : '#6b7280', fontWeight: '600' }}>
                  {data.Investigation.improvement}%
                </span>
              </div>
              <div>
                ✓ Dev:{' '}
                <span style={{ color: data.Deviation && data.Deviation.improvement < 0 ? '#ef4444' : '#6b7280', fontWeight: '600' }}>
                  {data.Deviation ? data.Deviation.improvement : 0}%
                </span>
              </div>
            </div>
            
            {/* Key Improvements Button */}
            <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: `1px solid ${siteColors[site]}30` }}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedSiteKeyImprovements(site);
                }}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  fontSize: '0.75em',
                  cursor: 'pointer',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(249, 115, 22, 0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(249, 115, 22, 0.45), inset 0 1px 0 rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.35), inset 0 1px 0 rgba(255,255,255,0.2)';
                }}
              >
                <span style={{fontSize: '1em'}}>✨</span>
                Key Improvements
              </button>
            </div>
          </div>
        )
      })}
    </div>

    {/* Site Info Modal */}
    {selectedSiteInfo && (
      <SiteInfoModal 
        site={selectedSiteInfo}
        onClose={() => setSelectedSiteInfo(null)}
      />
    )}
    {selectedSiteKeyImprovements && (
      <KeyImprovementsModal 
        site={selectedSiteKeyImprovements}
        onClose={() => setSelectedSiteKeyImprovements(null)}
      />
    )}
    {showIPQAMilestones && (
      <SiteIIIPQAMilestones onClose={() => setShowIPQAMilestones(false)} />
    )}
    </>
  )
}

// Mastering Detail Component
function MasteringDetail({ site, siteLabel }) {
  const rows = masterDataOverview.sites[siteLabel];
  const metrics = metricsData[site]['Mastering'];
  
  const siteColors = {
    'Site I': { main: '#dc2626', bg: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)', header: '#7f1d1d', cell: '#ef4444' },
    'Site III': { main: '#9333ea', bg: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)', header: '#581c87', cell: '#a855f7' },
    'Site V': { main: '#0891b2', bg: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)', header: '#164e63', cell: '#06b6d4' }
  };
  const colors = siteColors[siteLabel];
  
  return (
    <div style={{ background: '#f8fafc', padding: '0' }}>
      {/* Overview Cards */}
      <div style={{
        background: colors.bg,
        padding: '20px',
        borderRadius: '12px',
        border: `2px solid ${colors.main}`,
        marginBottom: '20px',
        boxShadow: `0 4px 16px ${colors.main}25`
      }}>
        <div style={{ 
          fontSize: '1.4rem', 
          fontWeight: 900, 
          color: colors.header,
          marginBottom: '16px',
          paddingBottom: '12px',
          borderBottom: `2px solid ${colors.main}`
        }}>
          {siteLabel} ▶ TOTAL: {metrics.total}
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '14px'
        }}>
          {/* Jan-June Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '10px',
            padding: '16px',
            border: `2px solid ${colors.main}30`,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>
              Jan - June (Total)
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: colors.main, marginBottom: '4px' }}>
              {metrics.janJune.total}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
              {metrics.janJune.label}
            </div>
          </div>

          {/* July-Nov Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '10px',
            padding: '16px',
            border: `2px solid ${colors.main}30`,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>
              July - Nov (Total)
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: colors.main, marginBottom: '4px' }}>
              {metrics.julyNov.total}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
              {metrics.julyNov.label}
            </div>
          </div>

          {/* Change Card */}
          <div style={{
            background: metrics.improvement.startsWith('+') ? '#dcfce7' : '#fee2e2',
            borderRadius: '10px',
            padding: '16px',
            border: `2px solid ${metrics.improvement.startsWith('+') ? '#10b981' : '#ef4444'}`,
            boxShadow: `0 2px 8px ${metrics.improvement.startsWith('+') ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'}`
          }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>
              {metrics.improvement.startsWith('+') ? '📈 Improvement' : '📉 Change'}
            </div>
            <div style={{ 
              fontSize: '2.2rem', 
              fontWeight: 900, 
              color: metrics.improvement.startsWith('+') ? '#10b981' : '#ef4444',
              marginBottom: '4px'
            }}>
              {metrics.improvement}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#111827', fontWeight: 600 }}>
              Jan-June vs July-Nov
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Data Table */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        border: '2px solid #e5e7eb',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
      }}>
        <div style={{ 
          fontSize: '1.3rem', 
          fontWeight: 900, 
          color: '#0f172a',
          marginBottom: '16px',
          paddingBottom: '12px',
          borderBottom: '2px solid #e5e7eb'
        }}>
          📊 Monthly Performance Breakdown
        </div>
        
        {/* Table Headers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '130px repeat(6, 1fr)',
          gap: '8px',
          marginBottom: '10px',
          padding: '10px',
          background: colors.bg,
          borderRadius: '8px',
          border: `2px solid ${colors.main}30`
        }}>
          <div style={{ fontSize: '0.95rem', fontWeight: 900, color: colors.header }}>MONTH</div>
          {masterDataOverview.categories.map(cat => (
            <div key={cat} style={{
              fontSize: '0.95rem',
              fontWeight: 900,
              color: colors.header,
              textAlign: 'center'
            }}>{cat}</div>
          ))}
        </div>

        {/* Data Rows */}
        {rows.map((row, idx) => (
          <div key={idx} style={{
            display: 'grid',
            gridTemplateColumns: '130px repeat(6, 1fr)',
            gap: '8px',
            marginBottom: '8px',
            padding: '10px',
            background: '#ffffff',
            borderRadius: '8px',
            border: `1px solid ${colors.main}15`,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = colors.bg;
            e.currentTarget.style.transform = 'translateX(4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.transform = 'translateX(0)';
          }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: 900,
              color: colors.header,
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '6px'
            }}>
              {row.month}
            </div>
            {masterDataOverview.categories.map(cat => (
              <div key={cat} style={{
                fontSize: '1.1rem',
                fontWeight: 900,
                color: '#ffffff',
                background: `linear-gradient(135deg, ${colors.cell} 0%, ${colors.main} 100%)`,
                padding: '10px 6px',
                borderRadius: '6px',
                textAlign: 'center',
                boxShadow: `0 2px 8px ${colors.main}25`,
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                {row[cat]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper component to render category card with single highlighted metric
function CategoryCard({ title, metrics, color, borderColor, onClick, textColor, isSpecial }) {
  // Special handling for Mastering card
  if (isSpecial && title === 'Mastering') {
    return (
      <div 
        onClick={onClick}
        style={{
          background: `linear-gradient(135deg, #ffffff 0%, ${borderColor}08 100%)`,
          border: `2px solid ${borderColor}40`,
          borderRadius: '16px',
          padding: '24px',
          boxShadow: `0 8px 24px ${borderColor}12, 0 2px 8px rgba(0, 0, 0, 0.08)`,
          cursor: 'pointer',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          minHeight: '240px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)'
          e.currentTarget.style.boxShadow = `0 24px 48px ${borderColor}20, 0 8px 16px rgba(0, 0, 0, 0.15)`
          e.currentTarget.style.borderColor = borderColor
          e.currentTarget.style.background = `linear-gradient(135deg, #ffffff 0%, ${borderColor}12 100%)`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)'
          e.currentTarget.style.boxShadow = `0 8px 24px ${borderColor}12, 0 2px 8px rgba(0, 0, 0, 0.08)`
          e.currentTarget.style.borderColor = `${borderColor}40`
          e.currentTarget.style.background = `linear-gradient(135deg, #ffffff 0%, ${borderColor}08 100%)`
        }}
      >
        {/* Decorative top accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: `linear-gradient(90deg, ${borderColor}, ${borderColor}40, transparent)`,
          borderRadius: '16px 16px 0 0'
        }}></div>

        {/* Decorative corner accent */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '40px',
          height: '40px',
          background: `radial-gradient(circle, ${borderColor}15 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none'
        }}></div>

        {/* Title with Dropdown Arrow */}
        <div style={{ marginBottom: '14px', marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h4 style={{ 
            margin: '0', 
            color: textColor, 
            fontWeight: '800', 
            fontSize: '1.05em',
            letterSpacing: '0.4px',
            textTransform: 'uppercase',
            lineHeight: '1.3'
          }}>
            {title}
          </h4>
          <span style={{ fontSize: '1.2em', color: borderColor }}>▶</span>
        </div>

        {/* Total Section */}
        <div style={{ marginBottom: '12px' }}>
          <div style={{ fontSize: '0.7em', color: '#94a3b8', fontWeight: '700', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            TOTAL
          </div>
          <div style={{ 
            fontSize: '2.2em', 
            fontWeight: '900', 
            color: borderColor,
            lineHeight: '1',
            textShadow: `0 2px 4px ${borderColor}20`
          }}>
            {metrics?.total}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${borderColor}30, transparent)`,
          marginBottom: '16px'
        }}></div>

        {/* Period Breakdown Section */}
        <div style={{ 
          background: `linear-gradient(135deg, ${borderColor}15, ${borderColor}08)`,
          border: `1.5px solid ${borderColor}30`,
          padding: '16px 16px',
          borderRadius: '12px',
          fontSize: '0.8em',
          color: '#475569',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '0.75em', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '4px' }}>
              Jan - June (Total)
            </div>
            <div style={{ 
              fontSize: '1.6em', 
              fontWeight: '900', 
              color: borderColor,
              marginBottom: '2px'
            }}>
              {metrics?.janJune?.total}
            </div>
            <div style={{ fontSize: '0.7em', color: '#64748b', fontWeight: '600' }}>
              {metrics?.janJune?.label}
            </div>
          </div>
          
          <div style={{ 
            paddingTop: '12px',
            borderTop: `1px solid ${borderColor}20`,
            marginBottom: '12px'
          }}>
            <div style={{ fontSize: '0.75em', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '4px' }}>
              July - Nov (Total)
            </div>
            <div style={{ 
              fontSize: '1.6em', 
              fontWeight: '900', 
              color: borderColor,
              marginBottom: '2px'
            }}>
              {metrics?.julyNov?.total}
            </div>
            <div style={{ fontSize: '0.7em', color: '#64748b', fontWeight: '600' }}>
              {metrics?.julyNov?.label}
            </div>
          </div>

          <div style={{
            paddingTop: '12px',
            borderTop: `1px solid ${borderColor}20`,
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.75em', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '4px' }}>
              {metrics?.improvement?.startsWith('+') ? '📈' : '📉'} Change
            </div>
            <div style={{ 
              fontSize: '1.8em', 
              fontWeight: '900', 
              color: metrics?.improvement?.startsWith('+') ? '#10b981' : '#dc2626'
            }}>
              {metrics?.improvement}
            </div>
            <div style={{ fontSize: '0.7em', color: '#64748b', fontWeight: '600', marginTop: '2px' }}>
              Jan-June vs July-Nov
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      style={{
        background: `linear-gradient(135deg, #ffffff 0%, ${borderColor}08 100%)`,
        border: `2px solid ${borderColor}40`,
        borderRadius: '16px',
        padding: '24px',
        boxShadow: `0 8px 24px ${borderColor}12, 0 2px 8px rgba(0, 0, 0, 0.08)`,
        cursor: 'pointer',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        minHeight: '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)'
        e.currentTarget.style.boxShadow = `0 24px 48px ${borderColor}20, 0 8px 16px rgba(0, 0, 0, 0.15)`
        e.currentTarget.style.borderColor = borderColor
        e.currentTarget.style.background = `linear-gradient(135deg, #ffffff 0%, ${borderColor}12 100%)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = `0 8px 24px ${borderColor}12, 0 2px 8px rgba(0, 0, 0, 0.08)`
        e.currentTarget.style.borderColor = `${borderColor}40`
        e.currentTarget.style.background = `linear-gradient(135deg, #ffffff 0%, ${borderColor}08 100%)`
      }}
    >
      {/* Decorative top accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '5px',
        background: `linear-gradient(90deg, ${borderColor}, ${borderColor}40, transparent)`,
        borderRadius: '16px 16px 0 0'
      }}></div>

      {/* Decorative corner accent */}
      <div style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        width: '40px',
        height: '40px',
        background: `radial-gradient(circle, ${borderColor}15 0%, transparent 70%)`,
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      {/* Title */}
      <div style={{ marginBottom: '14px', marginTop: '2px' }}>
        <h4 style={{ 
          margin: '0', 
          color: textColor, 
          fontWeight: '800', 
          fontSize: '1.05em',
          letterSpacing: '0.4px',
          textTransform: 'uppercase',
          lineHeight: '1.3'
        }}>
          {title}
        </h4>
      </div>

      {/* Total Records Section */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ fontSize: '0.7em', color: '#94a3b8', fontWeight: '700', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
          Total Records
        </div>
        <div style={{ 
          fontSize: '1.8em', 
          fontWeight: '900', 
          color: borderColor,
          lineHeight: '1',
          textShadow: `0 2px 4px ${borderColor}20`
        }}>
          {metrics?.total}
        </div>
      </div>

      {/* Divider */}
      <div style={{
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${borderColor}30, transparent)`,
        marginBottom: '16px'
      }}></div>

      {/* Main Metric Label (for Incidents, CA, PA) */}
      {metrics?.mainMetric && (
        <div style={{ marginBottom: '10px' }}>
          <div style={{ fontSize: '0.7em', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            {metrics?.mainMetric}
          </div>
        </div>
      )}

      {/* Improvement Percentage */}
      <div style={{ textAlign: 'center', marginBottom: '14px' }}>
        <div style={{ 
          fontSize: parseInt(metrics?.improvement) < 0 ? '2.4em' : '2.6em', 
          fontWeight: '900', 
          color: borderColor,
          lineHeight: '1',
          marginBottom: '4px',
          textShadow: `0 4px 8px ${borderColor}25`,
          letterSpacing: '-1px',
          position: 'relative',
          display: 'inline-block',
          paddingLeft: '48px'
        }}>
          {parseInt(metrics?.improvement) < 0 ? (
            <span style={{ color: '#dc2626', fontSize: '0.5em', position: 'absolute', top: '-20px', left: '0' }}>↓</span>
          ) : (
            <span style={{ color: '#22c55e', fontSize: '0.5em', position: 'absolute', top: '-20px', left: '0' }}>↑</span>
          )}
          {metrics?.improvement.replace('%', '')}<span style={{ fontSize: '0.55em', marginLeft: '2px' }}>%</span>
        </div>
        <div style={{ fontSize: '0.8em', color: '#0f172a', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {metrics?.label}
        </div>
      </div>

      {/* From/To Details Section - Enhanced */}
      <div style={{ 
        background: `linear-gradient(135deg, ${borderColor}15, ${borderColor}08)`,
        border: `1.5px solid ${borderColor}30`,
        padding: '16px 16px',
        borderRadius: '12px',
        fontSize: '0.85em',
        color: '#475569',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `linear-gradient(135deg, ${borderColor}20, ${borderColor}12)`
        e.currentTarget.style.borderColor = `${borderColor}50`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = `linear-gradient(135deg, ${borderColor}15, ${borderColor}08)`
        e.currentTarget.style.borderColor = `${borderColor}30`
      }}
      >
        <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: '700', color: '#0f172a', textTransform: 'uppercase', fontSize: '0.75em', letterSpacing: '0.3px' }}>From:</span>
          <strong style={{ color: '#dc2626', fontWeight: '900', fontSize: '1.15em' }}>
            {title === 'Out of Specifications' ? metrics?.avg : metrics?.from} d
          </strong>
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          paddingTop: '8px',
          borderTop: `1px solid ${borderColor}20`
        }}>
          <span style={{ fontWeight: '700', color: '#0f172a', textTransform: 'uppercase', fontSize: '0.75em', letterSpacing: '0.3px' }}>To:</span>
          <strong style={{ color: borderColor, fontWeight: '900', fontSize: '1.15em' }}>
            {title === 'Out of Specifications' ? metrics?.latest : metrics?.to} d
          </strong>
        </div>
      </div>
    </div>
  )
}

export default function SiteOverview() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSite, setSelectedSite] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
    const [expandedSites, setExpandedSites] = useState({
      'Site I': false,
      'Site III': false,
      'Site V': false
    })
  const sectionRef = useRef(null)
  const siteRefMap = useRef({
    'SITE-I': useRef(null),
    'SITE-III': useRef(null),
    'SITE-V': useRef(null),
    'SITE-IV': useRef(null)
  })

    const toggleSiteExpansion = (siteName) => {
      setExpandedSites(prev => ({
        ...prev,
        [siteName]: !prev[siteName]
      }))
    }

  const handleCategoryClick = (category, site) => {
    // Save the current scroll position of the section
    if (sectionRef.current) {
      setScrollPosition(sectionRef.current.scrollTop)
    }
    setSelectedCategory(category)
    setSelectedSite(site)
  }

  const handleClose = () => {
    setSelectedCategory(null)
    setSelectedSite(null)
    // Restore scroll position after state update
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollTop = scrollPosition
      }
    }, 0)
  }

  const handleSiteClick = (siteName) => {
    if (siteRefMap.current[siteName] && siteRefMap.current[siteName].current) {
      const siteElement = siteRefMap.current[siteName].current
      const sectionContainer = sectionRef.current
      if (sectionContainer) {
        const elementPosition = siteElement.offsetTop - 100
        sectionContainer.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  // Scroll to top button visibility - check on scroll and when modal opens/closes
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        setShowScrollTop(sectionRef.current.scrollTop > 300);
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => section.removeEventListener('scroll', handleScroll);
    }
  }, [selectedCategory, selectedSite]);

  const scrollToTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="content-slide" data-state="site-overview" ref={sectionRef} style={{ position: 'absolute', inset: 0, overflow: 'auto', background: '#ffffff', padding: '0', margin: '0' }}>
      <h2 style={{ borderBottom: '4px solid #b91c1c', paddingBottom: '8px', color: '#b91c1c', fontSize: '1.8em', fontWeight: '600', margin: '0', padding: '24px 32px 20px 32px', background: '#ffffff' }}>
        📊 Key Metrics Overview - QMS
      </h2>
      <div style={{ padding: '0 32px 32px 32px' }}>

      {/* Executive Summary Sections at the top */}
      <div style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '2px solid #e5e7eb' }}>
        <OverallPerformance onCompleteOverviewClick={() => setSelectedCategory('overview')} />
        <SiteComparisonGrid onSiteClick={handleSiteClick} />


      </div>

      {/* Home Button - Show when any category is selected (except overview) */}
      {selectedCategory && selectedCategory !== 'overview' && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px'
        }}>
          <button
            onClick={() => { setSelectedCategory(null); setSelectedSite(null) }}
            style={{
              padding: '14px 28px',
              fontSize: '1.1em',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: '#b91c1c',
              color: '#ffffff',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(185, 28, 28, 0.3)',
              minWidth: '110px',
              fontFamily: 'inherit'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#991b1b'
              e.target.style.boxShadow = '0 6px 16px rgba(185, 28, 28, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#b91c1c'
              e.target.style.boxShadow = '0 4px 12px rgba(185, 28, 28, 0.3)'
            }}
          >
            🏠 Home
          </button>
        </div>
      )}

      {/* Complete Overview Section - Show when overview button is clicked */}
      {selectedCategory === 'overview' && (
        <div style={{ marginTop: '20px', backgroundColor: '#ffffff', padding: '0', borderRadius: '0' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <button
              onClick={() => { setSelectedCategory(null); setSelectedSite(null) }}
              style={{
                padding: '14px 28px',
                fontSize: '1.1em',
                fontWeight: '600',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: '#b91c1c',
                color: '#ffffff',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(185, 28, 28, 0.3)',
                minWidth: '110px',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#991b1b'
                e.target.style.boxShadow = '0 6px 16px rgba(185, 28, 28, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#b91c1c'
                e.target.style.boxShadow = '0 4px 12px rgba(185, 28, 28, 0.3)'
              }}
            >
              🏠 Home
            </button>
          </div>
          <QMSOverview />
        </div>
      )}

      {/* Overview - Show when no category is selected */}
      {!selectedCategory && (
        <div style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.2em', color: '#0f172a', fontWeight: '700', paddingBottom: '10px', borderBottom: '2px solid #b91c1c', margin: 0, flex: 1 }}>
              📈 Individual Site Key Metrics
            </h3>
          </div>
          {/* SITE-I Section */}
          <div ref={siteRefMap.current['SITE-I']} style={{ marginBottom: '40px' }}>
            <h3 style={{ 
              fontSize: '1.4em', 
              color: '#0f172a', 
              fontWeight: '800', 
              marginBottom: '20px', 
              paddingBottom: '16px', 
              paddingLeft: '16px',
              borderBottom: '3px solid #3b82f6',
              borderLeft: '6px solid #3b82f6',
              letterSpacing: '0.5px',
              position: 'relative'
            }}>
              🏭 SITE-I
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px' }}>
              {[
                { title: 'PA', key: 'PA', improvement: 60 },
                { title: 'CA', key: 'CA', improvement: 54 },
                { title: 'OOS', key: 'Out of Specifications', improvement: 49 },
                { title: 'Deviation', key: 'Deviations', improvement: 31 },
                { title: 'CC', key: 'Change Controls', improvement: 13 },
                { title: 'IR', key: 'Incidents', improvement: 10 },
                { title: 'Mastering', key: 'Mastering', improvement: -15.1, isSpecial: true }
              ].sort((a, b) => {
                // Keep Mastering at the end
                if (a.isSpecial) return 1;
                if (b.isSpecial) return -1;
                // Sort by improvement descending (highest first)
                return b.improvement - a.improvement;
              }).map(cat => {
                let color, borderColor, textColor;
                if (cat.isSpecial) {
                  // Mastering card: green if positive, red if negative
                  if (cat.improvement >= 0) {
                    color = '#10b981'; borderColor = '#10b981'; textColor = '#047857';
                  } else {
                    color = '#dc2626'; borderColor = '#dc2626'; textColor = '#991b1b';
                  }
                } else if (cat.improvement >= 51) {
                  color = '#10b981'; borderColor = '#10b981'; textColor = '#047857';
                } else if (cat.improvement >= 26) {
                  color = '#3b82f6'; borderColor = '#3b82f6'; textColor = '#1e40af';
                } else if (cat.improvement >= 11) {
                  color = '#f59e0b'; borderColor = '#f59e0b'; textColor = '#b45309';
                } else {
                  color = '#dc2626'; borderColor = '#dc2626'; textColor = '#991b1b';
                }
                return (
                  <CategoryCard
                    key={cat.key}
                    title={cat.title}
                    metrics={metricsData['SITE-I'][cat.key]}
                    color={color}
                    borderColor={borderColor}
                    textColor={textColor}
                    isSpecial={cat.isSpecial}
                    onClick={() => handleCategoryClick(cat.key, 'SITE-I')}
                  />
                );
              })}
            </div>
          </div>

          {/* SITE-III Section */}
          <div ref={siteRefMap.current['SITE-III']} style={{ marginBottom: '40px' }}>
            <h3 style={{ 
              fontSize: '1.4em', 
              color: '#0f172a', 
              fontWeight: '800', 
              marginBottom: '20px', 
              paddingBottom: '16px', 
              paddingLeft: '16px',
              borderBottom: '3px solid #f59e0b',
              borderLeft: '6px solid #f59e0b',
              letterSpacing: '0.5px',
              position: 'relative'
            }}>
              🏭 SITE-III
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px' }}>
              {[
                { title: 'CC', key: 'Change Controls', improvement: 61 },
                { title: 'OOS', key: 'Out of Specifications', improvement: 49 },
                { title: 'IR', key: 'Incidents', improvement: 36 },
                { title: 'CA', key: 'CA', improvement: 16 },
                { title: 'Deviation', key: 'Deviations', improvement: 12 },
                { title: 'PA', key: 'PA', improvement: 6 },
                { title: 'Mastering', key: 'Mastering', improvement: 272.1, isSpecial: true }
              ].sort((a, b) => {
                // Keep Mastering at the end
                if (a.isSpecial) return 1;
                if (b.isSpecial) return -1;
                // Sort by improvement descending (highest first)
                return b.improvement - a.improvement;
              }).map(cat => {
                let color, borderColor, textColor;
                if (cat.isSpecial) {
                  // Mastering card: green if positive, red if negative
                  if (cat.improvement >= 0) {
                    color = '#10b981'; borderColor = '#10b981'; textColor = '#047857';
                  } else {
                    color = '#dc2626'; borderColor = '#dc2626'; textColor = '#991b1b';
                  }
                } else if (cat.improvement >= 51) {
                  color = '#10b981'; borderColor = '#10b981'; textColor = '#047857';
                } else if (cat.improvement >= 26) {
                  color = '#3b82f6'; borderColor = '#3b82f6'; textColor = '#1e40af';
                } else if (cat.improvement >= 11) {
                  color = '#f59e0b'; borderColor = '#f59e0b'; textColor = '#b45309';
                } else {
                  color = '#dc2626'; borderColor = '#dc2626'; textColor = '#991b1b';
                }
                return (
                  <CategoryCard
                    key={cat.key}
                    title={cat.title}
                    metrics={metricsData['SITE-III'][cat.key]}
                    color={color}
                    borderColor={borderColor}
                    textColor={textColor}
                    isSpecial={cat.isSpecial}
                    onClick={() => handleCategoryClick(cat.key, 'SITE-III')}
                  />
                );
              })}
            </div>
          </div>

          {/* SITE-IV Section */}
          <div ref={siteRefMap.current['SITE-IV']} style={{ marginBottom: '40px' }}>
            <h3 style={{ 
              fontSize: '1.4em', 
              color: '#0f172a', 
              fontWeight: '800', 
              marginBottom: '20px', 
              paddingBottom: '16px', 
              paddingLeft: '16px',
              borderBottom: '3px solid #f97316',
              borderLeft: '6px solid #f97316',
              letterSpacing: '0.5px',
              position: 'relative'
            }}>
              🏭 SITE-IV
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
              {[
                { title: 'CC', key: 'Change Controls', improvement: 17 },
                { title: 'IR', key: 'Incidents', improvement: 26 },
                { title: 'CA', key: 'CA', improvement: 20 },
                { title: 'PA', key: 'PA', improvement: 0 },
                { title: 'OOS', key: 'Out of Specifications', improvement: 0 },
                { title: 'Deviation', key: 'Deviations', improvement: 67 }
              ].sort((a, b) => b.improvement - a.improvement).map(cat => {
                let color, borderColor, textColor;
                if (cat.improvement >= 51) {
                  color = '#10b981'; borderColor = '#10b981'; textColor = '#047857';
                } else if (cat.improvement >= 26) {
                  color = '#3b82f6'; borderColor = '#3b82f6'; textColor = '#1e40af';
                } else if (cat.improvement >= 11) {
                  color = '#f59e0b'; borderColor = '#f59e0b'; textColor = '#b45309';
                } else {
                  color = '#dc2626'; borderColor = '#dc2626'; textColor = '#991b1b';
                }
                return (
                  <CategoryCard
                    key={cat.key}
                    title={cat.title}
                    metrics={metricsData['SITE-IV'][cat.key]}
                    color={color}
                    borderColor={borderColor}
                    textColor={textColor}
                    onClick={() => handleCategoryClick(cat.key, 'SITE-IV')}
                  />
                );
              })}
            </div>
          </div>

          {/* SITE-V Section */}
          <div ref={siteRefMap.current['SITE-V']} style={{ marginBottom: '40px' }}>
            <h3 style={{ 
              fontSize: '1.4em', 
              color: '#0f172a', 
              fontWeight: '800', 
              marginBottom: '20px', 
              paddingBottom: '16px', 
              paddingLeft: '16px',
              borderBottom: '3px solid #ec4899',
              borderLeft: '6px solid #ec4899',
              letterSpacing: '0.5px',
              position: 'relative'
            }}>
              🏭 SITE-V
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px' }}>
              {[
                { title: 'OOS', key: 'Out of Specifications', improvement: 59 },
                { title: 'PA', key: 'PA', improvement: 54 },
                { title: 'CA', key: 'CA', improvement: 52 },
                { title: 'Deviation', key: 'Deviations', improvement: 42 },
                { title: 'IR', key: 'Incidents', improvement: 28 },
                { title: 'CC', key: 'Change Controls', improvement: 23 },
                { title: 'Mastering', key: 'Mastering', improvement: -40.7, isSpecial: true }
              ].sort((a, b) => {
                // Keep Mastering at the end
                if (a.isSpecial) return 1;
                if (b.isSpecial) return -1;
                // Sort by improvement descending (highest first)
                return b.improvement - a.improvement;
              }).map(cat => {
                let color, borderColor, textColor;
                if (cat.isSpecial) {
                  // Mastering card: green if positive, red if negative
                  if (cat.improvement >= 0) {
                    color = '#10b981'; borderColor = '#10b981'; textColor = '#047857';
                  } else {
                    color = '#dc2626'; borderColor = '#dc2626'; textColor = '#991b1b';
                  }
                } else if (cat.improvement >= 51) {
                  color = '#10b981'; borderColor = '#10b981'; textColor = '#047857';
                } else if (cat.improvement >= 26) {
                  color = '#3b82f6'; borderColor = '#3b82f6'; textColor = '#1e40af';
                } else if (cat.improvement >= 11) {
                  color = '#f59e0b'; borderColor = '#f59e0b'; textColor = '#b45309';
                } else {
                  color = '#dc2626'; borderColor = '#dc2626'; textColor = '#991b1b';
                }
                return (
                  <CategoryCard
                    key={cat.key}
                    title={cat.title}
                    metrics={metricsData['SITE-V'][cat.key]}
                    color={color}
                    borderColor={borderColor}
                    textColor={textColor}
                    isSpecial={cat.isSpecial}
                    onClick={() => handleCategoryClick(cat.key, 'SITE-V')}
                  />
                );
              })}
            </div>
          </div>


        </div>
      )}

      {/* Category Details View */}
      {selectedCategory && selectedSite && createPortal(
        <FullscreenShell 
          onClose={handleClose} 
          title={`${selectedSite} - ${selectedCategory}`}
          accentColor={siteColors[selectedSite]}
        >
          <div style={{ padding: '28px' }}>
            {selectedSite === 'SITE-I' && selectedCategory === 'Incidents' && <SiteIIncidents />}
            {selectedSite === 'SITE-I' && selectedCategory === 'CA' && <SiteICorrectiveActions />}
            {selectedSite === 'SITE-I' && selectedCategory === 'PA' && <SiteIPreventiveActions />}
            {selectedSite === 'SITE-I' && selectedCategory === 'Out of Specifications' && <SiteIOutOfSpecifications />}
            {selectedSite === 'SITE-I' && selectedCategory === 'Change Controls' && <SiteIChangeControls />}
            {selectedSite === 'SITE-I' && selectedCategory === 'Deviations' && <SiteIDeviations />}
            {selectedSite === 'SITE-III' && selectedCategory === 'Incidents' && <SiteIIIIncidents />}
            {selectedSite === 'SITE-III' && selectedCategory === 'CA' && <SiteIIICorrectiveActions />}
            {selectedSite === 'SITE-III' && selectedCategory === 'PA' && <SiteIIIPreventiveActions />}
            {selectedSite === 'SITE-III' && selectedCategory === 'Out of Specifications' && <SiteIIIOutOfSpecifications />}
            {selectedSite === 'SITE-III' && selectedCategory === 'Change Controls' && <SiteIIIChangeControls />}
            {selectedSite === 'SITE-III' && selectedCategory === 'Deviations' && <SiteIIIDeviations />}
            {selectedSite === 'SITE-V' && selectedCategory === 'Incidents' && <SiteVIncidents />}
            {selectedSite === 'SITE-V' && selectedCategory === 'CA' && <SiteVCorrectiveActions />}
            {selectedSite === 'SITE-V' && selectedCategory === 'PA' && <SiteVPreventiveActions />}
            {selectedSite === 'SITE-V' && selectedCategory === 'Out of Specifications' && <SiteVOutOfSpecifications />}
            {selectedSite === 'SITE-V' && selectedCategory === 'Change Controls' && <SiteVChangeControls />}
            {selectedSite === 'SITE-V' && selectedCategory === 'Deviations' && <SiteVDeviations />}
            {selectedSite === 'SITE-IV' && selectedCategory === 'Incidents' && <SiteIVIncidents />}
            {selectedSite === 'SITE-IV' && selectedCategory === 'CA' && <SiteIVCorrectiveActions />}
            {selectedSite === 'SITE-IV' && selectedCategory === 'PA' && <SiteIVPreventiveActions />}
            {selectedSite === 'SITE-IV' && selectedCategory === 'Out of Specifications' && <SiteIVOutOfSpecifications />}
            {selectedSite === 'SITE-IV' && selectedCategory === 'Change Controls' && <SiteIVChangeControls />}
            {selectedSite === 'SITE-IV' && selectedCategory === 'Deviations' && <SiteIVDeviations />}
            
            {/* Mastering Detail Views */}
            {selectedSite === 'SITE-I' && selectedCategory === 'Mastering' && <MasteringDetail site="SITE-I" siteLabel="Site I" />}
            {selectedSite === 'SITE-III' && selectedCategory === 'Mastering' && <MasteringDetail site="SITE-III" siteLabel="Site III" />}
            {selectedSite === 'SITE-V' && selectedCategory === 'Mastering' && <MasteringDetail site="SITE-V" siteLabel="Site V" />}

            {!(selectedSite === 'SITE-I' && (
              selectedCategory === 'Incidents' ||
              selectedCategory === 'CA' ||
              selectedCategory === 'PA' ||
              selectedCategory === 'Out of Specifications' ||
              selectedCategory === 'Change Controls' ||
              selectedCategory === 'Mastering'
            )) && !(
              selectedSite === 'SITE-III' && (
                selectedCategory === 'Incidents' ||
                selectedCategory === 'CA' ||
                selectedCategory === 'PA' ||
                selectedCategory === 'Out of Specifications' ||
                selectedCategory === 'Change Controls' ||
                selectedCategory === 'Deviations' ||
                selectedCategory === 'Mastering'
              )
            ) && !(
              selectedSite === 'SITE-IV' && (
                selectedCategory === 'Incidents' ||
                selectedCategory === 'CA' ||
                selectedCategory === 'PA' ||
                selectedCategory === 'Out of Specifications' ||
                selectedCategory === 'Change Controls' ||
                selectedCategory === 'Deviations'
              )
            ) && !(
              selectedSite === 'SITE-V' && (
                selectedCategory === 'Incidents' ||
                selectedCategory === 'CA' ||
                selectedCategory === 'PA' ||
                selectedCategory === 'Out of Specifications' ||
                selectedCategory === 'Change Controls' ||
                selectedCategory === 'Deviations' ||
                selectedCategory === 'Mastering'
              )
            ) && (
              <div style={{ padding: '48px 28px', textAlign: 'center' }}>
                <div style={{ fontSize: '5em', marginBottom: '24px' }}>📊</div>
                <div style={{ fontSize: '1.2em', color: '#0f172a', padding: '32px', background: '#f8fafc', borderRadius: '16px', border: '2px solid #e5e7eb', boxShadow: '0 10px 30px rgba(15,23,42,0.08)', maxWidth: '600px', margin: '0 auto' }}>
                  <div style={{ fontSize: '1.3em', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>Data Coming Soon</div>
                  <div style={{ fontSize: '1em', color: '#475569', lineHeight: '1.6' }}>Data for {selectedSite} - {selectedCategory} will be added here.</div>
                </div>
              </div>
            )}
          </div>
        </FullscreenShell>,
        document.body
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            left: '30px',
            zIndex: 9998,
            background: 'linear-gradient(135deg, #b91c1c, #991b1b)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            fontSize: '1.5em',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(185, 28, 28, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            fontWeight: 'bold'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(185, 28, 28, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(185, 28, 28, 0.4)';
          }}
          title="Scroll to top"
        >
          ↑
        </button>
      )}
      </div>
    </section>
  )
}




