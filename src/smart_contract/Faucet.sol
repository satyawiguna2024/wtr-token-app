// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC20Base.sol";

contract FaucetToken is ERC20Base {
    uint256 public faucetAmount = 10 * 10**18;
    uint256 public cooldown = 1 hours;
    mapping(address => uint256) public lastClaim;

    constructor(
        address _defaultOwner,
        string memory _name,
        string memory _symbol
    ) ERC20Base(_defaultOwner, _name, _symbol ) {}

    function claim(address _receiver) external {
        require(block.timestamp >= lastClaim[msg.sender] + cooldown, "Cooldown active for this address!");
        require(block.timestamp >= lastClaim[_receiver] + cooldown, "Cooldown active for this address!");
        lastClaim[_receiver] = block.timestamp;
        _mint(_receiver, faucetAmount);
    }
}