import React from 'react';
import Tooltip from 'react-simple-tooltip';
// eslint-disable-next-line
import { css } from 'styled-components';
import { colors } from '../../styles';

const ToolTip = props => {
    // eslint-disable-next-line
    const { component } = props;
    return (
        <Tooltip
            arrow={15}
            background={colors.grayMedium}
            border="none"
            color="#fff"
            content={component}
            customCss=""
            fadeDuration={0}
            fadeEasing="linear"
            fixed={false}
            fontFamily="inherit"
            fontSize="16px"
            offset={0}
            padding={17}
            placement="bottom"
            radius={6}
            zIndex={100000}
            // eslint-disable-next-line
            // customCss={css`
            //     white-space: nowrap;
            // `}
            {...props}
        />
    );
};

export default ToolTip;
